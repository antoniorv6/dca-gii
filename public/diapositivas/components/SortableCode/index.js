class SortableCode extends HTMLElement {
    constructor() {
        super();

        // Add height inherit to parent container
        this.parentElement.parentElement.style.height = '100%';
        this.parentElement.style.height = '80%';
        this.style.height = "100%";
        this.style.display = 'block';

        const shadow = this.attachShadow({ mode: 'open' });

        const styleLink = document.createElement('link');
        styleLink.setAttribute('rel', 'stylesheet');
        styleLink.setAttribute('href', '../components/SortableCode/styles.css');

        const generalContainer = document.createElement('div');
        generalContainer.id = 'code-container';

        const originalContainer = document.createElement('div');
        originalContainer.style.display = 'none';
        originalContainer.id = 'original-code';

        const shuffledContainer = document.createElement('div');
        shuffledContainer.id = 'shuffled-code';

        generalContainer.appendChild(shuffledContainer);
        generalContainer.appendChild(originalContainer);

        const originalTitle = document.createElement('h3');
        originalTitle.classList.add('order-title');
        originalTitle.textContent = 'Código ordenado';

        const shuffledTitle = document.createElement('h3');
        shuffledTitle.classList.add('order-title');
        shuffledTitle.textContent = 'Código desordenado';

        this.originalContainer = document.createElement('div');
        this.originalContainer.classList.add('code-list-container');
        this.originalList = document.createElement('ul');
        this.originalList.classList.add('code-list');
        this.originalContainer.appendChild(this.originalList);

        this.shuffledContainer = document.createElement('div');
        this.shuffledContainer.classList.add('code-list-container');
        this.shuffledList = document.createElement('ul');
        this.shuffledList.classList.add('code-list', 'sortable');
        this.shuffledContainer.appendChild(this.shuffledList);

        originalContainer.appendChild(originalTitle);
        originalContainer.appendChild(this.originalContainer);

        shuffledContainer.appendChild(shuffledTitle);
        shuffledContainer.appendChild(this.shuffledContainer);

        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'button-container';    

        this.compareButton = document.createElement('button');
        this.compareButton.textContent = 'Comprobar el orden del código';
        this.compareButton.classList.add('compare-button');

        this.revealButton = document.createElement('button');
        this.revealButton.textContent = 'Revelar código ordenado';
        this.revealButton.style.display = 'none';
        this.revealButton.classList.add('reveal-button');

        this.revealButton.addEventListener('click', () => {
            originalContainer.style.display = 'flex';
            this.originalContainer.parentElement.style.width = '45%';
            this.shuffledContainer.parentElement.style.width = '45%';
            this.revealButton.parentElement.style.display = 'none';

            if (typeof sortable !== 'undefined') {
                sortable(this.shuffledList, 'disable'); // Disable sorting
            }
        });

        buttonContainer.appendChild(this.compareButton);
        buttonContainer.appendChild(this.revealButton);
        shuffledContainer.appendChild(buttonContainer);

        this.resultPopup = document.createElement('div');
        this.resultPopup.id = 'result-popup';
        this.resultPopup.style.display = 'none';

        shadow.appendChild(styleLink);
        shadow.appendChild(generalContainer);
        shadow.appendChild(this.resultPopup);

        styleLink.addEventListener('load', () => {
            requestAnimationFrame(() => {
                this.renderLists();
                this.initializeSortable();
                this.createScrollIndicators();
                this.syncScroll();
            });
        });

        this.compareButton.addEventListener('click', () => {
            this.compareLists();
            this.revealButton.style.display = 'block';
            this.shuffledList.parentElement.style.width = '100%';
        });
    }

    createScrollIndicators() {
        // Create top and bottom gradient indicators for both lists
        [this.originalContainer, this.shuffledContainer].forEach(list => {
            const topIndicator = document.createElement('div');
            topIndicator.className = 'scroll-indicator-top';
    
            const bottomIndicator = document.createElement('div');
            bottomIndicator.className = 'scroll-indicator-bottom';
    
            list.appendChild(topIndicator);
            list.appendChild(bottomIndicator);
        });
    
        this.updateScrollIndicators(); // Ensure they are updated initially
    }

    connectedCallback() {
        requestAnimationFrame(() => {
            if (!this.shadowRoot.querySelector('link')) {
                console.error('Stylesheet not loaded. Check the CSS path.');
            }
            this.updateScrollIndicators(); // 💡 Ensure indicators are correct when the component is loaded
        });
    
        window.addEventListener('resize', () => {
            this.adjustListHeight();
            this.updateScrollIndicators(); // 💡 Update indicators when the window resizes
        });
    }

    updateScrollIndicators() {
        [this.originalList, this.shuffledList].forEach(list => {
            const container = list.parentElement;
            const topIndicator = container.querySelector('.scroll-indicator-top');
            const bottomIndicator = container.querySelector('.scroll-indicator-bottom');
    
            const canScrollTop = list.scrollTop > 0;
            const canScrollBottom = list.scrollTop + list.clientHeight < list.scrollHeight;
    
            // Show or hide the indicators based on scroll position
            topIndicator.style.opacity = canScrollTop ? "1" : "0";
            bottomIndicator.style.opacity = canScrollBottom ? "1" : "0";
        });
    }

    syncScroll() {
        let isSyncingScroll = false;
    
        const sync = (source, target) => {
            if (isSyncingScroll) return;
            isSyncingScroll = true;
    
            requestAnimationFrame(() => {
                target.scrollTop = source.scrollTop; // Sync vertical scrolling
                isSyncingScroll = false;
                this.updateScrollIndicators(); // Update gradient visibility
            });
        };
    
        // Listen for scrolling on both lists
        this.originalList.addEventListener('scroll', () => sync(this.originalList, this.shuffledList));
        this.shuffledList.addEventListener('scroll', () => sync(this.shuffledList, this.originalList));
    }

    renderLists() {
        const items = Array.from(this.querySelectorAll('li'));

        if (!items.length) {
            console.error('No <li> elements found.');
            return;
        }

        // Clear both lists before rendering
        this.originalList.innerHTML = '';
        this.shuffledList.innerHTML = '';

        // Render original list
        items.forEach(item => {
            const li = item.cloneNode(true);
            this.originalList.appendChild(li);

            // Apply overflow indicators initially
            this.checkOverflow(li);

            // Add scroll listener to dynamically adjust overflow
            li.addEventListener('scroll', () => this.checkOverflow(li));
        });

        // Render shuffled list
        const shuffledItems = this.shuffleArray(items);
        shuffledItems.forEach(item => {
            const li = item.cloneNode(true);
            this.shuffledList.appendChild(li);

            // Apply overflow indicators initially
            this.checkOverflow(li);

            // Add scroll listener to dynamically adjust overflow
            li.addEventListener('scroll', () => this.checkOverflow(li));
        });
    }

    shuffleArray(array) {
        const shuffled = array.slice();
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    checkOverflow(item) {
        // Check if the content overflows horizontally
        const isOverflowing = item.scrollWidth > item.clientWidth;

        // Remove existing overflow indicators if no overflow
        if (!isOverflowing) {
            item.classList.remove('overflow-start', 'overflow-end', 'overflow-both');
            return;
        }

        // Check scroll position
        const atStart = item.scrollLeft === 0;
        const atEnd = item.scrollLeft + item.clientWidth >= item.scrollWidth;

        // Remove existing classes
        item.classList.remove('overflow-start', 'overflow-end', 'overflow-both');

        // Apply the correct overflow class based on scroll position
        if (!atStart && !atEnd) {
            item.classList.add('overflow-both'); // Both ends overflow
        } else if (atStart) {
            item.classList.add('overflow-end'); // Only the end overflows
        } else if (atEnd) {
            item.classList.add('overflow-start'); // Only the start overflows
        }
    }

    compareLists() {
        const originalItems = Array.from(this.originalList.querySelectorAll('li')).map(li => li.textContent);
        const shuffledItems = Array.from(this.shuffledList.querySelectorAll('li'));

        let correct = true;

        shuffledItems.forEach((item, index) => {
            if (item.textContent === originalItems[index]) {
                item.classList.add('correct');
                item.classList.remove('incorrect');
            } else {
                item.classList.add('incorrect');
                item.classList.remove('correct');
                correct = false;
            }
        });

        if (correct) {
            this.showPopup('Las listas están en el orden correcto.', 'success');
        } else {
            this.showPopup('Las listas están en el orden incorrecto.', 'error');
        }
    }

    initializeSortable() {
        if (typeof sortable !== 'undefined') {
            sortable(this.shuffledList, {
                forcePlaceholderSize: true,
                placeholderClass: 'sortable-placeholder',
            });
        } else {
            console.error('HTML5 Sortable is not loaded.');
        }
    }

    showPopup(message, type) {
        this.resultPopup.textContent = message;
        this.resultPopup.className = `result-popup ${type}`;
        this.resultPopup.style.display = 'block';

        setTimeout(() => {
            this.resultPopup.style.display = 'none';
        }, 3000);
    }
}

customElements.define('order-code', SortableCode);
class CompletableCode extends HTMLElement {
    constructor() {
        super();

        // Attach shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });

        // Link stylesheet
        const styleLink = document.createElement('link');
        styleLink.setAttribute('rel', 'stylesheet');
        styleLink.setAttribute('href', '../components/CompletableCode/styles.css');

        // Create main container
        const container = document.createElement('div');
        container.id = 'completable-container';
        container.style.position = 'relative'; // Ensure proper positioning
        container.style.overflow = 'hidden';  // Prevent content overflow

        // Add the code block
        this.codeContainer = document.createElement('div');
        this.codeContainer.classList.add('completable-code-block');
        this.codeContainer.style.transition = 'opacity 0.3s ease'; // Smooth transition for toggling

        // Add expected output block
        this.terminalContainer = document.createElement('div');
        this.terminalContainer.classList.add('completable-output-block');
        this.terminalContainer.style.position = 'absolute';
        this.terminalContainer.style.top = '0';
        this.terminalContainer.style.left = '0';
        this.terminalContainer.style.width = '100%';
        this.terminalContainer.style.height = '100%';
        this.terminalContainer.style.opacity = '0'; // Initially hidden
        this.terminalContainer.style.pointerEvents = 'none'; // Disable interaction
        this.terminalContainer.style.transition = 'opacity 0.3s ease'; // Smooth transition

        container.appendChild(this.codeContainer);
        container.appendChild(this.terminalContainer);
        shadow.appendChild(styleLink);
        shadow.appendChild(container);

        // Add reveal button
        this.revealButton = document.createElement('button');
        this.revealButton.classList.add('completable-reveal-button');
        this.revealButton.style.position = 'absolute';
        this.revealButton.style.top = '10px';
        this.revealButton.style.right = '10px';
        this.revealButton.style.zIndex = '10';
        this.revealButton.style.display = 'none'; // Initially hidden

        // Add SVG icon to the button
        this.revealButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 20px; height: 20px;">
                <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"></path>
                <circle cx="12" cy="12" r="3"></circle>
            </svg>
        `;

        container.appendChild(this.revealButton);

        // Wait for styles before rendering
        styleLink.addEventListener('load', () => {
            requestAnimationFrame(() => {
                this.renderCode();
            });
        });

        // Add button click listener
        this.revealButton.addEventListener('click', () => {
            this.toggleExpectedOutput();
        });

        // State to track if expected output is shown
        this.showExpectedOutput = false;
    }

    connectedCallback() {
        requestAnimationFrame(() => {
            if (!this.shadowRoot.querySelector('link')) {
                console.error('Stylesheet not loaded. Check the CSS path.');
            }
        });
    }

    renderCode() {
        // Get all lines and outputs inside the component
        const lines = Array.from(this.querySelectorAll('line'));
        const expectedTerminal = Array.from(this.querySelectorAll('output, in'));

        // Clear code and output containers
        this.codeContainer.innerHTML = '';
        this.terminalContainer.innerHTML = '';

        // Process each line
        lines.forEach((lineElement) => {
            let line = lineElement.innerHTML.trim();

            // Create a div for each line
            const div = document.createElement('div');
            div.classList.add('completable-code-line');
            div.innerHTML = line;

            // Append line to the code container
            this.codeContainer.appendChild(div);

            // Add input listeners for <fill>
            div.querySelectorAll('fill').forEach(fill => {
                const answer = fill.textContent.trim();

                // Create a wrapper for input + icon
                const wrapper = document.createElement('div');
                wrapper.classList.add('completable-input-wrapper');

                // Create input field
                const input = document.createElement('input');
                input.type = 'text';
                input.placeholder = '...';
                input.setAttribute('data-answer', answer);
                input.classList.add('completable-code-input');

                // Prevent Reveal.js shortcuts
                input.addEventListener('keydown', (e) => e.stopPropagation());

                // Add validation
                input.addEventListener('input', () => {
                    if (input.value === answer) {
                        input.classList.add('completable-correct');
                        input.classList.remove('completable-incorrect');
                    } else {
                        input.classList.add('completable-incorrect');
                        input.classList.remove('completable-correct');
                    }
                });

                // Create eye icon button
                const eyeButton = document.createElement('button');
                eyeButton.type = 'button';
                eyeButton.classList.add('completable-eye-icon');
                eyeButton.innerHTML = '👁️'; // Unicode eye icon

                // Toggle answer visibility when clicked
                eyeButton.addEventListener('click', () => {
                    input.value = answer; // Reveal the correct answer
                    input.classList.add('completable-correct'); // Mark as correct
                    input.classList.remove('completable-incorrect');
                });

                // Append input and button inside wrapper
                wrapper.appendChild(input);
                wrapper.appendChild(eyeButton);

                // Replace <fill> with the wrapper
                fill.replaceWith(wrapper);
            });
        });

        // Process outputs
        if (expectedTerminal.length > 0) {
            const title = document.createElement('div');
            title.classList.add('completable-terminal-title');
            title.textContent = 'Salida Esperada:';
            this.terminalContainer.appendChild(title);

            expectedTerminal.forEach(terminalElement => {
                const terminalLine = document.createElement('div');
                if (terminalElement.nodeName === 'OUTPUT') {
                    terminalLine.classList.add('completable-output-line');
                    terminalLine.textContent = `>>> ${terminalElement.textContent.trim()}`;
                    this.terminalContainer.appendChild(terminalLine);
                } else if (terminalElement.tagName === 'IN') {
                    terminalLine.classList.add('completable-input-line');
                    terminalLine.textContent = `<<< ${terminalElement.textContent.trim()}`;
                    this.terminalContainer.appendChild(terminalLine);
                }
            });

            // Show the reveal button if outputs exist
            this.revealButton.style.display = 'block';
        }
    }

    toggleExpectedOutput() {
        // Toggle visibility of the code and output containers
        this.showExpectedOutput = !this.showExpectedOutput;

        if (this.showExpectedOutput) {
            this.codeContainer.style.opacity = '0';
            this.codeContainer.style.pointerEvents = 'none';
            this.terminalContainer.style.opacity = '1';
            this.terminalContainer.style.pointerEvents = 'auto';
        } else {
            this.codeContainer.style.opacity = '1';
            this.codeContainer.style.pointerEvents = 'auto';
            this.terminalContainer.style.opacity = '0';
            this.terminalContainer.style.pointerEvents = 'none';
        }
    }
}

customElements.define('completable-code', CompletableCode);

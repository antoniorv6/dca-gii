class MixedExercise extends HTMLElement {
    constructor() {
        super();

        // Attach shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });

        // Link stylesheet
        const styleLink = document.createElement('link');
        styleLink.setAttribute('rel', 'stylesheet');
        styleLink.setAttribute('href', '../components/MixedExercise/styles.css');

        // Create main container
        const container = document.createElement('div');
        container.id = 'mixed-exercise-container';

        // Add the exercise block
        this.exerciseContainer = document.createElement('div');
        this.exerciseContainer.classList.add('mixed-exercise-block');

        container.appendChild(this.exerciseContainer);
        shadow.appendChild(styleLink);
        shadow.appendChild(container);

        // Wait for styles before rendering
        styleLink.addEventListener('load', () => {
            requestAnimationFrame(() => {
                this.renderQuestions();
            });
        });
    }

    connectedCallback() {
        requestAnimationFrame(() => {
            if (!this.shadowRoot.querySelector('link')) {
                console.error('Stylesheet not loaded. Check the CSS path.');
            }
        });
    }

    renderQuestions() {
        // Handle both <question> (true/false) and <choice> (multiple-choice)
        const questions = Array.from(this.querySelectorAll('question'));
        const choices = Array.from(this.querySelectorAll('choice'));

        // Clear exercise container
        this.exerciseContainer.innerHTML = '';

        // Render True/False questions
        questions.forEach((questionElement, index) => {
            this.renderTrueFalseQuestion(questionElement, index);
        });

        // Render Multiple Choice questions
        choices.forEach((choiceElement, index) => {
            this.renderMultipleChoiceQuestion(choiceElement, index + questions.length); // Continue numbering
        });
    }

    renderTrueFalseQuestion(questionElement, index) {
        const text = questionElement.textContent.trim();
        const answer = questionElement.getAttribute('answer') === 'true'; // Parse the correct answer

        // Create question block
        const wrapper = document.createElement('div');
        wrapper.classList.add('mixed-exercise-question');

        // Create question label
        const label = document.createElement('label');
        label.textContent = `${index + 1}. ${text}`;
        wrapper.appendChild(label);

        // Create options wrapper
        const optionsWrapper = document.createElement('div');
        optionsWrapper.classList.add('mixed-exercise-options');

        // Create True/False options
        const options = ['True', 'False'];
        options.forEach(option => {
            const radioWrapper = document.createElement('div');
            radioWrapper.classList.add('mixed-exercise-option');

            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question-${index}`;
            input.value = option.toLowerCase();
            input.classList.add('mixed-exercise-input');

            const span = document.createElement('span');
            span.textContent = option;

            // Prevent Reveal.js shortcuts
            input.addEventListener('keydown', (e) => e.stopPropagation());

            // Validation
            input.addEventListener('change', () => {
                const isCorrect = (input.value === 'true') === answer;
                wrapper.classList.toggle('correct', isCorrect);
                wrapper.classList.toggle('incorrect', !isCorrect);
            });

            radioWrapper.appendChild(input);
            radioWrapper.appendChild(span);
            optionsWrapper.appendChild(radioWrapper);
        });

        // Append options to wrapper
        wrapper.appendChild(optionsWrapper);

        // Append to container
        this.exerciseContainer.appendChild(wrapper);
    }

    renderMultipleChoiceQuestion(choiceElement, index) {
        const text = choiceElement.textContent.trim();
        const answers = choiceElement.getAttribute('answers').split(','); // Multiple answers

        // Create question block
        const wrapper = document.createElement('div');
        wrapper.classList.add('mixed-exercise-question');

        // Create question label
        const label = document.createElement('label');
        label.textContent = `${index + 1}. ${text}`;
        wrapper.appendChild(label);

        // Create options wrapper
        const optionsWrapper = document.createElement('div');
        optionsWrapper.classList.add('mixed-exercise-options');

        // Create options
        const options = choiceElement.getAttribute('options').split(',');
        options.forEach(option => {
            const checkboxWrapper = document.createElement('div');
            checkboxWrapper.classList.add('mixed-exercise-option');

            const input = document.createElement('input');
            input.type = 'checkbox';
            input.value = option.trim();
            input.classList.add('mixed-exercise-input');

            const span = document.createElement('span');
            span.textContent = option;

            // Prevent Reveal.js shortcuts
            input.addEventListener('keydown', (e) => e.stopPropagation());

            // Validation
            input.addEventListener('change', () => {
                const selectedOptions = Array.from(optionsWrapper.querySelectorAll('input:checked')).map(i => i.value);
                const isCorrect = this.compareAnswers(selectedOptions, answers);
                const isPartial = this.isPartialAnswer(selectedOptions, answers);
                wrapper.classList.toggle('correct', isCorrect);
                wrapper.classList.toggle('incorrect', !isCorrect && !isPartial);
                wrapper.classList.toggle('partial', !isCorrect && isPartial);
            });

            checkboxWrapper.appendChild(input);
            checkboxWrapper.appendChild(span);
            optionsWrapper.appendChild(checkboxWrapper);
        });

        // Append options to wrapper
        wrapper.appendChild(optionsWrapper);

        // Append to container
        this.exerciseContainer.appendChild(wrapper);
    }

    compareAnswers(selected, correct) {
        if (selected.length !== correct.length) return false;
        return selected.sort().join(',') === correct.sort().join(',');
    }

    isPartialAnswer(selected, correct) {
        // check if there is at least one correct answer and no incorrect answers
        return selected.some(answer => correct.includes(answer)) && !selected.some(answer => !correct.includes(answer));
    }
}

// Define the custom element
customElements.define('mixed-exercise', MixedExercise);
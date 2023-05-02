class FlipCard extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            .card-contact-container {
                position: relative;
                width: 500px;
                height: 50vh;
                z-index: 100;
                transform: perspective(1000px) rotateY(180deg);
            }          
        </style>

        <div class="card-contact-container">
            <slot name="front></slot>
            <slot name="back"></slot>
        </div>
        `;
        
    }
}



customElements.define('flipcard-component', FlipCard);
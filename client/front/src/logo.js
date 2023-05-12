class Logo extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .logo-container {
                min-width: 8rem;
                max-width: 8rem;
                display: flex;
                cursor: pointer;
            }
            img {
                width: 100%;
                height: 100%;
            }
            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
        </style>

        <div class="logo-container">
            <img src="./assets/logo.webp" alt="logo-image">
        </div>
        `;
        
    }
}

customElements.define('logo-component', Logo);
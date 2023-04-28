class ModalImage extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            *{
                padding: 0;
                margin: 0;
                box-sizing: border-box;
            }
            .image-carrousel {
                width: 100%;
                height: 100%;
            }

            .image-carrousel img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

        </style>
        <div class="image-carrousel" id="carrousel-container">
            <img src="./assets/checkout-carrousel/carrousel-1.webp">
        </div>
        `;
        
    }
}

customElements.define('image-modal', ModalImage);
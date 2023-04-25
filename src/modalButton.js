class modalButton extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        const text = this.attributes.getNamedItem("text").value;
        const backgroundcolor = this.attributes.getNamedItem("backgroundcolor").value;
        console.log(backgroundcolor)
        this.render(text,backgroundcolor);
    }

    render(text,backgroundcolor) {

        this.shadow.innerHTML = 
        `
        <style>
            button {
                font-size: 1rem;
                font-weight: 500;
                background-color: ${backgroundcolor});
                color: white;
                border: none;
                border-radius: 20px;
                padding: 8px 35px;
                cursor: pointer;
                transition: 0.5s;
            }
            .checkout-container button:hover {
                background-color: hsl(204, 15%,26%);
            }
        </style>

            <a>
                <button type="button" class="button-show-modal" id="checkoutButtonHeader">${text}
                </button>
            </a>
        `;
        
    }
}

customElements.define('modalbutton-component', modalButton);
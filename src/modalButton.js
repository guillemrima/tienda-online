class modalButton extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        const text = this.attributes.getNamedItem("text").value;
        const backgroundcolor = this.attributes.getNamedItem("backgroundcolor").value;
        const fontSize = this.attributes.getNamedItem("fontsize").value;
        console.log(backgroundcolor)
        this.render(text,backgroundcolor, fontSize);
    }

    render(text,backgroundcolor, fontSize) {

        this.shadow.innerHTML = 
        `
        <style>
            .button-show-modal {
                font-size: ${fontSize};
                font-weight: 500;
                background-color: ${backgroundcolor};
                color: white;
                border: none;
                border-radius: 20px;
                padding: 8px 35px;
                cursor: pointer;
                transition: 0.5s;
            }
            .button-show-modal:hover {
                background-color: hsl(204, 15%,26%);
            }
        </style>

            <a>
                <button type="button" class="button-show-modal" id="checkoutButtonHeader">${text}
                </button>
            </a>
        `;
        const modalButtonsOpen = this.shadow.querySelectorAll(".button-show-modal");
        const modal = document.querySelector("#modal");

    modalButtonsOpen.forEach((modalButtonOpen) => {
        modalButtonOpen.addEventListener("click", () => {
            modal.classList.add("active")
            modalButtonOpen.closest("body").classList.add("blocked")
        })
    })
        
    }
}

customElements.define('modalbutton-component', modalButton);
class Modal extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        const width = this.attributes.getNamedItem("width").value;
        const height = this.attributes.getNamedItem("heigth").value;

        this.render(width, height);
    }

    render(width, height) {

        this.shadow.innerHTML = 
        `
        <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            list-style: none;
        }
        img {
            width: 100%;
            height: 100%;
        }
        .modal-section {
            position: fixed;
            top: 0;
            width: 100%;
            height: 100vh;
            display: none;
            justify-content: center;
            align-items: center;
        }
        
        .modal-section::after {
            content: "";
            position: absolute;
        }       
        .modal-section .modal { 
            background-color: rgb(93, 93, 93);
            width: ${width};
            height: ${height};
            display: grid;
            grid-template-columns: 50% 50%;
            box-shadow: 10px 10px 58px -6px rgba(0,0,0,0.75);
            position: relative;
            overflow: hidden;
        }
        
        .close-button {
            position: absolute;
            width: 25px;
            height: 25px;
            right: 0;
            top: 0;
            margin: 10px;
            cursor: pointer;
            filter: invert(0.5) sepia(0) saturate(40) hue-rotate(10deg);
            z-index: 999;
        }
        
        .close-button:hover {
            filter: invert(0.5) sepia(1) saturate(40) hue-rotate(10deg);
        }

        .modal-section.active {
            @include fadeIn(0s,0.5s);
            display : flex;
            z-index: 999;       
        }

        .modal-section.active .modal {
            z-index: 999;
        }

        </style>
        <section class="modal-section" id="modal">
        <div class="modal">
            <slot name="image-component-modal"></slot>
            <slot name="details-component-modal"></slot>
            
            <div class="close-button button-close-modal" id="closeButton">
                <img src="./assets/close.svg" />
            </div>            
        </div>
    </section>
        `;

        const closeModal = this.shadow.querySelector("#closeButton");
        
        closeModal.addEventListener("click", () => 
            closeModal.closest(".modal-section").classList.remove("active")
        )

        document.addEventListener("remove-active", () =>
            closeModal.closest(".modal-section").classList.remove("active")
        )   

        document.addEventListener("add-active", () =>
        closeModal.closest(".modal-section").classList.add("active")
    )  
    }
}

customElements.define('modal-component', Modal);
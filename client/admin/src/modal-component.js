class Modal extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.modalContent = ''
        this.idFicha = ""
        this.render();
    }

    connectedCallback() {
        document.addEventListener("add-active", (e) => {
            this.renderModalContent(e)
        })

        document.addEventListener("remove-active", e => {
            this.removeActive(e)
        })
    }

    renderModalContent = (e) => {
        if(e.detail.componentId) {
            this.modalContent = 'delete-content'
            this.fichaId = e.detail.componentId
            this.render() 
        }
        else if(e.detail.detail) {
            this.modalContent = e.detail.detail
            this.render()
        }
    }

    removeActive = e => {
        if ( e.detail.detail === "delete-component") {
            this.modalContent = ""
        }
            else if(e.detail.detail === "image-component") {
        this.modalContent = ""
        }
        this.render()
    }   
    render() {

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

        .modal-section.active-delete-modal {
            display : flex;
            z-index: 999;    

        }
        .modal-section.active-image-modal {
            display : flex;
            z-index: 999;       

        }
        .modal-section.active-delete-modal .modal {
            width: 20%;
            height: 30vh;

        }
        .modal-section.active-image-modal .modal {
            width: 90%;
            height: 90vh;

        }


        </style>
        <section class="modal-section ${this.modalContent === 'delete-content' ? 'active-delete-modal' : this.modalContent ? 'active-image-modal' : 'default-modal'}" id="modal">
        <div class="modal" >
            ${this.modalContent === 'delete-content' ? 
            `<delete-component id=${this.fichaId}></delete-component>`
            : 
            `<image-form-component></image-form-component>`
            }          
        </div>
    </section>
        `;

    }
}

customElements.define('modal-component', Modal);
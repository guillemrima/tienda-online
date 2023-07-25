class Modal extends HTMLElement {

        constructor() {
            super();
            this.shadow = this.attachShadow({mode: 'open'});
            this.modalContent = ''
            this.idFicha = ""
            this.name = ""
            this.image = null
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
            const modal = document.querySelector('#modal')
            modal.classList.add('active')
            this.render()
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
                justify-content: center;
                align-items: center;
                display: none
            }
            
            .modal.section.active {
                display: flex;
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
                animation: animation 0.15s ease-in
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

            @keyframes animation {
                0% {
                    transform: scale(100%)
                }
                50% {
                    transform: scale(110%)
                }
    
            }
            </style>
            <section class= 'modal-section' id="modal">
            <div class="modal" >
                              <image-component slot="image-component-modal"></image-component>
                <details-modal slot="details-component-modal">
                    <information-details slot="information-details-modal">
                        <title-details-element slot="title-element"></title-details-element>
                        <tabs-component slot="tabs-element"></tabs-component>
                        <amount-input-element slot="amount-element"></amount-details-element>
                    </information-details>
                    <form-component slot="form-details-modal"></form-component>
                </details-modal>
            </div>
        </section>
            `;
    
        }
    }
    
    customElements.define('modal-component', Modal);
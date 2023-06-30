import { API_URL } from '../config.js';
class Image extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.image = null;
        this.name = ""
        this.render()
    }

    connectedCallback()  {
        this.name = this.getAttribute('name');

        document.addEventListener('select-image', (e) => {
            if( e.detail.name === this.name) {
                this.image = e.detail.image
                this.render()
            }
        })

        document.addEventListener('refresh-table', () => {
            this.image = null
            this.render()
        })
    }
    
    render() {
        this.shadow.innerHTML =
        `
            <div class="image-section">
                <button type="button" id="button-form">
                    ${this.image != null ? 
                       `
                        <img src="${API_URL}/api/admin/images/${this.image.name}" alt="${this.image.alt}" title="${this.image.title}" />
                       `     
                    :
                    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>`

                    }
                </button>
            </div>

            <style>
                *{
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }   
                .image-section {
                    width: 6rem;
                    height: 6rem;
                    display: flex; 
                    justify-content: center;
                }
                .image-section button {
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                    border: none;
                    cursor: pointer;
                }
                .image-section button svg {
                    cursor: pointer;
                    background-color: white;
                }
            </style>
        `

        const buttonForm = this.shadow.querySelector("#button-form")
            
        buttonForm.addEventListener("click", () => {
            const addActive = new CustomEvent('add-active', { 
                detail: {
                    name: this.name, 
                    detail : "image-component" }
                });
            document.dispatchEvent(addActive)
        })
    }

}


customElements.define('image-component', Image);
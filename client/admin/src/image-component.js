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

        document.addEventListener("editImage", async (e) => {
            const images = e.detail ? e.detail : null;

            if (images.length === 0) {
              this.image = null;
            } else {
              images.forEach((image) => {
                if (image.name === this.name) {
                  this.image = {};
                  this.image.name = image.originalFilename;
                  this.image.alt = image.alt;
                  this.image.title = image.title;
                }
              });
            }
            this.render();
        });

        document.addEventListener("reset-image", async (e) => {
            this.image = null;
            this.render();

        })
          
    }

    render() {
        this.shadow.innerHTML =
        `
            <div class="image-section">
                    ${this.image != null ? 
                       `
                       <button type="button" id="button-form" class="button-image">
                            <img src="${API_URL}/api/admin/images/${this.image.name}" alt="${this.image.alt}" title="${this.image.title}"  class="image-element"/>
                            
                        </button>
                        <div class="delete-image">
                            <button id="delete-button">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>
                                <p>Eliminar</p>
                            </button>
                        </div>
                       `     
                    :
                    `
                    <button type="button" id="button-form" class="button-select-image">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
                    </button>
                    `
                    }
            </div>

            <style>
                *{
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }   
                .image-section {
                    position: relative;
                    width: 135px;
                    height: 135px;
                    display: flex; 
                    justify-content: center;               
                }
                .image-section .button-select-image {
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                    border: none;
                    cursor: pointer;
                    border: 2px solid white
                }
                
                .button-image {
                    z-index: 2;
                    background-color: transparent;
                    border: none;
                    cursor: pointer;
                }

                .image-section .button-select-image svg {
                    cursor: pointer;
                    fill: white;
                }
                .delete-image {
                    cursor: pointer;
                    position: absolute;
                    bottom: -5px;
                    right: -25px;
                    background-color: #2596be;
                    padding: 2px 10px;
                    border-radius: 10px; 
                    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
                    transition: all 0.1s;
                    z-index: 3;
                }
                .delete-image:hover {
                    transform: scale(1.1);
                    background-color:red;
                    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
                }
                .delete-image button {
                    all:unset;
                    display: flex;
                    align-items: center;
                }
                .delete-image p {
                    color: white;
                    font-size: 12px;
                    font-weight: bold;
                }
                .delete-image svg {
                    width: 20px;
                    fill: white;
                }
            </style>
        `

        const buttonForm = this.shadow.querySelector("#button-form")
        
        buttonForm.addEventListener("click", () => {
            const eventDetail = {
              name: this.name,
              detail: "image-component"
            };
          
            if (this.image !== null) {
              eventDetail.image = this.image;
            }
          
            const addActive = new CustomEvent('add-active', { 
              detail: eventDetail
            });
          
            document.dispatchEvent(addActive);
          });
          

        if(this.image!= null) {
            const deleteButton = this.shadow.querySelector("#delete-button")

            deleteButton.addEventListener("click", () => {
                document.dispatchEvent(new CustomEvent('deleteImage', { detail: {
                    image: this.image
                }}));

                this.image = null
                this.render()


        })
        }
    }

}


customElements.define('image-component', Image);
import { API_URL } from '../config.js'

class Form extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.isFormValid = false
        this.formImages = []
    }

    async connectedCallback() {
        await this.render()

        document.addEventListener("editRow", async (e) => {
            this.EditTab(e)
        })

        document.addEventListener("sendImage", (e) => {
            const image = e.detail;
            this.formImages.push(image);
        });

        document.addEventListener("deleteImage", (e) => {
            const image = e.detail.image;
            this.formImages.forEach((formImage, index) => {
                if(formImage.filename === image.name) {
                    this.formImages.splice(index, 1);
                }
                    
            })
        })
    } 
    
    loadData = async (id) => {
        try {
          const response = await fetch(`${API_URL}/api/admin/users/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken')         
              },
          });
      
          this.data = await response.json();
          return this.data

        } catch (error) {
          console.log(error);
        }
    }

    submitData = async (form) => {
        const formData = Object.fromEntries(new FormData(form));
        const isValidPassword = this.validatePassword(formData.password, formData.passwordConfirmed);

        if (isValidPassword) {
            if (this.formImages.length > 0) {
                formData.images = this.formImages;
             }

            const method = this.data ? 'PUT' : 'POST';
            const baseUrl = `${API_URL}/api/admin/users`;
            const url = this.data ? `${baseUrl}/${this.data.id}` : baseUrl;
            fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + sessionStorage.getItem('accessToken')     
            },
            body: JSON.stringify(formData)
            })
            .then(response => {
                if (!response.ok) {
                response.json().then(respuesta => {
                    const errorMessage = respuesta.message[0].message;
                    this.showError(errorMessage);
                });         
                return ;
                }                
                form.reset()
                this.formImages = []
                this.data = '';
                const previousErrorDiv = this.shadow.querySelector("#errorDiv");
                if (previousErrorDiv) {
                    const formElement = this.shadow.querySelector(".form-container");
                    formElement.removeChild(previousErrorDiv);
                }
            return response.json();
            })
            .then(data => {
                const event = new CustomEvent('refresh-table');
                document.dispatchEvent(event);
                    form.reset();
                    this.data = '';
            })
            .catch(error => {
                console.error(error);
            });
  
        } else {
            const errorMessage = "Las contraseñas no coinciden";
            this.showError(errorMessage);
        }
    
    }

    showError = (errorMessage) => {
            const errorDivElement = document.createElement("div");
            const errorTextElement = document.createElement("p");

            errorTextElement.textContent = errorMessage;
            errorDivElement.appendChild(errorTextElement);
            errorDivElement.classList.add("error");
            errorDivElement.id = "errorDiv";

            const formElement = this.shadow.querySelector(".form-container");
    
            const previousErrorDiv = this.shadow.querySelector("#errorDiv");

            if (previousErrorDiv) {
                formElement.removeChild(previousErrorDiv);
            }
      
            formElement.prepend(errorDivElement);
    }

    EditTab = async (e) => {
            const id = e.detail.componentId
            const row = await this.loadData(id)

            document.dispatchEvent(new CustomEvent('editImage', {detail: row.images}))
            
            this.shadow.getElementById("name").value = row.name;
            this.shadow.getElementById("email").value = row.email;
    }

    validatePassword = (password, passwordConfirmed) => {
            return password === passwordConfirmed;
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
            button {
                width: 100%;
                height: 100%;
                cursor: pointer;
                background-color: transparent;
                border: none;
            }
            button:hover svg {
                transform: scale(110%);
            }
            svg {
                width: 100%;
                height: 100%;
            }
            .form-section {
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 2rem;
            }
            
            .form-section .form-selector {
                width: 100%;
                height: 5vh;
                background-color: white;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .form-selector .selector {
                display: flex;
                height: 100%;
            }
            
            .selector div {
                height: 100%;
                width: 100%;
                padding: 0 1rem;
            }
            
            .selector div p {
                color:rgba(133,133,133,255);
                font-size: 1rem;
                font-weight: 600;
            }
            
            .selector div.active {
                background-color: rgba(109,183,243,255);
            }
            
            .selector div.active p {
                color: white;
            }
            
            .form-selector .options {
                height: 100%;
                display: flex;
                gap: 1rem;
                align-items: center;
                margin-right: 10px;
            }
            
            .options div {
                height: 2.5rem;
                width: 2.5rem;
                display: flex;
            }
            
            .options div button {
                width: 100%;
                height: 100%;
            }
            
            .options div svg {
                fill: rgba(109,183,243,255);
            }
            
            .profile-form {
                display: none;
            }
            
            .profile-form.active {
                display: grid;
                grid-template-columns: 1fr 1fr;
                width: 100%;
                gap: 1rem;
            }
            
            form div {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
            }
            
            form div label {
                color: white;
                font-size: 1.5rem;
                font-weight: 600;
            }
            
            form div input {
                width: 100%;
                background-color: rgba(113,139,224,255);
                font-size: 1.5rem;
                color: white;
                border: none;
                border-bottom: 1px solid white;
                padding: 0.2rem;
                padding-left: 1rem;
            }

            .error {
                background-color: white;
                border-left: 5px solid red;
            }
            .error p {
                color: red;
                font-size: 1.5rem;
                font-weight: 600;
                margin: 10px
            }
        </style>
        
        <section class="form-section">
            <div class="form-selector">
                <div class="selector">
                    <div class="active" data-form="principal">
                        <button>
                            <p>Principal</p>
                        </button>
                    </div>
                    <div data-form="image">
                        <button>
                            <p>Imágenes</p>
                        </button>
                    </div>
                </div>
                <div class="options">
                    <div>
                        <button type="button" id="resetButton">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>broom</title><path d="M19.36,2.72L20.78,4.14L15.06,9.85C16.13,11.39 16.28,13.24 15.38,14.44L9.06,8.12C10.26,7.22 12.11,7.37 13.65,8.44L19.36,2.72M5.93,17.57C3.92,15.56 2.69,13.16 2.35,10.92L7.23,8.83L14.67,16.27L12.58,21.15C10.34,20.81 7.94,19.58 5.93,17.57Z" /></svg>                        </button>
                    </div>
                    <div>
                        <button type="submit" id="submitButton">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>content-save</title><path d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" /></svg>                        </button>
                    </div>
                </div>
            </div>
            <div class="form-container">
                <form id="form">
                    <div class="profile-form active " data-form="principal" id="form-principal">
                            <div>
                                <label>Nombre</label>
                                <input name="name" type="text" id='name'></input>
                            </div>
                            <div>
                                <label for="email">Email</label>
                                <input name="email" type="text" id='email'></input>
                            </div>
                            <div>
                                <label for="password">Contraseña</label>
                                <input name="password" type="text"></input>
                            </div>
                            <div>
                                <label>Confirme contraseña</label>
                                <input name="passwordConfirmed" type="text"></input>
                            </div>
                    </div>
                    <div class="profile-form " data-form="image">
                        <div class="input-image">
                            <label>Imagen de Avatar</label>
                                <image-component name="avatar"></image-component>
                        </div>
                        <div class="input-image">
                            <label>Imagen de Producto</label>
                                <image-component name="producto"></image-component>
                        </div>
                    </div>
                </form>
            </div>
        </section>
        `;
            this.renderTabs()
    }

    renderTabs = async() => {
            const formParent = this.shadow.querySelector(".form-container");
            const forms = formParent.querySelectorAll(".profile-form");
            const form = this.shadow.querySelector('#form');
            const resetForm = this.shadow.querySelector("#resetButton");
            const formSelector = this.shadow.querySelector('.selector');
            const selectors = formSelector.querySelectorAll("div");
            const submitForm = this.shadow.querySelector("#submitButton");

            resetForm.addEventListener("click",() => {
                form.reset();
                document.dispatchEvent(new CustomEvent('reset-image'))
            })

            selectors.forEach(selector => {    
                const dataset = selector.dataset.form;
                const event = new CustomEvent('show-form',{detail: dataset});           
                selector.addEventListener("click", () => {               
                    document.dispatchEvent(event);    
                    for (let i = 0; i < selectors.length; i++) {
                    selectors[i].classList.remove("active");
                }
                selector.classList.add("active")
                forms.forEach(form => {
                        form.dataset.form == dataset ? form.classList.add("active") : form.classList.remove("active");
                })
                })})
              
            submitForm.addEventListener("click", (event) => {
                event.preventDefault(); 
                this.submitData(form)
            })
    }
      
}

customElements.define('form-component', Form);
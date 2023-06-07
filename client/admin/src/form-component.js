class Form extends HTMLElement {

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
                    <div class="profile-form active" data-form="principal" id="form-principal">
                            <div>
                                <label>Nombre</label>
                                <input name="name" type="text"></input>
                            </div>
                            <div>
                                <label>Email</label>
                                <input name="email" type="text"></input>
                            </div>
                            <div>
                                <label>Contraseña</label>
                                <input name="password" type="text"></input>
                            </div>
                            <div>
                                <label>Confirme contraseña</label>
                                <input name="passwordConfirmed" type="text"></input>
                            </div>
                    </div>
                    <div class="profile-form" data-form="image">
                        <div class="input-image">
                            <label>Seleccione una imagen</label>
                            
                        </div>
                    </div>
                </form>
            </div>
        </section>
        `;

        const formParent = this.shadow.querySelector(".form-container");
        const forms = formParent.querySelectorAll(".profile-form");
        const form = this.shadow.querySelector('#form');
        const resetForm = this.shadow.querySelector("#resetButton");
        const submitForm = this.shadow.querySelector("#submitButton"); 
        const formSelector = this.shadow.querySelector('.selector');
        const selectors = formSelector.querySelectorAll("div");


        //FUNCIÓN PARA RESETEAR EL FORMULARIO
        resetForm.addEventListener("click",() => {
            form.reset();
        })

        //FUNCIÓN PARA MOSTRAR/OCULTAR LAS DISTINTAS SECCIONES DEL FORMULARIO
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

        //FUNCIÓN PARA RECOGER LOS DATOS DEL FORMULARIO

        const validatePassword = (password, passwordConfirmed) => {
            return password === passwordConfirmed;
          };
          
        submitForm.addEventListener("click", () => {
            const formData = Object.fromEntries(new FormData(form));
            const isValidPassword = validatePassword(formData.password, formData.passwordConfirmed);
            
            if(isValidPassword) {

            delete formData.passwordConfirmed

            fetch('http://localhost:8080/api/admin/users', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
              })
              .then(response => response.json())
              .then(data =>                
                {
                const event = new CustomEvent('refresh-table')
                document.dispatchEvent(event)
                })
                .catch(error => console.error(error));
              } else {
                console.log("No se pudo realizar la petición ya que las contraseñas no coinciden");
              }
              form.reset();
            })
        
}

}

customElements.define('form-component', Form);
import { API_URL } from '../config.js'

class Login extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    submitForm = () => {
      const form = this.shadow.querySelector('#loginForm')

       form.addEventListener('submit', (e) => {
        e.preventDefault()

        const formData = Object.fromEntries(new FormData(form))
        const url = `${API_URL}/api/auth/users/signin`

        fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          })

          .then(response => {
            if (!response.ok) {
              const error = response.json()
              .then(error => {
                this.showError(error)
                console.log(error.message)
              })
            }
            else {
              const data = response.json()
              .then(data => {
                  const accessToken = data.accessToken
                  sessionStorage.setItem("accessToken", accessToken)
                  this.redirectPanel(data)
                })
            }
          })

       })
    }

    showError = (error) => {
      const errorMessage = error.message
      const loginPanel = this.shadow.querySelector(".login-panel")

      if ( loginPanel.querySelector(".error-container")) {
          loginPanel.querySelector(".error-container").remove()
      }

      const errorContainer = document.createElement("div")
      const errorText = document.createElement("p")

      errorText.innerHTML = errorMessage
      errorContainer.appendChild(errorText)
      loginPanel.appendChild(errorContainer)

      errorContainer.classList.add("error-container")

    }

    redirectPanel = (data) => {
      const successMessage = `¡Bievenido ${data.name}!`
      const loginPanel = this.shadow.querySelector(".login-panel")

      if ( loginPanel.querySelector(".error-container")) {
          loginPanel.querySelector(".error-container").remove()
      }

      const successContainer = document.createElement("div")
      const successText = document.createElement("p")

      successText.innerHTML = successMessage
      successContainer.appendChild(successText)
      loginPanel.appendChild(successContainer)

      successContainer.classList.add("success-container")

      setTimeout(()=> {
        window.location.href = `${API_URL}/admin.html`
      }, 500)
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            * {
              padding: 0;
              margin: 0;
              box-sizing: border-box
            }
            .login-panel {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 100vh;
              }
              
              .login-panel form {
                border: 1px solid white;
                display:flex;
                flex-direction: column;
                gap: 1rem;
                padding: 3rem ;
                color: white;                
                box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.75);
              }

              .campo {
                display:flex;
                flex-direction:column;
                gap: 0.5rem
              }

              form legend {
                font-weight: 800;
              }

              input {
                background-color: rgba(113,139,224,255);
                padding:0.5rem;
                color: white;
                border: none;
                border-bottom: 1px solid white;
            }

            button {
                width: 100%;
                background-color: rgba(113,139,224,255);
                color: white;
                font-weight: 800;
                padding: 1rem;
                border: none;
                border: 1px solid white;
                cursor: pointer;
            }
            .title {
               color: white;
            }
            
            .error-container {
              background-color: white;
              border-left: 5px solid red;
              padding: 1rem 0.5rem;
              margin-top: 2rem;
            }
            .error-container p {
              color: red;
              font-weight: 600
            }

            .success-container {
              background-color:white;
              border-left: 5px solid green;
              padding: 1rem 0.5rem;
              margin-top: 2rem;
            }
            .success-container p {
              color: green;
              font-weight: 600
            }
            
        </style>
        <div class="login-panel">
            <form id='loginForm'>
                <legend>ADMIN LOGIN:</legend>

                <div class='campo'>
                    <label for="email">Email</label>
                    <input name="email"></input>
                </div>

                <div class='campo'>
                    <label for="password" type="email">Password</label>
                    <input name="password" type="password"></input>
                </div>

                <div class='submit'>
                    <button>LOGIN</button>
                </div>

            </form>
        </div>
        `;
        this.submitForm();
    }

}

customElements.define('login-component', Login);
import { validForm} from './../utils/validator'

class Login extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>

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
        

        const form = this.shadow.querySelector('#loginForm')

       form.addEventListener('submit', ( ) => {
        const formData = Object.fromEntries(new FormData(form))
        console.log(formData)
       })

    }
}

customElements.define('login-component', Login);
class ContactForm extends HTMLElement {

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
            
            .card {
                background-color: hsl(0, 0%, 100%);
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                position: absolute;
                overflow: hidden;
                backface-visibility: hidden;
                width: 100%;
                height: 100%;
                padding: 2rem;
                transition: 1s;
                -webkit-box-shadow: 10px 10px 71px -37px rgba(0,0,0,0.75);
                -moz-box-shadow: 10px 10px 71px -37px rgba(0,0,0,0.75);
                box-shadow: 10px 10px 71px -37px rgba(0,0,0,0.75);
            }
                .back {
                    width: 100%;
                    height: 100%;
                    padding-top: 3rem;
                }
                              
                .back .name-email {
                    display: flex;
                    gap: 1rem;
                }
                
                .back input {
                    width: 100%;
                    height: 100%;
                    border: 1px solid rgba(232,238,242,255);
                    background-color: rgba(248,251,253,255);
                    padding: 10px 10px;
                    font-size: 1rem;
                }
                
                
                .message-input {
                    height: 100%;
                    position: relative;
                }
                
                .message-input input {
                    height: 100%;
                }
                
                .input-counter {
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    margin: 10px;
                    display: flex;
                }
                
                .input-counter .counter.limit {
                    color: red;
                }
                
                .back input::placeholder {
                    color: rgba(203,212,217,255); 
                    position: absolute;
                }
                
                .back button {
                    width: 100%;
                    height: 100%;
                    background-color: $secondaryBackgroundColor;
                    color: white;
                    border: none;
                    font-weight: 600;
                    font-size: 1.5rem;
                    padding: 10px 20px;
                    transition: 0.5s;
                    cursor: pointer;
                }
                
                .back button:hover {
                    background-color: $hoverButton;  
                }
        }
        </style>
        <div class="card back" id="backContact">
            <form id="contact-form" class="contact-form form">
                <div class="name-email">
                    <input type="text" name = "name" placeholder="Nombre" required>
                    <input type="email" name = "email" placeholder="Correo electrónico" required>
                </div>
                <div class="subject">
                    <input type="text" name = "subject" placeholder="Asunto" required>
                </div>
                <div class="message-input limited-input">
                    <input type="text" name = "message" placeholder="Esribe tu mensaje..." required>
                    <div class="input-counter">
                        <div class="counter">
                            0
                        </div>
                        <div class="limit-counter">
                            /20
                        </div>
                    </div>
                </div>
                <div class="button">
                    <button type="submit">ENVIAR MENSAJE</button>
                </div>
            </form>
        </div>
        `;
        
    }
}



customElements.define('contactform-component', ContactForm);
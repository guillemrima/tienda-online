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

                .back{
                    transform: perspective(1000px) rotateY(180deg);
                }

                .back.rotated {
                    transform: perspective(1000px) rotateY(360deg);
                }

                form {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
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
                    height: 50%;
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
                    background-color: #0084ff;
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
                
                img {
                    width:100%;
                    height:100%;
                }
                .close-button:hover {
                    filter: invert(0.5) sepia(1) saturate(40) hue-rotate(10deg);
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
                            /70
                        </div>
                    </div>
                </div>
                <div class="button">
                    <button type="submit">ENVIAR MENSAJE</button>
                </div>
            </form>
            <div class="close-button flip-card-back-button" id="flipButton">
                <img src="./assets/icon/close.svg" alt="icon close"/>
            </div>
        </div>
        `;
        
        const flipCard = new CustomEvent ("flip-card-back");
        const backCard = this.shadow.querySelector(".back");
        const buttonFlip = this.shadow.querySelector("#flipButton");

        document.addEventListener("flip-card-front", () => {
            backCard.classList.add("rotated");
        })
        buttonFlip.addEventListener("click", () => {
            document.dispatchEvent(flipCard);
            backCard.classList.remove("rotated");
        })
        const inputContainerList = this.shadow.querySelectorAll('.limited-input');
    
        inputContainerList.forEach(inputContainer => {
            const input = inputContainer.querySelector('input');
            const counter = inputContainer.querySelector('.input-counter');
            input.addEventListener('input', () => {
                input.value.length > 70 ? (input.value = input.value.slice(0, 70),counter.querySelector(".counter").classList.add("limit")) 
                : 
                (counter.querySelector(".counter").innerHTML = input.value.length,counter.querySelector(".counter").classList.remove("limit"));
            })
        })
    }
}



customElements.define('contactform-component', ContactForm);
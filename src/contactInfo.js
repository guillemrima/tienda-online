class ContactInfo extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
                * {
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
                    backface-visibility: hidden;
                    overflow: hidden;
                    width: 100%;
                    height: 100%;
                    padding: 2rem;
                    transition: 1s;
                    -webkit-box-shadow: 10px 10px 71px -37px rgba(0,0,0,0.75);
                    -moz-box-shadow: 10px 10px 71px -37px rgba(0,0,0,0.75);
                    box-shadow: 10px 10px 71px -37px rgba(0,0,0,0.75);
                }
            
                .front {
                    transform: perspective(1000px) rotateY(0deg);
                }
                .front.rotated{
                    transform: perspective(1000px) rotateY(180deg);
                }
                .icon-contact-container {
                width: 2rem;
                height: 2rem;
                }

                .icon-contact-container img {
                width: 100%;
                height: 100%;
                }

                .item-contact-container {
                display: flex;
                gap: 0.5rem;
                }
                 
            .item-contact-container .text-contact-container {
                display: flex;
                align-items: center;
            }
            .button-contact-container {
                height: 4rem;
                width: 100%;
            }
            
            
            .button-contact-container button {
                width: 100%;
                height: 100%;
                background-color:  hsl(209, 100%, 50%);
                color: white;
                border: none;
                font-weight: 600;
                font-size: 1.5rem;
                padding: 10px 20px;
                transition: 0.5s;
                cursor: pointer;
            }
            
            .button-contact-container button:hover {
                background-color: hsl(204, 15%,26%);
            }

            .title-card-container h4 {
                font-size: 1.5rem;
                text-align: center;
            }
        </style>


        <div class="card front" id="frontContact" slot="fron">
            <div class="title-card-container">
                <h4>CONTACTA CON NOSOTROS</h4>
            </div>
            <div class="location-contact-container item-contact-container">
                <div class="icon-contact-container">
                    <img src="./assets/icon/location.svg" alt="location-icon">
                </div>
                <div class="text-contact-container">
                    <p>Marratxí, Mallorca. Illes Balears</p>
                </div>
            </div>
            <div class="phone-contact-container item-contact-container">
                <div class="icon-contact-container">
                    <img src="./assets/icon/phone.svg" alt="phone-icon">
                </div>
                <div class="text-contact-container">
                    <p>(+34) 692 18 89 88</p>
                </div>
            </div>
            <div class="email-contact-container item-contact-container">
                <div class="icon-contact-container">
                    <img src="./assets/icon/email.svg" alt="email-icon">
                </div>
                <div class="text-contact-container">
                    <p>rivasmartorellguillem@gmail.com</p>
                </div>
            </div>
            <div class="button-contact-container flip-card-front-button" id="buttonFront">
                <button type="button" id="flipButton">CONTÁCTANOS AHORA</button>
            </div>
        </div>
        `;
        
            const flipCard =  new CustomEvent("flip-card-front");
            const buttonFlip = this.shadow.querySelector("#flipButton");
            const frontCard = this.shadow.querySelector(".front");

            buttonFlip.addEventListener("click", () => {
                document.dispatchEvent(flipCard);
                frontCard.classList.add("rotated");
            })
            document.addEventListener("flip-card-back", () => {
                frontCard.classList.remove("rotated");
            })


    }
}



customElements.define('contactinfo-component', ContactInfo);
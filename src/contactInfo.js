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
        </style>


        <div class="card front" id="frontContact" slot="fron">
            <div class="title-card-container">
                <h4>TITLE CARD</h4>
            </div>
            <div class="location-contact-container item-contact-container">
                <div class="icon-contact-container">
                    <img src="./assets/icon/location.svg" alt="location-icon">
                </div>
                <div class="text-contact-container">
                    <p>Country</p>
                </div>
            </div>
            <div class="phone-contact-container item-contact-container">
                <div class="icon-contact-container">
                    <img src="./assets/icon/phone.svg" alt="phone-icon">
                </div>
                <div class="text-contact-container">
                    <p>Phone Number</p>
                </div>
            </div>
            <div class="email-contact-container item-contact-container">
                <div class="icon-contact-container">
                    <img src="./assets/icon/email.svg" alt="email-icon">
                </div>
                <div class="text-contact-container">
                    <p>email</p>
                </div>
            </div>
            <div class="button-contact-container flip-card-front-button" id="buttonFront">
                <button type="button">BUTTON</button>
            </div>
        </div>
        `;
        
    }
}



customElements.define('contactinfo-component', ContactInfo);
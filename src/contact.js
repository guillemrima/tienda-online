class Contact extends HTMLElement {

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
            .contact-section {
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                height: 60vh;
                width: 100%;
            }
            
            .contact-section .map-contact-container {
                position: absolute;
                top: 0;
                width: 100%;
                height: 100%;
                border: 1px solid black;
            }
            
            
            .card-contact-container {
                position: relative;
                width: 500px;
                height: 50vh;
                z-index: 100;
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
            
            .back {
                transform: perspective(1000px) rotateY(180deg);
            
            }
            
            .card-contact-container.active .front {
                transform: perspective(1000px) rotateY(180deg);
            }
            
            .card-contact-container.active .back {
                transform: perspective(1000px) rotateY(360deg);
            }
            
            
            .card-contact-container .icon-contact-container {
                width: 2rem;
                height: 2rem;
            } 
            
            .icon-contact-container img {
                width: 100%;
                height: 100%;
            }
            
            .card-contact-container .item-contact-container {
                display: flex;
                gap: 0.5rem;
            }
            
            .item-contact-container .text-contact-container {
                display: flex;
                align-items: center;
            }
            
            .card-contact-container .title-card-container {
                font-size: 2rem;
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
            
            .back {
                width: 100%;
                height: 100%;
                padding-top: 3rem;
            }
            
            .back form {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                width: 100%;
                height: 100%;
                gap: 1rem;
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
                background-color:  hsl(209, 100%, 50%);
                color: white;
                border: none;
                font-weight: 600;
                font-size: 1.5rem;
                padding: 10px 20px;
                transition: 0.5s;
                cursor: pointer;
            }
            
            .back button:hover {
                background-color: hsl(204, 15%,26%);  
            }
            
            
            .contact-form.submitted {
                @include fadeOut(0s,1s);
            }
            
            .submitted-form {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0  ;
                left: 0;
                transition: 2s;
                opacity: 0;
                z-index: -1;
            }
            
            
            .submitted-form svg{
                width: 100%;
                height: 100%;
                object-fit: contain;
                fill: rgb(14, 225, 11);
            }
            
            .submitted-form.active {
                opacity: 1;
            }
        </style>

        <section class="contact-section" id="contact">
            <div  class="map-contact-container">
                <iframe  width="100%" height="100%" src="https://www.openstreetmap.org/export/embed.html?bbox=2.5489997863769536%2C39.556338932988446%2C2.835674285888672%2C39.676145005898455&amp;layer=mapnik&amp;marker=39.61626788999703%2C2.6923370361328125"></iframe>          
            </div>
            <div class="card-contact-container">
                <div class="card front" id="frontContact">
                    <div class="title-card-container">
                        <h4><slot name="title">TITLE CARD<slot></h4>
                    </div>
                    <div class="location-contact-container item-contact-container">
                        <div class="icon-contact-container">
                            <img src="./assets/icon/location.svg" alt="location-icon">
                        </div>
                        <div class="text-contact-container">
                            <p><slot name="country">Country</slot></p>
                        </div>
                    </div>
                    <div class="phone-contact-container item-contact-container">
                        <div class="icon-contact-container">
                            <img src="./assets/icon/phone.svg" alt="phone-icon">
                        </div>
                        <div class="text-contact-container">
                            <p><slot name="phoneNumber">Phone Number</<slot></p>
                        </div>
                    </div>
                    <div class="email-contact-container item-contact-container">
                        <div class="icon-contact-container">
                            <img src="./assets/icon/email.svg" alt="email-icon">
                        </div>
                        <div class="text-contact-container">
                            <p><slot name="email">email</slot></p>
                        </div>
                    </div>
                    <div class="button-contact-container flip-card-front-button" id="buttonFront">
                        <button type="button"><slot name="button">BUTTON</slot></button>
                    </div>
                </div>
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
                    <div class="close-button flip-card-back-button" id="buttonBack">
                        <img src="./assets/icon/close.svg" />
                    </div>
                    <div class="submitted-form">
                        
                    </div>
            </div>
            
        </section>
        `;
        
    }
}

customElements.define('contact-component', Contact);
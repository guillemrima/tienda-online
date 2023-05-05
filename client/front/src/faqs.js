class Faqs extends HTMLElement {

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
            .faq-section {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 4rem;
                padding: 0 20%;
                margin-bottom: 10vh;;
            }
            
            .faq-section .faq-main {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            
            .faq-section .faq-main .main-title h2{
                font-size: 3rem;
                color: hsl(0, 0%, 25%);
            }
            
            .faq-section .faq-main .main-description p {
                padding: 0 10%;
                font-size: 1.2rem;
                color: hsl(0, 0%, 25%);
                text-align: center;
            }
            
            .faq-section .faq-content {
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 2rem;
            }
            
            .faq-section .faq-content .faq-item {
                display: flex;
                flex-direction: column;
            }
            
            .faq-section .faq-content .faq-item .faq-question {
                width: 100%;
                display: flex;
                justify-content: space-between;
                position: relative;
                padding-bottom: 1rem;
                margin-bottom: 1rem;
                position: relative
            }
            
            
            .faq-section .faq-content .faq-item .faq-question::after {
                content: "";
                height: 1px;
                background-color:  hsl(0, 0%, 55%);
                width: 100%;
                position:  absolute;
                bottom: 0;
            }
            
            .faq-section .faq-content .faq-item .faq-question h6{
                font-size: 1.5rem;
                color: hsl(0, 0%, 25%);
            }
            
            .faq-section .faq-content .faq-item .faq-question .button-question {
                width: 1.5rem;
                height: 1.5rem;
                cursor: pointer;
                position: relative;
                display: flex;
                justify-content: center;
            }
            
            .button-question::after {
                content: "";
                width: 80%;
                height: 2px;
                background-color: black;
                position: absolute;
                top: 45%;
            }
            
            .button-question::before {
                content: "";
                width: 80%;
                height: 2px;
                background-color: black;
                position: absolute;
                top: 45%;
                transform: rotate(90deg) scale(100%);
                transition: 0.3s;
            }
            
            .button-question.active::before {
                transform: rotate(90deg) scale(0%);
                transition: 0.4s;
            }
            .faq-section .faq-content .faq-item .faq-question .button-question img {
                width: 100%;
                height: 100%;
                object-fit: cover
            }
            
            .faq-section .faq-content .faq-item .faq-answer{
                display: none;
            }
            
            .faq-section .faq-content .faq-item .faq-answer p{
                color:  hsl(0, 0%, 55%);
                font-size: 1rem;
            }
            
            .faq-section .faq-content .faq-item .faq-answer.active{
                display: flex;
                @include fadeIn(0s, 1s);
            }
        </style>

        <section class="faq-section" id="faq">
        <div class="faq-main">
            <div class="main-title">
                <h2>FAQ</h2>
            </div>
            <div class="main-description">
                <p>En nuestra sección de preguntas frecuentes (FAQ), encontrarás respuestas a las preguntas más comunes que nuestros clientes suelen tener sobre nuestra tienda y los productos que ofrecemos. Hemos recopilado esta información para brindarte la mejor experiencia de compra posible y para que puedas tomar decisiones informadas antes de realizar una compra. Si no encuentras la respuesta que buscas en nuestras preguntas frecuentes, no dudes en contactarnos y estaremos encantados de ayudarte</p>
            </div>
        </div>
        <div class="faq-content">
            <div class="faq-item">
                <div class="faq-question">
                    <div class="question">
                        <h6>How do I order?</h6>
                    </div>
                    <div class="button-question">
                    </div>
                </div>
                <div class="faq-answer">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero quia illum rem minus hic cum at ad voluptatum nam, sapiente facere! Incidunt facere exercitationem autem voluptas unde quasi recusandae beatae!</p>
                </div>
            </div>
            <div class="faq-item">
                <div class="faq-question">
                    <div class="question">
                        <h6>How can I make the payment?</h6>
                    </div>
                    <div class="button-question" value="false">
                    </div>
                </div>
                <div class="faq-answer">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero quia illum rem minus hic cum at ad voluptatum nam, sapiente facere! Incidunt facere exercitationem autem voluptas unde quasi recusandae beatae!</p>
                </div>
            </div>
            <div class="faq-item">
                <div class="faq-question">
                    <div class="question">
                        <h6>How much time does it take to recieive the order?</h6>
                    </div>
                    <div class="button-question">
                    </div>
                </div>
                <div class="faq-answer">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero quia illum rem minus hic cum at ad voluptatum nam, sapiente facere! Incidunt facere exercitationem autem voluptas unde quasi recusandae beatae!</p>
                </div>
            </div>
            <div class="faq-item">
                <div class="faq-question">
                    <div class="question">
                        <h6>Can I resell the products?</h6>
                    </div>
                    <div class="button-question">
                    </div>
                </div>
                <div class="faq-answer" class="button-question-image">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero quia illum rem minus hic cum at ad voluptatum nam, sapiente facere! Incidunt facere exercitationem autem voluptas unde quasi recusandae beatae!</p>
                </div>
            </div>
        </div>
    </section>
        `;
        const buttonsFAQ = this.shadow.querySelectorAll(".button-question") 
    
            buttonsFAQ.forEach((buttonFAQ) => (
            buttonFAQ.addEventListener ("click", () => {
            const itemFAQ = buttonFAQ.closest(".faq-item");
            itemFAQ.querySelector(".faq-answer").classList.toggle("active");
            buttonFAQ.classList.toggle("active");
        })
    ))
    }
}

customElements.define('faqs-component', Faqs);
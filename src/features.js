class Features extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            img {
                width: 100%;
                height: 100%;
            }
            .featured-section {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 10vh 20%;
                gap: 1rem;
                margin-bottom: 10vh;
                background-color: hsl(0, 3%, 93%);
            }
            
            .installation-featured-container {
                display: flex;
                gap: 2rem;
            }
            
            .card-installation-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 2rem;
                position: relative;
            }
            
            
            .card-installation-container:not(:last-child):after{
                content: url(./assets/icon/menu-right.svg);
                width: 50px;
                display: block;
                background-repeat: no-repeat;
                background-position: center;
                position: absolute;
                top: 100px;
                right: -45px;
            }
            
            .featured-section .maintext-featured-container {
                text-align: center;
            }
            
            .maintext-featured-container .title-maintext-container h2{
                font-size: 3rem;
                color: hsl(0, 0%, 25%);
            }
            
            .maintext-featured-container .description-maintext-container p{
                padding: 0 10%;
                font-size: 1.2rem;
                color: hsl(0, 0%, 25%);
                text-align: center;
            }
            
            .featured-section .installation-featured-container {
                display: flex;
            }
            
            .card-installation-container .image-card-container{
                width: 70%;
                display: flex;
                align-items: center;
            }
            
            .text-card-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                gap: 0.5rem;
            }
            
            .text-card-container h3 {
                font-size: 1.5rem;
                color: hsl(0, 0%, 25%);
            }
            
            .text-card-container p {
                color: hsl(0, 0%, 25%);
            }
        </style>

        <section class="featured-section" id="featured">
        <div class="maintext-featured-container">
            <div class="title-maintext-container">
                <h2>LA ÚLTIMA TECNOLOGÍA</h2>
            </div>
            <div class="description-maintext-container">
                <p>Con nuestro último modelo, hemos incorporado la tecnología más avanzada en la industria automotriz. Desde sistemas de seguridad inteligentes hasta características de conectividad y entretenimiento, nuestro coche nuevo está diseñado para brindarte una experiencia de conducción única y de alta calidad.</p>
            </div>
        </div>
        <div class="installation-featured-container">
                <div class="card-installation-container">
                    <div class="image-card-container">
                        <img src="./assets/feature-1.webp" alt="card-image">
                    </div>
                    <div class="text-card-container">
                        <div class="title-card-container">
                            <h3>Cámara hyper-panorámica</h3>
                        </div>
                        <div class="description-card-container">
                            <p>Lorem ipsum dolor sit amet, consectetur de elit, sed do tempor incididunt ut labore eta rehenderit in voluptate velit.</p>
                        </div>
                    </div>
                </div>
                <div class="card-installation-container">
                    <div class="image-card-container">
                        <img src="./assets/feature-2.webp" alt="card-image">
                    </div>
                    <div class="text-card-container">
                        <div class="title-card-container">
                            <h3>Sensor de proximidad</h3>
                        </div>
                        <div class="description-card-container">
                            <p>Lorem ipsum dolor sit amet, consectetur de elit, sed do tempor incididunt ut labore eta rehenderit in voluptate velit.</p>
                        </div>
                    </div>
                </div>
            <div class="card-installation-container">
                <div class="image-card-container">
                    <img src="./assets/feature-3.webp" alt="card-image">
                </div>
                <div class="text-card-container">
                    <div class="title-card-container">
                        <h3>Iluminación asistida.</h3>
                    </div>
                    <div class="description-card-container">
                        <p>Lorem ipsum dolor sit amet, consectetur de elit, sed do tempor incididunt ut labore eta rehenderit in voluptate velit.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
        `;
        
    }
}

customElements.define('features-component', Features);
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
                justify-content: center;
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
                justify-content: center;
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
                <featurescard-component featureCardImage="feature-1.webp">
                    <span slot="titleCard">Sensor de Proximidad</span>
                    <span slot="descriptionCard">Proximidad que te cagas bro. La verdad es que muy proxima y fiable</span>
                </featurescard-component>

                <featurescard-component featureCardImage="feature-2.webp">
                    <span slot="titleCard">Medidor de velocidad</span>
                    <span slot="descriptionCard">Un medidor de la ostia tu. Mide la ostia de cosas</span>
                </featurescard-component>

                <featurescard-component featureCardImage="feature-3.webp">
                    <span slot="titleCard">Cámara panorámica</span>
                    <span slot="descriptionCard">Una cámara 4k de la ostia, te apetecerá ver la saga del Señor de los Anillos entera</span>
                </featurescard-component>
            </div>
        </section>
        `;
        
    }
}

customElements.define('features-component', Features);
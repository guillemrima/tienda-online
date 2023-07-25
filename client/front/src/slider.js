class Slider extends HTMLElement {

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
                margin:0;
                padding:0;
                box-sizing: border-box;
            }
            .slider-section {
                position: relative;
                height: 100vh;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 2rem;
                padding-top: 10vh;
            }
            
            .slider-section .maintext-slider-container {
                margin-top: 5vh;
            }
            
            .maintext-slider-container > .title-maintext-container > h2{
                font-size: 5.2rem;
                text-align: center;
                color: hsl(0, 0%, 25%);
                font-weight: 600;
            }
            
            .maintext-slider-container > .description-maintext-container {
                padding: 0 25%;
                margin-top: 1%;
            }
            
            .maintext-slider-container > .description-maintext-container > p {
                text-align: center;
                font-size: 1.5rem;
                color:  hsl(0, 0%, 55%);
                line-height: 40px;
                font-weight: 300;
            
                
            }
            
            .button-slider-container {
                width: 100%
                h
            }

            .slider-section > .button-slider-container {
                display: flex;
                justify-content: center;
            }
            
            .slider-section .image-slider-container {
                max-width: 30%; 
                min-width: 30%;
                position: absolute;
                bottom: 0;
            }
            
            .image-slider-container  img {
                object-fit: contain;
                width: 100%;
            }
            
            
            .background-slider-container {
                position: absolute;
                bottom: 0;
                z-index: -1;
                width: 100%;
                height: 100%;
                opacity: 1;
            }
            
            .background-slider-container  img {
                width: 100%;
                height: 100%;
            }    
        </style>

        <section class="slider-section" id="slider">
            <div class="maintext-slider-container">
                <div class="title-maintext-container">
                    <h2>El futuro de la conducción</h2>
                </div>
                <div class="description-maintext-container">
                    <p>Nuestro eslogan lo dice todo: estamos en la vanguardia de la tecnología automotriz. Si estás buscando un vehículo que te brinde la máxima eficiencia, seguridad y comodidad, estás en el lugar adecuado. 
                    </p>
                </div>
            </div>
            <div class="button-slider-container">
                <modalbutton-component text="Hazte con el tuyo ahora" backgroundcolor="hsl(209, 100%, 50%)" fontSize ="2rem"></modalbutton-component>
            </div>
            <div class="image-slider-container">
                <img src="./assets/product.webp" alt="product-image">
            </div>
            <div class="background-slider-container">
                <img src="./assets/background-1-product.webp" alt="background-image" class="background-slider active">
 
            </div>
        </section>
        `;
        
    }
}

customElements.define('slider-component', Slider);
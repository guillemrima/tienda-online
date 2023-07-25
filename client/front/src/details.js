class Details extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .details-section {
                display: flex;
                justify-content: center;
                gap: 1%;
                margin-bottom: 100px;
                opacity: 1;
            }
            
            .column-details-container {
                display: flex;
                flex-direction: column;
                width: 20%;
            }
            
            .right-column .element-column-container{
                flex-direction: row-reverse;
                text-align: right;
            }
            
            .text-element-container h4 {
                font-size: 1.2rem;
            }
            
            .description-text-container p {
                font-size: 1rem;
                color: hsl(0, 0%, 25%);
            }
            
            .element-column-container {
                display: flex;
                align-items: flex-start;
                gap: 5%;
            }
            
            .image-element-container {
                width: 6rem;
                margin-top:1.5rem
            }
            
            .image-element-container img {
                width: 100%;
                filter: invert(0.5) sepia(1) saturate(5) hue-rotate(175deg);
            }
            
            .image-details-container {
                padding: 0 5rem;
                width: 20%;
            }
            
            .image-details-container img {
                width: 100%;
                height: 100%;
                object-fit: contain;
                transform: scale(300%);
            }   
        </style>

        <section class="details-section" id="details">
        <div class="column-details-container">
            <div class="element-column-container">
                <div class="image-element-container">
                    <img src="./assets/icon/car-cruise-control.svg" alt="key-image">
                </div>
                <div class="text-element-container">
                    <div class="title-text-container">
                        <h4>Limitador de velocidad</h4>
                    </div>
                    <div class="description-text-container">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                    </div>
                </div>
            </div>
            <div class="element-column-container">
                <div class="image-element-container">
                    <img src="./assets/icon/car-seat-heater.svg"alt="key-image">
                </div>
                <div class="text-element-container">
                    <div class="title-text-container">
                        <h4>Asiento calefactable</h4>
                    </div>
                    <div class="description-text-container">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                    </div>
                </div>
            </div>
            <div class="element-column-container">
                <div class="image-element-container">
                    <img src="./assets/icon/car-brake-abs.svg"alt="key-image">
                </div>
                <div class="text-element-container">
                    <div class="title-text-container">
                        <h4>ABS incorporated</h4>
                    </div>
                    <div class="description-text-container">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="image-details-container">
            <img src="./assets/theproduct-back.webp" alt="product-image">
        </div>
        <div class="column-details-container right-column">
            <div class="element-column-container">
                <div class="image-element-container image4">
                    <img src="./assets/icon/car-shift-pattern.svg" alt="key-image">
                </div>
                <div class="text-element-container">
                    <div class="title-text-container">
                        <h4>Motor de 6 marchas</h4>
                    </div>
                    <div class="description-text-container">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                    </div>
                </div>
            </div>
            <div class="element-column-container">
                <div class="image-element-container image5">
                    <img src="./assets/icon/car-traction-control.svg" alt="key-image">
                </div>
                <div class="text-element-container">
                    <div class="title-text-container">
                        <h4>Sistema anti-robo</h4>
                    </div>
                    <div class="description-text-container">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                    </div>
                </div>
            </div>
            <div class="element-column-container">
                <div class="image-element-container image6">
                    <img src="./assets/icon/car-wireless.svg"alt="key-image">
                </div>
                <div class="text-element-container">
                    <div class="title-text-container">
                        <h4>Anti-thief system</h4>
                    </div>
                    <div class="description-text-container">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
        `;
        
    }
}

customElements.define('details-component', Details);
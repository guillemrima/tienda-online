class FeaturesCard extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        const featureCardImage = this.attributes.getNamedItem("featureCardImage").value;

        this.render(featureCardImage);
    }

    render(featureCardImage) {

        this.shadow.innerHTML = 
        `
        <style>
            img {
                width: 100%;
                height: 100%;
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
                heigth: 50px;
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

        <div class="card-installation-container">
            <div class="image-card-container">
                <img src='./assets/${featureCardImage}' alt="card-image">
            </div>
            <div class="text-card-container">
                <div class="title-card-container">
                    <h3><slot name="titleCard">Title Card</slot></h3>
                </div>
                <div class="description-card-container">
                    <p><slot name="descriptionCard">Description Card</slot></p>
                </div>
            </div>
        </div>
        `;
        
    }
}

customElements.define('featurescard-component', FeaturesCard);
class TitleDetails extends HTMLElement {

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
                   
            .title {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                margin-bottom: 2rem; 
            }
            
            
            .title .car-name p {
                font-size: 1.2rem;
                color: hsl(0, 0%, 55%);
            }
            
            .title .car-edition p {
                font-size: 2rem;
                font-weight: 700;
                color: hsl(0, 0%, 25%);
            }
            
            .title .car-model p{
                font-size: 0.9rem;
                color: hsl(0, 0%, 71%);
            }
            
            .title .car-facture {
                display: flex;
                align-items: center;
                gap: 1rem;
            }
            
            
            .title .car-facture .car-price p {
                font-size: 1.2rem;
            }
            
            .car-facture .car-price .old-price {
                text-decoration:line-through;
                color: hsl(0, 0%, 55%);
            }
            
            .car-facture .car-price .new-price {
                font-size: 1.7rem;
                font-weight: 600;
                color:  hsl(209, 100%, 50%);
            }
            
            .car-facture .offer-tag {
                background-color: hsl(18, 100%, 57%);
                padding: 1px 15px;
                border-radius: 4px;
                height: 2vh;
                display: flex;
                align-items: center;
            }
            
            .car-facture .offer-tag p {
                color: white;
                font-size: 0.6rem;
            }

            </style>
                    <div class="title">
                        <div class="car-name">
                            <p>HYUNDAI® TUCSON</p>
                        </div>
                        <div class="car-edition">
                            <p>2023 LIMITED EDITION</p>
                        </div>
                        <div class="car-model">
                            <p>MODEL AS1500</p>
                        </div>
                        <div class="car-facture">
                            <div class="car-price">
                                <p>
                                    <span class="old-price">
                                        30.000€
                                    </span>
                                    <span class="new-price">
                                        27.000€
                                    </span>
                                </p>
                            </div>
                            <div class="offer-tag">
                                <p>NEW YEAR OFFER</p>
                            </div>
                        </div>
                    </div>
        `;
        
    }
}

customElements.define('title-details-element', TitleDetails);
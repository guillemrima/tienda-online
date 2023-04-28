class AmountDetails extends HTMLElement {

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

                .amount-product {
                    width: 100%;
                    height: 10vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 2rem;
                }
                
                .amount-description p{
                    color: hsl(0, 0%, 25%);
                    font-size: 1.2rem;
                }
                
                .amount-input {
                    display: flex;
                    width: 100%;
                    height: 100%;
                    gap: 0.5rem;
                    justify-content: center;
                    align-items: center;
                }
                
                .amount-input div {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                }
                
                .amount-input .button-amount-container {
                    width: 50%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                }
                
                .amount-input div button {
                    height: 100%;
                    width: 100%;
                    border: 2px solid hsl(209, 100%, 50%);
                    background-color: white;
                    color: hsl(209, 100%, 50%);
                    font-size:2rem;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: 0.2s;
                }
                
                .amount-input div button:hover {
                    background-color: hsl(209, 100%, 50%);
                    color: white;
                }
                
                .amount-input div input {
                    all: unset;
                    width: 100%;
                    text-align: center;
                    border-radius: 5px;
                    border-color: hsl(0, 3%, 93%);
                    border: 2px solid rgb(149, 149, 149);
                }
            
            </style>

            <div class="amount-product" id="amount-product">
                <div class="amount-description">
                    <p>Seleciona una cantidad de coches 🤑</p>
                </div>
                <div class="amount-input">
                    <div class="minus-amount button-amount-container">
                        <button class="minus button-amount" type="button" id="minus-amount" data-action = "minus">-</button>
                    </div>
                    <div class="input-amount">
                        <input type="number" id="inputAmount" value="1" /> 
                    </div>
                    <div class="plus-amount button-amount-container">
                        <button class="plus button-amount" type="button" id="plus-amount" data-action = "plus">+</button>
                    </div>
            </div>
        `;
        
    }
}

customElements.define('amount-input-element', AmountDetails);
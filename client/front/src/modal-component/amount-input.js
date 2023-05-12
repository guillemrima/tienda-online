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
                input[type=number]::-webkit-outer-spin-button,
                input[type=number]::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
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
        const amountForm =  this.shadow.getElementById('amount-product');
        const buttonsAmountForm = amountForm.querySelectorAll('.button-amount');
        const inputAmountForm = amountForm.querySelector('#inputAmount');
    
        buttonsAmountForm.forEach(button => {
            button.addEventListener('click', () => {
                
                if (button.classList.contains('minus') && inputAmountForm.value > 1) {
                    inputAmountForm.value = parseInt(inputAmountForm.value) - 1;
    
                    document.dispatchEvent(new CustomEvent("showMessage",{
                        detail: {
                            description : "¡Producto descartado correctamente!",
                            image : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0L8 4H10V8H14V4H16M1 2V4H3L6.6 11.6L5.2 14C5.1 14.3 5 14.6 5 15C5 16.1 5.9 17 7 17H19V15H7.4C7.3 15 7.2 14.9 7.2 14.8V14.7L8.1 13H15.5C16.2 13 16.9 12.6 17.2 12L21.1 5L19.4 4L15.5 11H8.5L4.3 2M7 18C5.9 18 5 18.9 5 20S5.9 22 7 22 9 21.1 9 20 8.1 18 7 18M17 18C15.9 18 15 18.9 15 20S15.9 22 17 22 19 21.1 19 20 18.1 18 17 18Z" /></svg>'
                        }
                    
                    }))
                }
                else if (button.classList.contains('plus')){
                    inputAmountForm.value = parseInt(inputAmountForm.value) + 1;
    
                    document.dispatchEvent(new CustomEvent("showMessage",{
                        detail: {
                            description : "¡Producto añadido correctamente!",
                            image: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 0V4H8L12 8L16 4H14V0M1 2V4H3L6.6 11.6L5.2 14C5.1 14.3 5 14.6 5 15C5 16.1 5.9 17 7 17H19V15H7.4C7.3 15 7.2 14.9 7.2 14.8V14.7L8.1 13H15.5C16.2 13 16.9 12.6 17.2 12L21.1 5L19.4 4L15.5 11H8.5L4.3 2M7 18C5.9 18 5 18.9 5 20S5.9 22 7 22 9 21.1 9 20 8.1 18 7 18M17 18C15.9 18 15 18.9 15 20S15.9 22 17 22 19 21.1 19 20 18.1 18 17 18Z" /></svg>'
                        }
                    }))
                }   
            })
        })
    }
}

customElements.define('amount-input-element', AmountDetails);
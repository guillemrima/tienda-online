class ProductInformation extends HTMLElement {

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
             .modal-part1 {
                width: 100%;
                height: 100%;
                padding: 5% 5%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                position: relative;
            }

             .modal-part1 .modal-button {
                width: 100%;
                height: 8vh
            }
            
             .modal-part1 .modal-button button {
                width: 100%;
                height: 100%;
                background-color:  hsl(209, 100%, 50%);
                color: white;
                border: none;
                border-radius: 5px;
                font-size: 1.5rem;
                font-weight: 600;
                transition: 0.5s;
                cursor: pointer;
            }
            
             .modal-part1 .modal-button button:hover {
            background-color: hsl(204, 15%,26%);
            }
            
            .close-button {
                position: absolute;
                width: 25px;
                height: 25px;
                right: 0;
                top: 0;
                margin: 10px;
                cursor: pointer;
                filter: invert(0.5) sepia(0) saturate(40) hue-rotate(10deg);
                z-index: 999;
            }
            
            .close-button:hover {
                filter: invert(0.5) sepia(1) saturate(40) hue-rotate(10deg);
            }
            </style>

                <div class="modal-part1" id="modalPart1">
                    <slot name="title-element"></slot>
                    <slot name="tabs-element"></slot>
                    <slot name="amount-element"></slot>
                    
                    <div class="modal-button">
                        <button type="button" id="buttonToCheckout">CHECKOUT</button>
                    </div>
                </div>
        </div>
        `;
        
        const setCheckoutForm = new CustomEvent("set-checkout-form");
        const checkoutButton = this.shadow.querySelector("#buttonToCheckout");
        
        checkoutButton.addEventListener("click", () => {
            document.dispatchEvent(setCheckoutForm);
        })

    }
}

customElements.define('information-details', ProductInformation);
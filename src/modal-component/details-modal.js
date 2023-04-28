class ModalDetails extends HTMLElement {

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

                .details-modal {
                    background-color: rgb(255, 255, 255);
                    width: 50%;
                    height: 65vh;
                    position: absolute;
                    display: flex;
                    z-index: 997;
                    left: 50%;
                    transition: 0.5s;
                    border: 1px solid red;
                }                
   
                
            </style>

            <div class="details-modal" id="detailsModal">
                <slot name="information-details-modal"></slot>
                <slot name="form-details-modal"></slot>
            </div>
        `;
        
    }
}

customElements.define('details-modal', ModalDetails);
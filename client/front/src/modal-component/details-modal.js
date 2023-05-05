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
                    width: 100%;
                    height: 65vh;
                    position: absolute;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    left: 50%;
                    transition: 0.5s;
                }                
                
                .slot-1 {
                    order: 1;
                }

                .slot-2 {
                    order: 2;
                }

                .details-modal.active .slot-1 {
                    order: 2;
                }

                .details-modal.active .slot-2 {
                    order: 1;
                }

            </style>

            <div class="details-modal" id="detailsModal">
                <div class="slot-1">
                    <slot name="information-details-modal"></slot>
                </div>
                <div class="slot-2">
                <slot name="form-details-modal"></slot>
                </div>
            </div>
        `;
                document.addEventListener("set-checkout-form", () => {
                    this.shadow.querySelector(".details-modal").classList.add("active");
                })
                document.addEventListener("remove-checkout-form", () => {
                    this.shadow.querySelector(".details-modal").classList.remove("active");
                })

    }
}

customElements.define('details-modal', ModalDetails);
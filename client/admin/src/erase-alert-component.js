class EraseAlert extends HTMLElement {

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

        .erase-alert {
            width: 200%;
            height: 100%;
            display:flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap:1rem;
            background-color: white;
        }

        .erase-image {
            width: 25%;
        }

        .erase-image svg {
            fill: orange;
        }    
        .erase-information {
            text-align: center;
            display:flex;
            flex-direction: column;
        }

        .erase-information div p {
            font-size: 0.8rem;
            color: grey;
        }

        .erase-options {
            display: flex;
            justify-content: center;
            gap:1rem;
            width: 80%
        }

        .erase-options div {
            width: 50%;
        }

        button {
            padding: 0.5rem;
            width: 100%;
            border: none;
            cursor: pointer;
        }

        button:hover {
            background-color: #738c97;
        }

        .cancel-erase {
            color: white;
            background-color:#989898;
        }

        .accept-erase {
            color: white;
            background-color:#ff323f;
        }

        </style>

            <div class="erase-alert">
                <div class="erase-image">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>alert-circle-outline</title><path d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" /></svg>
                </div>
                
                <div class="erase-information">
                    <div>
                        <h3>¡Este perfil será eliminado permanentemente!</h3>
                    </div>
                    <div>
                        <p>¿Estás seguro que quieres eliminarlo?</p>
                    </div>
                </div>

                <div class="erase-options">
                    <div>
                        <button type="button" class="cancel-erase" id="cancel-erase">Cancelar proceso</button>
                    </div>
                    <div>
                        <button type="button" class="accept-erase" id="accept-erase">Eliminar Perfil</button>
                    </div>
                </div>
            </div>
        `;
            const modalButtons = this.shadow.querySelectorAll("button");

            const cancelButton = this.shadow.querySelector("#cancel-erase");
            const acceptButton = this.shadow.querySelector("#accept-erase");
            const removeActive = new CustomEvent('remove-active');

            modalButtons.forEach((button) => {button.addEventListener("click", () => 
                document.dispatchEvent(removeActive))}
            )
    }
}

customElements.define('erase-alert-component', EraseAlert);
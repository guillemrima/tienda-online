class FormComponent extends HTMLElement {

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
            .modal-part2{
                width: 100%;
                height: 100%;
                padding: 5% 5%;
                display: flex;
                flex-direction: column;
                gap:2rem;
                justify-content: space-between;
                align-items: center;
                position: relative;
            }
            
            .modal-part2 .back-button button{
                border: 1px solid hsl(0, 0%, 80%);
                background-color: transparent;
                color: hsl(0, 0%, 80%);
                padding: 3px 30px;
                border-radius: 15px;
                font-size: 0.8rem;
                cursor: pointer;
                transition: 0.5s;
            }
            
            .modal-part2 .back-button button:hover{
                background-color: rgba(55,64,72,255);
                color: white;
            }
            
            .modal-part2 form {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
            
            .modal-part2 form input {
                border: 1px solid rgba(232,238,242,255);
                background-color: rgba(248,251,253,255);
                padding: 15px 10px;
                font-size: 1rem;
                width: 100%;
            }
            
            .modal-part2 form input::placeholder {
                color: rgba(203,212,217,255); 
            }
            
            .modal-part2 form input.empty {
                border: 1px solid red;
            }
            
            .modal-part2 form .direccion {
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
            }
            
            .modal-part2 form .nombre {
                display: flex;
                gap: 1.5rem;
            }
            
            .modal-part2 form .provincia {
                display: flex;
                gap: 1.5rem;
            }
            
            .modal-part2 form .email {
                position: relative;
            }
            
            
            .modal-part2 form .pais select{
                border: 1px solid rgba(232,238,242,255);
                background-color: rgba(248,251,253,255);
                padding: 10px 10px;
                font-size: 1rem;
                width: 100%;
            }
            
            .modal-part2 form button {
                background-color:  hsl(209, 100%, 50%);
                color: white;
                border: none;
                height: 15%;
                font-size: 1.5rem;
                font-weight: 600;
                border-radius: 5px;
                cursor: pointer;
                transition: 0.5s;
            }
            
            .modal-part2 form button:hover {
                background-color: hsl(204, 15%,26%);
            }    
            
            .modal-part1.fadeOut {
                @include fadeOut(0s, 0.5s)
            }
            
            .modal-part2.fadeOut {
                @include fadeOut(0s, 0.5s)
            }
            
            .modal-part1.fadeIn {
                @include fadeIn(0s, 1s)
            }
            
            .modal-part2.fadeIn {
                @include fadeIn(0s, 1s)
            }
            
            .inputDiv {
                position: relative;
            
            }
            
            .wrong-input-hide {
                display: none;
            }
            
            .wrong-input {
                display: flex;
                position: absolute;
                color: red;
                font-size: 0.7rem;
                bottom: -15px;
            
            }
        </style>

        <div class="modal-part2" id="modalPart2">
            <div class="back-button" id="buttonToDetailsModal">
                <button id="backButton">Volver</button>
            </div>
            <form id="modalForm" class="form">
                <div class="nombre">
                    <div class="inputDiv">
                        <input type="text" placeholder="Nombre" data-validate = "onlyletters"/>
                    </div>
                    <div class="inputDiv">
                        <input type="text" placeholder="Apellidos" data-validate = "onlyletters"/>
                    </div>
                </div>
                <div class="email limited-input inputDiv">
                    <input type="text" placeholder="Correo electrónico" data-validate = "email"/>
                </div>
                <div class="direccion">
                    <div class="inputDiv">
                        <input type="text" placeholder="Dirección 1"  data-validate="street"/>
                    </div>
                    <div class="inputDiv">
                        <input type="number" placeholder="Número de móvil" data-validate = "telephone"/>
                    </div>
                </div>
                <div class="provincia">
                    <div class="inputDiv">
                        <input type="text" placeholder="Provincia" data-validate ="onlyletters"/>
                    </div>
                    <div class="inputDiv">
                        <input type="text" placeholder="Código postal" data-validate ="onlynumbers"/>
                    </div>
                </div>
                <div class="pais inputDiv">
                    <select name="pais" id="paisInput" data-validate="onlyletters">
                        <option value="default">-Seleccione un País-</option>
                        <option value="España">España</option> 
                        <option value="Reino Unido">Reino Unido</option>
                        <option value="Alemania">Alemania</option>
                        <option value="Suecia">Suecia</option>
                        <option value="Francia">Francia</option>
                        <option value="Dinamarca">Dinamarca</option>
                    </select>
                </div>
                <button type="submit" class="submitButton">FINALIZAR COMPRA</button>
            </form>
        
        </div>
        `;
            const removeCheckoutForm = new CustomEvent("remove-checkout-form");
            const backButton  = this.shadow.querySelector("#backButton");

            backButton.addEventListener("click", () => {
                document.dispatchEvent(removeCheckoutForm);
            })

    }
}

customElements.define('form-component', FormComponent);
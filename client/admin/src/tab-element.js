class TabElement extends HTMLElement {

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
            button {
                width: 100%;
                height: 100%;
                cursor: pointer;
                border: none;
                background-color:transparent;
            }
            button:hover svg {
                transform: scale(110%);
            }
            svg {
                width: 100%;
                height: 100%;
            }
            .tab-section {
                width:100%;
            }
            
            .tab-list{
                width:100%;
            }

            .tab-section ul li {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }

            .tab-element {
                display: flex;
                flex-direction: column;
                box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.75);

            }

            .tab-element .tab-options {
                background-color: rgba(109,183,243,255);
                display: flex;
                justify-content: flex-end;
                gap: 0.5rem;
            }
            
            .tab-options div{
                width: 2.5rem;
                height: 2.5rem;
                fill: white;
            }
            
            .tab-element .tab-information {
                display: flex;
                flex-direction: column;
                background-color: rgba(113,139,224,255);
                padding: 15px;
            }
            
            .tab-information div {
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
            
            .tab-information div p {
                color: white;
                font-size: 1.1rem;
            }
            
            .tab-information div .label {
                font-weight: 800;
            }
        </style>
    
        <div class="tab-element">
            <div class="tab-options">
                <div class="edit">
                    <button id="editButton" >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>
                    </button>
                </div>
                <div class="delete">
                    <button id="deleteButton">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>
                    </button>  
                </div>
            </div>
            <div class="tab-information">
                <div>
                    <p class="label">Nombre:</p>
                    <p class="value" id="nameValue"><slot name="name">Indefinido</slot></p>
                </div>
                <div>
                    <p class="label">Email:</p>
                    <p class="value" id="emailValue"><slot name="email">Indefinido</slot></p>
                </div> 
            </div>
        </div>
                    
        `;

        const componentId = this.getAttribute("id");

        const deleteTabButton = this.shadow.querySelector("#deleteButton");
        const editTabButton = this.shadow.querySelector("#editButton");
        const addActive = new CustomEvent('add-active');

        deleteTabButton.addEventListener("click", () => 
            document.dispatchEvent(addActive)
        )
        editTabButton.addEventListener("click", () => {
            const name = editTabButton.closest(".tab-element").querySelector(".tab-information").querySelector("#nameValue");
            const email = editTabButton.closest(".tab-element").querySelector(".tab-information").querySelector("#emailValue");
            const tabData = new Object();
            tabData.name = name;
            tabData.email = email
            console.log(tabData)
            
        })
        

        console.log(componentId)

}}

customElements.define('tab-element', TabElement);
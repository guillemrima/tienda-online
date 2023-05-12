class Tab extends HTMLElement {

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
        
    <section class="tab-section">
        <div class="tab-list">  
            <ul>
                <li>
                   <slot name="tab-element-1"></slot>
                   <slot name="tab-element-2"></slot>
                   <slot name="tab-element-3"></slot>
                   <slot name="tab-element-4"></slot>
                   <slot name="tab-element-5"></slot>
                </li>
            </ul>
        </div>
    </section>
        `;
        
    }
}

customElements.define('tab-component', Tab);
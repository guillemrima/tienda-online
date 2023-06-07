class Tab extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.data = []
    }

    static get observedAttributes () { return ['url'] }

    async connectedCallback() {

        document.addEventListener('refresh-table',  async () => {
            await this.loadData()
            await this.render()
        })
    }

    async attributeChangedCallback (name, oldValue, newValue) {
        await this.loadData()
        await this.render()
      }

    async loadData() {
        try {
          const response = await fetch('http://localhost:8080/api/admin/users', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          });
      
          this.data = await response.json(); 
      
        } catch (error) {
          console.log(error);
        }
    }
      

    async render() {

        const divs = this.data.rows.map(element => {
            return `<tab-element id="${element.id}">
                      <span slot="name">${element.name}</span>
                      <span slot="email">${element.email}</span>
                    </tab-element>`;
          });
          
        this.shadow.innerHTML = 
        `
        <section class="tab-section">
            <div class="tab-list">  
                <ul>
                    <li class="ficha-element">
                    ${divs.join('')}    
                    </li>
                </ul>
            </div>
        </section>


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
    
        `;
        const fichaParent = this.shadow.querySelector(".ficha-element")

    }
}

customElements.define('tab-component', Tab);
class Tab extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.data = []
        this.page = ''
        this.lastPage = ''
    }

    static get observedAttributes () { return ['url'] }

    async connectedCallback() {

        document.addEventListener('refresh-table',  async (e) => {
            if(e.detail){
                const rowId = e.detail.fichaId
                await this.deleteRow(rowId)
            }
            await this.loadData()
            await this.render()
            
        })
    }

    async attributeChangedCallback (name, oldValue, newValue) {
        await this.loadData()
        await this.render()
      }

    async loadData(page = 1) {
        try {
          const response = await fetch(`http://localhost:8080/api/admin/users?page=${page}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          });
      
          this.data = await response.json(); 
          this.page = this.data.meta.currentPage
          this.lastPage = this.data.meta.pages
        } catch (error) {
          console.log(error);
        }
    }



    async deleteRow(rowId) {
        try {
          const response = await fetch(`http://localhost:8080/api/admin/users/${rowId}`, {
            method: 'DELETE',
            
          });
      
          this.data = await response.json(); 
          
        } catch (error) {
          console.log(error);
        }
    }

    changePage = async () => {

        const nextPageButton = this.shadow.querySelector('.nextPageButton')
        const prevPageButton = this.shadow.querySelector('.prevPageButton')
        const firstPageButton = this.shadow.querySelector('.firstPageButton')
        const lastPageButton = this.shadow.querySelector('.lastPageButton')

        nextPageButton.addEventListener('click',  async () => {
            const currentPage = Number(this.page) || 1;
            const nextPage = currentPage + 1;
            const totalPage = Number(this.lastPage)
            
            if(nextPage <= totalPage) {
            await this.loadData(nextPage);
            await this.render()
            }
        });

        prevPageButton.addEventListener('click',  async () => {
            const currentPage = Number(this.page) || 1;
            const prevPage = currentPage - 1;

            if(prevPage >= 1) {
            await this.loadData(prevPage);
            await this.render()
            }
        });

        firstPageButton.addEventListener('click',  async () => {
            await this.loadData(1)
            await this.render()
        })

        lastPageButton.addEventListener('click',  async () => {
            await this.loadData(this.lastPage)
            await this.render()
        })

        this.page == '1' ? prevPageButton.classList.add("inactive") : null
        this.page == this.lastPage ? nextPageButton.classList.add("inactive") : null

    }

    async render() {
        const divs =  this.data.rows.map(element => {
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
            <div class="tab-page">
                <button class="firstPageButton">Primera</button>
                <button id="prevPageButton" class="prevPageButton" >Anterior</button>
                <button id="nextPageButton" class="nextPageButton">Siguiente</button>
                <button class="lastPageButton">Última</button>
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

            .tab-page {
                margin-top: 10px;
                display: flex;
                justify-content: space-around;
                gap: 1rem
            }

            .tab-page button {
                background-color: white;
                padding: 5px;
                font-size: 1.2rem;
            }

            .nextPageButton.inactive {
                opacity: 50%;
                cursor: default;
            }
            .prevPageButton.inactive {
                opacity: 50%;
                cursor: default;
            }
        </style>
    
        `;
        this.changePage()
    }
}

customElements.define('tab-component', Tab);
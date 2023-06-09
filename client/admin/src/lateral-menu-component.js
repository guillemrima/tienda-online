class LateralMenu extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }








    
    render() {

        this.shadow.innerHTML = 
        `
        <div class="hamburger-tab">
                <ul>
                    <li value="users">
                        Users
                    </li>
                    <li value="faqs">
                        Faqs
                    </li>
                </ul>
            </div>

        <style>
            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            ul{
                list-style: none;
            }

            .hamburger-tab {
                background-color: #6db7f3;
                position: absolute;
                display:none;
                top: 0;
                right: 0;
                width: 20%;
                margin-top: 5.5%;
            }

            .hamburger-tab ul {
                width: 100%
            }
            .hamburger-tab li {
                width:100%;
                color: white;
                padding: 1rem 0.5rem;
                cursor:pointer;
                font-size: 1.5rem
            }

            .hamburger-tab li:hover {
                background-color: white;
                color: #6db7f3;
            }

            .hamburger-tab.active {
                display: flex;
                position: absolute;
                top: 0;
            }


        </style>
        `;
            this.renderFunctions()
            this.apiFunctions()
    }

    renderFunctions = () => {
        const hamburgerMenu = this.shadow.querySelector('.hamburger-tab');

        document.addEventListener('show-lateral-menu', () => {
            hamburgerMenu.classList.toggle("active");
        })
    }

    apiFunctions = () => {
        const tableOptions = this.shadow.querySelectorAll("li")

        tableOptions.forEach(table => {
            table.addEventListener("click", (e) => {
                const  tableName = e.target.getAttribute("value")
                const changeTable = new CustomEvent('change-table', { detail:  tableName } )
               document.dispatchEvent(changeTable)
            })
        })
    }



}

customElements.define('lateral-menu-component', LateralMenu);
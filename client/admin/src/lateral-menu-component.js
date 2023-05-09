class LateralMenu extends HTMLElement {

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
                margin-top: 5%;
            }

            .hamburger-tab ul {
                width: 100%
            }
            .hamburger-tab li {
                width:100%;
                color: white;
                padding: 1rem 0.5rem;
                cursor:pointer;
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

            <div class="hamburger-tab">
                <ul>
                    <li>
                        Empty
                    </li>
                    <li>
                        Empty
                    </li>
                    <li>
                        Empty
                    </li>
                    <li>
                        Empty
                    </li>
                    <li>
                        Empty
                    </li>
                </ul>
            </div>
        `;

        const hamburgerMenu = this.shadow.querySelector('.hamburger-tab');

        document.addEventListener('show-lateral-menu', () => {
            hamburgerMenu.classList.toggle("active");
        })
        
    }
}

customElements.define('lateral-menu-component', LateralMenu);
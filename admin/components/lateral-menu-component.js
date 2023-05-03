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
            }

            .hamburger-tab li {
                color: white;
                padding: 1rem 0.5rem;
            }

            .hamburger-tab li:hover {
                border: 1px solid #304cbc;
            }

        </style>

        <article>
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
        </article>
        `;
        
    }
}

customElements.define('lateral-menu-component', LateralMenu);
class Header extends HTMLElement {

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
            .header-section {
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 10vh;
                padding: 0 20%;
                width: 100%;
                position: fixed;
                background-color: hsla(0, 0%, 100%);
                z-index: 999;
            
            }
            
            .header-section .navbar-container ul {
                display: flex;
                gap: 2rem;
                list-style: none;
            }
            
            .header-section .logo-container {
                min-width: 8rem;
                max-width: 8rem;
                display: flex;
                cursor: pointer;
            }
            
            .header-section .checkout-container button {
                font-size: 1rem;
                font-weight: 500;
                background-color: $tertiaryBackgroundColor;
                color: white;
                border: none;
                border-radius: $borderButton;
                padding: 8px 35px;
                cursor: pointer;
                transition: 0.5s;
            }
            
            .header-section .checkout-container button:hover {
                background-color: hsl(204, 15%,26%);
            }
        </style>

        <header class="header-section" id="header"> 
            <logo-component></logo-component>
            <nav  class="navbar-container">
                <ul>
                    <navsection-component sectionRef="Home"></navsection-component>
                    <navsection-component sectionRef="Feature"></navsection-component>
                    <navsection-component sectionRef="Installation"></navsection-component>
                    <navsection-component sectionRef="Contact"></navsection-component>
                    <navsection-component sectionRef="About us"></navsection-component>
                </ul>
            </nav>
            <modalbutton-component text="Buy it Now" backgroundcolor=" hsl(18, 100%, 57%)" fontSize="1rem"></modalbutton-component>
        </header>
        `;
        
    }
}

customElements.define('header-component', Header);
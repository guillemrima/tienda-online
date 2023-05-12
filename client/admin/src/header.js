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
            header{
                display: flex;
                justify-content: space-between;
                margin: 2rem 0rem;
                align-items: center;
            }
            header div{
                display: flex;
            }
            
            .centro {
                margin-right: 10rem;
            }
        
            header div h1 {
                color: white;
                font-size: 2.5rem;
            }
            
            .hamburger-button {
                width: 2rem;
                height: 2.5rem;
                fill: white;
                display: flexs;
                flex-direction: column;
                justify-content: center;
                gap: 0.5rem;
                cursor: pointer;
            }
            
            .hamburger-button span {
                width: 100%;
                height: 0.2rem;
                background-color: white;
                transition: 0.5s;
            }
            
            .hamburger-button.active .top{
                transform: rotateY(360deg) translateY(11px) rotate(45deg)
            }
            
            .hamburger-button.active .mid{
                transform: rotateY(360deg) scale(0%)
            }
            .hamburger-button.active .bot{
                transform: rotateY(360deg) translateY(-11px) rotate(-45deg)
            }

        </style>
        
        <header>
            <div>
                <h1>Detectib</h1>
            </div>
            <div class="centro">
                <h1>Clientes</h1>
            </div>
            <div class="hamburger-button">
                <span class="top"></span>
                <span class="mid"></span>
                <span class="bot"></span>
            </div>
        </header>
        `;

        const  hamburgerButton = this.shadow.querySelector(".hamburger-button");
        const showLateralMenu = new CustomEvent('show-lateral-menu');

        hamburgerButton.addEventListener("click", () => {
            hamburgerButton.classList.toggle("active");
            document.dispatchEvent(showLateralMenu);
            
    })
        
    }
}

customElements.define('header-component', Header);
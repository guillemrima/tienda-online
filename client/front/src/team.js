class Team extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            ul {
                list-style: none;
            }
            img {
                width: 100%;
                height: 100%;
            }
            .team-section {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 5rem;
                background-color: hsl(0, 0%, 94%);
                padding: 15vh 10%;
            }
            
            .team-section .teamcard-team-container .card-teamcard-container .expand-card-container {
            position: absolute;
            right: 0;
            margin: 20px;
            width: 2rem;
            min-height: 15vh;
            border-radius: 20px;
            overflow: hidden;
            }
            
            
            .team-section .expand-card-container .contracted-card-container {
                width: 2rem;
                height: 2rem;
                background-color: white;
                border-radius: 100%;
                cursor: pointer;
                position: absolute;
                z-index: 99;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 0.2rem;
            }
            
            .contracted-card-container.active .bot{
                transform: rotate(45deg);
                position: absolute;
            }
            
            .contracted-card-container.active .top{
                transform: rotate(-45deg);
                position: absolute;
            }
            
            .contracted-card-container.active .mid{
                display: none;
            }
            
            .team-section .expand-card-container .expanded-card-container {
                position: absolute;
                z-index: 98;
                width: 100%;
                height: 100%;
                border-radius: 30px;
                padding-top: 100%;
                background-color: white;
                top: -100%;
                transition: all 0.5s ease-in-out;
            }
            
            .team-section .expand-card-container .expanded-card-container.active {
                top: 0;
            }
            .expanded-card-container img {
                transform: scale(70%);
                cursor: pointer;
            }
            
            
            .team-section .contracted-card-container img {
                transform: scale(10%)
            }
            
            .contracted-card-container div {
                width: 50%;
                border-bottom: 2px solid rgb(6, 6, 6);
                transition: 0.5s;
            }
            
            .team-section .maintext-team-container {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            
            .maintext-team-container h2 {
                font-size: 3rem;
                color: hsl(0, 0%, 25%);
            }
            
            .maintext-team-container p {
                font-size: 1.2rem;
                color: hsl(0, 0%, 25%);
                text-align: center;
                padding: 0 10%;
            }
            
            .team-section .card-teamcard-container {
                display: flex;
                border-top-right-radius: 20px;
                border-top-left-radius:20px;
                flex-direction: column;
                position: relative;
                -webkit-box-shadow: 10px 10px 71px -37px rgba(0,0,0,0.75);
                -moz-box-shadow: 10px 10px 71px -37px rgba(0,0,0,0.75);
                box-shadow: 10px 10px 71px -37px rgba(0,0,0,0.75);
            }
            
            .team-section .teamcard-team-container {
                display: flex;
                justify-content: center;
                gap: 1rem;
                width: 100%;
            }
            
            .card-teamcard-container .image-card-container {
                height: 30vh;
                border-top-right-radius: 20px;
                border-top-left-radius: 20px;
                overflow: hidden;
            }
            
            .image-card-container img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            
            }
            
            .card-teamcard-container .text-card-container {
                background-color: hsl(0, 0%, 100%);
                padding: 1rem 0;
                text-align: center;
            }
            
            .card-teamcard-container .text-card-container  h5{
                font-size: 1rem;
            }
            
            .card-teamcard-container .text-card-container p{
                font-size: 0.8rem;
            }
        
        
        </style>

        <section class="team-section" id="team">
            <div class="maintext-team-container">
                <div class="title-maintext-container">
                    <h2>CONOCE AL EQUIPO</h2>
                </div>
                <div class="description-maintext-container">
                    <p>Somos un equipo apasionado por los coches, dedicados a brindar soluciones de calidad y satisfacer las necesidades de nuestros clientes. En nuestro equipo contamos con expertos en la industria automotriz, desde ingenieros hasta especialistas en marketing, ventas y servicio al cliente.</p>
                </div>
            </div>
            <div class="teamcard-team-container">
                <div class="card-teamcard-container">
                    <div class="image-card-container">
                        <img src="./assets/worker1.webp" alt="team-image">
                        <div class="rrss-card-container"></div>
                    </div>
                    <div class="text-card-container">
                        <div class="title-text-container">
                            <h5>Sara Elliott</h5>
                        </div>
                        <div class="description-text-container">
                            <p>Co-Funder and CEO</p>
                        </div>
                    </div>
                    <div class="expand-card-container">
                        <div class="contracted-card-container">
                            <div class="top"></div>
                            <div class="mid"></div>
                            <div class="bot"></div>
                        </div>
                        <div class="expanded-card-container">
                            <ul>
                                <li><img src="./assets/icon/email.svg" alt="image-rrss-icon"></li>
                                <li><img src="./assets/icon/linkedin.svg" alt="image-rrss-icon"></li>
                                <li><img src="./assets/icon/twitter.svg" alt="image-rrss-icon"></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="card-teamcard-container">
                    <div class="image-card-container">
                        <img src="./assets/worker2.webp" alt="team-image">
                        <div class="rrss-card-container"></div>
                    </div>
                    <div class="text-card-container">
                        <div class="title-text-container">
                            <h5>Jeffrey Allen</h5>
                        </div>
                        <div class="description-text-container">
                            <p>Lead Engineer</p>
                        </div>
                    </div>
                    <div class="expand-card-container">
                        <div class="contracted-card-container">
                            <div class="top"></div>
                            <div class="mid"></div>
                            <div class="bot"></div>                
                        </div>
                        <div class="expanded-card-container">
                            <ul>
                                <li><img src="./assets/icon/email.svg" alt="image-rrss-icon"></li>
                                <li><img src="./assets/icon/linkedin.svg" alt="image-rrss-icon"></li>
                                <li><img src="./assets/icon/twitter.svg" alt="image-rrss-icon"></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="card-teamcard-container">
                    <div class="image-card-container">
                        <img src="./assets/worker3.webp" alt="team-image">
                        <div class="rrss-card-container"></div>
                    </div>
                    <div class="text-card-container">
                        <div class="title-text-container">
                            <h5>Jessica Mendez</h5>
                        </div>
                        <div class="description-text-container">
                            <p>Secretary</p>
                        </div>
                    </div>
                    <div class="expand-card-container">
                        <div class="contracted-card-container">
                            <div class="top"></div>
                            <div class="mid"></div>
                            <div class="bot"></div>                
                        </div>
                        <div class="expanded-card-container">
                            <ul>
                                <li><img src="./assets/icon/email.svg" alt="icon-rrss-image"></li>
                                <li><img src="./assets/icon/linkedin.svg" alt="icon-rrss-image"></li>
                                <li><img src="./assets/icon/twitter.svg" alt="icon-rrss-image"></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="card-teamcard-container">
                    <div class="image-card-container">
                        <img src="./assets/worker4.webp" alt="team-image">
                        <div class="rrss-card-container"></div>
                    </div>
                    <div class="text-card-container">
                        <div class="title-text-container">
                            <h5>Andrew Whattson</h5>
                        </div>
                        <div class="description-text-container">
                            <p>Becario</p>
                        </div>
                    </div>
                    <div class="expand-card-container">
                        <div class="contracted-card-container">
                            <div class="top"></div>
                            <div class="mid"></div>
                            <div class="bot"></div>               
                        </div>
                        <div class="expanded-card-container">
                            <ul>
                                <li><img src="./assets/icon/email.svg" alt="team-image"></li>
                                <li><img src="./assets/icon/linkedin.svg" alt="team-image"></li>
                                <li><img src="./assets/icon/twitter.svg" alt="team-image"></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `;
        const buttonsHamburger = this.shadow.querySelectorAll('.contracted-card-container');

            buttonsHamburger.forEach(buttonHamburguer => {
                buttonHamburguer.addEventListener('click', () => {
                    const hamburgerParent = buttonHamburguer.closest(".expand-card-container")
                    hamburgerParent.querySelector(".expanded-card-container").classList.toggle("active");
                    buttonHamburguer.classList.toggle("active");
        
                })
            })
    }
}

customElements.define('team-component', Team);
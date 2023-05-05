class Footer extends HTMLElement {

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
            a {
                text-decoration: none;
            }
            .footer-section {
                background-color: hsl(0, 0%, 94%);
                padding: 5vh 20%;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 2rem;
                padding-top: 10vh;
            }
            
            .footer-section .rrss-footer-container {
                display: flex;
                justify-content: center;
                gap: 1rem;
            }
            
            
            .rrss-footer-container .icon-rrss {
                width: 2.5rem;
                height: 2.5rem;
                filter: invert(0.5) sepia(1) saturate(5) hue-rotate(175deg);
                opacity: 50%;
                transition: 0.5s;
            }
            
            .icon-rrss:hover {
                opacity: 100%;
            }
            
            .footer-section .separation-line {
                border: 1px solid  hsla(0, 0%, 54%, 0.226);
                width: 80%;
                height: 1px;
            }
            
            .footer-section .information-footer-container ul{
                display: flex;
                list-style: none;
                gap: 3rem;
            }
            
            .footer-section .information-footer-container ul li a{
                color: hsl(0, 0%, 25%);
                opacity: 50%;
                font-size: 1rem;
            }
            
            .footer-section .information-footer-container ul li a:hover {
                opacity: 100%;
            }
            
            .footer-section .copyright-footer-container {
                font-size: 0.8rem;
                color: hsl(0, 0%, 64%);
            }
        </style>

        <footer class="footer-section" id="footer">
            <div class="rrss-footer-container">
                <div class="rrss-container">
                    <a href="#">
                        <div class="icon-rrss">
                            <img src="./assets/icon/facebook.svg" alt="facebook-icon">
                        </div>
                    </a>
                </div>
                <div class="rrss-container">
                    <a href="#">
                        <div class="icon-rrss">
                            <img src="./assets/icon/whatsapp.svg" alt="whatsapp-icon">
                        </div>
                    </a>
                </div>
                <div class="rrss-container">
                    <a href="#">
                        <div class="icon-rrss">
                            <img src="./assets/icon/twitter.svg" alt="twitter-icon">
                        </div>
                    </a>
                </div>
                <div class="rrss-container">
                    <a href="#">
                        <div class="icon-rrss">
                            <img src="./assets/icon/linkedin.svg" alt="linkedin-icon">
                        </div>
                    </a>
                </div>
                <div class="rrss-container">
                    <a href="#">
                        <div class="icon-rrss">
                            <img src="./assets/icon/youtube.svg" alt="youtube-icon">
                        </div>
                    </a>
                </div>
                <div class="rrss-container">
                    <a href="#">
                        <div class="icon-rrss">
                            <img src="./assets/icon/google-plus.svg" alt="google-icon">
                        </div>
                    </a>
                </div>
                <div class="rrss-container">
                    <a href="#">
                        <div class="icon-rrss">
                            <img src="./assets/icon/pinterest.svg" alt="pinteres-icon">
                        </div>
                    </a>
                </div>
            </div>
            <div class="separation-line"></div>
            <div class="information-footer-container">
                <ul>
                    <li><a href="#">PressKit</a></li>
                    <li><a href="#">Mobile App</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Terms of Use</a></li>
                </ul>
            </div>
            <div class="copyright-footer-container">
                <p>Copyright ©guillemrima. Guillem Rivas Martorell. All rights reserved</p>
            </div>
        </footer>
        `;
        
    }
}

customElements.define('footer-component', Footer);
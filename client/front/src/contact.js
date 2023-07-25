class Contact extends HTMLElement {

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
            .contact-section {
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                height: 60vh;
                width: 100%;
            }
            
            .contact-section .map-contact-container {
                position: absolute;
                top: 0;
                width: 100%;
                height: 100%;
            }
            
            
            .card-contact-container {
                position: relative;
                width: 500px;
                height: 40vh;
                z-index: 100;
            }
        </style>

        <section class="contact-section" id="contact">
            <div  class="map-contact-container">
                <iframe  width="100%" height="100%" title="mapa" src="https://www.openstreetmap.org/export/embed.html?bbox=2.5489997863769536%2C39.556338932988446%2C2.835674285888672%2C39.676145005898455&amp;layer=mapnik&amp;marker=39.61626788999703%2C2.6923370361328125"></iframe>          
            </div>
            <div class="card-contact-container">
                <slot name="flipCard"></slot
            </div>
        </section>
        `;
        
    }
}

customElements.define('contact-component', Contact);
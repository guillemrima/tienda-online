class Tabs extends HTMLElement {

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
                .tab-modal {
                    display: flex;
                    flex-direction: column;
                    position: relative;
                }
                
                .tab-modal .tabs {
                    display: flex;
                    justify-content: flex-start;
                    position: absolute;
                    top: -22px;
                }
                
                .tabs .tab {
                    padding: 0.2rem 0.5rem;
                    cursor: pointer;
                    border:1px solid  transparent; 
                    border-bottom: 1px solid white;   
                    border-top-left-radius: 5px;
                    border-top-right-radius: 5px;
                    border-bottom: none;
                    z-index: 10000;
                }
                
                .tab.active {
                   border:1px solid   hsl(209, 100%, 50%);
                   border-bottom: 1px solid white;
                   background-color: white;
                
                }
                
                .tab.active p {
                    color: hsl(209, 100%, 50%);
                }
                .tab p {
                    font-size: 0.8rem;
                    color:hsl(0, 0%, 25%);
                
                }
                
                .tab-content {
                    display: none;
                    height: 15vh;
                    border-radius: 5px;
                    border-top-left-radius: 0px;
                    padding: 5px 10px;
                    color: hsl(0, 0%, 25%);
                }
                
                .tab-content p {
                    font-size: 0.9rem;
                    text-align: justify;
                
                }
                
                .tab-content.active {
                    display: flex;
                    border:1px solid   hsl(209, 100%, 50%);
                }
            </style>
            
                <div class="tab-modal" id="tabModal">
                        <div class="tabs">
                            <div class="tab active" data-tab="description">
                                <p>Descripción</p>
                            </div>
                            <div class="tab" data-tab="insurance">
                                <p>Seguro</p>                                        
                            </div>
                            <div class="tab" data-tab="financing">
                                <p>Financiación</p>
                            </div>
                            <div class="tab" data-tab="delivery">
                                <p>Entrega</p>
                            </div>
                        </div>
                        <div class="tab-content active" data-tab="description">
                            <p>Este 4x4 cuenta con un potente motor que lo hace capaz de superar cualquier terreno. Su sistema de tracción en las cuatro ruedas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis praesentium recusandae, iste nihil quae odio similique at et cumque iusto necessitatibus, sed omnis illo libero laboriosam quos in accusamus!</p>
                        </div>
                        <div class="tab-content" data-tab="insurance">
                            <p>
                            En nuestra tienda de venta de coches, la seguridad de nuestros clientes es primordial. Ofrecemos diferentes opciones de seguros para coches que se adaptan a tus necesidades y presupuesto, desde seguros de responsabilidad civil hasta seguros todo riesgo. Nuestros expertos en seguros están disponibles para asesorarte y ayudarte a elegir la mejor opción. No te arriesgues a conducir sin seguro, visítanos y obtén la protección que necesitas para ti y para tu coche.
                            </p>
                        </div>
                        <div class="tab-content" data-tab="financing">
                            <p>
                            En nuestra tienda de venta de coches, ofrecemos opciones de financiamiento flexibles y adaptadas a tus necesidades. Nuestro equipo de expertos en financiamiento está disponible para ayudarte a encontrar la mejor opción para ti. Ya sea que estés buscando un plan de financiamiento a corto o largo plazo, podemos ayudarte a obtener el coche de tus sueños. Visítanos y descubre cómo podemos ayudarte a hacer realidad tus planes de compra de coche.                            </p>
                        </div>
                        <div class="tab-content" data-tab="delivery">
                            <p>
                            En nuestra tienda de venta de coches, nos aseguramos de que la entrega de tu coche sea una experiencia fácil y sin estrés. Nuestro equipo de entrega está disponible para coordinar una entrega conveniente y adaptada a tu horario. También nos aseguramos de que recibas una presentación completa de tu coche y sus características antes de salir de nuestra tienda. ¡Ven a visitarnos y experimenta una entrega de coche sin complicaciones!                            </p>
                        </div>
                    </div>
        `;

        const tabModal = this.shadow.querySelector("#tabModal");
        const tabs = tabModal.querySelectorAll(".tab");
        const tabContents = tabModal.querySelectorAll(".tab-content");

        tabs.forEach((tab) => {
            tab.addEventListener("click", () => {
                for(let i = 0; i < tabs.length; i++){
                    tabs[i].classList.remove("active");
                }
                tab.classList.add("active");
                
                for (let i = 0; i < tabContents.length; i++) {
                    if(tabContents[i].classList.contains("active")) {
                        tabContents[i].classList.remove("active");

                    }
                    if(tab.dataset.tab === tabContents[i].dataset.tab) {
                        tabContents[i].classList.add("active");
                    }
                }
            })
        })
    }
}

customElements.define('tabs-component', Tabs);
class TabsDetails extends HTMLElement {

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
                            <p>Este 4x4 cuenta con un potente motor que lo hace capaz de superar cualquier terreno. Su sistema de tracción en las cuatro ruedas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis praesentium recusandae, iste nihil quae odio similique at et cumque iusto necessitatibus, sed omnis illo libero laboriosam quos in accusamus</p>
                        </div>
                        <div class="tab-content" data-tab="financing">
                            <p>Este 4x4 cuenta con un potente motor que lo hace capaz de superar cualquier terreno. Su sistema de tracción en las cuatro ruedas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis praesentium recusandae, iste nihil quae odio similique at et cumque iusto necessitatibus, sed omnis illo libero laboriosam quos in accusamus</p>
                        </div>
                        <div class="tab-content" data-tab="delivery">
                            <p>Este 4x4 cuenta con un potente motor que lo hace capaz de superar cualquier terreno. Su sistema de tracción en las cuatro ruedas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis praesentium recusandae, iste nihil quae odio similique at et cumque iusto necessitatibus, sed omnis illo libero laboriosam quos in accusamus</p>
                        </div>
                    </div>
        `;
        
    }
}

customElements.define('tabs-details-element', TabsDetails);
class Gallery extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
        this.image = ""
    }

    async connectedCallback() {
        document.addEventListener("open-gallery", (e) => {
            const file = e.detail[0]
            this.renderImage(file)
            this.render()
        })  
    }
 
     renderImage = async (file) => {
        
      };

    render() {

        this.shadow.innerHTML = 
        `

        `;
            
        
    }
}

customElements.define('gallery-component', Gallery);
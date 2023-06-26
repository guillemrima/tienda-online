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
        const route = "./../../../api/src/storage/gallery/thumbnail/";
        const image = file;
      
        const imageElement = document.createElement("img");
        imageElement.src = `${route}${image}.webp`;
      
        this.image = imageElement
      };

    render() {

        this.shadow.innerHTML = 
        `

        `;
            
        
    }
}

customElements.define('gallery-component', Gallery);
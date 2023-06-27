import {API_URL} from "../config.js"

class Gallery extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render()
    }

    async connectedCallback() {
        document.addEventListener("open-gallery", async (e) => {   
            const file = e.detail[0];

            const existingFilesJSON = localStorage.getItem("files");
            const existingFiles = existingFilesJSON ? JSON.parse(existingFilesJSON) : [];
        
            existingFiles.push(file);

            localStorage.setItem("files", JSON.stringify(existingFiles));
        
            this.renderImage();

        })  
    }


    renderImage = async () => {

        const filesJson = localStorage.getItem('files')
        const files = JSON.parse(filesJson)
        files.forEach(file => {
            const galleryContainer = this.shadow.querySelector(".gallery")
            const imageContainer = document.createElement('div')
            const imageElement = document.createElement('img')

            imageElement.src = `${API_URL}/admin/images/${file}`

            imageContainer.appendChild(imageElement)
            galleryContainer.appendChild(imageContainer)
        })
    };

    render() {

        this.shadow.innerHTML = 
        `
            <div class="gallery"></div>

        
            <style>
            .gallery {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                width: 100%;
                height:100%;
                overflow: scroll
              }
            </style>
        `;
            
    }
}

customElements.define('gallery-component', Gallery);
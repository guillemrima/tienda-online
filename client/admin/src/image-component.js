class Image extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render()
    }


    render() {

        this.shadow.innerHTML =
        `
            <div class="image-section">
                <input class="file-input" type="file" accept="image/*" multiple="false"/>
                
                <div id="image-preview" class="image-preview">
                </div>
            </div>

            <style>
                *{
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                .image-section {
                    display: flex:
                    justify-content: space-between;
                }
                .file-input::-webkit-file-upload-button {
                    opacity: 0;
                    cursor: pointer
                }

                .file-input:hover::before {
                    background: white;
                    color:  rgba(113,139,224,255)
                }
                .reset-input {
                    display: inline-block;
                    border-radius: 4px;
                    border: none;
                    cursor: pointer;
                    width: 1.5rem;
                }
                .reset-input svg {
                }
                .image-preview{
                    width: 100%;
                }
                .image-preview img {
                    width: 5rem
                }


            </style>
        `

        this.renderImage()
    }

        renderImage = () => {
            this.shadow.querySelector(".file-input").addEventListener('change', (e) => {
                const archivo = e.target.files[0]
                const lector = new FileReader()
        
                lector.onloadend = () => {
                    const data = lector.result

                    const preview = this.shadow.querySelector("#image-preview")
                    const imagePreview = document.createElement("img")
                    imagePreview.classList.add("image-preview")
                    imagePreview.src = data

                    preview.innerHTML = ""
                    preview.appendChild(imagePreview)
      
                }
        
                lector.readAsDataURL(archivo)
            })
        }
}


customElements.define('image-component', Image);
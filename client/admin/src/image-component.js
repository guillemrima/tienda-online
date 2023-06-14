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
                <div class="image-container">
                <input class="file-input" type="file" accept="image/*" multiple="false"/>
                    <div id="image-preview" class="image-preview">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4,4H7L9,2H15L17,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z" /></svg>
                    </div>
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
                    justify-content: center;
                    position: relative;
                    height: 30vh;
                    width: 80%
                }

                .image-container {
                    width: 100%;
                    height: 100%;
                    position:relative
                }

                .file-input {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    left: 0;
                    cursor:pointer;
                    opacity: 0
                }

                .image-preview {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center
                }

                .image-preview svg {
                    width: 50%;
                    fill: white;
                    height: 100%
                }

                .image {
                    width : 100%;
                    object-fit: contain
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
                    imagePreview.classList.add("image")
                    imagePreview.src = data

                    preview.innerHTML = ""
                    preview.appendChild(imagePreview)
      
                }
        
                lector.readAsDataURL(archivo)
            })
        }
}


customElements.define('image-component', Image);
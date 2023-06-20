class ImageForm extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.fileOption = "upload-option"
        this.render()
    }

    selectImageOption = () => {
         const imageOptions = this.shadow.querySelectorAll(".image-option")

         imageOptions.forEach(imageOption => {
            imageOption.addEventListener("click", () => {
                const selectedOption = imageOption.dataset.option

                this.fileOption = selectedOption

                for ( let i = 0; i < imageOptions.length; i++ ) {
                    imageOptions[i].classList.remove("active")
                }
                imageOption.classList.add("active")

                this.render()
            
            })
         })
    }
    
    handleFileUpload = async  file => {

        try{
            const formData = new FormData()
            formData.append('file', file)
    
            const data = await fetch('http://localhost:8080/api/admin/images', {
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + sessionStorage.getItem('accessToken')         
                },
                body: formData,
            })

            if(response.status == 500){
                throw response
            }
    
            if(response.status == 200){
                const response = await data.json()
            }

        }catch(error){
            console.log(error)
        }
    }

    render() {

        this.shadow.innerHTML =
        `
        <div class="image-form-container">
            <div class="title">
                <h3>Añade Imágenes</h3>
                <div class="exit">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
                </div>
            </div>

            <div class="image-options">
                <ul>
                    <li class="image-option ${this.fileOption === 'upload-option' ? 'active' : ''}" data-option="upload-option"><p>Subir archivo</p></li>
                    <li class="image-option ${this.fileOption === 'select-option' ? 'active' : ''}" data-option="select-option"><p>Biblioteca de medios</p></li>
                </ul>
            </div>

            <div class="image-selection">
                <div class="image-input">
                    ${this.fileOption === "upload-option" ? 
                    `
                    <form>
                        <input type="file"  class="file-input" multiple="false" name="image"/>
                    </form>
                    ` 
                    :  
                        `¿componente de galería?`}
                </div>
            </div>
        </div>

        <style>
            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            h3, p{
                color: #606060;
            }
            .image-form-container {
                width: 200%;
                height: 100vh;
                background-color: white;
                padding: 2rem 4rem;
            }
            .title {
                margin-bottom: 1.5rem;
                display:flex;
                justify-content: space-between;
                align-items: center
            }
            .title h3 {
                font-size: 1.5rem
            }
            .image-options {
            }
            .image-options ul{
                list-style: none;
                display: flex;
            }
            .image-options ul li:last-child {
                border-top-right-radius: 5px;
              }
            .image-options ul li:first-child {
                border-top-left-radius: 5px;
              }
            
            .image-options ul li {
                border: 1px solid #C2C2C2;
                padding: 0.25rem 0.5rem;
                transform: translateY(1px);
                cursor:pointer;
            }
            .image-options ul li p {
                font-weight: 600;
            }
            .image-option.active {
                background-color: #F3F3F3;
                border-bottom: none;
            }

            .image-option.active p {
                color: #2F2F2F
            }
            .image-selection {
                width: 100%;
                height: 75%;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #F3F3F3;
                border: 1px solid #C2C2C2;
                border-radius: 10px;
                border-top-left-radius: 0;               
            }
            .image-form {
                display: flex;
                flex-direction: column;
                gap: 2rem
            }
            .image-form button {
                background-color: rgba(109,183,243,255);
                border: none;
                font-size: 1rem;
                color: white;
                font-weight: 800;
                padding: 0.5rem;
                cursor: pointer;
            }
            .exit {
                width: 2rem;
                cursor: pointer
            }

        </style>

        `
            this.selectImageOption()

            const fileInput = this.shadow.querySelector(".file-input")
            const exitButton = this.shadow.querySelector(".exit")
    
            fileInput.addEventListener("change", async  () => {

                if(fileInput.files.length == 0 ) {
                    console.log("Llamar a una futura función que muestre una alerta")
                    return
                }

                const file = fileInput.files[0]

                await this.handleFileUpload(file)

                alert("hola")
            })
    
            exitButton.addEventListener("click", () => {
                const removeActive = new CustomEvent('remove-active', {detail: {detail: "image-component"}});
                document.dispatchEvent(removeActive)
            })
    }
 }


customElements.define('image-form-component', ImageForm);
import { API_URL } from '../config.js';

class ImageForm extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.fileOption = "upload-option";
    this.images 
    this.currentImage
    this.name = []
    this.page = ""
    this.lastPage = ""
    this.confirmDeleteImage = 0;
  }

  async connectedCallback () {
    this.name = this.getAttribute('name');

    if (this.getAttribute('current-image') != 'undefined') {
      this.currentImage = JSON.parse(this.getAttribute('current-image'));
      this.fileOption = 'select-option';
      await this.getImages()
    }
    this.render();
  }

  selectImageOption = () => {
    const imageOptions = this.shadow.querySelectorAll(".image-option");
    imageOptions.forEach((imageOption) => {
      imageOption.addEventListener("click", async () => {

        const selectedOption = imageOption.dataset.option;
        this.fileOption = selectedOption;

        if(this.fileOption === 'select-option' ){
          await this.getImages()
        }

        imageOptions.forEach((option) => {
          option.classList.remove("active");
        });

        imageOption.classList.add("active");
        
        this.render(); 

      });
    });
  }

  handleFileUpload = () => {
    if (this.fileOption === 'upload-option') {
      const fileForm = this.shadow.querySelector("#file-form");
      const fileInput = this.shadow.querySelector(".file-input");

      fileForm.addEventListener("change", (e) => {
        e.preventDefault();
        if (fileInput.files.length === 0) {
          return;
        }

        const file = fileInput.files[0];
        this.sendFile(file);
        this.fileOption = 'select-option';

        this.render()
      });
    }
  }

  sendFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    const data = await fetch(`${API_URL}/api/admin/images`, {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: 'Bearer ' + sessionStorage.getItem('accessToken')
      }
    });

    const result = await data.json();
    
    const galleryElement = this.shadow.querySelector(".image-option[data-option='select-option']");
    galleryElement.click()
  }

  selectImage = () => {
    const images = this.shadow.querySelectorAll(".image-container");
    const infoForm = this.shadow.querySelector("#form"); 
    const nameInput = infoForm.querySelector("#name");
    const altInput = infoForm.querySelector("#alt");
    const titleInput = infoForm.querySelector("#title");

    if (images.length) {
      images.forEach((image) => {
          image.addEventListener("click", () => {
              images.forEach((img) => img.classList.remove("selected"));
              image.classList.add("selected");
              this.currentImage = image.getAttribute('name')

              nameInput.value = image.querySelector("img").alt;
              altInput.value = image.querySelector("img").alt;

          });
      });
    }

    if(this.currentImage) {
      nameInput.value = this.currentImage.name;
      altInput.value = this.currentImage.name;  
      titleInput.value = this.currentImage.title;
    }

    infoForm.addEventListener("submit", (e) => {
          e.preventDefault();
          const formData = Object.fromEntries(new FormData(infoForm));
          const selectImage = new CustomEvent('select-image', {detail: {name: this.name, image : formData}});
          
          document.dispatchEvent(new CustomEvent('sendImage', { detail: {
            name: this.name,
            filename: formData.name,
            alt: formData.alt,
            title: formData.title
          }}));

          if(Object.values(formData).some(value => value !== "")) {
            const removeActive = new CustomEvent('remove-active', {detail: {detail: "image-component"}});
            document.dispatchEvent(removeActive)
            document.dispatchEvent(selectImage)
          }
          this.images = []
    })
  }

  getImages = async () => {
  const data = await fetch(`${API_URL}/api/admin/images?page=${this.page}`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer '+ sessionStorage.getItem('accessToken')
    }
  });
    const result = await data.json();

    this.images = result.thumbnails;
    this.lastPage = result.totalPages;
    this.page = result.currentPage;
  }

  changePage = async () => {
    if(this.fileOption === 'select-option') {
    const nextPageButton = this.shadow.querySelector('.nextPageButton')
    const prevPageButton = this.shadow.querySelector('.prevPageButton')
    const firstPageButton = this.shadow.querySelector('.firstPageButton')
    const lastPageButton = this.shadow.querySelector('.lastPageButton')

    nextPageButton.addEventListener('click',  async () => {

      if(this.page < this.lastPage) {
          this.page = Number(this.page) + 1 
          await this.getImages()
          await this.render()
      }
  });

    prevPageButton.addEventListener('click',  async () => {

      if(this.page > 1) {
        this.page = Number(this.page - 1)
        await this.getImages();
        await this.render()
    }

    });

    firstPageButton.addEventListener('click',  async () => {
        this.page = 1

        await this.getImages()
        await this.render()
    })

    lastPageButton.addEventListener('click',  async () => {
        this.page = this.lastPage

        await this.getImages()
        await this.render()
    })

    if(this.page == 1)  {
        prevPageButton.classList.add("inactive")
        firstPageButton.classList.add("inactive")
    }
    if(this.page == this.lastPage ) {
        nextPageButton.classList.add("inactive") 
        lastPageButton.classList.add("inactive")
    }
  }
  }

  deleteImage = async () => {
    const confirmation = this.confirmDeleteImage;
    const  response = await fetch( `${API_URL}/api/admin/images/${this.currentImage}/?confirmation=${confirmation}`,  
    {
      method: 'DELETE',
       headers: {
      Authorization: 'Bearer '+ sessionStorage.getItem('accessToken')
      },
    })
    return  await response.json()
  }

  render() {
    const fileOptionUploadActive = this.fileOption === 'upload-option' ? 'active' : '';
    const fileOptionSelectActive = this.fileOption === 'select-option' ? 'active' : '';

    let content = '';

    if (this.images) {
      this.images.forEach((image, index) => {
        let imageContainer = `
          <div class="image-container" name="${image}">
            <img src="${API_URL}/api/admin/images/${image}" alt="${image}">
          </div>
        `;
      
        if (this.currentImage == undefined && this.currentImage == null) {
          if (index === 0) {
            imageContainer = imageContainer.replace(
              'class="image-container"',
              'class="image-container selected"'
            );
          }
        } else {
          if (this.currentImage.name === image) {
            imageContainer = imageContainer.replace(
              'class="image-container"',
              'class="image-container selected"'
            );
          }
        }
      
        content += imageContainer;
      });
    }

    this.shadow.innerHTML = `
    <div class="image-form-container">
    <div class="title">
      <h3>Añade Imágenes</h3>
      <div class="exit">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
        </svg>
      </div>
    </div>
  
    <div class="image-options">
      <ul>
        <li class="image-option ${fileOptionUploadActive}" data-option="upload-option">
          <p>Subir archivo</p>
        </li>
        <li class="image-option ${fileOptionSelectActive}" data-option="select-option">
          <p>Biblioteca de medios</p>
        </li>
      </ul>
    </div>
  
    <div class="image-display">
      <div class="image-selection">
        ${this.fileOption === "upload-option" ? `
          <div class="image-input">
            <form id="file-form">
              <input type="file" class="file-input" multiple="multiple" name="image" />
            </form>
          </div>
        ` : `
          <div class="gallery">
            ${content}
            <div class="tab-page">
              <button class="firstPageButton">Primera</button>
              <button id="prevPageButton" class="prevPageButton" >Anterior</button>
              <div class="page">${this.page}</div>
              <button id="nextPageButton" class="nextPageButton">Siguiente</button>
              <button class="lastPageButton">Última</button>
            </div>
          </div>
        `}
      </div>
      <div class="image-info">
        <div class="info-form">
          <form id="form" class="form">

            <div class="input-container">
              <label htmlFor="name">Nombre del archivo:</label>
              <input type="text" name="name" id="name" required readOnly/>
            </div>

            <div class="input-container">
              <label htmlFor="alt">Texto alternativo:</label>
              <input type="text" name="alt" id="alt" required/>
            </div>
            
            <div class="input-container">
              <label htmlFor="name">Título de la imagen:</label>
              <textarea class="textarea" name="title" id="title" required></textarea>
            </div>

            <div class="alert-container">
            </div>

            <div class="buttons-container">
            <div class="select-button">
              <button>Seleccionar Imagen</button>
            </div>

            <div class="delete-button">
              <button type="button" id="delete-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" />
                </svg>
              </button>
            </div>
          </div>
          
          </form>
        </div>
      </div>
    </div>
  </div>
  
      <style>
      *{
          margin: 0;
          padding: 0;
          box-sizing: border-box;
      }

    ::-webkit-scrollbar {
      width: 8px; 
    }

    ::-webkit-scrollbar-track {
      background-color: #F3F3F3;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #888; 
      background-color: rgba(109, 183, 243, 255);
      border-radius: 5px;
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

      .image-display {
        display: flex;
        height: 100%;
        gap: 1rem
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
          width: 80%;
          height: 75%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #F3F3F3;
          border: 1px solid #C2C2C2;
          border-radius: 10px;
          border-top-left-radius: 0;               
      }
      .image-info {
        width: 20%;
        height: 75%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #F3F3F3;
        border: 1px solid #C2C2C2;
        border-radius: 10px;
        padding-top: 2rem
      }

      .info-form {
        width: 100%;
        height: 100%;
      }

      .form {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .input-container {
        width: 80%;;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .image-form {
          display: flex;
          flex-direction: column;
          gap: 2rem
      }
      .textarea { 
        max-width: 100%;
        max-height: 60%;
        padding: 0.5rem
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
      .file-input {
          opacity: 1;
          cursor:pointer
      }
      .file-button {
          width: 100%;
          heigth: 4rem;
          background-color: #2596be;
          position: relative;
          padding: 0.5rem;
          cursor:pointer
      }
      .file-button p {
          text-align: center;
          position: absolute;;
          left: 50%;
          transform: translateX(-50%);
          color: white;
          font-weight: 600;
          cursor:pointer
      }
      .gallery {
        position:relative;
        width: 100%;
        height: 100%;
        margin: 1rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(135px, 1fr));
        grid-template-rows: repeat(auto-fill, minmax(135px, 1fr));
        gap: 0.5rem;
        padding: 1rem;
      }
      
      .image-container {
        width: 135px;
        height: 135px;
        display:block;
        cursor: pointer;
        border: 4px solid transparent;
        overflow: hidden;
        line-height: 0;
        align-self: flex-start;
      }
      
      .image-container.selected {
        border: 4px solid rgba(109, 183, 243, 255);
        border-radius: 0.5rem;
      }
      
      .image-container img {
        transition: 0.5s;
        display: block;
      }
      
      .image-container.selected img {
        transform: scale(1.2);
        background-color: rgba(109, 183, 243, 255);
        filter: sepia(1) hue-rotate(180deg);
      
      }

      .buttons-container {
        position: absolute;
        bottom: 0;
        margin-bottom: 1rem;  
        display: flex;
        gap: 1rem;
      }

      .delete-button button {
        border-radius: 0.5rem;
        cursor: pointer;
        background-color: red;
        border: none;
        padding: 0.5rem;
      }

      .delete-button button svg{
        width: 2rem;
        fill: white
      }
      .select-button { 
        display: flex;
        justify-content: center;
        width: 100%;
      } 
      .select-button button { 
        width: 100%;
        background-color: rgba(109,183,243,255);
        border: none;
        font-size: 1rem;
        color: white;
        font-weight: 800;
        padding: 0.5rem;
        cursor: pointer;
        border-radius: 0.5rem;
        padding: 0.5rem
      }
      .exit {
          width: 2rem;
          cursor: pointer
      }
      .tab-page {
        position: absolute;
        bottom: -3rem;
        margin-top: 10px;
        display: flex;
        justify-content: space-around;
        gap: 1rem;
        transform: translateX(100%);
      }

    .tab-page button {
        background-color: rgba(109, 183, 243, 255);
        color: white;
        border: none;
        border: 1px solid grey;
        padding: 5px;
        font-size: 1.2rem;
        cursor: pointer;
    }

    .nextPageButton.inactive {
        opacity: 50%;
        cursor: default;
    }
    .prevPageButton.inactive {
        opacity: 50%;
        cursor: default;
    }
    .firstPageButton.inactive {
        opacity: 50%;
        cursor: default;
    }
    .lastPageButton.inactive {
        opacity: 50%;
        cursor: default;
    }
    .page {
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 600;
    }

    .alert-container {
      margin-top: 90%;
      padding: 0.5rem;
    }

    .alert-container p {
      font-size: 0.9rem;
      color: black;
      font-weight: 600;
    }

    .alert-container button {
      background-color: white;
      color: red;
      font-weight: 800;
      padding: 0.5rem;
      border: 2px solid red;
      cursor: pointer;
      transition: 0.2s;
      border-radius: 0.5rem;
    }

    .alert-container button:hover {
      background-color: red;
      color: white;
    }
  
  </style>
    `;

    this.selectImageOption();
    this.handleFileUpload();
    this.selectImage()
    this.changePage()

    const exitButton = this.shadow.querySelector(".exit")
    exitButton.addEventListener("click", () => {
      const removeActive = new CustomEvent('remove-active', {detail: {detail: "image-component"}});
      document.dispatchEvent(removeActive)
    })

    this.shadow.querySelector("#delete-button").addEventListener("click",  async ( ) => {
      const result = await this.deleteImage()

      if( result.success ){
        await this.getImages()
        await this.render()
      } else {
        const alertContainer = this.shadow.querySelector(".alert-container")
        const alertContent = document.createElement('p')
        const confirmButton = document.createElement('button')

        alertContent.textContent = result.message
        confirmButton.innerHTML = "Deseo eliminar la imagen de todas formas"
        confirmButton.setAttribute("type", "button")

        alertContainer.innerHTML = ""
        alertContainer.appendChild(alertContent)
        alertContainer.appendChild(confirmButton)

        this.confirmDeleteImage = 1

        confirmButton.addEventListener("click", async ( ) => {
          const result = await this.deleteImage()
          await this.getImages()
          await this.render()
        })
      }
    })

  }


}

customElements.define('image-form-component', ImageForm);
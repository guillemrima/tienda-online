import { API_URL } from '../config.js';

class ImageForm extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.fileOption = "upload-option";
    this.images
  }

  connectedCallback () {
    this.images = JSON.parse(localStorage.getItem("images")) || [];
    console.log(this.images);
    this.render();
  }

 selectImageOption() {
    const imageOptions = this.shadow.querySelectorAll(".image-option");
    imageOptions.forEach((imageOption) => {
      imageOption.addEventListener("click", () => {

        const selectedOption = imageOption.dataset.option;
        this.fileOption = selectedOption;

        imageOptions.forEach((option) => {
          option.classList.remove("active");
        });

        imageOption.classList.add("active");
        this.render(); 
      });
    });
  }

  handleFileUpload() {
    if (this.fileOption === 'upload-option') {
      const fileForm = this.shadow.querySelector("#file-form");
      const fileInput = this.shadow.querySelector(".file-input");

      fileForm.addEventListener("change", (e) => {
        e.preventDefault();
        if (fileInput.files.length === 0) {
          console.log("Llamar a una futura función que muestre una alerta");
          return;
        }

        const file = fileInput.files[0];
        this.sendFile(file);
        this.fileOption = 'select-option';

        this.render()
      });
    }
  }

  async sendFile(file) {
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
    
    this.images.unshift(result[0]);
    localStorage.setItem("images", JSON.stringify(this.images));

    const galleryElement = this.shadow.querySelector(".image-option[data-option='select-option']");
    galleryElement.click()
  }

  render() {
    const fileOptionUploadActive = this.fileOption === 'upload-option' ? 'active' : '';
    const fileOptionSelectActive = this.fileOption === 'select-option' ? 'active' : '';

    let content = '';

    if (this.images) { 
      this.images.forEach((image, index) => {
        const route = "./../../../api/src/storage/gallery/thumbnail/";
        let imageContainer = `
          <div class="image-container">
            <img src="${route}${image}" alt="${image}">
          </div>
        `;
      
        if (index === 0) {
          imageContainer = imageContainer.replace(
            'class="image-container"',
            'class="image-container selected"'
          );
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
          </div>
        `}
      </div>
      <div class="image-info">
      <div class="select-button">
        <button>Seleccionar</button>
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
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-start;
        gap:0.5rem;
        padding: 1rem;
      }
      .image-container { 
        display: inline-block;
        cursor: pointer;
      }
      .image-container img {
        transition: 0.5s
      }
      .image-container.selected img {
        border: 3px solid red
      }
      .image-container:hover img {
        transform: scale(1.05);
      }
      .select-button { 
        position: absolute;
        bottom: 0;
        width: 100%;
        margin: 2rem
      } 
      .select-button button { 
        width: 100%;
      }
      .exit {
          width: 2rem;
          cursor: pointer
      }

  </style>
    `;

    this.selectImageOption();
    this.handleFileUpload();

  }


}

customElements.define('image-form-component', ImageForm);
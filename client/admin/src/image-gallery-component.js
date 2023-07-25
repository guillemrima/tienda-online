import { API_URL } from '../config.js'

class ImageGallery extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.name = ''
    this.languageAlias = ''

    document.addEventListener('openGallery', this.handleopenGallery.bind(this))
    document.addEventListener('hideOverlayer', this.handleHideOverlayer.bind(this))
  }

  connectedCallback () {
    this.render()
  }

  handleopenGallery (event) {
    this.openGallery(event.detail.image)
  }

  handleHideOverlayer (event) {
    if (this.shadow.querySelector('.modal').classList.contains('active')) {
      this.shadow.querySelector('.modal').classList.remove('active')
    }
  }

  disconnectedCallback () {
    document.removeEventListener('openGallery', this.openGalleryHandler)
    document.removeEventListener('hideOverlayer', this.closeGalleryHandler)
  }

  async render () {
    this.shadow.innerHTML =
        `
        <style>
            .modal {
                bottom: 30px;
                left: 30px;
                position: fixed;
                opacity: 0;
                top: 30px;
                right: 30px;
                z-index: -1;
                visibility: hidden;
            }

            .modal.active {
                opacity: 1;
                visibility: visible;
                z-index: 50000;
            }

            .modal-content {
                background-color: white;
                border: 1px solid #888;
                border-radius: 5px;
                box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 100%;
                position: relative;
                width: 100%;
            }

            .modal-header {
                align-items: center;
                display: flex;
                height: 5%;
                justify-content: space-between;
                padding: 1%;
                width: 98%;
            }

            .modal-header h2 {
                font-family: 'Roboto', sans-serif;
                margin: 0;
            }

            .modal-header .close {
                color: #aaa;
                float: right;
                font-size: 28px;
                font-weight: bold;
            }

            .modal-header .close:hover,
            .modal-header .close:focus {
                color: black;
                text-decoration: none;
                cursor: pointer;
            }

            .modal-body {
                display: flex;
                flex-direction: column;
                height: 85%;
            }

            .tabs-container-menu {
                display: flex;
                flex-direction: column;
            }

            .tabs-container-menu .tabs-container-items {
                align-items: center;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                padding: 0 1%;
            }

            .tabs-container-menu .tabs-container-items ul {
                display: flex;
                flex-direction: row;
                list-style-type: none;
                margin: 0;
                padding: 0;
            }

            .tabs-container-menu .tabs-container-items ul li {
                cursor: pointer;
                font-family: 'Roboto', sans-serif;
                padding: 0.5rem 1rem;
            }

            .tabs-container-menu .tabs-container-items ul li:hover {
                color: #555;
            }

            .tabs-container-menu .tabs-container-items ul li.active {
                background-color: hsl(207, 85%, 69%);
                color: white;
            }

            .tabs-container-content {
                display: flex;
                flex-direction: column;
                height: 95%;
            }

            .tabs-container-content .tab {
                display: none;
                height: 100%;
            }

            .tabs-container-content .tab.active {
                display: block;
            }

            .tabs-container-content .tab.active#gallery-content {
                border-bottom: 1px solid #dcdcde;
                border-top: 1px solid #dcdcde;
                display: flex;
            }

            .image-gallery {
                align-content: flex-start;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                height: 96%;
                overflow: scroll;
                overflow-y: auto;
                overflow-x: hidden;
                padding: 1%;
                width: 80%;
            }

            .image-gallery-loader {
                background-color: #f1f1f1;
                height: 100%;
                overflow: scroll;
                overflow-y: auto;
                overflow-x: hidden;
                width: 20%;
            }

            .image-gallery .image {
                border: 1px solid #ccc;
                border-radius: 5px;
                box-sizing: border-box;
                cursor: pointer;
                height: 135px;
                margin: 5px;
                overflow: hidden;
                padding: 5px;
                position: relative;
                width: 135px;
            }

            .image-gallery .image:hover {
                border: 1px solid #aaa;
            }

            .image-gallery .image img {
                height: 100%;
                width: 100%;
            }

            .image-gallery .image.selected {
                border: 0.2rem solid #4CAF50;
            }

            .image-gallery-loader-form{
                margin: 1rem;
            }

            .image-gallery-loader-form label {
                font-family: 'Roboto', sans-serif;
                margin: 0.5rem 5%;
                width: 90%;
            }   

            .image-gallery-loader-form input {
                border: 1px solid #ccc;
                box-sizing: border-box;
                margin: 5%;
                padding: 0.2rem;
                position: relative;
                width: 90%;
            }

            .tabs-container-content .tab.active#upload-content {
                border-bottom: 1px solid #dcdcde;
                border-top: 1px solid #dcdcde;
            }

            .upload-image {
                display: flex;
                flex-direction: column;
                height: 100%;
                justify-content: center;
                align-items: center;
            }

            .upload-image input[type="file"] {
                display: none;
            }

            .upload-image label {
                background-color: hsl(207, 85%, 69%);
                border: none;
                border-radius: 5px;
                color: white;
                cursor: pointer;
                font-family: 'Roboto', sans-serif;
                font-size: 16px;
                padding: 12px 24px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                margin: 4px 2px;
                transition-duration: 0.4s;
            }

            .upload-image label:hover {
                background-color: #45a049;
            }

            .modal-footer {
                display: flex;
                justify-content: flex-end;
                padding: 1rem;
            }

            .modal-footer button {
                background-color: #ccc;
                border: none;
                border-radius: 5px;
                color: white;
                font-size: 16px;
                padding: 12px 24px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                margin: 4px 2px;
                transition-duration: 0.4s;
            }

            .modal-footer button.active {
                background-color: hsl(207, 85%, 69%);
                cursor: pointer;
            }
        </style>


        <div class="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h2>Imagen destacada</h2>
                    <span class="close">&times;</span>
                </div>
                <div class="modal-body">
                    <div class="tabs-container-menu">
                        <div class="tabs-container-items">
                            <ul>
                                <li id="gallery-content" class="active">Galería</li>
                                <li id="upload-content">Subir imagen</li>
                            </ul>
                        </div>
                    </div>
                    <div class="tabs-container-content">
                        <div class="tab active" id="gallery-content">
                            <div class="image-gallery">
                            </div>
                            <div class="image-gallery-loader">
                                <div class="image-gallery-information">
                                    <div class="image-gallery-loader-form">
                                        <label for="title">Título</label>
                                        <input type="text" name="title" />
                                    </div>
                                    <div class="image-gallery-loader-form">
                                        <label for="description">Texto alternativo</label>
                                        <input type="text" name="alt" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab" id="upload-content">
                            <div class="upload-image">
                                <label for="file">Subir imagen</label>
                                <input type="file" id="file" name="file" accept="image/*" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary">Elegir imagen</button>
                </div>
            </div>
        </div>
        `

    await this.getThumbnails()

    this.shadow.querySelector('.close').addEventListener('click', () => {
      this.closeGallery()
    })

    this.shadow.querySelectorAll('.tabs-container-menu li').forEach((tab) => {
      tab.addEventListener('click', () => {
        this.changeTab(tab)
      })
    })

    this.shadow.querySelectorAll('.image').forEach((image) => {
      image.addEventListener('click', () => {
        this.selectImage(image)
      })
    })

    this.shadow.querySelector('input[type="file"]').addEventListener('change', async event => {
      this.uploadImage(event.target.files[0])
    })

    this.shadow.querySelector('.modal-footer button').addEventListener('click', event => {
      if (event.target.classList.contains('active')) {
        this.sendDataToForm()
      }
    })
  }

  async openGallery (image) {
    document.dispatchEvent(new CustomEvent('showOverlayer'))
    this.shadow.querySelector('.modal').classList.add('active')

    this.setAttribute('name', image.name)
    this.setAttribute('languageAlias', image.languageAlias)
    this.shadow.querySelector('input[name="title"]').value = image.title
    this.shadow.querySelector('input[name="alt"]').value = image.alt

    const imageElement = this.shadow.querySelector(`.image[data-filename="${image.filename}"]`)

    if (imageElement) {
      imageElement.classList.add('selected')
      this.shadow.querySelector('.modal-footer button').classList.add('active')
      this.updateFile = image.filename
    }
  }

  async changeTab (tab) {
    this.shadow.querySelectorAll('.tabs-container-menu li').forEach(item => {
      item.classList.remove('active')
    })

    tab.classList.add('active')

    this.shadow.querySelectorAll('.tabs-container-content .tab').forEach((item) => {
      item.classList.remove('active')
    })

    this.shadow.querySelector(`.tabs-container-content .tab#${tab.id}`).classList.add('active')
  }

  async getThumbnails () {
    try {
      const result = await fetch(`${API_URL}/api/admin/images`, {
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('accessToken')
        }
      })

      const data = result.data

      let html = ''

      data.filenames.forEach(filename => {
        html += `
                  <div class="image" data-filename="${filename}">
                      <img src="${window.env.API_URL}image-gallery/${filename}" alt="image" />
                  </div>
                `
      })

      this.shadow.querySelector('.image-gallery').innerHTML = html
    } catch (e) {
      console.log(e)
    }
  }

  async uploadImage (file) {
    const formData = new FormData()
    formData.append('file', file)

    const result = await fetch(`${API_URL}/admin/images`, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + sessionStorage.getItem('accessToken')
      },
      body:  formData,
    })

    const filenames = result.json();

    this.shadow.querySelectorAll('.image').forEach((item) => {
      item.classList.remove('selected')
    })

    filenames.forEach(filename => {
      const imageContainer = document.createElement('div')
      const image = document.createElement('img')

      imageContainer.classList.add('image', 'selected')
      imageContainer.setAttribute('data-filename', filename)
      image.src = `${window.env.API_URL}image-gallery/${filename}`

      imageContainer.addEventListener('click', () => {
        this.shadow.querySelectorAll('.image').forEach(item => {
          item.classList.remove('selected')
        })

        imageContainer.classList.add('selected')
      })

      imageContainer.appendChild(image)

      this.shadow.querySelector('.image-gallery').prepend(imageContainer)
    })

    this.shadow.querySelectorAll('.tabs-container-menu li').forEach((item) => {
      item.classList.remove('active')
    })

    this.shadow.querySelector('li#gallery-content').classList.add('active')

    this.shadow.querySelectorAll('.tab').forEach((item) => {
      item.classList.remove('active')
    })

    this.shadow.querySelector('.tab#gallery-content').classList.add('active')
    this.shadow.querySelector('.modal-footer button').classList.add('active')

    this.shadow.querySelector('input[name="alt"]').value = ''
    this.shadow.querySelector('input[name="title"]').value = ''
  }

  async selectImage (image) {
    this.shadow.querySelectorAll('.image').forEach(item => {
      item.classList.remove('selected')
    })

    image.classList.add('selected')

    this.shadow.querySelector('.modal-footer button').classList.add('active')
  }

  async sendDataToForm () {
    const image = {}
    image.name = this.getAttribute('name')
    image.alt = this.shadow.querySelector('input[name="alt"]').value
    image.title = this.shadow.querySelector('input[name="title"]').value
    image.languageAlias = this.getAttribute('languageAlias')
    image.filename = this.shadow.querySelector('.image.selected').getAttribute('data-filename')

    // Aqui se pierde
    if (this.updateFile) {
      document.dispatchEvent(new CustomEvent('updateThumbnail', {
        detail: {
          previousImage: this.updateFile,
          image
        }
      }))
    } else {
      document.dispatchEvent(new CustomEvent('createThumbnail', {
        detail: {
          image
        }
      }))
    }

    document.dispatchEvent(new CustomEvent('hideOverlayer'))

    this.updateFile = null

    this.closeGallery()
  }

  async closeGallery () {
    document.dispatchEvent(new CustomEvent('hideOverlayer'))

    this.shadow.querySelector('.modal-footer button').classList.remove('active')

    this.shadow.querySelectorAll('.image').forEach(item => {
      item.classList.remove('selected')
    })

    this.shadow.querySelector('.modal').classList.remove('active')
  }
}

customElements.define('image-gallery-component', ImageGallery)

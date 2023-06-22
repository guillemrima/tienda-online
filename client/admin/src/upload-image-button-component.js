class UploadImageButton extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.name = this.getAttribute('name')
    this.languageAlias = this.getAttribute('languageAlias') || 'es'
    this.quantity = this.getAttribute('quantity') || 'single'

    document.addEventListener('showThumbnails', this.handleShowThumbnails.bind(this))
    document.addEventListener('createThumbnail', this.handleCreateThumbnail.bind(this))
    document.addEventListener('updateThumbnail', this.handleUpdateThumbnail.bind(this))
    document.addEventListener('deleteThumbnails', this.handleDeleteThumbnails.bind(this))
  }

  connectedCallback () {
    this.render()
  }

  handleShowThumbnails = event => {
    this.showThumbnails(event.detail.images)
  }

  handleCreateThumbnail = event => {
    if (event.detail.image.name === this.getAttribute('name') && event.detail.image.languageAlias === this.getAttribute('languageAlias')) {
      this.createThumbnail(event.detail.image)
    }
  }

  handleUpdateThumbnail = event => {
    if (event.detail.image.name === this.getAttribute('name') && event.detail.image.languageAlias === this.getAttribute('languageAlias')) {
      this.updateThumbnail(event.detail.image, event.detail.previousImage)
    }
  }

  handleDeleteThumbnails = event => {
    this.deleteThumbnails()
  }

  render () {
    this.shadow.innerHTML =
        `
        <style>
            .square-button {
                width: 135px;
                height: 135px;
                border: none;
                background-color: hsl(207, 85%, 69%);
                color: white;
                text-align: center;
                display: inline-block;
                font-size: 16px;
                cursor: pointer;
            }

            .square-button:hover {
                border: 0.2rem solid hsl(19, 100%, 50%);
                cursor: pointer;
            }
          
            .icon {
                fill: white;
                width: 24px;
                height: 24px;
            }

            .upload-image-container {
                display: flex;
                gap: 1rem;
                flex-wrap: wrap;
                justify-content: left;
            }

            .upload-image{
                background-color: hsl(100, 100%, 100%);
                cursor: pointer;
                height: 135px;
                position: relative;
                width: 135px;
            }

            .upload-image-overlay {
                background-color: hsla(0, 0%, 0%, 0.5);
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                opacity: 0;
                transition: opacity 0.3s ease;
                z-index: 2000;
            }

            .upload-image:hover .upload-image-overlay {
                opacity: 1;
            }

            .delete-button {
                position: absolute;
                top: 0.2rem;
                right: 0.2rem;
                background-color: hsl(0, 100%, 50%);
                color: white;
                border: none;
                border-radius: 50%;
                width: 20px;
                height: 20px;
                font-size: 12px;
                cursor: pointer;
                opacity: 0;
                transition: opacity 0.3s ease;
                z-index: 2001;
            }

            .upload-image:hover .delete-button {
                opacity: 1;
            }

            .delete-button:hover {
                background-color: hsl(0, 100%, 30%);
            }
        </style>

        <div class="upload-image-container">
            <button class="square-button">
                <svg class="icon" viewBox="0 0 24 24">
                    <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                </svg>
            </button>
        </div>
        `

    this.shadow.querySelector('.square-button').addEventListener('click', () => {
      const image = {
        name: this.getAttribute('name'),
        languageAlias: this.languageAlias,
        filename: '',
        title: '',
        alt: ''
      }

      document.dispatchEvent(new CustomEvent('openGallery', {
        detail: {
          image
        }
      }))
    })
  }

  async showThumbnails (images) {
    this.shadow.querySelectorAll('.upload-image').forEach(image => {
      image.remove()
    })

    images.forEach(image => {
      image.show = true

      document.dispatchEvent(new CustomEvent('createThumbnail', {
        detail: {
          image
        }
      }))
    })
  }

  async createThumbnail (image) {
    if (this.shadow.querySelector(`.upload-image[data-filename="${image.filename}"]`)) {
      return
    }

    if (this.getAttribute('quantity') === 'single') {
      this.shadow.querySelector('.upload-image-container').innerHTML = ''
    }

    const imageContainer = document.createElement('div')
    imageContainer.classList.add('upload-image')
    imageContainer.dataset.filename = image.filename

    const imageOverlay = document.createElement('div')
    imageOverlay.classList.add('upload-image-overlay')

    const file = document.createElement('img')
    file.src = `${window.env.API_URL}image-gallery/${image.filename}`

    const deleteButton = document.createElement('button')
    deleteButton.classList.add('delete-button')
    deleteButton.innerHTML = 'X'

    imageContainer.appendChild(deleteButton)
    imageContainer.appendChild(imageOverlay)
    imageContainer.appendChild(file)
    this.shadow.querySelector('.upload-image-container').appendChild(imageContainer)

    if (!image.show) {
      image.create = true
    }

    document.dispatchEvent(new CustomEvent('attachImageToForm', {
      detail: {
        image
      }
    }))

    imageOverlay.addEventListener('click', () => {
      image.filename = imageContainer.dataset.filename

      document.dispatchEvent(new CustomEvent('openGallery', {
        detail: {
          image
        }
      }))
    })

    deleteButton.addEventListener('click', async () => {
      imageContainer.remove()

      image.previousImage = imageContainer.dataset.filename
      image.delete = true

      document.dispatchEvent(new CustomEvent('attachImageToForm', {
        detail: {
          image
        }
      }))
    })
  }

  async updateThumbnail (image, previousImage) {
    if (this.shadow.querySelector(`.upload-image[data-filename="${image.filename}"]`)) {
      return
    }

    if (this.shadow.querySelector(`.upload-image[data-filename="${previousImage}"]`)) {
      const thumbnail = this.shadow.querySelector(`.upload-image[data-filename="${previousImage}"]`)

      thumbnail.querySelector('img').src = `${window.env.API_URL}image-gallery/${image.filename}`
      thumbnail.dataset.filename = image.filename

      image.previousImage = previousImage

      image.update = true

      document.dispatchEvent(new CustomEvent('attachImageToForm', {
        detail: {
          image
        }
      }))
    }
  }

  async deleteThumbnails () {
    this.shadow.querySelectorAll('.upload-image').forEach(image => {
      image.remove()
    })
  }
}

customElements.define('upload-image-button-component', UploadImageButton)

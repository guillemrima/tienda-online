class ImageForm extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render()
    }

    selectImageOption = () => {
         
    }

    render() {

        this.shadow.innerHTML =
        `
        <div class="image-form-container">
            <div class="title">
                <h3>Añade Imágenes</h3>
            </div>

            <div class="image-options">
                <ul>
                    <li class="image-option active"><p>Subir archivo</p></li>
                    <li class="image-option"><p>Biblioteca de medios</p></li>
                </ul>
            </div>

            <div class="image-selection">
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
                margin-bottom: 1.5rem
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
            }
            .image-options ul li p {
                font-weight: 600;
            }
            .image-option.active {
                background-color: #F3F3F3;
                border-bottom: none
            }
            .image-selection {
                width: 100%;
                height: 75%;
                background-color: #F3F3F3;
                border: 1px solid #C2C2C2;
            }
        </style>

        `
            this.selectImageOption()
        
    }
 }



customElements.define('image-form-component', ImageForm);
class Filter extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    submitForm = (data) => {
        const filterData = new CustomEvent('filter-table', { detail: { data : data } })
        document.dispatchEvent(filterData)
        }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                list-style: none;
            }

            .filter-section {
                position: relative;
                margin-bottom: 1rem;
                overflow: hidden;
            }

            .filter-button {
                width: 100%;
                display: flex;
                justify-content: center;
                padding: .5rem 0;
                cursor: pointer;
                background-color: white;
                transition: 0.5s;
            }

            .filter-button.active {
                margin-top: 10rem
            }
            
            .filter-image {
                transition: 0.5s
            }

            .filter-image svg {
                width: 2.5rem;
                fill: rgba(109,183,243,255);
                
            }

            .filter-image.active {
                transform: rotateY(360deg)
            }
            .filter-image.colorActive  svg{
                fill: #04B911;
            }
            .filter-form {
                width: 100%;
                position: absolute;
                z-index: -1
            }

            .filter-form.active {
                z-index: 0
            }

            hero {
                color: white;
                font-size: 1.5rem;
                font-weight: 600;
            }

            .filter-form form {
                padding: 1rem 0;
                display: flex;
                justify-content: center;
                gap: 4rem;
            }

            form label {
                color: white;
                font-size: 1.5rem;
                font-weight: 600;
            }

            form input {
                width: 100%;
                background-color: rgba(113,139,224,255);
                font-size: 1.5rem;
                color: white;
                border: none;
                border-bottom: 1px solid white;
                padding: 0.2rem;
                padding-left: 1rem;
            }

        </style>
        
        <section class="filter-section">
            <div class="filter-form">
                <div>
                    <hero>Filtra los registros:</hero>
                </div>
                <form id="filter-form">
                    <div class="campo">
                        <label>Nombre: </label>
                        <input name="name" />
                    </div>
                    <div class="campo">
                        <label>Email: </label>
                        <input name="email" />
                    </div>
                </form>
            </div>
            <div class="filter-button">
                <div class="filter-image">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14,12V19.88C14.04,20.18 13.94,20.5 13.71,20.71C13.32,21.1 12.69,21.1 12.3,20.71L10.29,18.7C10.06,18.47 9.96,18.16 10,17.87V12H9.97L4.21,4.62C3.87,4.19 3.95,3.56 4.38,3.22C4.57,3.08 4.78,3 5,3V3H19V3C19.22,3 19.43,3.08 19.62,3.22C20.05,3.56 20.13,4.19 19.79,4.62L14.03,12H14Z" /></svg>
                </div>
            </div>
        </section>
        `;

        this.renderFilter()
    }

    renderFilter = () => {
        const filterButton = this.shadow.querySelector(".filter-button")

        filterButton.addEventListener("click", () => {
            const filterForm = this.shadow.querySelector(".filter-form")
            const filterImage = this.shadow.querySelector(".filter-image")

            filterButton.classList.toggle("active")
            filterImage.classList.toggle("active")

            

            if(filterForm.classList.contains("active")) {
                    filterForm.classList.remove("active")
                    setTimeout(() => {
                        filterImage.innerHTML = ' <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14,12V19.88C14.04,20.18 13.94,20.5 13.71,20.71C13.32,21.1 12.69,21.1 12.3,20.71L10.29,18.7C10.06,18.47 9.96,18.16 10,17.87V12H9.97L4.21,4.62C3.87,4.19 3.95,3.56 4.38,3.22C4.57,3.08 4.78,3 5,3V3H19V3C19.22,3 19.43,3.08 19.62,3.22C20.05,3.56 20.13,4.19 19.79,4.62L14.03,12H14Z" /></svg>'
                        filterImage.classList.remove("colorActive")
                }, 150)
            }
            else {
                setTimeout(() => {
                    filterForm.classList.add("active")
                }, 300)
                setTimeout(() => {
                    filterImage.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 12V19.88C12.04 20.18 11.94 20.5 11.71 20.71C11.32 21.1 10.69 21.1 10.3 20.71L8.29 18.7C8.06 18.47 7.96 18.16 8 17.87V12H7.97L2.21 4.62C1.87 4.19 1.95 3.56 2.38 3.22C2.57 3.08 2.78 3 3 3H17C17.22 3 17.43 3.08 17.62 3.22C18.05 3.56 18.13 4.19 17.79 4.62L12.03 12H12M17.75 21L15 18L16.16 16.84L17.75 18.43L21.34 14.84L22.5 16.25L17.75 21" /></svg>'
                    filterImage.classList.add("colorActive")
            }, 150)
            }
        })

        filterButton.addEventListener("click", () => {
            if(!filterButton.classList.contains("active")) {
                const formFilter = this.shadow.querySelector("#filter-form")
                const data = Object.fromEntries(new FormData(formFilter))

                for(const key in data) {
                    data[key] === '' ? delete data[key] : null
                }

                setTimeout(() => {
                    formFilter.reset()
                },500)

               this.submitForm(data)
            
            }
        })


    }

}

customElements.define('filter-component', Filter);
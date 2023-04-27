class Filter extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
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
            button {
                width: 100%;
                height: 100%;
                cursor: pointer;
                background-color: transparent;
                border: none;
            }
            button:hover svg {
                transform: scale(110%);
            }
            svg {
                width: 100%;
                height: 100%;
            }
            .filter-section {
                width: 100%;
                height: 3rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin: 2rem 0rem;
                background-color: white;
                position: relative;
            }
            
            .filter-section div {
                width: 2rem;
            }
            
            .filter-section .filter-options {
                width: 100%;
                position: absolute;
                top: 100%;
                left: 0;
                margin: 1px 0px;
                background-color: white;
                display: none;
            
            }
            
            .filter-options ul li{
                padding:5px;
            }

            .filter-options.active {
                display: block;
            }
            
            .filter-options ul li:hover{
                background-color: rgba(109,183,243,255);
                color: white;
                cursor: pointer;
            }
            
            .filter-section div svg {
                width: 100%;
                height: 100%;
                fill: rgba(109,183,243,255);
            }
        </style>
        
        <section class="filter-section" id="filter-section">
            <div>
                <button id="filter-button" class="plus">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 11L16.76 3.62A1 1 0 0 0 16.59 2.22A1 1 0 0 0 16 2H2A1 1 0 0 0 1.38 2.22A1 1 0 0 0 1.21 3.62L7 11V16.87A1 1 0 0 0 7.29 17.7L9.29 19.7A1 1 0 0 0 10.7 19.7A1 1 0 0 0 11 18.87V11M13 16L18 21L23 16Z" /></svg>
                </button>
            </div>
            <div class="filter-options">
                <ul>
                    <li>Nombres</li>
                    <li>Emails</li>
                    <li>Contraseñas</li>
                    <li>Imágenes</li>
                </ul>
            </div>
    </section>
        `;
        
        const filterSection = this.shadow.querySelector("#filter-section");
        const filterButton = filterSection.querySelector("#filter-button");
        
        //FUNCIÓN PARA ABRIR LA PESTAÑA DE FILTROS
        filterButton.addEventListener("click", () => {
            filterSection.querySelector(".filter-options").classList.toggle("active");
            filterButton.classList.contains("plus")
                ? 
                (filterButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>filter-minus</title><path d="M12 12V19.88C12.04 20.18 11.94 20.5 11.71 20.71C11.32 21.1 10.69 21.1 10.3 20.71L8.29 18.7C8.06 18.47 7.96 18.16 8 17.86V12H7.97L2.21 4.62C1.87 4.19 1.95 3.56 2.38 3.22C2.57 3.08 2.78 3 3 3V3H17V3C17.22 3 17.43 3.08 17.62 3.22C18.05 3.56 18.13 4.19 17.79 4.62L12.03 12H12M15 17H23V19H15V17Z" /></svg>'
                ,filterButton.classList.remove('plus')
                ) : (filterButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>filter-menu</title><path d="M11 11L16.76 3.62A1 1 0 0 0 16.59 2.22A1 1 0 0 0 16 2H2A1 1 0 0 0 1.38 2.22A1 1 0 0 0 1.21 3.62L7 11V16.87A1 1 0 0 0 7.29 17.7L9.29 19.7A1 1 0 0 0 10.7 19.7A1 1 0 0 0 11 18.87V11M13 16L18 21L23 16Z" /></svg>'
                , filterButton.classList.add('plus'))
        })
    }
}

customElements.define('filter-component', Filter);
class Products extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.data;
    }

    static get observedAttributes () { return ['route'] }

    async attributeChangedCallback (name, oldValue, newValue) {
        await this.loadData(newValue)
        await this.render()
    }

    async loadData(route) {

        const url = `http://localhost:8080${route}`

        const reponse = await (fetch(url))
        this.data = await reponse.json()
    }

    
    render() {

        const productRow = this.data.map(productObject => {
            const nombreProducto = productObject.nombre
            const nombreCategoria = productObject.categoria["nombre"]
            const precioProducto = productObject.precio[0].precio_base
            const ivaProducto = productObject.precio[0].iva["tipo"]

            return (
            `
                <tr>
                    <td>${nombreProducto}</td>
                    <td>${nombreCategoria}</td>
                    <td>${precioProducto}</td>
                    <td>${ivaProducto}</td>
                </tr>
            `
            )
        })

        this.shadow.innerHTML = 
        `
            <div>
                <table>
                    <tr>
                        <th>Producto</th>
                        <th>Categoría</th>
                        <th>Precio Base</th>
                        <th>Tipo de IVA</th>
                    </tr>
                    ${productRow.join('')}
                <table>
            </div>

            <style>
                *{
                    text-align: center;
                }
                div {
                    width: 100%;
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                table {
                    background-color: white;
                }

                tr {
                    background-color: #F1F1F1;
                }

                tr th {
                    background-color: #DBDBDB;
                }
            </style>
        `;
    }
}

customElements.define('products-component', Products);
class NavSection extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        const sectionRef = this.attributes.getNamedItem("sectionRef").value;
        this.render(sectionRef);
    }

    render(sectionRef) {

        this.shadow.innerHTML = 
        `
        <style>
            li a{
                font-size: 1rem;
                color: $mainColor;
                opacity: 50%;
                transition: 0.5s;
                font-weight: 500;
                cursor: pointer;
            }
            li a:hover {
                opacity: 100%;
            }
        </style>

        <li>
            <a href=${sectionRef}>${sectionRef}</a>
        </li>
        `;


    }
}

customElements.define('navsection-component', NavSection);
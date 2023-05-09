(()=>{var n={701:()=>{class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.shadow.innerHTML='\n        <style>\n        *{\n            margin: 0;\n            padding: 0;\n            box-sizing: border-box;\n        }\n\n        .erase-alert {\n            width: 200%;\n            height: 100%;\n            display:flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n            gap:1rem;\n            background-color: white;\n        }\n\n        .erase-image {\n            width: 25%;\n        }\n\n        .erase-image svg {\n            fill: orange;\n        }    \n        .erase-information {\n            text-align: center;\n            display:flex;\n            flex-direction: column;\n        }\n\n        .erase-information div p {\n            font-size: 0.8rem;\n            color: grey;\n        }\n\n        .erase-options {\n            display: flex;\n            justify-content: center;\n            gap:1rem;\n            width: 80%\n        }\n\n        .erase-options div {\n            width: 50%;\n        }\n\n        button {\n            padding: 0.5rem;\n            width: 100%;\n            border: none;\n            cursor: pointer;\n        }\n\n        button:hover {\n            background-color: #738c97;\n        }\n\n        .cancel-erase {\n            color: white;\n            background-color:#989898;\n        }\n\n        .accept-erase {\n            color: white;\n            background-color:#ff323f;\n        }\n\n        </style>\n\n            <div class="erase-alert">\n                <div class="erase-image">\n                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>alert-circle-outline</title><path d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" /></svg>\n                </div>\n                \n                <div class="erase-information">\n                    <div>\n                        <h3>¡Este perfil será eliminado permanentemente!</h3>\n                    </div>\n                    <div>\n                        <p>¿Estás seguro que quieres eliminarlo?</p>\n                    </div>\n                </div>\n\n                <div class="erase-options">\n                    <div>\n                        <button type="button" class="cancel-erase" id="cancel-erase">Cancelar proceso</button>\n                    </div>\n                    <div>\n                        <button type="button" class="accept-erase" id="accept-erase">Eliminar Perfil</button>\n                    </div>\n                </div>\n            </div>\n        ';const n=this.shadow.querySelectorAll("button"),e=(this.shadow.querySelector("#cancel-erase"),this.shadow.querySelector("#accept-erase"),new CustomEvent("remove-active"));n.forEach((n=>{n.addEventListener("click",(()=>document.dispatchEvent(e)))}))}}customElements.define("erase-alert-component",n)},313:()=>{class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.shadow.innerHTML='\n        <style>\n            *{\n                margin: 0;\n                padding: 0;\n                box-sizing: border-box;\n                list-style: none;\n            }\n            button {\n                width: 100%;\n                height: 100%;\n                cursor: pointer;\n                background-color: transparent;\n                border: none;\n            }\n            button:hover svg {\n                transform: scale(110%);\n            }\n            svg {\n                width: 100%;\n                height: 100%;\n            }\n            .filter-section {\n                width: 100%;\n                height: 3rem;\n                display: flex;\n                flex-direction: column;\n                align-items: center;\n                justify-content: center;\n                margin: 2rem 0rem;\n                background-color: white;\n                position: relative;\n            }\n            \n            .filter-section div {\n                width: 2rem;\n            }\n            \n            .filter-section .filter-options {\n                width: 100%;\n                position: absolute;\n                top: 100%;\n                left: 0;\n                margin: 1px 0px;\n                background-color: white;\n                display: none;\n            \n            }\n            \n            .filter-options ul li{\n                padding:5px;\n            }\n\n            .filter-options.active {\n                display: block;\n            }\n            \n            .filter-options ul li:hover{\n                background-color: rgba(109,183,243,255);\n                color: white;\n                cursor: pointer;\n            }\n            \n            .filter-section div svg {\n                width: 100%;\n                height: 100%;\n                fill: rgba(109,183,243,255);\n            }\n        </style>\n        \n        <section class="filter-section" id="filter-section">\n            <div>\n                <button id="filter-button" class="plus">\n                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 11L16.76 3.62A1 1 0 0 0 16.59 2.22A1 1 0 0 0 16 2H2A1 1 0 0 0 1.38 2.22A1 1 0 0 0 1.21 3.62L7 11V16.87A1 1 0 0 0 7.29 17.7L9.29 19.7A1 1 0 0 0 10.7 19.7A1 1 0 0 0 11 18.87V11M13 16L18 21L23 16Z" /></svg>\n                </button>\n            </div>\n            <div class="filter-options">\n                <ul>\n                    <li>Nombres</li>\n                    <li>Emails</li>\n                    <li>Contraseñas</li>\n                    <li>Imágenes</li>\n                </ul>\n            </div>\n    </section>\n        ';const n=this.shadow.querySelector("#filter-section"),e=n.querySelector("#filter-button");e.addEventListener("click",(()=>{n.querySelector(".filter-options").classList.toggle("active"),e.classList.contains("plus")?(e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>filter-minus</title><path d="M12 12V19.88C12.04 20.18 11.94 20.5 11.71 20.71C11.32 21.1 10.69 21.1 10.3 20.71L8.29 18.7C8.06 18.47 7.96 18.16 8 17.86V12H7.97L2.21 4.62C1.87 4.19 1.95 3.56 2.38 3.22C2.57 3.08 2.78 3 3 3V3H17V3C17.22 3 17.43 3.08 17.62 3.22C18.05 3.56 18.13 4.19 17.79 4.62L12.03 12H12M15 17H23V19H15V17Z" /></svg>',e.classList.remove("plus")):(e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>filter-menu</title><path d="M11 11L16.76 3.62A1 1 0 0 0 16.59 2.22A1 1 0 0 0 16 2H2A1 1 0 0 0 1.38 2.22A1 1 0 0 0 1.21 3.62L7 11V16.87A1 1 0 0 0 7.29 17.7L9.29 19.7A1 1 0 0 0 10.7 19.7A1 1 0 0 0 11 18.87V11M13 16L18 21L23 16Z" /></svg>',e.classList.add("plus"))}))}}customElements.define("filter-component",n)},817:()=>{class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.shadow.innerHTML='\n        <style>\n        *{\n            margin: 0;\n            padding: 0;\n            box-sizing: border-box;\n        }\n            button {\n                width: 100%;\n                height: 100%;\n                cursor: pointer;\n                background-color: transparent;\n                border: none;\n            }\n            button:hover svg {\n                transform: scale(110%);\n            }\n            svg {\n                width: 100%;\n                height: 100%;\n            }\n            .form-section {\n                width: 100%;\n                display: flex;\n                flex-direction: column;\n                gap: 2rem;\n            }\n            \n            .form-section .form-selector {\n                width: 100%;\n                height: 5vh;\n                background-color: white;\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n            }\n            \n            .form-selector .selector {\n                display: flex;\n                height: 100%;\n            }\n            \n            .selector div {\n                height: 100%;\n                width: 100%;\n                padding: 0 1rem;\n            }\n            \n            .selector div p {\n                color:rgba(133,133,133,255);\n                font-size: 1rem;\n                font-weight: 600;\n            }\n            \n            .selector div.active {\n                background-color: rgba(109,183,243,255);\n            }\n            \n            .selector div.active p {\n                color: white;\n            }\n            \n            .form-selector .options {\n                height: 100%;\n                display: flex;\n                gap: 1rem;\n                align-items: center;\n                margin-right: 10px;\n            }\n            \n            .options div {\n                height: 2.5rem;\n                width: 2.5rem;\n                display: flex;\n            }\n            \n            .options div button {\n                width: 100%;\n                height: 100%;\n            }\n            \n            .options div svg {\n                fill: rgba(109,183,243,255);\n            }\n            \n            .profile-form {\n                display: none;\n            }\n            \n            .profile-form.active {\n                display: grid;\n                grid-template-columns: 1fr 1fr;\n                width: 100%;\n                gap: 1rem;\n            }\n            \n            form div {\n                display: flex;\n                flex-direction: column;\n                gap: 0.5rem;\n            }\n            \n            form div label {\n                color: white;\n                font-size: 1.5rem;\n                font-weight: 600;\n            }\n            \n            form div input {\n                width: 100%;\n                background-color: rgba(113,139,224,255);\n                font-size: 1.5rem;\n                color: white;\n                border: none;\n                border-bottom: 1px solid white;\n                padding: 0.2rem;\n                padding-left: 1rem;\n            }\n        </style>\n        \n        <section class="form-section">\n            <div class="form-selector">\n                <div class="selector">\n                    <div class="active" data-form="principal">\n                        <button>\n                            <p>Principal</p>\n                        </button>\n                    </div>\n                    <div data-form="image">\n                        <button>\n                            <p>Imágenes</p>\n                        </button>\n                    </div>\n                </div>\n                <div class="options">\n                    <div>\n                        <button type="button" id="resetButton">\n                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>broom</title><path d="M19.36,2.72L20.78,4.14L15.06,9.85C16.13,11.39 16.28,13.24 15.38,14.44L9.06,8.12C10.26,7.22 12.11,7.37 13.65,8.44L19.36,2.72M5.93,17.57C3.92,15.56 2.69,13.16 2.35,10.92L7.23,8.83L14.67,16.27L12.58,21.15C10.34,20.81 7.94,19.58 5.93,17.57Z" /></svg>                        </button>\n                    </div>\n                    <div>\n                        <button type="submit" id="submitButton">\n                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>content-save</title><path d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" /></svg>                        </button>\n                    </div>\n                </div>\n            </div>\n            <div class="form-container">\n                <form id="form">\n                    <div class="profile-form active" data-form="principal" id="form-principal">\n                            <div>\n                                <label>Nombre</label>\n                                <input name="nombre" type="text"></input>\n                            </div>\n                            <div>\n                                <label>Email</label>\n                                <input name="email" type="text"></input>\n                            </div>\n                            <div>\n                                <label>Contraseña</label>\n                                <input name="password" type="text"></input>\n                            </div>\n                            <div>\n                                <label>Confirme contraseña</label>\n                                <input name="passwordConfirmed" type="text"></input>\n                            </div>\n                    </div>\n                    <div class="profile-form" data-form="image">\n                        <div class="input-image">\n                            <label>Seleccione una imagen</label>\n                            <input type="file" name="imagen">\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </section>\n        ';const n=this.shadow.querySelector(".form-container").querySelectorAll(".profile-form"),e=this.shadow.querySelector("#form"),t=this.shadow.querySelector("#resetButton"),i=this.shadow.querySelector("#submitButton"),o=this.shadow.querySelector(".selector").querySelectorAll("div");t.addEventListener("click",(()=>{e.reset()})),o.forEach((e=>{const t=e.dataset.form,i=new CustomEvent("show-form",{detail:t});e.addEventListener("click",(()=>{document.dispatchEvent(i);for(let n=0;n<o.length;n++)o[n].classList.remove("active");e.classList.add("active"),n.forEach((n=>{n.dataset.form==t?n.classList.add("active"):n.classList.remove("active")}))}))})),i.addEventListener("click",(()=>{const n=new FormData(e);for(let e of n.entries())console.log(e[0]+": "+e[1])}))}}customElements.define("form-component",n)},831:()=>{class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.shadow.innerHTML='\n        <style>\n            *{\n                margin: 0;\n                padding: 0;\n                box-sizing: border-box;\n            }\n            header{\n                display: flex;\n                justify-content: space-between;\n                margin: 2rem 0rem;\n                align-items: center;\n            }\n            header div{\n                display: flex;\n            }\n            \n            .centro {\n                margin-right: 10rem;\n            }\n        \n            header div h1 {\n                color: white;\n                font-size: 2.5rem;\n            }\n            \n            .hamburger-button {\n                width: 2rem;\n                height: 2.5rem;\n                fill: white;\n                display: flexs;\n                flex-direction: column;\n                justify-content: center;\n                gap: 0.5rem;\n                cursor: pointer;\n            }\n            \n            .hamburger-button span {\n                width: 100%;\n                height: 0.2rem;\n                background-color: white;\n                transition: 0.5s;\n            }\n            \n            .hamburger-button.active .top{\n                transform: rotateY(360deg) translateY(11px) rotate(45deg)\n            }\n            \n            .hamburger-button.active .mid{\n                transform: rotateY(360deg) scale(0%)\n            }\n            .hamburger-button.active .bot{\n                transform: rotateY(360deg) translateY(-11px) rotate(-45deg)\n            }\n\n        </style>\n        \n        <header>\n            <div>\n                <h1>Detectib</h1>\n            </div>\n            <div class="centro">\n                <h1>Clientes</h1>\n            </div>\n            <div class="hamburger-button">\n                <span class="top"></span>\n                <span class="mid"></span>\n                <span class="bot"></span>\n            </div>\n        </header>\n        ';const n=this.shadow.querySelector(".hamburger-button"),e=new CustomEvent("show-lateral-menu");n.addEventListener("click",(()=>{n.classList.toggle("active"),document.dispatchEvent(e)}))}}customElements.define("header-component",n)},750:()=>{class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.shadow.innerHTML='\n        <style>\n            *{\n                margin: 0;\n                padding: 0;\n                box-sizing: border-box;\n            }\n\n            ul{\n                list-style: none;\n            }\n\n            .hamburger-tab {\n                background-color: #6db7f3;\n                position: absolute;\n                display:none;\n                top: 0;\n                right: 0;\n                width: 20%;\n                margin-top: 5%;\n            }\n\n            .hamburger-tab ul {\n                width: 100%\n            }\n            .hamburger-tab li {\n                width:100%;\n                color: white;\n                padding: 1rem 0.5rem;\n                cursor:pointer;\n            }\n\n            .hamburger-tab li:hover {\n                background-color: white;\n                color: #6db7f3;\n            }\n\n            .hamburger-tab.active {\n                display: flex;\n                position: absolute;\n                top: 0;\n            }\n\n\n        </style>\n\n            <div class="hamburger-tab">\n                <ul>\n                    <li>\n                        Empty\n                    </li>\n                    <li>\n                        Empty\n                    </li>\n                    <li>\n                        Empty\n                    </li>\n                    <li>\n                        Empty\n                    </li>\n                    <li>\n                        Empty\n                    </li>\n                </ul>\n            </div>\n        ';const n=this.shadow.querySelector(".hamburger-tab");document.addEventListener("show-lateral-menu",(()=>{n.classList.toggle("active")}))}}customElements.define("lateral-menu-component",n)},359:()=>{class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"});const n=this.attributes.getNamedItem("width").value,e=this.attributes.getNamedItem("heigth").value;this.render(n,e)}render(n,e){this.shadow.innerHTML=`\n        <style>\n        *{\n            margin: 0;\n            padding: 0;\n            box-sizing: border-box;\n            list-style: none;\n        }\n        img {\n            width: 100%;\n            height: 100%;\n        }\n        .modal-section {\n            position: fixed;\n            top: 0;\n            width: 100%;\n            height: 100vh;\n            display: none;\n            justify-content: center;\n            align-items: center;\n        }\n        \n        .modal-section::after {\n            content: "";\n            position: absolute;\n        }       \n        .modal-section .modal { \n            background-color: rgb(93, 93, 93);\n            width: ${n};\n            height: ${e};\n            display: grid;\n            grid-template-columns: 50% 50%;\n            box-shadow: 10px 10px 58px -6px rgba(0,0,0,0.75);\n            position: relative;\n            overflow: hidden;\n        }\n        \n        .close-button {\n            position: absolute;\n            width: 25px;\n            height: 25px;\n            right: 0;\n            top: 0;\n            margin: 10px;\n            cursor: pointer;\n            filter: invert(0.5) sepia(0) saturate(40) hue-rotate(10deg);\n            z-index: 999;\n        }\n        \n        .close-button:hover {\n            filter: invert(0.5) sepia(1) saturate(40) hue-rotate(10deg);\n        }\n\n        .modal-section.active {\n            @include fadeIn(0s,0.5s);\n            display : flex;\n            z-index: 999;       \n        }\n\n        .modal-section.active .modal {\n            z-index: 999;\n        }\n\n        </style>\n        <section class="modal-section" id="modal">\n        <div class="modal">\n            <slot name="image-component-modal"></slot>\n            <slot name="details-component-modal"></slot>\n            \n            <div class="close-button button-close-modal" id="closeButton">\n                <img src="./assets/close.svg" />\n            </div>            \n        </div>\n    </section>\n        `;const t=this.shadow.querySelector("#closeButton");t.addEventListener("click",(()=>t.closest(".modal-section").classList.remove("active"))),document.addEventListener("remove-active",(()=>t.closest(".modal-section").classList.remove("active"))),document.addEventListener("add-active",(()=>t.closest(".modal-section").classList.add("active")))}}customElements.define("modal-component",n)},579:()=>{class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.shadow.innerHTML='\n        <style>\n            *{\n                margin: 0;\n                padding: 0;\n                box-sizing: border-box;\n            }\n            button {\n                width: 100%;\n                height: 100%;\n                cursor: pointer;\n                border: none;\n                background-color:transparent;\n            }\n            button:hover svg {\n                transform: scale(110%);\n            }\n            svg {\n                width: 100%;\n                height: 100%;\n            }\n            .tab-section {\n                width:100%;\n            }\n            \n            .tab-list{\n                width:100%;\n            }\n\n            .tab-section ul li {\n                display: flex;\n                flex-direction: column;\n                gap: 1rem;\n            }\n\n            .tab-element {\n                display: flex;\n                flex-direction: column;\n                box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.75);\n\n            }\n\n            .tab-element .tab-options {\n                background-color: rgba(109,183,243,255);\n                display: flex;\n                justify-content: flex-end;\n                gap: 0.5rem;\n            }\n            \n            .tab-options div{\n                width: 2.5rem;\n                height: 2.5rem;\n                fill: white;\n            }\n            \n            .tab-element .tab-information {\n                display: flex;\n                flex-direction: column;\n                background-color: rgba(113,139,224,255);\n                padding: 15px;\n            }\n            \n            .tab-information div {\n                display: flex;\n                align-items: center;\n                gap: 0.5rem;\n            }\n            \n            .tab-information div p {\n                color: white;\n                font-size: 1.1rem;\n            }\n            \n            .tab-information div .label {\n                font-weight: 800;\n            }\n        </style>\n        \n    <section class="tab-section">\n        <div class="tab-list">  \n            <ul>\n                <li>\n                   <slot name="tab-element-1"></slot>\n                   <slot name="tab-element-2"></slot>\n                   <slot name="tab-element-3"></slot>\n                   <slot name="tab-element-4"></slot>\n                   <slot name="tab-element-5"></slot>\n                </li>\n            </ul>\n        </div>\n    </section>\n        '}}customElements.define("tab-component",n)},874:()=>{class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.shadow.innerHTML='\n        <style>\n            *{\n                margin: 0;\n                padding: 0;\n                box-sizing: border-box;\n            }\n            button {\n                width: 100%;\n                height: 100%;\n                cursor: pointer;\n                border: none;\n                background-color:transparent;\n            }\n            button:hover svg {\n                transform: scale(110%);\n            }\n            svg {\n                width: 100%;\n                height: 100%;\n            }\n            .tab-section {\n                width:100%;\n            }\n            \n            .tab-list{\n                width:100%;\n            }\n\n            .tab-section ul li {\n                display: flex;\n                flex-direction: column;\n                gap: 1rem;\n            }\n\n            .tab-element {\n                display: flex;\n                flex-direction: column;\n                box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.75);\n\n            }\n\n            .tab-element .tab-options {\n                background-color: rgba(109,183,243,255);\n                display: flex;\n                justify-content: flex-end;\n                gap: 0.5rem;\n            }\n            \n            .tab-options div{\n                width: 2.5rem;\n                height: 2.5rem;\n                fill: white;\n            }\n            \n            .tab-element .tab-information {\n                display: flex;\n                flex-direction: column;\n                background-color: rgba(113,139,224,255);\n                padding: 15px;\n            }\n            \n            .tab-information div {\n                display: flex;\n                align-items: center;\n                gap: 0.5rem;\n            }\n            \n            .tab-information div p {\n                color: white;\n                font-size: 1.1rem;\n            }\n            \n            .tab-information div .label {\n                font-weight: 800;\n            }\n        </style>\n    \n        <div class="tab-element">\n            <div class="tab-options">\n                <div class="edit">\n                    <button id="editButton">\n                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>\n                    </button>\n                </div>\n                <div class="delete">\n                    <button id="deleteButton">\n                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>\n                    </button>  \n                </div>\n            </div>\n            <div class="tab-information">\n                <div>\n                    <p class="label">Nombre:</p>\n                    <p class="value" id="nameValue"><slot name="nombre">Indefinido</slot></p>\n                </div>\n                <div>\n                    <p class="label">Email:</p>\n                    <p class="value" id="emailValue"><slot name="email">Indefinido</slot></p>\n                </div> \n            </div>\n        </div>\n                    \n        ';const n=this.shadow.querySelector("#deleteButton"),e=this.shadow.querySelector("#editButton"),t=new CustomEvent("add-active");n.addEventListener("click",(()=>document.dispatchEvent(t))),e.addEventListener("click",(()=>{const n=e.closest(".tab-element").querySelector(".tab-information").querySelector("#nameValue"),t=e.closest(".tab-element").querySelector(".tab-information").querySelector("#emailValue"),i=new Object;i.name=n,i.email=t,console.log(i)}))}}customElements.define("tab-element",n)}},e={};function t(i){var o=e[i];if(void 0!==o)return o.exports;var s=e[i]={exports:{}};return n[i](s,s.exports,t),s.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{"use strict";t(831),t(313),t(579),t(817),t(874),t(750),t(359),t(701)})()})();
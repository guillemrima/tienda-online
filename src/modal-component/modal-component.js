class Modal extends HTMLElement {

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
        img {
            width: 100%;
            height: 100%;
        }
        .modal-section {
            position: fixed;
            width: 100%;
            height: 100vh;
            bottom: 0;
            display: none;
            justify-content: center;
            align-items: center;
        }
        
        .modal-section::after {
            content: "";
            width: 100%;
            height: 100vh;
            position: absolute;
        }       
        .modal-section .modal { 
            background-color: rgb(93, 93, 93);
            width: 50%;
            height: 65vh;
            display: grid;
            grid-template-columns: 50% 50%;
            box-shadow: 10px 10px 58px -6px rgba(0,0,0,0.75);
            position: relative;
            overflow: hidden;
        }
        
        
        .close-button {
            position: absolute;
            width: 25px;
            height: 25px;
            right: 0;
            top: 0;
            margin: 10px;
            cursor: pointer;
            filter: invert(0.5) sepia(0) saturate(40) hue-rotate(10deg);
            z-index: 999;
        }
        
        .close-button:hover {
            filter: invert(0.5) sepia(1) saturate(40) hue-rotate(10deg);
        }
        
        
        .modal-section  .modal-part2{
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            align-items: center;
            padding: 5% 5%;
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }
        
        .modal-section  .modal-part2 .back-button button{
            border: 1px solid hsl(0, 0%, 80%);
            background-color: transparent;
            color: hsl(0, 0%, 80%);
            padding: 3px 30px;
            border-radius: 15px;
            font-size: 0.8rem;
            cursor: pointer;
            transition: 0.5s;
        }
        
        .modal-section  .modal-part2 .back-button button:hover{
            background-color: rgba(55,64,72,255);
            color: white;
        }
        
        .modal-section  .modal-part2 form {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        
        .modal-section  .modal-part2 form input {
            border: 1px solid rgba(232,238,242,255);
            background-color: rgba(248,251,253,255);
            padding: 15px 10px;
            font-size: 1rem;
            width: 100%;
        }
        
        .modal-section  .modal-part2 form input::placeholder {
            color: rgba(203,212,217,255); 
        }
        
        .modal-section  .modal-part2 form input.empty {
            border: 1px solid red;
        }
        
        .modal-section  .modal-part2 form .direccion {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }
        
        .modal-section  .modal-part2 form .nombre {
            display: flex;
            gap: 1.5rem;
        }
        
        .modal-section  .modal-part2 form .provincia {
            display: flex;
            gap: 1.5rem;
        }
        
        .modal-section  .modal-part2 form .email {
            position: relative;
        }
        
        
        .modal-section  .modal-part2 form .pais select{
            border: 1px solid rgba(232,238,242,255);
            background-color: rgba(248,251,253,255);
            padding: 10px 10px;
            font-size: 1rem;
            width: 100%;
        }
        
        .modal-section  .modal-part2 form button {
            background-color:  hsl(209, 100%, 50%);
            color: white;
            border: none;
            height: 15%;
            font-size: 1.5rem;
            font-weight: 600;
            border-radius: 5px;
            cursor: pointer;
            transition: 0.5s;
        }
        
        .modal-section  .modal-part2 form button:hover {
            background-color: hsl(204, 15%,26%);
        }
        
        .modal-section.active {
            @include fadeIn(0s,0.5s);
            display : flex;
            z-index: 999;
        
        }
        
        .details-modal.active {
            left: 0%;
        }
        
        .modal-part1.fadeOut {
            @include fadeOut(0s, 0.5s)
        }
        
        .modal-part2.fadeOut {
            @include fadeOut(0s, 0.5s)
        }
        
        .modal-part1.fadeIn {
            @include fadeIn(0s, 1s)
        }
        
        .modal-part2.fadeIn {
            @include fadeIn(0s, 1s)
        }
        
        .tab-modal {
            display: flex;
            flex-direction: column;
            position: relative;
        }
        
        .tab-modal .tabs {
            display: flex;
            justify-content: flex-start;
            position: absolute;
            top: -22px;
        }
        
        .tabs .tab {
            padding: 0.2rem 0.5rem;
            cursor: pointer;
            border:1px solid  transparent; 
            border-bottom: 1px solid white;   
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            border-bottom: none;
            z-index: 10000;
        }
        
        .tab.active {
           border:1px solid   hsl(209, 100%, 50%);
           border-bottom: 1px solid white;
           background-color: white;
        
        }
        
        .tab.active p {
            color: hsl(209, 100%, 50%);
        }
        .tab p {
            font-size: 0.8rem;
            color:hsl(0, 0%, 25%);
        
        }
        
        .tab-content {
            display: none;
            height: 15vh;
            border-radius: 5px;
            border-top-left-radius: 0px;
            padding: 5px 10px;
            color: hsl(0, 0%, 25%);
        }
        
        .tab-content p {
            font-size: 0.9rem;
            text-align: justify;
        
        }
        
        .tab-content.active {
            display: flex;
            border:1px solid   hsl(209, 100%, 50%);
        }
        
        .inputDiv {
            position: relative;
        
        }
        
        .wrong-input-hide {
            display: none;
        }
        
        .wrong-input {
            display: flex;
            position: absolute;
            color: red;
            font-size: 0.7rem;
            bottom: -15px;
        
        }
        </style>
        <section class="modal-section active" id="modal">
        <div class="modal">
            <slot name="image-component-modal"></slot>
            <slot name="details-component-modal"></slot>
            
            <div class="close-button button-close-modal" id="closeButton">
                <img src="./assets/icon/close.svg" />
            </div>            
        </div>
    </section>
        `;
        
    }
}

customElements.define('modal-component', Modal);
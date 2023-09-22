import { User } from "../indexExport";
import { userData } from "../data/userData";
import style from "./headerWelcome.css"

class HeaderWelcome extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <div class="container">
            <p>welcome</p>
            <user name="${userData[0].name}"></user>
            </div>

            <style>
            ${style}
            </style>
            `
            console.log("welcome")
        }}
    }

customElements.define("header-welcome", HeaderWelcome);
export default HeaderWelcome;

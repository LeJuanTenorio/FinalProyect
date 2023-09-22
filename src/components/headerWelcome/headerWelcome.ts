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
            
                
                
            <div class="containerMessage">
               <user-info img="${userData[0].img}"></user-info><user-info name="${userData[0].name}" img=""></user-info>  
            </div>

            <h1>What's up!</h1>

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

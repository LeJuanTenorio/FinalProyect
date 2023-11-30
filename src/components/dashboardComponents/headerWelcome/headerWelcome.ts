import style from "./headerWelcome.css"
import firebase from "../../../utils/firebase";
import { appState } from "../../../store";

const userData = {
    pic: {},  
    name: "",
  };

class HeaderWelcome extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        const fetchDataAndRender = async () => {
            await this.setUserPic();
            await this.getUserName();
            this.render();
          };
          fetchDataAndRender();
        this.render();
    }

    async getUserName(){
        const username = await firebase.getUsernameById(appState.user)
        userData.name = username
        console.log("USERRR NAMEMMEEMEM", username)
        return username
      }

    async getUserPic(){
        try{
        const pic = await firebase.getUserPic(appState.user)
        console.log("ESTE SSSSSSSSSSSSS", pic)
        return pic
         } 
         catch{}
      }

      async setUserPic(){
        const pic = await this.getUserPic()
        if(pic){
          userData.pic = pic
        }
        console.log("PICCC", pic)
      }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <header class="header">
            <user-info img="${userData.pic}"></user-info>
            
            <div class="containerMessage">
                <user-info name="${userData.name}" img=""></user-info> 
                <h1>What's up!</h1>   
            </div>

            

            </header>

            <style>
            ${style}
            </style>
            `
            console.log("welcome")
        }}
    }

customElements.define("header-welcome", HeaderWelcome);
export default HeaderWelcome;

import style from "./Header.css"
import firebase, { user } from "../../utils/firebase";
import { appState } from "../../store";
import { picAttributes } from "../profilePic/profilePic";

const userData = {
    pic: {},  
    name: "",
  };

class Header extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        const fetchDataAndRender = async () => {
            await this.setUserPic();
            await this.getUserName();
            this.render();
            this.createPic()
          };
          fetchDataAndRender();
        this.render();
    }

    async createPic(){
      try{

      const container = this.shadowRoot?.querySelector('.pic');
      const comment = document.createElement('profile-pic');
      comment.setAttribute(picAttributes.src, userData.pic as string);
      container?.appendChild(comment);
      console.log("APENDING"+userData.pic)}
      
      catch{}
    }

    async getUserName(){
        const username = await firebase.getUsernameById(appState.user)
        userData.name = username

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
            <div class="pic"></div>
            
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

customElements.define("header-1", Header);
export default Header;

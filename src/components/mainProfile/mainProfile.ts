import { SidebarRight, Feed } from "..";
import styles from "./mainProfile.css"

class Profile extends HTMLElement{

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
                <style>
                ${styles}
                <style>
            `

        }}
    }

customElements.define("profile-page", Profile);
export default Profile;


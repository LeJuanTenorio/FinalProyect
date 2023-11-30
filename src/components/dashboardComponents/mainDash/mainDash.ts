import { SidebarRight, Feed } from "../..";
import styles from "./mainDash.css"

class DashMain extends HTMLElement{

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
            <section class="mainDash">
            <main-feed></main-feed>
            <sidebar-right></sidebar-right>
            </section>
            
                <style>
                ${styles}
                <style>
            `
            console.log("mainDash")
        }}
    }

customElements.define("main-dash", DashMain);
export default DashMain;


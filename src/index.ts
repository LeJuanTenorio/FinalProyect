import { userData } from "./components/data/userData";
import { SidebarRight, Sidebar, DashMain} from "./components/indexExport";
import "./components/indexExport"
import styles from "./styles.css"


class AppContainer extends HTMLElement{

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
            </style>
    
            <section class="appContainer">
            <my-sidebar></my-sidebar>
            <sidebar-right class="right-center"></sidebar-right>
            <section>
            

            `
            console.log('holi')

        }}
    }

customElements.define("app-container", AppContainer);


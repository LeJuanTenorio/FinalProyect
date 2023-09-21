import { userData } from "./components/data/userData";
import { Sidebar } from "./components/indexExport";
import { SidebarRight } from "./components/indexExport"

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
            <my-sidebar></my-sidebar>
            <sidebar-right></sidebar-right>
            `
            console.log('mamaguevo')

        }}
    }

customElements.define("app-container", AppContainer);


import { userData } from "./components/data/userData";
import { SidebarRight, Sidebar} from "./components/indexExport";
import "./components/indexExport"


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
            <review-container></review-container>
            `
            console.log('holi')

        }}
    }

customElements.define("app-container", AppContainer);


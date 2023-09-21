import { userData } from "./components/data/userData";
import { Sidebar } from "./components/indexExport";

class Dashboard extends HTMLElement{

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
            <p>Placeholder</p>
            `
            console.log('mamaguevo')

        }}
    }

customElements.define("dashboard-1", Dashboard);


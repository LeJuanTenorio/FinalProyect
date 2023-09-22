import { SidebarRight } from "../indexExport";

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
                <sidebar-right></sidebar-right>
            `

        }}
    }

customElements.define("main-dash", DashMain);
export default DashMain;


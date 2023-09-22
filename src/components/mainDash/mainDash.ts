import { SidebarRight, Feed } from "../indexExport";


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

                <main-feed></main-feed>
                <sidebar-right></sidebar-right>
            `
            console.log("mainDash")
        }}
    }

customElements.define("main-dash", DashMain);
export default DashMain;


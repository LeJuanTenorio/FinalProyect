import style from "./sidebarRight.css"

class SidebarRight extends HTMLElement{

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
            <section>
            </section>

            <style>
            ${style}
            </style>
            `
            console.log('SidebarRight')
        }}
    }

customElements.define("sidebar-right", SidebarRight);
export default SidebarRight;
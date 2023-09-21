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
            <p> jueputa </p>
            <section>
            `
            console.log('SidebarRight')
        }}
    }

customElements.define("sidebar-right", SidebarRight);
export default SidebarRight;
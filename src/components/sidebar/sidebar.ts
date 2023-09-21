class Sidebar extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

        render(){
            if(this.shadowRoot){
                this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="/src/components/sidebar/sidebar.css">
                <div class="sidebar">
                <ul>
                    <li><a href="#">home</a></li>
                    <li><a href="#">search</a></li>
                    <li><a href="#">notifications</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </div>
                `
                console.log("sidebarLeft")
            }
        }
    }

customElements.define("my-sidebar", Sidebar);
export default Sidebar;
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
<<<<<<< HEAD
            <sidebar-right class="right-center"></sidebar-right>
            <section>

=======
            <sidebar-right></sidebar-right>
            <review-container></review-container>
>>>>>>> 0c3ac89df1a2c9af25a5e84ee30c244ff6d25a67
            `
            console.log('holi')

        }}
    }

customElements.define("app-container", AppContainer);


import "../../components/index"
import styles from "./styles.css"

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
            <style>
            ${styles}
            </style>
    
            <section class="appContainer">
            <my-sidebar class="sidebar"></my-sidebar>
            <main-dash></main-dash>
            </section>
            `
        }}
    }

customElements.define("app-dashboard", Dashboard);


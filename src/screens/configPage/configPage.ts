import "../../components/index"
import styles from "./styles.css"

class config extends HTMLElement{

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
            <config-info class="config-info"></config-info>
            </section>
            `
        }}
    }

customElements.define("app-config", config);


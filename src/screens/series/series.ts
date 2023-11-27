import "../../components/index"
import styles from "./styles.css"


class Series extends HTMLElement{

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
            <series-info></series-info>
            </section>
            `
        }}
    }

customElements.define("app-series", Series);


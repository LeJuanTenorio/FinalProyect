import "../../components/index"
import styles from "./styles.css"
import { Series } from "../../types/dataManage";
import Firebase from "../../utils/firebase"

const seriesData: Series = {
    id:"",
    title: "",
    poster: "",
    synopsis: "",
    logo_title: "",
    background: "",
}

class Dashboard extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    } 

    getSeries(){
        Firebase.getSeries
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


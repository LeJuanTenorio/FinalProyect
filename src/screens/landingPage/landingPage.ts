import { dispatch } from "../../store/index"
import { navigate } from "../../store/actions"
import { Screens } from "../../types/navigation"
import styles from "./styles.css";

class Landing extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    handleLoginButton() {
        dispatch(navigate(Screens.LOGIN));
        console.log("prueba");
    }

    render() {
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <style>
            ${styles}
            </style>`
        }
    
        }
    }
        

customElements.define("app-landing", Landing);

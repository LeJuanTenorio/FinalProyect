import "./components"
import "./screens/profilePage/profilePage"
import "./screens/dashboard/dashboard"
import "./screens/login/login"
import "./screens/series/series"
import "./screens/signUp/signUp"
import { addObserver, appState } from "./store/index";
import { Screens } from "./types/navigation";
import styles from "./styles.css"


class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this);
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot) this.shadowRoot.innerHTML = ``
        switch (appState.screen) {
        case Screens.DASHBOARD:
            const dashboard = this.ownerDocument.createElement("app-dashboard");
            this.shadowRoot?.appendChild(dashboard);
            break;
    
        case Screens.LOGIN:
            const login = this.ownerDocument.createElement("app-login");
            this.shadowRoot?.appendChild(login);
            break;

        case Screens.SERIES:
            const series = this.ownerDocument.createElement("app-series");
            this.shadowRoot?.appendChild(series);
            break;
    
        case Screens.SIGNUP:
            const signUp = this.ownerDocument.createElement("ernesto-torres");
            this.shadowRoot?.appendChild(signUp);
            break;
        
        case Screens.SEARCH:
            const search = this.ownerDocument.createElement("app-search");
            this.shadowRoot?.appendChild(search);
            break;
        
        case Screens.LANDING:
            const LANDING = this.ownerDocument.createElement("app-landing");
            this.shadowRoot?.appendChild(LANDING);
            break;
    
        case Screens.PROFILE:
            const PROFILE = this.ownerDocument.createElement("app-profile");
            this.shadowRoot?.appendChild(PROFILE);
            break;

        default:
            break;
        }
    }
}

customElements.define('app-container', AppContainer)
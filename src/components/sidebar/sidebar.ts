import SidebarStyle from "./sidebar.css"
import { dispatch } from "../../store";
import { navigate, setUserCredentials } from "../../store/actions";
import { Screens } from "../../types/navigation";
import { signUserOut } from "../../utils/firebase";


class Sidebar extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    dashPageClick(){
        dispatch(navigate(Screens.DASHBOARD));
      }

    profilePageClick(){
        dispatch(navigate(Screens.PROFILE))
        console.log("profile")
      }
    
    signOutClick(){
        dispatch(signUserOut())
    }
    
        render(){
            if(this.shadowRoot){
                this.shadowRoot.innerHTML = `
                <style>
                ${SidebarStyle}
                </style>
                
            <div class="sidebar">
                <ul>
                <li><a class="home"><img src="https://cdn-icons-png.flaticon.com/128/1946/1946436.png"></a></li>
                <li><a class="signOut"><img src="https://cdn-icons-png.flaticon.com/128/149/149852.png?ga=GA1.1.432586728.1695342026&track=ais"></a></li>
                <li><a href="#"><img src="https://cdn-icons-png.flaticon.com/128/3602/3602123.png?ga=GA1.1.432586728.1695342026&track=ais"></a></li>
                <li><a class="profile"><img src="https://cdn-icons-png.flaticon.com/128/1077/1077114.png?ga=GA1.1.432586728.1695342026&track=ais"></a></li>
                </ul>
            </div>
                `

                const home = this.shadowRoot.querySelector(".home")
                home?.addEventListener("click", () => this.dashPageClick())


                const profile = this.shadowRoot.querySelector(".profile")
                profile?.addEventListener("click", () => this.profilePageClick())


                const signOut = this.shadowRoot.querySelector(".signOut")
                signOut?.addEventListener("click", () => this.signOutClick())


            }
        }
    }

customElements.define("my-sidebar", Sidebar);
export default Sidebar;
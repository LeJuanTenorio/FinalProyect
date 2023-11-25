import { dispatch } from "../../store/index"
import { navigate } from "../../store/actions"
import { Screens } from "../../types/navigation"
import styles from "./styles.css";
import firebase from "../../services/firebase";

const formPost = {
    name:"",
    email: "",
    phone: "",
    password: "",
};


class SignUp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    submitSignUp(event:any){
        event.preventDefault();
        console.log("stuff")
        firebase.createUser(formPost.email,formPost.password,formPost.name);
    }

    changeEmail(e: any){
        formPost.email = e.target.value;
        console.log(e.target.value)
    }

    changePassword(e:any){
        formPost.password = e.target.value;
        console.log(e.target.value)
    }

    changeUsername(e:any){
        formPost.name = e.target.value;
        console.log(e.target.value)
    }

    changePhone(e:any){
        formPost.phone = e.target.value;
    }

    render() {
        if(this.shadowRoot){
            const container = this.ownerDocument.createElement('div')

            const email = this.ownerDocument.createElement('input')
            email?.addEventListener("change", this.changeEmail);
            email.placeholder = "email"
            container.appendChild(email)

            const password = this.ownerDocument.createElement('input')
            password?.addEventListener("change", this.changePassword);
            password.placeholder = "password"
            container.appendChild(password)

            const name = this.ownerDocument.createElement('input')
            name?.addEventListener("change", this.changeUsername);
            name.placeholder = "name"
            container.appendChild(name)

            const loginBtn = this.ownerDocument.createElement('button');
            loginBtn?.addEventListener("click", this.submitSignUp);
            container.appendChild(loginBtn)

            this.shadowRoot.appendChild(container);
        }}
    }
        

customElements.define("ernesto-torres", SignUp);
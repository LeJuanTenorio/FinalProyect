import { dispatch } from "../../store/index"
import { navigate } from "../../store/actions"
import { Screens } from "../../types/navigation"
import styles from "./styles.css";
import firebase from "../../services/firebase";

const formPost = {
    username:"",
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
    }

    changeUsername(e:any){
        formPost.username = e.target.value;
    }

    changePhone(e:any){
        formPost.phone = e.target.value;
    }

    render() {
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <style>
            ${styles}
            </style>
    
            <body>
            <img class="background"src="https://www.themoviedb.org/t/p/original/wX3twEPd6RCkQly9JVEkw4a6Qbi.jpg">
    <section>
        <div class="logo">
                <img class="sphere"src="https://raw.githubusercontent.com/Manuelard03/GHIFLIX/main/3.%20REGISTRO/img/1-LOGO.png">
        </div>
        <div class="cuadro">
            <p class="titulo"">REGISTRATE</p> 

            <form id="formulario-registro">    
                <input class="form-control" class="username" type="text" id="nombre" required placeholder= "Username" />
                <input class="form-control" class="phone" type="tel" id="telefono" placeholder= "Telefono" />
                <input class="form-control" class="email" type="email" id="correo" required placeholder= "Correo" />
                <input class="form-control" class="password" type="password" id="contrasena" required placeholder="Contraseña" />
                <input class="form-control" class="register" type="submit" id="registrarse" value="Registrarme" />
            </form>

            <div id="lista"></div>
            
            <div class="terminos">
                <div id="boton-terminos">
                    <input type="checkbox" id="btn-switch" required />
                    <label for="btn-switch" class="lbl-switch"></label>
                </div>
            </div>
            
            <div class="inicia-sesion">
                <label class="label">¿Ya tienes una cuenta? <a href="/iniciar-sesion.html">Inicia Sesión</a></label>
            </div>
        </div>
    </section>

    
</body>`;
            const email = this.shadowRoot.querySelector(".email")
            email?.addEventListener("change", this.changeEmail);

            const password = this.shadowRoot.querySelector(".password")
            password?.addEventListener("change", this.changePassword);

            const loginBtn = this.shadowRoot.querySelector(".register");
            loginBtn?.addEventListener("click", this.submitSignUp);
        }}
    }
        

customElements.define("ernesto-torres", SignUp);
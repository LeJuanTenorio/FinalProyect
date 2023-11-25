import styles from "./styles.css";
import firebase from "../../services/firebase";

const formPost = {
    email: "",
    password: "",
};

class Login extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    submitLogin(){
        firebase.logIn(formPost.email,formPost.password);
    }

    changeEmail(e: any){
        formPost.email = e.target.value;
    }

    changePassword(e:any){
        formPost.password = e.target.value;
    }

    render() {
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <style>
            ${styles}
            </style>
    
            <body>
            <img class ="background" src="https://www.themoviedb.org/t/p/original/cCVyNQkFZxLAC5jKXgO7EsJlDNd.jpg">
    <section>

        <div class="formulario-inicio">
            <p class="titulo">INICIA SESIÓN</p> 
            <form id="formulario-login">
                <input class="form-control" class="email" type="email" id="correo"  placeholder="Correo electrónico" />
                <input class="form-control" class="password" type="password" id="contrasena"  placeholder= "Contraseña" />
                
                <form action="./perfiles-.html">
                <input type="submit" class="loginBtn" id="loginBtn" value="Iniciar Sesión">
                </form>
            </form>
        
            <div class="recuerdame">
                <div id="boton-check">
                    <input type="checkbox" id="btn-switch">
                    <label for="btn-switch" class="lbl-switch"></label>
                </div>
                <label class="label">Recuerdame</label>
                <a class="ayuda" href="#">¿Necesitas Ayuda?</a>
            </div>
           
            <div class="registrate">
                <label class="labelp">¿Primera vez en SPHERE?</label>
                <div class="boton-registro">
                    <button id="boton-registro" class="botonRegistro" href = "./registro.html" class="form-control">Registrate</button>
                </div>
            </div>
            
        </div>
    </section>
</body>`;
            const email = this.shadowRoot.querySelector(".email")
            email?.addEventListener("change", this.changeEmail);

            const password = this.shadowRoot.querySelector(".password")
            password?.addEventListener("change", this.changePassword);

            const loginBtn = this.shadowRoot.querySelector(".loginBtn");
            loginBtn?.addEventListener("click", this.submitLogin);
        }}
    }
        

customElements.define("app-login", Login);
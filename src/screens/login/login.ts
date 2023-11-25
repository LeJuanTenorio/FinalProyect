import { dispatch } from "../../store/index"
import { navigate } from "../../store/actions"
import { Screens } from "../../types/navigation"
import styles from "./styles.css";



class Login extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    handleLoginButton() {
        dispatch(navigate(Screens.DASHBOARD));
        console.log("prueba");
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
                <input class="form-control" type="email" id="correo"  placeholder="Correo electrónico" />
                <input class="form-control" type="password" id="contrasena"  placeholder= "Contraseña" />
                
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
                    <button id="boton-registro" href = "./registro.html" class="form-control">Registrate</button>
                </div>
            </div>
            
        </div>
    </section>
</body>`;
            const loginBtn = this.shadowRoot.querySelector("loginBtn");
            loginBtn?.addEventListener("click", this.handleLoginButton);
             
        }}
    }
        

customElements.define("app-login", Login);
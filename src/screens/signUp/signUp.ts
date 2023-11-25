import { dispatch } from "../../store/index"
import { navigate } from "../../store/actions"
import { Screens } from "../../types/navigation"
import styles from "./styles.css";



class SignUp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    handleLoginButton() {
        dispatch(navigate(Screens.DASHBOARD));
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
                <input class="form-control" type="text" id="nombre" required placeholder= "Nombre" />
                <input class="form-control" type="text" id="apellido" required placeholder= "Apellido" />
                <input class="form-control" type="tel" id="telefono" placeholder= "Telefono" />
                <input class="form-control" type="email" id="correo" required placeholder= "Correo" />
                <input class="form-control" type="password" id="contrasena" required placeholder="Contraseña" />
                <input class="form-control" type="submit" id="registrarse" value="Registrarme" />
            </form>

            <div id="lista"></div>
            
            <div class="terminos">
                <div id="boton-terminos">
                    <input type="checkbox" id="btn-switch" required />
                    <label for="btn-switch" class="lbl-switch"></label>
                </div>
                <label>Acepto los terminos y politicas de privacidad</label>
            </div>
            
            <div class="inicia-sesion">
                <label class="label">¿Ya tienes una cuenta? <a href="/iniciar-sesion.html">Inicia Sesión</a></label>
            </div>
        </div>
    </section>
</body>`;
            
        }}
    }
        

customElements.define("ernesto-torres", SignUp);
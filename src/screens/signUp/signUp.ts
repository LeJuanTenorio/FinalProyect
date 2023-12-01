import styles from "./styles.css";
import { dispatch } from "../../store/index"
import { navigate } from "../../store/actions"
import { Screens } from "../../types/navigation"
import firebase from "../../utils/firebase";

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

    toLogIN(){
        dispatch(navigate(Screens.LOGIN));
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

        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
        <style>
        ${styles}
        </style>
      `
            
            const container = this.ownerDocument.createElement('div');
            container.classList.add('container');

            const styleTag = this.ownerDocument.createElement('style');
            styleTag.textContent = styles;
            container.appendChild(styleTag);
    
            const backgroundImg = this.ownerDocument.createElement('img');
            backgroundImg.classList.add('background');
            backgroundImg.src = 'https://www.themoviedb.org/t/p/original/wX3twEPd6RCkQly9JVEkw4a6Qbi.jpg';
            container.appendChild(backgroundImg);
    
            const section = this.ownerDocument.createElement('section');
    
            const logoDiv = this.ownerDocument.createElement('div');
            logoDiv.classList.add('logo');
    
            section.appendChild(logoDiv);
    
            const cuadroDiv = this.ownerDocument.createElement('div');
            cuadroDiv.classList.add('cuadro');
    
            const tituloP = this.ownerDocument.createElement('p');
            tituloP.classList.add('titulo');
            tituloP.textContent = 'REGISTRATE';
            cuadroDiv.appendChild(tituloP);
    
            const formularioRegistro = this.ownerDocument.createElement('form');
            formularioRegistro.id = 'formulario-registro';
    
            const usernameInput = this.ownerDocument.createElement('input');
            usernameInput.classList.add('form-control', 'username');
            usernameInput.type = 'text';
            usernameInput.id = 'nombre';
            usernameInput.required = true;
            usernameInput.placeholder = 'Username';
            usernameInput.addEventListener("change", this.changeUsername);
            formularioRegistro.appendChild(usernameInput);
    
            const phoneInput = this.ownerDocument.createElement('input');
            phoneInput.classList.add('form-control', 'phone');
            phoneInput.type = 'tel';
            phoneInput.id = 'telefono';
            phoneInput.placeholder = 'Telefono';
            formularioRegistro.appendChild(phoneInput);
    
            const emailInput = this.ownerDocument.createElement('input');
            emailInput.classList.add('form-control', 'email');
            emailInput.type = 'email';
            emailInput.id = 'correo';
            emailInput.required = true;
            emailInput.placeholder = 'Correo';
            emailInput.addEventListener("change", this.changeEmail);
            formularioRegistro.appendChild(emailInput);
    
            const passwordInput = this.ownerDocument.createElement('input');
            passwordInput.classList.add('form-control', 'password');
            passwordInput.type = 'password';
            passwordInput.id = 'contrasena';
            passwordInput.required = true;
            passwordInput.placeholder = 'Contraseña';
            passwordInput.addEventListener("change", this.changePassword);
            formularioRegistro.appendChild(passwordInput);
    
            const registerInput = this.ownerDocument.createElement('input');
            registerInput.classList.add('form-control', 'register');
            registerInput.type = 'submit';
            registerInput.id = 'registrarse';
            registerInput.value = 'Registrarme';
            registerInput.addEventListener("click", this.submitSignUp);
            formularioRegistro.appendChild(registerInput);
    
            cuadroDiv.appendChild(formularioRegistro);
    
            const listaDiv = this.ownerDocument.createElement('div');
            listaDiv.id = 'lista';
            cuadroDiv.appendChild(listaDiv);
    
            const terminosDiv = this.ownerDocument.createElement('div');
            terminosDiv.classList.add('terminos');
    
            const botonTerminosDiv = this.ownerDocument.createElement('div');
    
            const switchInput = this.ownerDocument.createElement('input');
            switchInput.type = 'checkbox';
            switchInput.id = 'btn-switch';
            switchInput.required = true;
            botonTerminosDiv.appendChild(switchInput);
    
            /*const labelSwitch = this.ownerDocument.createElement('label');
            labelSwitch.classList.add('lbl-switch');
            botonTerminosDiv.appendChild(labelSwitch);*/
    
            terminosDiv.appendChild(botonTerminosDiv);
    
            cuadroDiv.appendChild(terminosDiv);
    
            const inicioSesionDiv = this.ownerDocument.createElement('div');
            inicioSesionDiv.classList.add('inicia-sesion');
    
            const labelInicioSesion = this.ownerDocument.createElement('label');const iniciaSesion = this.ownerDocument.createElement('div')
            labelInicioSesion.classList.add('label');
            labelInicioSesion.innerHTML = '¿Ya tienes una cuenta?';
            inicioSesionDiv.appendChild(labelInicioSesion);

            const iniciarSessionBtn = this.ownerDocument.createElement('button');
            iniciarSessionBtn.id = 'boton-logIn';
            iniciarSessionBtn.classList.add('botonLogIn', 'form-control');
            iniciarSessionBtn.textContent = 'Inicia sesión';
            iniciarSessionBtn.addEventListener("click",()=>this.toLogIN())
            inicioSesionDiv.appendChild(iniciarSessionBtn);
            
            cuadroDiv.appendChild(inicioSesionDiv);
    
            section.appendChild(cuadroDiv);
            container.appendChild(section);
    
            this.shadowRoot.appendChild(container);
        }
    }
    
    }
        

customElements.define("ernesto-torres", SignUp);
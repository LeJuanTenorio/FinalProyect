import styles from "./styles.css";
import firebase from "../../utils/firebase";
import { addObserver, dispatch } from "../../store";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/navigation";

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
        addObserver(this);
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

    toRegister(){
        dispatch(navigate(Screens.SIGNUP));
    }

    render() {
        if (this.shadowRoot) {
            const container = this.ownerDocument.createElement('div');
            container.classList.add('container');

            const backgroundImg = this.ownerDocument.createElement('img');
            backgroundImg.classList.add('background');
            backgroundImg.src = 'https://www.themoviedb.org/t/p/original/cCVyNQkFZxLAC5jKXgO7EsJlDNd.jpg';
            container.appendChild(backgroundImg);
    
            const styleTag = this.ownerDocument.createElement('style');
            styleTag.textContent = styles;
            container.appendChild(styleTag);
    
            const section = this.ownerDocument.createElement('section');
    
            const formularioInicioDiv = this.ownerDocument.createElement('div');
            formularioInicioDiv.classList.add('formulario-inicio');
    
            const tituloP = this.ownerDocument.createElement('p');
            tituloP.classList.add('titulo');
            tituloP.textContent = 'INICIA SESIÓN';
            formularioInicioDiv.appendChild(tituloP);
    
            const formularioLogin = this.ownerDocument.createElement('form');
            formularioLogin.id = 'formulario-login';
    
            const emailInput = this.ownerDocument.createElement('input');
            emailInput.classList.add('form-control', 'email');
            emailInput.type = 'email';
            emailInput.id = 'correo';
            emailInput.placeholder = 'Correo electrónico';
            emailInput.addEventListener("change", this.changeEmail);
            formularioLogin.appendChild(emailInput);
            
    
            const passwordInput = this.ownerDocument.createElement('input');
            passwordInput.classList.add('form-control', 'password');
            passwordInput.type = 'password';
            passwordInput.id = 'contrasena';
            passwordInput.placeholder = 'Contraseña';
            passwordInput.addEventListener("change", this.changePassword);
            formularioLogin.appendChild(passwordInput);

    
            const formAction = this.ownerDocument.createElement('form');
    
            const loginBtnInput = this.ownerDocument.createElement('input');
            loginBtnInput.classList.add('loginBtn');
            loginBtnInput.id = 'loginBtn';
            loginBtnInput.value = 'Iniciar Sesión';
            loginBtnInput.addEventListener("click", this.submitLogin);
            formAction.appendChild(loginBtnInput);
    
            formularioLogin.appendChild(formAction);
    
            formularioInicioDiv.appendChild(formularioLogin);
    
            const recuerdameDiv = this.ownerDocument.createElement('div');
            recuerdameDiv.classList.add('recuerdame');
    
            const botonCheckDiv = this.ownerDocument.createElement('div');
    
            const switchInput = this.ownerDocument.createElement('input');
            switchInput.type = 'checkbox';
            switchInput.id = 'btn-switch';
            botonCheckDiv.appendChild(switchInput);
    
            const labelSwitch = this.ownerDocument.createElement('label');
            labelSwitch.classList.add('lbl-switch');
            botonCheckDiv.appendChild(labelSwitch);
    
            recuerdameDiv.appendChild(botonCheckDiv);
    
            const labelRecuerdame = this.ownerDocument.createElement('label');
            labelRecuerdame.classList.add('label');
            labelRecuerdame.textContent = 'Recuerdame';
            recuerdameDiv.appendChild(labelRecuerdame);
    
            const ayudaA = this.ownerDocument.createElement('a');
            ayudaA.classList.add('ayuda');
            ayudaA.href = '#';
            ayudaA.textContent = '¿Necesitas Ayuda?';
            recuerdameDiv.appendChild(ayudaA);
    
            formularioInicioDiv.appendChild(recuerdameDiv);
    
            const registrateDiv = this.ownerDocument.createElement('div');
            registrateDiv.classList.add('registrate');
    
            const labelpRegistrate = this.ownerDocument.createElement('label');
            labelpRegistrate.classList.add('labelp');
            labelpRegistrate.textContent = '¿Primera vez en SPHERE?';
            registrateDiv.appendChild(labelpRegistrate);
    
            const botonRegistroDiv = this.ownerDocument.createElement('div');
    
            const botonRegistroBtn = this.ownerDocument.createElement('button');
            botonRegistroBtn.id = 'boton-registro';
            botonRegistroBtn.classList.add('botonRegistro', 'form-control');
            botonRegistroBtn.textContent = 'Registrate';
            botonRegistroBtn.addEventListener("click",()=>this.toRegister())
            
    
            botonRegistroDiv.appendChild(botonRegistroBtn);
    
            registrateDiv.appendChild(botonRegistroDiv);
    
            formularioInicioDiv.appendChild(registrateDiv);
    
            section.appendChild(formularioInicioDiv);
            container.appendChild(section);
    
            this.shadowRoot.appendChild(container);

        }
    }
    }
        

customElements.define("app-login", Login);
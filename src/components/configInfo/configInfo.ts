import style from "./configInfo.css";
import "../../components/index"
import { Series, User } from "../../types/dataManage";
import Firebase from "../../utils/firebase"
import storage  from "../../utils/storage";
import { appState } from "../../store";
import { posterAttribute } from "../poster/poster";
import firebase from "../../utils/firebase";

const formPost = {
    name:"",
    email: "",
    Image: "",
    password: "",
};

class ConfigInfo extends HTMLElement {

  user?: "";

  constructor() {
    super();

    this.attachShadow({ mode: "open" });

  }

  connectedCallback() {
    this.render();
  }

  changePassword(e:any){
    formPost.password = e.target.value;
    console.log(e.target.value)
}

changeUsername(e:any){
    formPost.name = e.target.value;
    console.log(e.target.value)
}

changeImage(e:any){
    formPost.Image = e.target.value;
    console.log("IMAGE" + e.target.value)
    console.log()
}

upload(e:any){
    formPost.Image = e.target.value;
}

 async render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <style>
        ${style}
        </style>
      `
      
        const container = this.ownerDocument.createElement('section');
        container.classList.add('container');

        const upperInfoDiv = this.ownerDocument.createElement('div');
        upperInfoDiv.classList.add('upperInfo');

        const profilePicImg = this.ownerDocument.createElement('img');
        profilePicImg.classList.add('profilePic');
        upperInfoDiv.appendChild(profilePicImg);

        const nameH1 = this.ownerDocument.createElement('h1');
        nameH1.classList.add('name');
        upperInfoDiv.appendChild(nameH1);

        const changeUr = this.ownerDocument.createElement('h1');
        changeUr.classList.add('changeUr');
        changeUr.textContent = 'Cambia tu perfil';
       
        upperInfoDiv.appendChild(changeUr);

        container.appendChild(upperInfoDiv);

        const formElement = this.ownerDocument.createElement('form');
        formElement.classList.add('form');

        const usernameInput = this.ownerDocument.createElement('input');
        usernameInput.classList.add('name');
        usernameInput.type = 'text';
        usernameInput.placeholder = 'cambia tu username';
        usernameInput.addEventListener("change", this.changeUsername);
        formElement.appendChild(usernameInput);

        const ImageInput = this.ownerDocument.createElement('input');
        ImageInput.classList.add('test');
        ImageInput.type = 'file';
        ImageInput.placeholder = 'filehere';
        ImageInput.addEventListener("change", () => {
            const file = ImageInput.files?.[0];
            console.log("THIS IS FILE" + file) 
            if(file) firebase.uploadFile(file);
        })
        formElement.appendChild(ImageInput);

        const passwordInput = this.ownerDocument.createElement('input');
        passwordInput.classList.add('password');
        passwordInput.type = 'password';
        passwordInput.placeholder = 'cambia tu constraseña';
        passwordInput.addEventListener("change", (this.changePassword));
        formElement.appendChild(passwordInput);

        const buttonInput = this.ownerDocument.createElement('input');
        buttonInput.classList.add('button');
        buttonInput.type = 'button';
        buttonInput.addEventListener("click",this.upload)
        formElement.appendChild(buttonInput);

        container.appendChild(formElement);

        this.shadowRoot.appendChild(container);

      ;
    }
  }
}

if (!customElements.get("config-info")) {
  customElements.define("config-info", ConfigInfo);
}

export default ConfigInfo;

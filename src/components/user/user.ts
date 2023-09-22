import style from "./user.css"

export enum Attribute {
    id = "id",
    name = "name",
    img = "img",
  }
  
  class User extends HTMLElement {
    name?: string;
    img?: string;
  
    static get observedAttributes() {
      return [Attribute.id, Attribute.name, Attribute.img];
    }
  
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.name = this.getAttribute(Attribute.name) || "";
      this.img = this.getAttribute(Attribute.img) || "";
  
      this.render();
    }
  
    render() {
      if (this.shadowRoot) {
        this.shadowRoot.innerHTML = `
          <h1>${this.name}</h1>
          <img src="${this.img}" onerror="this.style.display='none';">
          
          <style>
          ${style}
          </style>
        `;
      }
    }
  }
  
  customElements.define("user-info", User);
  export default User;
 
  
  
  
  
  
  
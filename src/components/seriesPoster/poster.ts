import style from "./poster.css"

export enum Attribute {
    poster = "poster"
  }
  
  class Poster extends HTMLElement {
    poster?: string;
  
    static get observedAttributes() {
      return [Attribute.poster];
    }
  
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.poster = this.getAttribute(Attribute.poster) || "";
  
      this.mount
    }
  
    mount(){
        this.render();
    
        const btn = this.shadowRoot?.querySelector('button');
        
        btn?.addEventListener("click",()=>{
            
        })
    }

    render() {
      if (this.shadowRoot) {
        this.shadowRoot.innerHTML = `
          <img class="img" src="${this.poster}" onerror="this.style.display='none';">
          <style>
          ${style}
          </style>
        `;
      }
    }
  }
  
  customElements.define("poster-img", Poster);
  export default Poster;
 
  
  
  
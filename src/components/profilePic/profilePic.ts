import style from "./profilePic.css"
import { dispatch } from "../../store";
import { navigate, setSeries, setSeriesID } from "../../store/actions";
import { Screens } from "../../types/navigation";
import { appState } from "../../store";
import firebase from "../../utils/firebase";

export enum picAttributes{
    "name" = "name",
    "pic" = "pic",
    "idd" = "idd"
}

class profilePic extends HTMLElement{

    name:string="";
    pic:any="";
    idd:string="";

    static get observedAttributes(){
        const attrs: Record <picAttributes,null> = {
            name: null,
            pic: null,
            idd: null,
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: picAttributes,
        _: unknown,
        newValue: string
        ) {
            switch (propName) {
                default:
                this[propName] = newValue;
                break;
            }
            
            this.render();
        }

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }
    
    connectedCallback(){
        this.render()
    }

    async render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <style>
            ${style}
            </style>
            `
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
            const profilePic = this.ownerDocument.createElement('img');
            profilePic.classList.add('profilePic')
            profilePic.src = `${this.pic}`

            this.shadowRoot?.appendChild(profilePic);
        }}
}

customElements.define("profile-pic", profilePic);
export default profilePic;

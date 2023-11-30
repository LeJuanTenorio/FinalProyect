import style from "./poster.css"
import { Review } from "../../types/dataManage";
import Firebase, { getReview } from "../../utils/firebase"
import { dispatch } from "../../store";
import { navigate, setSeries, setSeriesID } from "../../store/actions";
import { Screens } from "../../types/navigation";


export enum posterAttribute{

    "serie" = "serie",
    "poster" = "poster",
    "idd" = "idd"
}

class Poster extends HTMLElement{
    
    poster:string="";
    serie:string="";
    idd:string="";

    static get observedAttributes(){
        const attrs: Record <posterAttribute,null> = {
            poster: null,
            serie: null,
            idd: null,
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: posterAttribute,
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
 
   seriesPageClick(seriesName:string){
    dispatch(setSeriesID(this.idd))
     dispatch(setSeries(seriesName))
     dispatch(navigate(Screens.SERIES));
   }

    connectedCallback(){
        this.render();
    }

    async render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <style>
            ${style}
            </style>
            `

            const posterImage = this.ownerDocument.createElement('img');
            posterImage.classList.add('poster');
            posterImage.src = `${this.poster}`;
            posterImage.addEventListener("click", () => {
                this.seriesPageClick(this.serie);
            });

            this.shadowRoot?.appendChild(posterImage);
        }}
}

customElements.define("my-poster", Poster);
export default Poster;

import CommentStyle from "./comment.css"
import { Review } from "../../types/dataManage";
import Firebase, { getReview } from "../../utils/firebase"
import { dispatch } from "../../store";
import { navigate, setSeries, setSeriesID } from "../../store/actions";
import { Screens } from "../../types/navigation";


export enum CommentAttribute{
    "name" = "name",
    "comment" = "comment",
    "serie" = "serie",
    "poster" = "poster",
    "title" = "title",
    "idd" = "idd",
    "uid" = "uid"
}

class Comment extends HTMLElement{

    name:string="";
    comment:string="";
    serie:string="";
    poster:string="";
    idd:string="";
    uid:string="";

    static get observedAttributes(){
        const attrs: Record <CommentAttribute,null> = {
            name: null,
            comment: null,
            serie: null,
            poster: null,
            title: null,
            idd: null,
            uid: null,
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: CommentAttribute,
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

    addToLocalStorage(key:string, value:string) {
        if (localStorage.getItem(key)) {
       localStorage.removeItem(key);}
       localStorage.setItem(key, value);
   }
 
   seriesPageClick(seriesName:string){
    dispatch(setSeriesID(this.idd))
     dispatch(setSeries(seriesName))
     dispatch(navigate(Screens.SERIES));
     this.addToLocalStorage("SERIES", seriesName)
   }

    connectedCallback(){
        this.render();
    }

    async render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <style>
            ${CommentStyle}
            </style>
            `
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
            const commentsContainer = this.ownerDocument.createElement('div');
            commentsContainer.setAttribute('class','comments-container')

            const posterImage = this.ownerDocument.createElement('img');
            posterImage.classList.add('poster');
            posterImage.src = `${this.poster}`;
            posterImage.addEventListener("click", () => {
                this.seriesPageClick(this.serie);
            });
            commentsContainer.appendChild(posterImage);

            const commentParagraph = this.ownerDocument.createElement('p');
            commentParagraph.innerText = `${this.comment}`
            commentsContainer.appendChild(commentParagraph);

            this.shadowRoot?.appendChild(commentsContainer);
        }}
}

customElements.define("my-comment", Comment);
export default Comment;

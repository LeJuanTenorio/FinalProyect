import CommentStyle from "./comment.css"
import { dispatch } from "../../store";
import { navigate, setSeries, setSeriesID } from "../../store/actions";
import { Screens } from "../../types/navigation";
import firebase from "../../utils/firebase";
import { posterAttribute } from "../poster/poster";
import { CommentAttribute } from "../../types/dataManage";

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
        const fetchAndRender = async () => {
            await this.getPic()
            this.render();
        }
        fetchAndRender()
    }

    async getPic(){
        try{
            const picName = await firebase.getNameProfilePicture(`${this.uid}`)
            console.log("picName",picName)
            this.idd = picName
        }
        catch{
        }
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

            const picAndName = this.ownerDocument.createElement('div')
            picAndName.setAttribute('class','picAndName-container')
            
            const profilePic = this.ownerDocument.createElement('profile-pic')
            profilePic.setAttribute('class','profilePic')
            profilePic.setAttribute('src',`${this.idd}`)
            profilePic.setAttribute('idd',`${this.uid}`)
            picAndName.appendChild(profilePic);

            const name = this.ownerDocument.createElement('p')
            name.setAttribute('class','name')
            name.innerText = `${this.name}`
            picAndName.appendChild(name);

            commentsContainer.appendChild(picAndName)

            const commentAndSeries = this.ownerDocument.createElement('div')
            commentAndSeries.setAttribute('class', 'commentAndSeries')

            const seriesName = this.ownerDocument.createElement('h1')
            seriesName.setAttribute('class','seriesName')
            seriesName.innerText = `${this.serie}`
            commentAndSeries.appendChild(seriesName)

            const commentParagraph = this.ownerDocument.createElement('p');
            commentParagraph.innerText = `${this.comment}`
            commentAndSeries.appendChild(commentParagraph);

            commentsContainer.appendChild(commentAndSeries)

            const posterImage = this.ownerDocument.createElement('my-poster');
            posterImage.classList.add('poster');
            posterImage.setAttribute(posterAttribute.poster, `${this.poster}`)
            posterImage.addEventListener("click", () => {
                this.seriesPageClick(this.serie);
            });
            commentsContainer.appendChild(posterImage)
            
 
            this.shadowRoot?.appendChild(commentsContainer);
        }}
}

customElements.define("my-comment", Comment);
export default Comment;

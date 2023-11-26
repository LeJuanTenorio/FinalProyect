import CommentFeedStyle from "./commentFeed.css"
import Firebase, { getReview, } from "../../services/firebase"
import { Review } from "../../types/dataManage";
import Comment, {CommentAttribute} from "../comment/comment";
import { addObserver } from "../../store";

class CommentFeed extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    async getFirestoreReviews(){
        const firestoreReviews = await Firebase.getReviews(); 
        return firestoreReviews;
    }
    
    async connectedCallback() {  
        const firestoreReviews = await this.getFirestoreReviews();
        this.render(firestoreReviews);
        console.log(firestoreReviews);
    }

   async render(firestoreReviews:any){
        if(this.shadowRoot && this.shadowRoot.innerHTML === ''){
            this.shadowRoot.innerHTML = `
            <style>
            ${CommentFeedStyle}
            </style>
            `
        const container = this.ownerDocument.createElement('div');
        container.className = "container";
        this.shadowRoot?.appendChild(container);

        firestoreReviews.forEach((data:Review) => {
            const comment = this.ownerDocument.createElement('my-comment')
            comment.setAttribute(CommentAttribute.name,data.user)
            comment.setAttribute(CommentAttribute.comment,data.comment)
            comment.setAttribute(CommentAttribute.serie,data.serie)
            comment.setAttribute(CommentAttribute.poster,data.poster)
            container.appendChild(comment);
         })
        }}        
    }

customElements.define("comment-feed", CommentFeed);
export default CommentFeed;
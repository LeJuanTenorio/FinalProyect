import CommentStyle from "./comment.css"
import { Review } from "../../types/dataManage";
import Firebase, { getReview } from "../../services/firebase"
import { dispatch } from "../../store";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/navigation";

class Comment extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode:"open"});
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

            const firestoreReviews= await Firebase.getReviews();

            firestoreReviews.forEach((review:Review)=>{
            console.log(firestoreReviews);
            const commentsContainer = this.ownerDocument.createElement('div');
            commentsContainer.setAttribute('class','comments-container')
            this.shadowRoot?.appendChild(commentsContainer);

            const posterImage = this.ownerDocument.createElement('img');
            posterImage.classList.add('poster');
            posterImage.src = '';
            commentsContainer.appendChild(posterImage);

            const commentParagraph = this.ownerDocument.createElement('p');
            commentParagraph.innerText = review.comment;
            commentsContainer.appendChild(commentParagraph);

            const horizontalLine = this.ownerDocument.createElement('hr');
            commentsContainer.appendChild(horizontalLine);

            const commentForm = this.ownerDocument.createElement('form');
            commentForm.id = 'comment-form';
            commentsContainer.appendChild(commentForm);

            const saveIcon = this.ownerDocument.createElement('img');
            saveIcon.src = 'https://cdn.iconscout.com/icon/free/png-256/free-save-3244517-2701888.png?f=webp';
            commentForm.appendChild(saveIcon);

            const heartIcon = this.ownerDocument.createElement('img');
            heartIcon.src = 'https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png';
            commentForm.appendChild(heartIcon);

            const commentTextArea = this.ownerDocument.createElement('textarea');
            commentTextArea.id = 'comment-text';
            commentTextArea.placeholder = "What do you think of the show?";
            commentForm.appendChild(commentTextArea);

            const submitButton = this.ownerDocument.createElement('button');
            submitButton.type = 'submit';
            submitButton.innerText = 'Send';
            commentForm.appendChild(submitButton);
                        console.log("comment")})
            
                    }}
                }

customElements.define("my-comment", Comment);
export default Comment;

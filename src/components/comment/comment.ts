import CommentStyle from "./comment.css"
import { Review } from "../../types/dataManage";
import Firebase, { getReview } from "../../utils/firebase"
import { dispatch } from "../../store";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/navigation";

export enum CommentAttribute{
    "name" = "name",
    "comment" = "comment",
    "serie" = "serie",
    "poster" = "poster"
}

class Comment extends HTMLElement{

    name:string="";
    comment:string="";
    serie:string="";
    poster:string="";

    static get observedAttributes(){
        const attrs: Record <CommentAttribute,null> = {
            name: null,
            comment: null,
            serie: null,
            poster: null,
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
            commentsContainer.appendChild(posterImage);

            const commentParagraph = this.ownerDocument.createElement('p');
            commentParagraph.innerText = `${this.comment}`
            commentsContainer.appendChild(commentParagraph);

            const horizontalLine = this.ownerDocument.createElement('hr');
            commentsContainer.appendChild(horizontalLine);

            const commentForm = this.ownerDocument.createElement('form');
            commentForm.id = 'comment-form';
            
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

            commentsContainer.appendChild(commentForm);
            this.shadowRoot?.appendChild(commentsContainer);
        }}
}

customElements.define("my-comment", Comment);
export default Comment;

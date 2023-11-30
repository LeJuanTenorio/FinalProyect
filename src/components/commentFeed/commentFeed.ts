import CommentFeedStyle from "./commentFeed.css"
import Firebase, { getReview, } from "../../utils/firebase"
import { Review } from "../../types/dataManage";
import Comment, {CommentAttribute} from "../comment/comment";
import { addObserver } from "../../store";


class CommentFeed extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    async getFirestoreReviews() {
        Firebase.getReviewsLoop(this.renderReviews);
    }

    renderReviews = (docs: Review[]) => {
        const container = this.shadowRoot?.querySelector('.container');
        
        if (container) {
            container.innerHTML = ''}

        for (const data of docs) {

            const resolvedData = data;

            const comment = document.createElement('my-comment');
            comment.setAttribute(CommentAttribute.name, resolvedData.name);
            comment.setAttribute(CommentAttribute.comment, resolvedData.comment);
            comment.setAttribute(CommentAttribute.serie, resolvedData.title);
            comment.setAttribute(CommentAttribute.poster, resolvedData.poster);
            comment.setAttribute(CommentAttribute.idd, resolvedData.id);

            container?.appendChild(comment);
        }
    }

    async connectedCallback() {
        await this.render();
        await this.getFirestoreReviews();
    }

    async render() {
        if (this.shadowRoot && this.shadowRoot.innerHTML === '') {
            this.shadowRoot.innerHTML = `
            <style>
            ${CommentFeedStyle}
            </style>
            `;

            const container = this.ownerDocument.createElement('div');
            container.className = "container";
            this.shadowRoot?.appendChild(container);
        }
    }
}

customElements.define("comment-feed", CommentFeed);
export default CommentFeed;
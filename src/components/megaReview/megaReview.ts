import { ReviewContainer} from "../indexExport";
import styles from "./megaReview.css"

class MegaReview extends HTMLElement{

    reviews: ReviewContainer[] = [];

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }
    

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
                <review-container></review-container>
                <style>
                ${styles}
                <style>
            `
            console.log("megareview")
        }}
    }

customElements.define("mega-review", MegaReview);
export default MegaReview;


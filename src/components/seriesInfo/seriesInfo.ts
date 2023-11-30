import style from "./styles.css";
import firebase from "../../utils/firebase";
import { Series } from "../../types/dataManage";
import { appState, addObserver } from "../../store";

const review = {
  comment: "",
  title: 1
};

class SeriesInfo extends HTMLElement {

  id: string="";
  title:string="";
  poster:string="";
  synopsis:string="";
  logo_title:string="";
  background:string="";
  seasons:string="";
  credits:string="";

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async getSerieName(){
    const name = appState.series
    return name
  }

  async getSerieInfo(){
    const serieName = await this.getSerieName()
    firebase.getSerie(serieName);
    const seriesData = await firebase.getSerie(serieName);
    this.background = seriesData[0].background
    this.poster = seriesData[0].poster;
    this.logo_title = seriesData[0].logo_title;
  }

  submitReview(){
    firebase.addReview("1", "2")
  }

  changeComment(reviewContent: any){
    review.comment = reviewContent.target.value; 
    console.log(review.comment)
  }

  connectedCallback() {
    
    const fetchDataAndRender = async () => {
      await this.getSerieInfo();
      this.render();
    };
    console.log("EREREWRERWER", appState)
    fetchDataAndRender();
    addObserver(this);
  }

  addReview(){
    console.log("review")
  }
 
  async render() {
    if (this.shadowRoot) {
        const container = this.ownerDocument.createElement('section');
        container.classList.add('mainContainer');

        const styleTag = this.ownerDocument.createElement('style');
        styleTag.textContent = style;
        container.appendChild(styleTag);

        const backgroundImg = this.ownerDocument.createElement('img');
        backgroundImg.classList.add('background');
        backgroundImg.src = this.background
        container.appendChild(backgroundImg);

        const upperInfoDiv = this.ownerDocument.createElement('div');
        upperInfoDiv.classList.add('upperInfo');

        const titleImg = this.ownerDocument.createElement('img');
        titleImg.classList.add('title');
        titleImg.src = this.logo_title
        upperInfoDiv.appendChild(titleImg);

        const seasonsDiv = this.ownerDocument.createElement('p');
        seasonsDiv.classList.add('seasons');
        seasonsDiv.innerText = "Seasons" + this.seasons
        upperInfoDiv.appendChild(seasonsDiv);

        container.appendChild(upperInfoDiv);

        const midInfoDiv = this.ownerDocument.createElement('div');
        midInfoDiv.classList.add('midInfo');

        const posterImg = this.ownerDocument.createElement('img');
        posterImg.classList.add('poster');
        posterImg.src = this.poster;
        midInfoDiv.appendChild(posterImg);

        const descAndHeartDiv = this.ownerDocument.createElement('div');
        descAndHeartDiv.classList.add('descAndHeart');

        const descriptionDiv = this.ownerDocument.createElement('p');
        descriptionDiv.classList.add('description');
        descriptionDiv.innerText = this.synopsis;
        descAndHeartDiv.appendChild(descriptionDiv);

        const heartImg = this.ownerDocument.createElement('img');
        heartImg.classList.add('heart');
        descAndHeartDiv.appendChild(heartImg);

        midInfoDiv.appendChild(descAndHeartDiv);

        const creditsDiv = this.ownerDocument.createElement('p');
        creditsDiv.classList.add('credits');
        creditsDiv.innerText = this.credits
        midInfoDiv.appendChild(creditsDiv);

        const reviewContainer = this.ownerDocument.createElement('section')
        reviewContainer.classList.add('reviewContainer')
        const reviewForm = this.ownerDocument.createElement('form')
        reviewForm.classList.add('reviewForm')
        const reviewInput = this.ownerDocument.createElement('input')
        reviewInput.classList.add('reviewInput')
        reviewInput.placeholder = "¿Qué opinas de la serie?"
        reviewInput.addEventListener("change", this.changeComment);
        const submitReview = this.ownerDocument.createElement('button')
        submitReview.type = "button"
        submitReview?.addEventListener("click", (event) => {
          event.preventDefault();
          this.submitReview();
         });

        reviewForm.appendChild(reviewInput)
        reviewForm.appendChild(submitReview)
        reviewContainer.appendChild(reviewForm)
        midInfoDiv.appendChild(reviewContainer)

        container.appendChild(midInfoDiv);

        this.shadowRoot.appendChild(container);

    }
}
}

customElements.define("series-info", SeriesInfo)
export default SeriesInfo;
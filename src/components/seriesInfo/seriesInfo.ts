import style from "./styles.css";
import firebase from "../../utils/firebase";
import { Series } from "../../types/dataManage";
import { appState } from "../../store";



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
  }


  submitReview(){
  }


  connectedCallback() {
    const fetchDataAndRender = async () => {
      await this.getSerieInfo();
      this.render();
    };
    console.log("EREREWRERWER", appState)
    fetchDataAndRender();
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
        titleImg.src = this.title
        upperInfoDiv.appendChild(titleImg);

        const seasonsDiv = this.ownerDocument.createElement('p');
        seasonsDiv.classList.add('seasons');
        seasonsDiv.innerText = "Seasons" + this.seasons
        upperInfoDiv.appendChild(seasonsDiv);

        container.appendChild(upperInfoDiv);

        const lowerInfoDiv = this.ownerDocument.createElement('div');
        lowerInfoDiv.classList.add('lowerInfo');

        const posterImg = this.ownerDocument.createElement('img');
        posterImg.classList.add('poster');
        posterImg.src = this.poster;
        lowerInfoDiv.appendChild(posterImg);

        const descAndHeartDiv = this.ownerDocument.createElement('div');
        descAndHeartDiv.classList.add('descAndHeart');

        const descriptionDiv = this.ownerDocument.createElement('p');
        descriptionDiv.classList.add('description');
        descriptionDiv.innerText = this.synopsis;
        descAndHeartDiv.appendChild(descriptionDiv);

        const heartImg = this.ownerDocument.createElement('img');
        heartImg.classList.add('heart');
        descAndHeartDiv.appendChild(heartImg);

        lowerInfoDiv.appendChild(descAndHeartDiv);

        const creditsDiv = this.ownerDocument.createElement('p');
        creditsDiv.classList.add('credits');
        creditsDiv.innerText = this.credits
        lowerInfoDiv.appendChild(creditsDiv);

        container.appendChild(lowerInfoDiv);

        this.shadowRoot.appendChild(container);

    }
}
}


customElements.define("series-info", SeriesInfo)
export default SeriesInfo;

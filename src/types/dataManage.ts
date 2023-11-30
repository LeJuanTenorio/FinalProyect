export interface Series {
    id: string;
    title: string;
    poster: string;
    synopsis: string;
    logo_title: string;
    background: string;
  }

export interface Review {
    id: string;
    name: string;
    comment: string;
    serie: string;
    poster: string;
    title: string;
}

export interface User {
    id: string;
    name: string;
    pic: string;
    favorites: Array<string>;
}


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
    user: string;
    comment: string;
    serie: string;
    poster: string;
}

export interface User {
    id: string;
    name: string;
    pic: string;
    favorites: Array<string>;
}
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
    userID: string;
}

export interface User {
    id: string;
    name: string;
    pic: string;
    favorites: Array<string>;
    email:string;
    password:string;
}

export enum CommentAttribute{
    "name" = "name",
    "comment" = "comment",
    "serie" = "serie",
    "poster" = "poster",
    "title" = "title",
    "idd" = "idd",
    "uid" = "uid"
}
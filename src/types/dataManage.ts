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
}
import { Screens } from "../types/navigation";

export const navigate = (screen: Screens) => {
  return {
    type: "NAVIGATE",
    payload: screen,
  };
};

export const setUserCredentials = (user: string) => {
  return {
    type: "SETUSER",
    payload: user
  }
}

export const setSeries = (series:string) => {
  return{
    type: "SETSERIES",
    payload: series,
  }
}

export const setSeriesID = (serieID:string) => {
  return{
    type: "SETSERIESID",
    payload: serieID,
  }}

  export const setViewProfile = (viewingProfile:any) => {
    return{
      type: "SETVIEWPROFILE",
      payload: viewingProfile,
    }
}
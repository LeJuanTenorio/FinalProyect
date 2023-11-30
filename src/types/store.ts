export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
    screen: string
    series: string
    seriesID: string
    viewingProfile: string
}

export enum ScreenActions {
    "NAVIGATE" = "NAVIGATE",
    "SETSERIES" = "SETSERIES",
    "SETSERIEID" = "SETSERIEID",
    "SETVIEWPROFILE" = "SETVIEWPROFILE"
}

export type Actions = ScreenActions;
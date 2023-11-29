export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
    screen: string
    series: string
}

export enum ScreenActions {
    "NAVIGATE" = "NAVIGATE",
    "SETSERIES" = "SETSERIES"
}

export type Actions = ScreenActions;
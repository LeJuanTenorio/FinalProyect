export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
    screen: string
    serie: string
}

export enum ScreenActions {
    "NAVIGATE" = "NAVIGATE",
}

export type Actions = ScreenActions;
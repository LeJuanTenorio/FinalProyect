export type Observer = { render: () => void } & HTMLElement;

export type SquadState = {
    [key: string]: any;
};


export enum SquadActions {
	'ADDCHARACTER' = 'ADDCHARACTER',
	'REMOVECHARACTER' = 'REMOVECHARACTER'
}

export interface AddCharacterRoster {
	action: SquadActions.ADDCHARACTER;
	payload: 'active';
}

export interface RemoveCharacterRoster {
	action: SquadActions.REMOVECHARACTER;
	payload: 'inactive';
}

export type Actions = AddCharacterRoster | RemoveCharacterRoster;



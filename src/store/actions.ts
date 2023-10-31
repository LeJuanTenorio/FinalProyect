import { SquadActions } from '../types/store';


export const addCharacter = (payload: any) => {
	return {
		action: SquadActions.ADDCHARACTER,
		payload: 'active',
	};
};

export const removeCharacter = (payload: any) => {
	return {
		action: SquadActions.REMOVECHARACTER,
		payload: 'inactive',
	};
};


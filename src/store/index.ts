import { SquadState, Observer } from '../types/store';
import { reducer } from './reducer';

export let squadState: { [key: string]: SquadState } = {
    Highwayman: {
        status: 'inactive',
        imageLarge: "https://static.wikia.nocookie.net/darkestdungeon_gamepedia/images/6/67/Hwyman.png/revision/latest/scale-to-width-down/300?cb=20140303215026",
        portrait: "https://static.wikia.nocookie.net/darkestdungeon_gamepedia/images/9/9e/Highwayman_portrait_roster.png/revision/latest?cb=20150717052023",
    },
    Crusader: {
        status: 'active',
        imageLarge: "https://static.wikia.nocookie.net/darkestdungeon_gamepedia/images/e/eb/Crusader.png/revision/latest/scale-to-width-down/300?cb=20140303215138",
        portrait: "https://static.wikia.nocookie.net/darkestdungeon_gamepedia/images/9/9e/Highwayman_portrait_roster.png/revision/latest?cb=20150717052023",
    },
    Hunter: {
        status: 'inactive',
        imageLarge: "https://static.wikia.nocookie.net/darkestdungeon_gamepedia/images/1/13/BountyHunter.png/revision/latest/scale-to-width-down/300?cb=20140303215328",
        portrait: "https://static.wikia.nocookie.net/darkestdungeon_gamepedia/images/1/13/BountyHunter.png/revision/latest?cb=20140303215328",
    },
};

console.log(squadState);
let observers: Observer[] = [];

export const dispatch = (action: any) => {
    const clone = JSON.parse(JSON.stringify(squadState));
    squadState = reducer(action, clone);
    observers.forEach((o) => o.render());
};

export const addObserver = (ref: Observer) => {
    observers = [...observers, ref];
};
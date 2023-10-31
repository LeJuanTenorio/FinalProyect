import { SquadState } from '../types/store';
import { Actions, SquadActions } from '../types/store';

export const reducer = (currentAction: Actions, currentState: SquadState): SquadState => {
  console.log(currentAction);
  const { action, payload } = currentAction;

  switch (action) {
		case SquadActions.ADDCHARACTER:
			return {
				...currentState,
				status: payload,
			};

      case SquadActions.REMOVECHARACTER:
        return {
          ...currentState,
          status:payload,
        };

		default:
			return currentState;
	}
};
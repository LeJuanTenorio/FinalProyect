import Storage, { PersistanceKeys } from "../utils/storage";
import { onAuthStateChanged } from "firebase/auth";
import { Actions, AppState, Observer } from "../types/store";
import { auth } from "../utils/firebase";
import { reducer } from "./reducer";
import { Screens } from "../types/navigation";
import { navigate, setUserCredentials } from "./actions";

onAuthStateChanged(auth, (user)=>{
  if(user){
    user.uid !== null ? dispatch(setUserCredentials(user.uid)) : '';
    dispatch(navigate(Screens.DASHBOARD));
    console.log("appstate is" + JSON.stringify(appState))
  }else {
    dispatch(navigate(Screens.LOGIN));
  }
})

const emptyState = {
  screen: Screens.LOGIN,
  user: {},
};

export let appState = emptyState;


let observers: Observer[] = [];

const persistStore = (state: AppState) =>
  Storage.set({ key: PersistanceKeys.STORE, value: state });

const notifyObservers = () => observers.forEach((o) => o.render());

export const dispatch = (action: any) => {
  const clone = JSON.parse(JSON.stringify(appState));
  const newState = reducer(action, clone);
  appState = newState;

  persistStore(newState);
  notifyObservers();
};

export const addObserver = (ref: Observer) => {
  observers = [...observers, ref];
};
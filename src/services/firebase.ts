import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { Series, User} from "../types/dataManage";


const firebaseConfig = {
  apiKey: "AIzaSyBM7MOyoSUmSkRCHOFqk5tVGCGtHjKHPqk",
  authDomain: "sphere-3b8a9.firebaseapp.com",
  projectId: "sphere-3b8a9",
  storageBucket: "sphere-3b8a9.appspot.com",
  messagingSenderId: "1063773883036",
  appId: "1:1063773883036:web:432e3837d153391335fb59"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getSeries = async () => {
  const querySnapshot = await getDocs(collection(db, "SeriesData"));
  const transformed: Array<Series> = [];

  querySnapshot.forEach((doc) => {
    const data: Omit<Series, "id"> = doc.data() as any;
    transformed.push({ id: doc.id, ...data });
  });

  return transformed;
};

export const getUser = async () => {
  const querySnapshot = await getDocs(collection(db, "UserData"));
  const transformed: Array<User> = [];

  querySnapshot.forEach((doc) => {
    const data: Omit<User, "id"> = doc.data() as any;
    transformed.push({ id: doc.id, ...data });
  });

  return transformed;
};

export default {
  getSeries
}
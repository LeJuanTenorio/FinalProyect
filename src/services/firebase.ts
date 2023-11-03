import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, QuerySnapshot } from "firebase/firestore";
import { Series, User, Review} from "../types/dataManage";
import { userData } from "../components/data/userData";


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

export const getReviews = async () => {
  const seriesDataSnapshot = await getDocs(collection(db, "SeriesData"));
  const allReviews: Array<Review> = [];

  for (const doc of seriesDataSnapshot.docs) {
    const querySnapshot = await getDocs(collection(doc.ref, 'reviews'));
    querySnapshot.forEach((review) => {
      const data: Omit<Review, "id"> = review.data() as any;
      allReviews.push({ id: review.id, ...data});
    });
  }

  return allReviews;
};

export const getReview = async () => {
  const seriesDataSnapshot = await getDocs(collection(db, "SeriesData"));
  const allReviews: Array<Review> = [];

  for (const doc of seriesDataSnapshot.docs) {
    const querySnapshot = await getDocs(collection(doc.ref, 'reviews'));
    const seriesName = doc.data().title; 
    console.log(seriesName);

    querySnapshot.forEach((review) => {
      const data: Omit<Review, "id"> = review.data() as any;
      allReviews.push({ id: review.id, ...data});
    });
  }

  return allReviews;
};

export default {
  getSeries,
  getUser, 
  getReviews,
  getReview,
}
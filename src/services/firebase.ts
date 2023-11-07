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

export const getSerie = async (serie:any) => {
  const querySnapshot = await getDocs(collection(db, "SeriesData"));
  const transformed: Array<Series> = [];

  for (const doc of querySnapshot.docs) {
    const titlesList = doc.data().title; 

    if(serie === titlesList){
      const serieData = doc.data() as Omit<Series,"id">
      transformed.push({id: doc.id, ...serieData})
    };
  }
  return transformed;
};

export const getUsers = async () => {
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

export const getReview = async (specifiedTitle: string) => {
  const seriesDataSnapshot = await getDocs(collection(db, "SeriesData"));
  const allReviews: Array<Review> = [];

  for (const doc of seriesDataSnapshot.docs) {
    const seriesName = doc.data().title; 

    if(specifiedTitle === seriesName){
    const querySnapshot = await getDocs(collection(doc.ref, 'reviews'));
    querySnapshot.forEach((review) => {
      const data: Omit<Review, "id"> = review.data() as any;
      allReviews.push({ id: review.id, ...data});
    })};
  }

  return allReviews;
};

const getUser = async (user: string) => {
  const querySnapshot = await getDocs(collection(db, "UserData"));
  const transformed: Array<User> = [];

  for (const doc of querySnapshot.docs) {
    const userName = doc.data().Name;

    if (user === userName) {
      const userData = doc.data() as Omit<User, "id">;
      transformed.push({ id: doc.id, ...userData });
    }
  }
  
  return transformed;
};



const addReview = async (serieTitle: any, post: Omit<Review, "id">) => {
  try {
    const seriesData = collection (db, "SeriesData", serieTitle);  
    const reviews = collection(seriesData, "reviews");

    await addDoc(reviews, post);
    console.log("Added to subcollection");
  } catch (error) {
    console.error(error);
  }
};

// const getFavoritesId = async (user:string) => {
//   try {
//     const userInfo = await getUser(user);
//     const favoritesIds = userInfo.favorites;
//     return favoritesIds;
//   } catch (error) {
//     console.error('Error fetching user info:', error);
//     return [];
//   }
// };

export default {
  getSeries,
  getSerie, 
  getUsers, 
  getUser,
  getReviews,
  getReview,
  addReview,
  //getFavoritesId,
}
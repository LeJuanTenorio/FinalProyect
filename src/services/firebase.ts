import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc, setDoc, addDoc, getDocs, QuerySnapshot,} from "firebase/firestore";
import { Series, User, Review} from "../types/dataManage";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";


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
export const auth = getAuth(app);

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
  const querySnapshot = await getDocs(collection(db, "user"));
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
    const seriesData = doc.data();
    const querySnapshot = await getDocs(collection(doc.ref, 'reviews'));

    querySnapshot.forEach((review) => {
      const data: Omit<Review, "id"> = review.data() as any;
      data.serie = seriesData.title;
      data.poster = seriesData.poster;
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

const createUser = async (email:string, password: string, name: string) => {
  createUserWithEmailAndPassword(auth,email,password).then(async (userCredential) => {
    const user = userCredential.user;
    console.log(user.uid);

    try {
      const where = doc(db, "users", user.uid);
      const data = {
        name: name,
      }
      await setDoc(where, data);
      console.log("Se añadió")
    } catch (error) {
      console.error(error);
    }
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

const logIn = (email: string, password: string) => {
  signInWithEmailAndPassword(auth,email, password).then((userCredential) => {
    const user = userCredential.user;
    console.log(user.uid);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("loginissue" + errorMessage);
  });
}


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

const getUserinfo = async (user: string) => {
  const querySnapshot = await getDocs(collection(db, "user"));
  const transformed: Array<User> = [];

  for (const doc of querySnapshot.docs) {
    const userName = doc.data().Name;

    if (user === userName) {
      const user = doc.data() as Omit<User, "id">;
      transformed.push({ id: doc.id, ...user });
    }
  }
  
  return transformed;
};

const getDocById = async (collection:string,id:string) => {
  try {
    const docRef = doc(db,collection,id)
    const gotDocById = await getDoc(docRef)
    return gotDocById
  } catch (error) {
  }
};

 const getFavorites = async (userID:string) => {
  try {
    const gettingDoc = await getDocById("users",userID)
    let favoritesArray = []
    favoritesArray = gettingDoc?.data()?.favorites
    
    return favoritesArray;
  } catch {}
};

export const signUserOut = async () => {
  try {
      await signOut(auth);
      console.log(`$signed out successfully.`);
  } catch (error) {
      console.error(`Error signing out:`, error);
  }
};




export default {
  getSeries,
  getSerie, 
  getUsers, 
  getUserinfo,
  getReviews,
  getReview,
  addReview,
  createUser,
  logIn,
  getFavorites,
  signUserOut,
}
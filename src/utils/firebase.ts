import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, orderBy, query, getDoc, setDoc, serverTimestamp, addDoc, getDocs, onSnapshot, updateDoc, arrayUnion} from "firebase/firestore";
import { Series, User, Review} from "../types/dataManage";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth";
import storage from "./storage";

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
export const user = auth.currentUser;


export const getSeries = async () => {
  const querySnapshot = await getDocs(collection(db, "SeriesData"));
  const gotArray: Array<Series> = [];

  querySnapshot.forEach((doc) => {
    const data: Omit<Series, "id"> = doc.data() as any;
    gotArray.push({ id: doc.id, ...data });
  });

  return gotArray;
};

export const getSerie = async (serie:any) => {
  const querySnapshot = await getDocs(collection(db, "SeriesData"));
  const gotArray: Array<Series> = [];

  for (const doc of querySnapshot.docs) {
    const titlesList = doc.data().title; 

    if(serie === titlesList){
      const serieData = doc.data() as Omit<Series,"id">
      gotArray.push({id: doc.id, ...serieData})
    };
  }
  return gotArray;
};

export const getUsers = async () => {
  const querySnapshot = await getDocs(collection(db, "user"));
  const gotArray: Array<User> = [];

  querySnapshot.forEach((doc) => {
    const data: Omit<User, "id"> = doc.data() as any;
    gotArray.push({ id: doc.id, ...data });
  });

  return gotArray;
};

const getReviewsLoop = (cb: (docs: Review[]) => void) => {
  const queryReviews = query(
    collection(db, "reviews"),
    orderBy("timestamp", "desc") // Replace "timestamp" with the field you want to order by
  );

  onSnapshot(queryReviews, (collection) => {
    const docs: Review[] = collection.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Review[];
    cb(docs);
  });
};

const getReviews = async(): Promise<Review[]> =>{
  const reviews: Review[] = [];
  const getReviews=query(collection(db,"reviews"), orderBy("createdAt"))
  const querySnapshot = await getDocs(getReviews);

  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    reviews.push({
      ...doc.data()
    }as Review)
  });
  return reviews
}

export const getReviewsDeprecated = async () => {
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
  const seriesDataSnapshot = await getDocs(collection(db, "reviews"));
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


const addReview = async (serieUID: any, 
  serieComment: any, 
  userName: any, 
  userPic:any,
  posterPic:any,
  userID:any) => {
  try {
    const whereSerie = doc(db, "SeriesData", serieUID);
    const whereAdd = collection(db,"reviews")
    
    const serie = await getDoc(whereSerie);
    const serieData = serie.data();
    const serieTitle = serieData?.title;
    const timestamp = serverTimestamp()

    const data = {
      title: serieTitle,
      comment: serieComment,
      name: userName,
      userPic: userPic,
      poster: posterPic,
      userID: userID,
      timestamp: timestamp
    }

    await addDoc(whereAdd,data)
    console.log("ADDED",data)
  } catch (error) {
    console.error(error);
  }
};

const getUserinfo = async (user: string) => {
  const querySnapshot = await getDocs(collection(db, "user"));
  const gotArray: Array<User> = [];

  for (const doc of querySnapshot.docs) {
    const userName = doc.data().Name;

    if (user === userName) {
      const user = doc.data() as Omit<User, "id">;
      gotArray.push({ id: doc.id, ...user });
    }
  }
  
  return gotArray;
};

const getDocById = async (collection:string,id:string) => {
  try {
    const docRef = doc(db,collection,id)
    const gotDocById = await getDoc(docRef)
    return gotDocById
  } catch (error) {
  }
};

 const getFavoritesId = async (userID:any) => {
  try {
    const gettingDoc = await getDocById("users",userID)
    let favoritesArray = []
    favoritesArray = gettingDoc?.data()?.favorites
    console.log("favoritos" + favoritesArray)
    return favoritesArray;
  } catch {}
};

const getUserUID = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid:string = user.uid;
      console.log("User UID:", uid);
      return uid
    } else {
      console.log("User is signed out");
    }
  });
};

const addFavorite = async (userID: any, seriesID: any) => {
  try {
    const userSnapshot = await getDocById("users", userID);

    if (userSnapshot) {
      const userRef = userSnapshot.ref; 
      updateDoc(userRef, {favorites: arrayUnion(seriesID)});
    }
  } catch (error) {
    console.error("Error adding favorite:", error);
  }
};

const favoriteSeriesID = async () => {
  try {
    const userFound = await storage.getUserFromStorage();
    const favoritesArray = await getFavoritesId(userFound); 
    console.log("favoritos", favoritesArray);
  } catch (error) {
    console.error("Error in series:", error);
  }
}

export const signUserOut = async () => {
  try {
      await signOut(auth);
      console.log(`$signed out successfully.`);
  } catch (error) {
      console.error(`Error signing out:`, error);
  }
};

const getUserPic = async (userID:any) => {
  try {
    const gettingDoc = await getDocById("users",userID)
    let pic = {}
    pic = gettingDoc?.data()?.pic
    console.log("Pic url" + pic)
    return pic;
  } catch {}
}

const getUsernameById = async (userID:any) => {
  try{
    const gettingDoc = await getDocById("users",userID)
    let favoritesArray = []
    favoritesArray = gettingDoc?.data()?.name
    console.log("name" + favoritesArray)
    return favoritesArray;
  }
  catch{

  }
}


export default {
  getSeries,
  getSerie, 
  getUsers, 
  getUserinfo,
  getReviews,
  getReviewsLoop,
  getReview,
  addReview,
  createUser,
  logIn,
  getFavoritesId,
  getDocById,
  signUserOut,
  getUserUID,
  addFavorite,
  getUserPic,
  getUsernameById
}
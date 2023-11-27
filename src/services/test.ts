import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc, setDoc, addDoc, getDocs, QuerySnapshot,} from "firebase/firestore";
import { Series, User, Review} from "../types/dataManage";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth";
import storage from "../utils/storage";
import { onSnapshot } from "firebase/firestore";

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

export const getReviews = (updateCallback:any) => {
  const seriesDataCollection = collection(db, 'SeriesData');

  const unsubscribeSeriesData = onSnapshot(seriesDataCollection, async (seriesDataSnapshot) => {
    const allReviews = [];

    for (const doc of seriesDataSnapshot.docs) {
      const seriesData = doc.data();
      const reviewsCollection = collection(doc.ref, 'reviews');

      const unsubscribeReviews = onSnapshot(reviewsCollection, (querySnapshot) => {
        allReviews.length = 0; // Clear the array before repopulating

        querySnapshot.forEach((review) => {
          const data = review.data();
          const modifiedReview = {
            id: review.id,
            serie: seriesData.title,
            poster: seriesData.poster,
            ...data,
          };
          allReviews.push(modifiedReview);
        });

        // Call the updateCallback with the updated reviews
        updateCallback([...allReviews]); // Send a copy to avoid reference issues
      });
    }
  });

  // To stop listening for updates, you can call the unsubscribe functions
  // unsubscribeSeriesData();
  // unsubscribeReviews();
};

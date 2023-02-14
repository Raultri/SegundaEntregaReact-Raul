// Import the functions you need from the SDKs you need
import { getFirestore, collection, getDocs, getDoc, doc, where, query } from "firebase/firestore"
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYSl-WIgMDpLzFVvIyfcfhtWEEogG3nKo",
  authDomain: "planetatriatlon-37ab1.firebaseapp.com",
  projectId: "planetatriatlon-37ab1",
  storageBucket: "planetatriatlon-37ab1.appspot.com",
  messagingSenderId: "450924513022",
  appId: "1:450924513022:web:062f9b4b46409d07c1c7af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)


export async function gItems() {
    const productsCollectionRef = collection(db, "productos")
    const snapshot = await getDocs(productsCollectionRef);
    const docsData = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id }
    })

    return docsData;
}


export async function gSingleItem(itemId) {
    const productsCollectionRef = collection(db, "productos");
    const productRef = doc(productsCollectionRef, itemId)
    const snapshot = await getDoc(productRef);

    return {
        ...snapshot.data(), id: snapshot.id
    }
}


export async function gItemsByCategory(categoria) {
    const productsCollectionRef = collection(db, "productos")
    const q = query(productsCollectionRef, where("categoria", "==", categoria));
    const snapshot = await getDocs(q);
    const docsData = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id }
    })

    return docsData;
}

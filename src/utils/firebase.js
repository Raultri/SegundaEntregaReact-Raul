// Import the functions you need from the SDKs you need
import { getFirestore, collection, getDocs, getDoc, doc, where, query } from "firebase/firestore"
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-Jdl2IirRoAJlUNfH96A76lH1zviSyZE",
    authDomain: "curso-react-92088.firebaseapp.com",
    projectId: "curso-react-92088",
    storageBucket: "curso-react-92088.appspot.com",
    messagingSenderId: "990920217511",
    appId: "1:990920217511:web:1ffe686de7384e6e0edc82"
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

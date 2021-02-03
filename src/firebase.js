import firebase from 'firebase/app'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyAWNFXFpG-r_7NgK8gzTIrcQ4GBBidBUhU",
    authDomain: "clone-303204.firebaseapp.com",
    projectId: "youtube-clone-303204",
    storageBucket: "youtube-clone-303204.appspot.com",
    messagingSenderId: "47413220106",
    appId: "1:47413220106:web:616852712d47ee9cb3a0f3"
};

firebase.initializeApp(firebaseConfig)

export default firebase.auth()
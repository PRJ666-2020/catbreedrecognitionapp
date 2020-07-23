import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

// firebase init - add your own config here
const firebaseConfig = {
    apiKey: "AIzaSyDimKBYnyfISyd-9fOhGK4quJT8MH_uhyQ",
    authDomain: "catbreedrecognition.firebaseapp.com",
    databaseURL: "https://catbreedrecognition.firebaseio.com",
    projectId: "catbreedrecognition",
    storageBucket: "catbreedrecognition.appspot.com",
    messagingSenderId: "244116575467",
    appId: "1:244116575467:web:398fff177ab131e77e9aae",
    measurementId: "G-D28Q6WC0PT"
}
firebase.initializeApp(firebaseConfig)

// utils
const store = firebase.storage()
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs
export {
    store,
    db,
    auth,
    usersCollection,
    postsCollection,
    commentsCollection,
    likesCollection
}
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

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
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')

// export utils/refs
export {
    db,
    auth,
    usersCollection
}
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyC_dZaxO2UgtlH6rzJQbKwCcV5EPvjFA8Q',
	authDomain: 'oddamwdobrerece-9360d.firebaseapp.com',
	projectId: 'oddamwdobrerece-9360d',
	storageBucket: 'oddamwdobrerece-9360d.appspot.com',
	messagingSenderId: '73964761548',
	appId: '1:73964761548:web:d383983765d3c316ce2d69',
	measurementId: 'G-80FEG8HS0D',
}

// Inicjalizacja aplikacji Firebase
const app = initializeApp(firebaseConfig);

// Uzyskanie instancji obiektu auth
const auth = getAuth(app);

// Uzyskanie instancji obiektu firestore
const db = getFirestore(app);

export { auth, db };

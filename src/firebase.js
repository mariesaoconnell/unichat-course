import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
	apiKey: 'AIzaSyBfHWVqmuh6qf3T0ADdgaNdUdTMk0dSRF8',
	authDomain: 'chat-project-76bef.firebaseapp.com',
	projectId: 'chat-project-76bef',
	storageBucket: 'chat-project-76bef.appspot.com',
	messagingSenderId: '762216215083',
	appId: '1:762216215083:web:e99b323416098b3bfd706e',
}).auth();

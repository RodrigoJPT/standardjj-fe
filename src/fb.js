import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export const app = firebase.initializeApp({
	apiKey: process.env.REACT_APP_FIREBASE_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
	databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
	auth.signInWithPopup(provider);
};

export const generateUserInfo = async (user, info) => {
	if (!user) return;
	const userRef = firestore.doc(`users/${user.uid}`);
	const snapshot = await userRef.get();
	if (!snapshot.exists) {
		console.log("snap doesn't exist");
	}
	return getUserDocument(user.uid);
};

const getUserDocument = async (uid) => {
	if (!uid) return null;
	try {
		const userDocument = await firestore.doc(`users/${uid}`).get();
		const data = userDocument.data();
		console.log({ uid, ...data });
		return {
			uid,
			...data,
		};
	} catch (error) {
		console.error('Error fetching user', error);
	}
};

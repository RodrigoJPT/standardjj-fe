import firebase from 'firebase';

export interface Series {
	id?: string;
	createdAt: firebase.firestore.Timestamp;
	description: string;
	name: string;
	thumbnail: string;
	videos?: Array<string>;
}
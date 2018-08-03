import * as firebase from 'firebase';
import { apiKey } from './firebase-api-key';

const config = {
	apiKey,
	authDomain: 'dnd-initiative.firebaseapp.com',
	projectId: 'dnd-initiative',
};

firebase.initializeApp(config);

export default firebase;

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

firestore.settings({
	timestampsInSnapshots: true
});

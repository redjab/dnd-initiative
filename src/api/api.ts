import { firestore } from '../firebase';

const getDocRef = (path: string) => firestore.doc(path);

const getCollectionRef = (path: string) => firestore.collection(path);

export function getDoc<T>(path: string): Promise<T> {
	return getDocRef(path).get().then((doc) => doc.data() as T);
}

export function upsertDoc<T extends object>(path: string, data: T, overwrite: boolean = true): Promise<void> {
	return getDocRef(path).set({
		...data as object,
	}, { merge: !overwrite });
}

export function addDoc<T extends object, P extends T>(collectionPath: string, data: T): Promise<P> {
	return getCollectionRef(collectionPath).add({
		...data as object,
	})
		.then((dataRef) => dataRef.id)
		.then((id) => ({ ...data as object, id } as P));
}
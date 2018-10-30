import { IdObject } from "../data";

export function getDoc<T extends IdObject>(path: firebase.firestore.DocumentReference): Promise<T> {
	return path.get().then((item) => ({ ...item.data(), id: item.id } as T));
}

export function getCollection<T extends IdObject>(path: firebase.firestore.CollectionReference): Promise<T[]> {
	return path.get().then((doc) => doc.docs.map((item) => {
		const data = item.data();
		return { ...data, id: item.id } as T;
	}));
}

export function upsertDoc<T extends IdObject>(path: firebase.firestore.DocumentReference, data: T, overwrite: boolean = true): Promise<void> {
	return path.set({
		...data as object,
	}, { merge: !overwrite });
}

export function addDoc<T extends object, P extends T>(collectionPath: firebase.firestore.CollectionReference, data: T): Promise<P> {
	return collectionPath.add({
		...data as object,
	})
		.then((dataRef) => dataRef.id)
		.then((id) => ({ ...data as object, id } as P));
}
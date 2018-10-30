export function reorder<T extends { index: number }>(list: T[], startIndex: number, endIndex: number) {
	const [removed] = list.splice(startIndex, 1);
	list.splice(endIndex, 0, removed);
	return list.map((item, index) => ({ ...item as object, index } as T));
}
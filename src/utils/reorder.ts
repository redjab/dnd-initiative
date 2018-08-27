export function reorder<T>(list: T[], startIndex: number, endIndex: number) {
	const [removed] = list.splice(startIndex, 1);
	list.splice(endIndex, 0, removed);
	return list.slice();
}
export function debug<T>(data: T): T {
	console.log(data);
	return data;
}
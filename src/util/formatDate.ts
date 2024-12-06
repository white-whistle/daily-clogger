export function formatDate(date: Date) {

	const formattedDate = date.toISOString().split('T')[0];
	return formattedDate;

}
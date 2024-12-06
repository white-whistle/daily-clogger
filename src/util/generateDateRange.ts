export function generateDateRange(startDate: Date, endDate: Date): Date[] {
	// Normalize the dates to ensure no time parts
	const start = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
	const end = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());

	// Check if start is after end
	if (start > end) {
		throw new Error("Start date must be before or equal to end date.");
	}

	const dates: Date[] = [];
	let current = new Date(start);

	while (current <= end) {
		dates.push(new Date(current)); // Push a copy of the current date
		current.setDate(current.getDate() + 1); // Move to the next day
	}

	return dates;
}
export interface BookInterface {
	title: string;
	author: string;
	pages: number;
	dateCompleted: string;
	status: BookStatus;
}

export enum BookStatus {
	notStarted,
	reading,
	planned,
	read,
}

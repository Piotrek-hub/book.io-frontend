import { Grid } from '@mantine/core';
import { BookInterface, BookStatus } from '../../types/interfaces';
import Book from '../Book';

export default function Books() {
	return (
		<Grid
			columns={8}
			justify="flex-start"
			gutter="xl"
			sx={(theme) => ({
				padding: '10px',
				background: theme.colors.gray[0],
			})}
		>
			{books.map((book: BookInterface) => (
				<Grid.Col span={2}>
					<Book
						title={book.title}
						author={book.author}
						pages={book.pages}
						dateCompleted={book.dateCompleted}
						status={book.status}
					></Book>
				</Grid.Col>
			))}
		</Grid>
	);
}

const books = [
	{
		title: 'Atomic Habits',
		author: 'James Clear',
		pages: 200,
		dateCompleted: '',
		status: BookStatus.reading,
	},
	{
		title: 'Atomic Habits',
		author: 'James Clear',
		pages: 200,
		dateCompleted: '',
		status: BookStatus.reading,
	},
	{
		title: 'Atomic Habits',
		author: 'James Clear',
		pages: 200,
		dateCompleted: '',
		status: BookStatus.reading,
	},
	{
		title: 'Atomic Habits',
		author: 'James Clear',
		pages: 200,
		dateCompleted: '',
		status: BookStatus.reading,
	},
	{
		title: 'Atomic Habits',
		author: 'James Clear',
		pages: 200,
		dateCompleted: '',
		status: BookStatus.reading,
	},
	{
		title: 'Atomic Habits',
		author: 'James Clear',
		pages: 200,
		dateCompleted: '',
		status: BookStatus.reading,
	},
];

import { Grid, Divider, Title } from '@mantine/core';
import { BookInterface, BookStatus } from '../../types/interfaces';
import Book from '../Book';

export default function Books() {
	return (
		<Grid
			columns={7}
			justify="flex-start"
			gutter="xl"
			sx={() => ({
				padding: '10px',
			})}
		>
			<Grid.Col>
				<Divider my="xs" label="Finished Books" />
			</Grid.Col>
			{books.map((book: BookInterface) => {
				if (book.status === BookStatus.finished) {
					return (
						<Grid.Col span={2}>
							<Book
								title={book.title}
								author={book.author}
								pages={book.pages}
								dateCompleted={book.dateCompleted}
								status={book.status}
							></Book>
						</Grid.Col>
					);
				}
			})}

			<Grid.Col>
				<Divider my="md" label="In Progress Books" />
			</Grid.Col>
			{books.map((book: BookInterface) => {
				if (book.status === BookStatus.reading) {
					return (
						<Grid.Col span={2}>
							<Book
								title={book.title}
								author={book.author}
								pages={book.pages}
								dateCompleted={book.dateCompleted}
								status={book.status}
							></Book>
						</Grid.Col>
					);
				}
			})}
		</Grid>
	);
}

const books = [
	{
		title: 'Atomic Habits',
		author: 'James Clear',
		pages: 200,
		dateCompleted: '',
		status: BookStatus.finished,
	},
	{
		title: 'Rich Dad Poor Dad',
		author: 'Robert Kiosaki',
		pages: 300,
		dateCompleted: '',
		status: BookStatus.finished,
	},
	{
		title: 'Ego is your enemy',
		author: 'Ryan Holiday',
		pages: 200,
		dateCompleted: '',
		status: BookStatus.finished,
	},
	{
		title: 'Skandynawski Raj',
		author: 'Michal Booth',
		pages: 500,
		dateCompleted: '',
		status: BookStatus.reading,
	},
	{
		title: 'Art Of War',
		author: 'Sun Tzu',
		pages: 200,
		dateCompleted: '',
		status: BookStatus.reading,
	},
	{
		title: 'Rok 1984',
		author: 'George Orwell',
		pages: 200,
		dateCompleted: '',
		status: BookStatus.reading,
	},
];

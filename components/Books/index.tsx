import {Grid, Divider, Modal, Button} from '@mantine/core';
import { BookInterface, BookStatus } from '../../types/interfaces';
import Book from '../Book';
import {BiBookAdd} from "react-icons/bi"
import AddBookForm from "../AddBookForm";
import {useEffect, useState} from "react";
import {fetchBooks} from "../../utils/api";

export default function Books() {
	const [books, setBooks] = useState<Array<BookInterface>>([])

	const getBooks = async () => {
		const b = await fetchBooks();
		console.log(b)
		setBooks(b);
	}

	useEffect(() => {
		getBooks();
	}, [])


	return (
		<Grid
			columns={4}
			justify="flex-start"

			sx={() => ({
				padding: '10px',
				position: "relative"
			})}
		>

		<AddBookForm/>


			<Grid.Col >
				<Divider my="xs" label="Finished Books" />
			</Grid.Col>
			{books.map((book: BookInterface) => {
				//if (book.status === BookStatus.finished) {
					return (
						<Grid.Col span={1} key={book.title}>
							<Book
								title={book.title}
								author={book.author}
								pages={book.pages}
								dateCompleted={book.dateCompleted}
								status={book.status}
							></Book>
						</Grid.Col>
					);
				//}
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

const booksArr = [
	{
		title: 'Atomic Habits',
		author: 'James Clear',
		pages: 200,
		dateCompleted: '',
		status: BookStatus.finished,
	},
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

import {Grid, Divider, Modal, Button} from '@mantine/core';
import { BookInterface } from '../../types/interfaces';
import Book from '../Book';
import AddBookForm from "../AddBookForm";
import {useEffect, useState} from "react";
import {fetchBooks} from "../../utils/api";
import {useSelector} from "react-redux";


export default function Books() {
	const [books, setBooks] = useState<Array<BookInterface>>([])
	const user: any = useSelector<any>((state) => state.user)

	const getBooks = async () => {
		const b = await fetchBooks(user.username);
		console.log(b)
		setBooks(b);
	}

	useEffect(() => {
		getBooks()
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
				if (book.status === "finished") {
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
				}
			})}

			<Grid.Col>
				<Divider my="md" label="In Progress Books" />
			</Grid.Col>
			{books.map((book: BookInterface) => {
				if (book.status === "reading") {
					return (
						<Grid.Col span={1} key = {book.title}>
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


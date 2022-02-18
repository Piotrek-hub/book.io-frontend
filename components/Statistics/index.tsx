import { Accordion, List, ThemeIcon } from '@mantine/core';
import {
	BiBook,
	BiBookAlt,
	BiBookmarkAlt,
	BiBookOpen,
	BiStats,
	BiTimeFive,
} from 'react-icons/bi';

export default function Statistics() {
	return (
		<Accordion disableIconRotation>
			<Accordion.Item
				label="Statistics"
				icon={
					<ThemeIcon color="violet" variant="light">
						<BiStats />
					</ThemeIcon>
				}
			>
				<List spacing="xs" size="sm" center>
					<List.Item
						icon={
							<ThemeIcon color="blue" size={24} radius="xl">
								<BiTimeFive size={14} />
							</ThemeIcon>
						}
					>
						Time spent: 30h
					</List.Item>
					<List.Item
						icon={
							<ThemeIcon color="yellow" size={24} radius="xl">
								<BiBookOpen size={14} />
							</ThemeIcon>
						}
					>
						Pages read: 2k
					</List.Item>
					<List.Item
						icon={
							<ThemeIcon color="teal" size={24} radius="xl">
								<BiBookAlt size={14} />
							</ThemeIcon>
						}
					>
						Books read: 6
					</List.Item>
				</List>
			</Accordion.Item>

			<Accordion.Item
				label="Books"
				icon={
					<ThemeIcon color="red" variant="light">
						<BiBook />
					</ThemeIcon>
				}
			>
				<List>
					<List.Item>Atomic Habits - James Clear</List.Item>
					<List.Item>Rich Dad Poor Dad - Robert Kiyosaki</List.Item>
					<List.Item>The 4 hour work week - Tom Ferris</List.Item>
					<List.Item>Ego Is Your Enemy - Ryan Holiday</List.Item>
					<List.Item>Art Of War - Sun Tzu</List.Item>
				</List>
			</Accordion.Item>
			<Accordion.Item
				label="Wishlist"
				icon={
					<ThemeIcon color="orange" variant="light">
						<BiBookmarkAlt />
					</ThemeIcon>
				}
			>
				<List>
					<List.Item>Atomic Habits - James Clear</List.Item>
					<List.Item>Rich Dad Poor Dad - Robert Kiyosaki</List.Item>
					<List.Item>The 4 hour work week - Tom Ferris</List.Item>
					<List.Item>Ego Is Your Enemy - Ryan Holiday</List.Item>
					<List.Item>Art Of War - Sun Tzu</List.Item>
				</List>
			</Accordion.Item>
		</Accordion>
	);
}

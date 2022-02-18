import { Accordion, List, ThemeIcon } from "@mantine/core";
import { BiBook, BiBookAlt, BiBookmarkAlt, BiBookOpen, BiStats, BiTimeFive } from "react-icons/bi";

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
							<ThemeIcon color="blue" size={22} radius="xl">
								<BiTimeFive size={14} />
							</ThemeIcon>
						}
					>
						Time spent: 30h
					</List.Item>
					<List.Item
						icon={
							<ThemeIcon color="yellow" size={22} radius="xl">
								<BiBookOpen size={14} />
							</ThemeIcon>
						}
					>
						Pages read: 2k
					</List.Item>
					<List.Item
						icon={
							<ThemeIcon color="teal" size={22} radius="xl">
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
				Configure components appearance and behavior with vast amount of
				settings or overwrite any part of component styles
			</Accordion.Item>
			<Accordion.Item
				label="Wishlist"
				icon={
					<ThemeIcon color="orange" variant="light">
						<BiBookmarkAlt />
					</ThemeIcon>
				}
			>
				With new :focus-visible pseudo-class focus ring appears only
				when user navigates with keyboard
			</Accordion.Item>
		</Accordion>
	);
}

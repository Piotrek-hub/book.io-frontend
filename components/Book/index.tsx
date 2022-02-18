import { BookInterface, BookStatus } from '../../types/interfaces';
import {
	Card,
	Text,
	Badge,
	Button,
	Group,
	Box,
	Modal,
	useMantineTheme,
} from '@mantine/core';

import { BiCheck, BiTime } from 'react-icons/bi';
import { useState } from 'react';

export default function Book({
	title,
	author,
	pages,
	dateCompleted,
	status,
}: BookInterface) {
	const theme = useMantineTheme();
	const [opened, setOpened] = useState(false);
	return (
		<>
			<Modal
				opened={opened}
				onClose={() => setOpened(false)}
				title="Book edit panel here"
			></Modal>
			<div style={{ width: 340, margin: 'auto' }}>
				<Card shadow="sm">
					<Group position="apart" style={{ marginBottom: 5 }}>
						<Text weight={500}>{title}</Text>
						<Badge
							color={
								status == BookStatus.finished ? 'green' : 'pink'
							}
							variant="light"
						>
							{status == BookStatus.notStarted && 'Not Started'}
							{status == BookStatus.reading && (
								<Text
									size="xs"
									style={{
										fontSize: '10px',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'space-between',
									}}
								>
									<BiTime
										size={'14px'}
										style={{ margin: '0 5px' }}
									/>{' '}
									In Progress
								</Text>
							)}
							{status == BookStatus.finished && (
								<Text
									size="xs"
									style={{
										fontSize: '10px',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'space-between',
									}}
								>
									<BiCheck
										size={'14px'}
										style={{ marginRight: '5px' }}
									/>{' '}
									Finished
								</Text>
							)}
						</Badge>
					</Group>

					<Text size="sm" style={{ color: 'grey', lineHeight: 1.5 }}>
						{author}
					</Text>
					<Badge
						color="blue"
						variant="light"
						style={{ marginBottom: 5, marginTop: theme.spacing.xs }}
					>
						{pages} pages
					</Badge>
					<Button
						variant="light"
						color="blue"
						fullWidth
						style={{ marginTop: 14 }}
						onClick={() => setOpened(true)}
					>
						Edit This Book
					</Button>
				</Card>
			</div>
		</>
	);
}

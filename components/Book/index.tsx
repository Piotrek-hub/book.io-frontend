import { BookInterface, BookStatus } from '../../types/interfaces';
import {
	Card,
	Text,
	Badge,
	Button,
	Group,
	Box,
	Popper,
	useMantineTheme,
} from '@mantine/core';

import { BiCheck } from 'react-icons/bi';
import { useState } from 'react';

export default function Book({
	title,
	author,
	pages,
	dateCompleted,
	status,
}: BookInterface) {
	const theme = useMantineTheme();
	const [referenceElement, setReferenceElement] = useState(null);
	return (
		<div style={{ width: 340, margin: 'auto' }}>
			<Card shadow="sm" padding="lg">
				<Card.Section>
					<Box
						sx={(theme) => ({
							backgroundColor: theme.colors.blue,
							width: '100%',
							height: '120px',
						})}
					/>
				</Card.Section>

				<Group
					position="apart"
					style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
				>
					<Text weight={500}>{title}</Text>
					<Badge
						color={status == BookStatus.read ? 'green' : 'pink'}
						variant="light"
					>
						{status == BookStatus.notStarted && 'Not Started'}
						{status == BookStatus.planned && 'Planned'}
						{status == BookStatus.reading && 'Reading'}
						{status == BookStatus.read && (
							<Text
								size="xs"
								style={{
									fontSize: '10px',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'space-between',
								}}
							>
								<BiCheck size={'14px'} /> Read
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
				>
					Edit This Book
				</Button>
			</Card>
		</div>
	);
}

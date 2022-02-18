import {
	Avatar,
	Center,
	Text,
	Space,
	Grid,
	Accordion,
	Group,
	ThemeIcon,
	Blockquote,
	List,
} from '@mantine/core';

import { Calendar } from '@mantine/dates';
import { useState } from 'react';

import {
	BiStats,
	BiBook,
	BiBookmarkAlt,
	BiTimeFive,
	BiBookOpen,
	BiBookAlt,
} from 'react-icons/bi';
import Quote from '../Quote';
import Statistics from '../Statistics';

export default function Profile() {
	return (
		<Grid columns={2}>
			<Grid.Col span={1}>
				<Center inline>
					<Avatar color="cyan" radius="md">
						PG
					</Avatar>
					<Space w="sm" />
					<Text weight="600" size="md">
						Piotr Gałka
					</Text>
				</Center>
				<Space h="lg" />
				<Statistics />
			</Grid.Col>
			<Grid.Col span={1}>
				<Group position="center" direction="column">
					<Quote />
					<Calendar allowLevelChange={false} />
				</Group>
			</Grid.Col>
		</Grid>
	);
}

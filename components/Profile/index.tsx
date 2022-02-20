import {
	Avatar,
	Center,
	Text,
	Space,
	Grid,
	Group,
} from '@mantine/core';

import { Calendar } from '@mantine/dates';


import { useDispatch, useSelector } from "react-redux";

import Quote from '../Quote';
import Statistics from '../Statistics';
import {useEffect} from "react";

export default function Profile() {
	const user: any = useSelector<any>((state) => state.user)
	return (
		<Grid columns={2}>
			<Grid.Col span={1}>
				<Center inline>
					<Avatar color="cyan" radius="md">
						{user.username[0] ? user.username[0] : "LOG"}
					</Avatar>
					<Space w="sm" />
					<Text weight="600" size="md">
						{user.username ? user.username : "PLEASE LOGIN"}
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

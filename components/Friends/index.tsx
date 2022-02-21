import {Input, Text, Box, Button, Space, Grid} from "@mantine/core";
import {useEffect, useState} from "react";
import Link from 'next/link'

export default function Friends() {
    const [input, setInput] = useState("")
    const [users, setUsers] = useState<Array<string>>(["Piotrek", "Kamil", "Kacper", "Sergiusz", "Wiktor", ])
    const [visibleUsers, setVisibleUsers] = useState<Array<string>>([])

    const handleInputChange = (e: { target: { value: string } }) => {
        if(e.target.value.length > 0) {
            setVisibleUsers(users.filter((user) => user.startsWith(e.target.value)))
        }else {
            setVisibleUsers([])
        }
    }

    // useEffect(() => {
    //     fetchUsers().then(res => setUsers(res))
    // }, [])

    return (
        <div>
            <Input placeholder="Search for friend" onChange={(e: { target: { value: string; }; }) => handleInputChange(e)}/>
            <Space h={"md"}/>
            <Grid columns={3}>
                {visibleUsers.map((user: string) => (
                    <Grid.Col span = {1} key={user}>
                        <User username={user}/>
                    </Grid.Col>
                ))}
            </Grid>
        </div>
    )
}

interface UserInterface {
    username: string
}

function User({username}: UserInterface) {
    return (
            <Box sx={(theme) => ({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                width: '300px',
                background: theme.colors.gray[1],
                padding: '10px 0px',
                borderRadius: theme.radius.xs,
            })}>
            <Text>{username}</Text>
                <Link href={`/users/${username}`}>
                    <Button compact={true} color={"blue"}>Show Profile</Button>
                </Link>
        </Box>
    );
}
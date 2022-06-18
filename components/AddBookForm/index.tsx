import {Button, Modal, TextInput, Select, RadioGroup, Radio, NumberInput, Space} from "@mantine/core";
import {useForm} from '@mantine/hooks';

import {useEffect, useState} from "react";
import {BiBookAdd} from "react-icons/bi";

import {addBook} from "../../utils/api";
import {fetchGoogleBooks} from "../../utils/fetchGoogleBooks";
import {useSelector} from "react-redux";

interface Data {
    value: string,
    label: string,
    author: string,
    pages: string,
}

export default function AddBookForm() {
    const [data, setData] = useState<Array<Data>>([])
    const [value, setValue] = useState();
    const [opened, setOpened] = useState<boolean>(false);

    const form = useForm({
        initialValues: {
            title: '',
            author: '',
            pages: 0,
            status: '',
        },
    });

    const user: any = useSelector<any>((state) => state.user)

    useEffect(() => {
        console.log(value)
    }, [value])

    const handleSubmit = () => {
        addBook(user.userKey, user.username, form.values.title, form.values.author, form.values.pages, form.values.status.toLowerCase())
        setOpened(false)
    }

    const handleChange = async (e: { target: { value: string; }; }) => {
        console.log(e.target.value)
        const [title, author, pages] = await fetchGoogleBooks(e.target.value)
        console.log(title)
        console.log("data: ", data)
        setData([{
            value: title,
            label: title,
            author,
            pages,
        }])
    }

    // @ts-ignore
    return (
        <>
            <Modal opened={opened} onClose={() => setOpened(false)} title="Add New Book!">
                <form onSubmit={form.onSubmit(() => handleSubmit())}>
                    <Select value={value} onChange={setValue} />
                    <Space h={"xs"}/>
                    <TextInput
                        required
                        label="Author"
                        placeholder="Book Author"
                        value={form.values.author}
                        {...form.getInputProps('author')}
                    />
                    <Space h={"xs"}/>
                    <NumberInput
                        required
                        label="Pages"
                        placeholder="Book Pages"
                        value={form.values.pages}
                        {...form.getInputProps('pages')}
                    />
                    <Space h={"xs"}/>
                    <RadioGroup
                        label="Select your book status"
                        size="sm"
                        required
                        {...form.getInputProps('status')}
                    >

                        <Radio value="finished">Finished</Radio>
                        <Radio value="notStarted">Not Started</Radio>
                        <Radio value="reading">Reading</Radio>
                    </RadioGroup>
                    <Space h={"xl"}></Space>
                    <Button type="submit">Add New Book!</Button>
                </form>
            </Modal>
            <Button leftIcon={<BiBookAdd size={"16px"}/>} variant="light" color="blue" onClick={() => setOpened(true)}>
                Add Book
            </Button>
        </>
    )
}
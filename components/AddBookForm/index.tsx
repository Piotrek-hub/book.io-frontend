import {Button, Modal, TextInput, Checkbox, RadioGroup, Radio, NumberInput, Space} from "@mantine/core";
import { useForm } from '@mantine/hooks';

import {useState} from "react";
import {BiBookAdd} from "react-icons/bi";
import {BookStatus} from "../../types/interfaces";


export default function AddBookForm() {
    const form = useForm({
        initialValues: {
            title: '',
            author: '',
            pages: 0,
            status: BookStatus.notStarted,
        },
    });

    const [opened, setOpened] = useState(false);
    return (
        <>
        <Modal opened={opened} onClose={() => setOpened(false)} title="Add New Book!">
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
                <TextInput
                    required
                    label="Title"
                    placeholder="Book Title"
                    {...form.getInputProps('title')}
                />
                <Space h={"xs"}/>
                <TextInput
                    required
                    label="Author"
                    placeholder="Book Author"
                    {...form.getInputProps('author')}
                />
                <Space h={"xs"}/>
                <NumberInput
                    required
                    label="Pages"
                    placeholder="Book Pages"
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
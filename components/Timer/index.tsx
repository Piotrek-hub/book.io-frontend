import {Button, Grid, Text, Center, Space} from "@mantine/core";
import {useState, useEffect} from "react";

enum TimerState {

}

export default  function Timer() {
    const [time, setTime] = useState(100)
    const [timer, setTimer] = useState<any>(null)

    useEffect(() => {

    });

    const startTimer = () => {
        const timer = setTimeout(() => {
            setTime(time - 1);
            console.log('asd')
        }, 1000);
        setTimer(timer);
    }
    const stopTimer = () => {
        clearInterval(timer)
    }
    const skip = () => {

    }

    return (
        <Grid columns={3}  align={"end"} style={{height: '40vh', padding: '0', marginTop: "15vh", alignItems: 'center' }}>
            <Grid.Col>
                <Center>
                    <Text style={{fontSize: "100px", fontWeight: '600'}}>{time}</Text>
                </Center>
            </Grid.Col>
            <Grid.Col >
                <Center >
                    <Button color={"green"} onClick={startTimer}>Start Timer</Button>
                    <Space w={"md"}></Space>
                    <Button color={"blue"} onClick={stopTimer}>Stop Timer</Button>
                    <Space w={"md"}></Space>
                    <Button color={"red"} variant={"outline"} onClick={skip}>Skip</Button>
                </Center>
            </Grid.Col>
        </Grid>
    )
}
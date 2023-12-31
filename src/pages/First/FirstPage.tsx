import { Button } from "@mui/material";
import { useState } from "react"

const FirstPage = () => {
    const [counter, setCounter] = useState<number>(0);

    return (
        <>
        <h1>Hi This is current value of counter : {counter}</h1>
        <Button onClick={() => setCounter(counter + 1)}>Click Me for plus the Counter</Button>
        </>
    )
}

export default FirstPage;
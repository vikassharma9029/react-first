import { useState } from "react"

const FirstPage = () => {
    const [counter, setCounter] = useState<number>(0);

    return (
        <>
        <h1>Hi This is current value of counter : {counter}</h1>
        </>
    )
}

export default FirstPage;
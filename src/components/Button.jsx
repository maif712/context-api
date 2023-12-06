import { useAppContext } from "../AppContext";


export default function Button() {

    const {handleCounterNubmerIncrease} = useAppContext()

    return (
        <button onClick={handleCounterNubmerIncrease} className="btn">Increment</button>
    )
}
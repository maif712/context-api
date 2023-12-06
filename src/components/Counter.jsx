import { useAppContext } from "../AppContext"

export default function Counter() {

    const {counterNumber} = useAppContext()
    
    return (
        <div>
            <h1 className="number">{counterNumber}</h1>
        </div>
    )
}
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";


const AppContext = createContext(null)

export function AppContextProvider({children}) {

    const [counterNumber, setCounterNumber] = useState(0)

    // Increment the counter number
    const handleCounterNubmerIncrease = () => {
        setCounterNumber(prev => prev + 1)
    }

    // can have multiple states and functions in values
    const values = {
        counterNumber, 
        handleCounterNubmerIncrease
    }
    
    return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}

export default AppContext


// this line is not necessary but it's best practice 
export const useAppContext = () => useContext(AppContext)
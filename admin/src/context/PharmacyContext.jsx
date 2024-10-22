import { createContext } from "react";

export const PharmacyContext = createContext()

const PharmacyContextProvider = (props) => {
    const value ={

    }

    return (
        <PharmacyContext.Provider value={value}>
            {props.children}
        </PharmacyContext.Provider>
    )
}

export default PharmacyContextProvider
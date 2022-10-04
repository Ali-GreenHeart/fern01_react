import { createContext } from "react";

// const getNameFromBackend = () => ()

export const NameContext = createContext()

const NameContextComponent = ({ children }) => {
    return (
        <NameContext.Provider value={{ name: 'alion', age: 57 }}>
            {children}
        </NameContext.Provider>
    )
}
export default NameContextComponent;
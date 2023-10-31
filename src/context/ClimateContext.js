import { createContext, useState, useContext }from "react";

export const ClimateContext = createContext()
export const useClimate = () => useContext(ClimateContext);

export default function ClimateProvider(props) {
    const [temperature, setTemp] = useState(50);
    const [humidity, setHumidity] = useState(40);

    return (
        <ClimateContext.Provider value={{temperature, setTemp, humidity, setHumidity}}>
            {props.children}
        </ClimateContext.Provider>
    )
}
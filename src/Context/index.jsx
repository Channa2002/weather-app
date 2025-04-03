import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";


const StateContext = createContext();



export const StateContextProvider = ({children}) => {
    const [weather, setWeather] =useState({});
    const [values, setValues] = useState({});
    const [place, setPlace] = useState("");
    const [thisLocation, setLocation] = useState("");



    //fetch api

    const fetchWeather = async() => {

        const options = {
          method: 'GET',
          url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
          params: {
            contentType: 'json',
            unitGroup: 'metric',
            aggregateHours: '24',
            location: place,
            shortColumnNames: 0,
          },
          headers: {
            'x-rapidapi-key': '59fcd087d6msh286b1e20b9aeb76p168953jsn99ccbd1183c0',
            'x-rapidapi-host': 'visual-crossing-weather.p.rapidapi.com'
          }
        };
        
        try {
            const response = await axios.request(options);
            console.log(response.data);
            const thisData = Object.values(response.data.locations)[0];
            setLocation(thisData.address);
            setValues(thisData.values);
            setWeather(thisData.values[0]);
        } catch (error) {
            console.error(error);
        }
    }


        useEffect(() => {
            fetchWeather()
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [place])

        useEffect(() => { 
            console.log(values)
        }, [values])

        return (
            <StateContext.Provider value={{
                weather,
                setPlace,
                values,
                thisLocation,
                place
            }}>
                {children}
            </StateContext.Provider>
        )
    
}


// eslint-disable-next-line react-refresh/only-export-components
export const useStateContext = () => useContext(StateContext);
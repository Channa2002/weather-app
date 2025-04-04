import { useEffect, useState } from "react";
// import {useDate} from "../../Utils/useDate";
import cloud from "../../assets/icons/cloud.png";
import fog from "../../assets/icons/fog.png";
import snow from "../../assets/icons/snow.png";
import rain from "../../assets/icons/rain.png";
import storm from "../../assets/icons/storm.png";
import sun from "../../assets/icons/sun.png";
import wind from "../../assets/icons/windy.png";
import "../../../src/index.css"



const WeatherCards = ( {
    temperature,
    windspeed,
    humidity,
    place,
    heatIndex,
    iconString,
    conditions,
}) => {
    const [icon, setIcon] = useState(sun);
    const locale = "en";
    // const { time } = useDate();
    // console.log(time)
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
          setTime(new Date());
        }, 1000); 
    
        return () => clearInterval(interval); 
      }, []);

    useEffect(() => {
        if(iconString) {
            if(iconString.toLowerCase().includes("cloud")){
                setIcon(cloud);
            }else if(iconString.toLowerCase().includes("rain")) {
                setIcon(rain);
            }else if(iconString.toLowerCase().includes("fog")) {
                setIcon(fog);
            }else if(iconString.toLowerCase().includes("clear")) {
                setIcon(sun);
            }else if(iconString.toLowerCase().includes("storm") || iconString.toLowerCase().includes("thunder") ) {
                setIcon(storm);
            }else if(iconString.toLowerCase().includes("windy")) {
                setIcon(wind);
            }else if(iconString.toLowerCase().includes("snow")) {
                setIcon(snow);
            }
        }
    }, [iconString])

    return(
        <div className="w-[22rem] min-w-[22rem] h-[33rem] glasscard ">
            <div className="flex w-full justify-center items-center gap-4 mt-12 mb-4">
                <img src={icon} alt="weather-icon" />
                <p className="font-bold text-5xl flex justify-center items-center">{temperature} &deg;C</p>
            </div>
            <div className="font-bold text-center text-xl ">
                {place}
            </div>
            <div className="w-full flex justify-between items-center mt-4">
                <p className="flex-1 text-center p-2">{new Date().toDateString()}</p>
                <p className="flex-1 text-center p-2">{time? time.toLocaleString(locale, { hour: 'numeric', hour12: true, minute: 'numeric', }):"No date available"}</p>
            </div>

            <div className="w-full flex justify-between items-center mt-4 gap-4">
                <p className=" flex-1 text-center p-2 font-bold bg-blue-600 shadow rounded-lg">Wind Speed <p className="font-normal">{windspeed}</p></p>
                <p className="flex-1 text-center p-2 font-bold rounded-lg bg-green-600">Humidity <p className="font-normal">{humidity}</p></p>

            </div>

            <div className="w-full p-3 mt-4 flex justify-between items-center">
                <p className="font-semibold text-lg">Heat Index</p>
                <p className="text-lg">
                    { heatIndex? heatIndex: "N/A"}
                </p>

            </div>

            <hr className="bg-slate-600" />
            <div className="w-full p-4 flex justify-center items-center text-3xl font-semibold mb-36">
                {conditions}
            </div>

        </div>
    )
}

export default WeatherCards;
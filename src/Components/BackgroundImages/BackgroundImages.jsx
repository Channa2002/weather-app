import { useStateContext } from "../../Context";
import Clear from "../../assets/images/Clear.jpg";
import Cloudy from "../../assets/images/Cloudy.jpg";
import Rainy from "../../assets/images/Rainy.jpg";
import Snow from "../../assets/images/snow.jpg";
import Fog from "../../assets/images/fog.jpg";
import Stormy from "../../assets/images/Stormy.jpg";
import Sunny from "../../assets/images/Sunny.jpg";
import { useEffect, useState } from "react";






const BackgroundImages = () => {

    const {weather} = useStateContext();

    const [image, setImage] = useState(Clear);


    useEffect(() => {
        if(weather.conditions) {
            let imageString = weather.conditions;
            if(imageString.toLowerCase().includes('clear')) {
                setImage(Clear);
            } else if(imageString.toLowerCase().includes('cloud')) {
                setImage(Cloudy);
            } else if(imageString.toLowerCase().includes('rain') || imageString.toLowerCase().includes("shower")) {
                setImage(Rainy);
            } else if(imageString.toLowerCase().includes('snow')) {
                setImage(Snow);
            } else if(imageString.toLowerCase().includes('fog')) {
                setImage(Fog);
            } else if(imageString.toLowerCase().includes('stormy') || imageString.toLowerCase().includes('thunder') ) {
                setImage(Stormy);
            } else if(imageString.toLowerCase().includes('sunny')) {
                setImage(Sunny);
            }
        }
    }, [weather])


    console.log(weather)
    return(
        <div>
            <img src={image} alt="" className="h-screen w-full fixed left-0 top-0 -z-[10]" />
        </div>
    )
}

export default BackgroundImages;
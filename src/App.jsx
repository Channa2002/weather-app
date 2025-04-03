import { useState } from 'react';
import './App.css';
import { useStateContext } from './Context';
import  BackgroundImages  from './Components/BackgroundImages/BackgroundImages';
import  MiniCards  from './Components/MiniCards/miniCards';
import WeatherCards  from './Components/WeatherCards/WeatherCards';
import { RiSearch2Line } from "react-icons/ri";

function App() {

  const [input, setInput] = useState('')
  const { weather, thisLocation, values, setPlace} = useStateContext()
  // console.log(weather)

  const submitCity = () => {
    setPlace(input)
    setInput('')
  }

  return (
    <div className='w-full h-screen text-white px-8'>
      <nav className='w-full p-3 flex justify-between items-center'>
        <h1 className='font-bold tracking-wide text-3xl'>Weather App</h1>
        <div className='bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2'>
        <RiSearch2Line className='text-[#4e4c4c]' size={30} />
          <input onKeyUp={(e) => {
            if (e.key === 'Enter') {
              // sumit the form
              submitCity()
            }
          }} type="text" placeholder='Search city' className='focus:outline-none w-full text-[#212121] text-lg' value={input} onChange={e => setInput(e.target.value)} />
        </div>
      </nav>
     <BackgroundImages />
      <main className='w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center'>
        <WeatherCards
          place={thisLocation}
          windspeed={weather.wspd}
          humidity={weather.humidity}
          temperature={weather.temp}
          heatIndex={weather.heatindex}
          iconString={weather.conditions}
          conditions={weather.conditions}
        />

        <div className='flex justify-center gap-8 flex-wrap w-[60%]'>
        {Array.isArray(values) ? values.slice(1, 7).map(curr => (
  <MiniCards
    key={curr.datetime}
    time={curr.datetime}
    temp={curr.temp}
    iconString={curr.conditions}
  />
)) : null}

        
        </div>
      </main>
    </div>
  )
}

export default App
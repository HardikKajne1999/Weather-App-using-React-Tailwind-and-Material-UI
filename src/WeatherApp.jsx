import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp(){
    let [weatherInfo, setWeatherInfo] = useState({
        city : 'Mumbai',
        longitude : 77.21,
        latitude : 28.66,
        feels_like : 21,
        weather : "haze",
        temp : 24,
        temp_min : 23,
        temp_max : 25,
        humidity : '24%',
    })
    let updateInfo = (result) => {
        setWeatherInfo(result);
    }
    return(
        <>
            <div className='text-center flex flex-col gap-3 justify-center items-center'>
                <h1 className='text-4xl underline font-semibold'>Weather App</h1>
                <p className='text-xl'>(Search by City name)</p>
                <SearchBox updateInfo = {updateInfo}/>
                <InfoBox info={weatherInfo}/>
            </div>
        </>
    )
}
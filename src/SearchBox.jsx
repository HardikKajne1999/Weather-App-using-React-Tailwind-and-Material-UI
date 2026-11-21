import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
export default function SearchBox(){
    let [city,setCity] = useState('');
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
    const API_KEY = '93af46793aa08c20fa872daa7265dc95';
    async function getInformation(){
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            feels_like : jsonResponse.main.feels_like,
            temp : jsonResponse.main.temp,
            temp_min : jsonResponse.main.temp_min,
            temp_max : jsonResponse.main.temp_max,
            humidity : jsonResponse.main.humidity,
            weather : jsonResponse.weather[0].description
        }
        console.log(result);
    }
    function handleChange(event){
        setCity(event.target.value)
    }
    function handleSubmit(event){
        event.preventDefault();
        console.log(city);
        setCity('');
        getInformation();
    }
    return(
        <>
            <div className='p-4'>
                <form onSubmit={handleSubmit}>
                <TextField value={city} id="city" onChange={handleChange} label="City Name" required variant="outlined" />
                <br /><br />
                <Button type='submit' variant="contained">Search</Button>
                </form>
            </div>
        </>
    )
}
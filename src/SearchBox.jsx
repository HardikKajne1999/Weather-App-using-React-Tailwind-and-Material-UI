import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city,setCity] = useState('');
    let [error,setError] = useState(false);
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
    const API_KEY = '93af46793aa08c20fa872daa7265dc95';
    async function getInformation(){
        try{
        
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        let result = {
            city : jsonResponse.name,
            longitude : jsonResponse.coord.lon,
            latitude : jsonResponse.coord.lat,
            feels_like : jsonResponse.main.feels_like,
            temp : jsonResponse.main.temp,
            temp_min : jsonResponse.main.temp_min,
            temp_max : jsonResponse.main.temp_max,
            humidity : jsonResponse.main.humidity,
            weather : jsonResponse.weather[0].description
        }
        console.log(result);
        setError(false);
        return result;
        }
        catch(error){
            throw error;
        }
    }
    function handleChange(event){
        setCity(event.target.value)
    }
    async function handleSubmit(event){
        try{
            event.preventDefault();
            console.log(city);
            setCity('');
            getInformation();
            let newInfo = await getInformation();
            updateInfo(newInfo);
        }
        catch(error ){
            setError(true);
        }
    }
    return(
        <>
            <div className='p-4'>
                <form onSubmit={handleSubmit}>
                <TextField value={city} id="city" onChange={handleChange} label="City Name" required variant="outlined" />
                <br /><br />
                <Button type='submit' variant="contained">Search</Button>
                </form>
                {error && <p className='text-red-600'>No such place exists!</p>}
            </div>
        </>
    )
}
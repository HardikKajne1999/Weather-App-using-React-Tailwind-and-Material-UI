import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
export default function SearchBox(){
    let [city,setCity] = useState('');
    function handleChange(event){
        setCity(event.target.value)
    }
    function handleSubmit(event){
        event.preventDefault();
        console.log(city);
        setCity('');
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
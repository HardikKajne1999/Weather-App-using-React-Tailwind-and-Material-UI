import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function InfoBox({info}){
    let sunny_url = 'https://images.unsplash.com/photo-1604949210966-9440c324823f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D';
    let cool_url = 'https://images.unsplash.com/photo-1510706582185-d4f28e338820?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D';
    let rain_url = 'https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D';
    return (
        <>
            <div className="p-4">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? rain_url : info.temp < 20 ? cool_url : sunny_url}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                        {info.humidity > 80 ? <ThunderstormIcon/> : info.temp < 20 ? <AcUnitIcon/> : <SunnyIcon/>}
                        </Typography>
                        <Typography component={"span"} variant="body2" sx={{ color: 'text.secondary' }}>
                            <h3 className=' text-lg'>Feels Like : {info.feels_like}&deg;C </h3>
                            <h3 className=' text-lg'>Weather : <i>{info.weather}</i> </h3>
                            <h3 className=' text-lg'>Longitude : {info.longitude} </h3>
                            <h3 className=' text-lg'>Latitude : {info.latitude} </h3>
                            <h3 className=' text-lg'>Temperature : {info.temp}&deg;C </h3>
                            <h3 className=' text-lg'>Minimum Temperature : {info.temp_min}&deg;C </h3>
                            <h3 className=' text-lg'>Maximum Temperature : {info.temp_max}&deg;C</h3>
                            <h3 className=' text-lg'>Humidity : {info.humidity} </h3>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}
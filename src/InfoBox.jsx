import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
export default function InfoBox({info}){
    let init_url = 'https://images.unsplash.com/photo-1621260938401-7bdad0aec8fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D';
    
    return (
        <>
            <div className="p-4">
                {/* <h1 className="font-bold underline text-xl mb-4">Weather Info</h1> */}
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={init_url}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {info.city}
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
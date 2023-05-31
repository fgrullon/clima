import { WiCelsius, WiDaySunny, WiThunderstorm, WiDayCloudy, WiHail } from 'weather-icons-react';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black'
}));

const WeekForecast = () => {
    return (
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={12}>
              <Grid container justifyContent="center" spacing={5} marginTop={5}>
                <Grid item>
                    <Item key={'today'}>Today <WiDaySunny size={15} color="#ffbb11b8" />Sunny   36/22</Item>
                    <Item key={'tue'}>  Tue   <WiDaySunny size={15} color="#ffbb11b8" />Sunny   37/21</Item>
                    <Item key={'wed'}>  Tue   <WiDaySunny size={15} color="#ffbb11b8" />Sunny   37/21</Item>
                    <Item key={'thu'}>  Thu   <WiDayCloudy size={15} color="#ffbb11b8" />Cloudy  37/21</Item>
                    <Item key={'fri'}>  Fri   <WiDayCloudy size={15} color="#ffbb11b8" />Cloudy  37/21</Item>
                    <Item key={'sat'}>  Sat   <WiHail size={15} color="#ffbb11b8" />Rainy   37/21</Item>
                    <Item key={'sun'}>  Sun   <WiThunderstorm size={15} color="#ffbb11b8" />Storm   37/21</Item>
                </Grid>
              </Grid>
            </Grid>
    
        </Grid>
    );
}

export default WeekForecast;
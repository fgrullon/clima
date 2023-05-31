"use client";
import { WiCelsius, WiDaySunny } from 'weather-icons-react';
import { Weather } from '../../types';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

interface Props {
    weather : Weather;
}

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black'
}));

const CurrentTemp = ( { weather } : Props ) => {

    const spacing = 2;

    if(!weather){
        return null;
    }

    console.log(weather)

    return (
        
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="left" spacing={5} marginTop={5}>
            <Grid key={weather.name} item>
                <Item>{weather.name}</Item>
                <Item>Chance of rain: 0%</Item>
            </Grid>
            <Grid key={weather.id} item>
            <Item>
                <WiDaySunny size={200} color='#ffbb11b8' />
            </Item>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent="left" spacing={5}>
            <Grid item>
                <Item>{weather.main.temp - 273.15}<WiCelsius size={100} color="black" /></Item>
            </Grid>
          </Grid>
        </Grid>

    </Grid>

    );
}

export default CurrentTemp;
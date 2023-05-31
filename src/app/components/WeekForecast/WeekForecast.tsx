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
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const WeekForecast = () => {
    return (
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={12}>
              <Grid container justifyContent="center" spacing={5} marginTop={5}>
                <Grid item>
                    <Item key={'today'}>Today Sunny 36/22</Item>
                    <Item key={'tue'}>Tue Sunny 37/21</Item>
                    <Item key={'wed'}>Tue Sunny 37/21</Item>
                    <Item key={'thu'}>Thu Cloudy 37/21</Item>
                    <Item key={'fri'}>Fri Cloudy 37/21</Item>
                    <Item key={'sat'}>Sat Rainy 37/21</Item>
                    <Item key={'sun'}>Sun Strom 37/21</Item>
                </Grid>
              </Grid>
            </Grid>
    
        </Grid>
    );
}

export default WeekForecast;
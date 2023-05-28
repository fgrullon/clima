"use client";
import { useState, useEffect } from 'react';
import SearchBar from '../app/components/SearchBar/SearchBar';
import CurrentTemp from '../app/components/CurrentTemp/CurrentTemp';
import WeekForecast from '../app/components/WeekForecast/WeekForecast';
import Sidebar from '../app/components/Sidebar/Sidebar';
import weatherService from './service/weatherService';
import { Weather } from './types';
import { 
  Box, 
  CssBaseline
} from '@mui/material'

export default function Home() {
  const [city, setCity] = useState<string>('');
  const [weather, setWeather] = useState<Weather>();

  useEffect(() => {
    const fetchWeather = async () => {
      const result = await weatherService.getWeather(city);
      setWeather(result);
    };
    if(city.length > 0){
      void fetchWeather();
    }
  }, [city]);



  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* <SearchBar setCity={setCity} /> */}
      <Sidebar setCity={setCity} />
      {weather && <CurrentTemp weather={weather} /> }
      {weather && <WeekForecast /> }
    </Box>
  )
}

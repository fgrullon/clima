"use client";
import { useState, useEffect } from 'react';
import SearchBar from '../app/components/SearchBar/SearchBar';
import CurrentTemp from '../app/components/CurrentTemp/CurrentTemp';
import WeekForecast from '../app/components/WeekForecast/WeekForecast';
import Sidebar from '../app/components/Sidebar/Sidebar';
import weatherService from './service/weatherService';
import { Weather } from './types';

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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Sidebar />
      <SearchBar setCity={setCity} />
      {weather && <CurrentTemp weather={weather} /> }
      <WeekForecast />
    </main>
  )
}

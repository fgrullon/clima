"use client";
import { useState } from 'react';
import SearchBar from '../app/components/SearchBar/SearchBar';
import CurrentTemp from '../app/components/CurrentTemp/CurrentTemp';
import WeekForecast from '../app/components/WeekForecast/WeekForecast';

export default function Home() {
  const [city, setCity] = useState<String>('');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SearchBar />
      <CurrentTemp city={city} />
      <WeekForecast />
    </main>
  )
}

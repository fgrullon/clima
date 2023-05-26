"use client";
import { useState } from 'react';
import SearchBar from '../app/components/SearchBar/SearchBar';
import CurrentTemp from '../app/components/CurrentTemp/CurrentTemp';
import WeekForecast from '../app/components/WeekForecast/WeekForecast';
import Sidebar from '../app/components/Sidebar/Sidebar';

export default function Home() {
  const [city, setCity] = useState<String>('');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Sidebar />
      <SearchBar />
      <CurrentTemp city={city} />
      <WeekForecast />
    </main>
  )
}

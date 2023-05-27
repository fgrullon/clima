import axios from 'axios';

const setUrl = (city: string):string => {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_API_KEY}`
}
const getWeather = (city: string) => {
    return axios
        .get(setUrl(city))
        .then(res => res.data);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getWeather
}
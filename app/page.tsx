'use client';
import Image from 'next/image';
// import geoFindMe from './geoFindMe';
import tempLogic from './components/tempLogic';
import { useEffect, useState } from 'react';
import Weather from './components/Weather';

export default function Home() {
  // const [latitude, setLatitude] = useState();
  // const [longitude, setLongitude] = useState();
  const [data, setData] = useState('');
  const [weather, setWeather] = useState('');

  useEffect(() => {
    // console.log('Page loaded');
    // let latitude = 0;
    // let longitude = 0;
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(
    //     (pos) => {
    //       latitude = pos.coords.latitude;
    //       longitude = pos.coords.longitude;
    //       console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    //       const fetchData = async () => {
    //         try {
    //           const response = await fetch(
    //             `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=5&appid=cfacf018338e782fc383854b7bcc213a`,
    //           );
    //           const json = await response.json();
    //           console.log(json[0]);
    //           setData(json[0]);
    //         } catch (error) {
    //           console.error('Fetch error:', error);
    //         }
    //       };
    //       const fetchWeather = async () => {
    //         try {
    //           const response = await fetch(
    //             `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=cfacf018338e782fc383854b7bcc213a`,
    //           );
    //           const json = await response.json();
    //           console.log(json);
    //           setWeather(json);
    //         } catch (error) {
    //           console.error('Fetch Weather error:', error);
    //         }
    //       };
    //       fetchData();
    //       fetchWeather();
    //     },
    //     (err) => console.log(err.message),
    //   );
    // } else {
    //   console.log('Geolocation is not supported by this browser.');
    // }
    // console.log(tempLogic(weather.main.feels_like));
  }, []);

  return (
    <div className='flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
      <main className='flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start'>
        <div className='flex flex-col items-center gap-6 text-center sm:items-start sm:text-left'>
          <h1 className='max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50'>
            Soup or Salad?
          </h1>
          <Weather />
          <label>Zip Code</label>
          <input className='' placeholder='zip'></input>
          <button id='find-me'>Show my location</button>
        </div>
        <div className='flex flex-col gap-4 text-base font-medium sm:flex-row'>
          <a
            className='flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]'
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              className='dark:invert'
              src='/vercel.svg'
              alt='Vercel logomark'
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className='flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]'
            href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}

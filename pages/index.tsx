import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { TimerInput } from '../components/TimerInput';
import { TimerContainer } from '../components/TimerContainer';

const Home: NextPage = () => {
  const [time, setTime] = useState<number>(7);
  const [newTime, setNewTime] = useState<number>(0);
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [message, setMessage] = useState<string>('');

  const timeToDays = time * 60 * 60 * 24 * 1000;

  let countDownDate = new Date().getTime() + timeToDays;

  useEffect(() => {
    var updateTime = setInterval(() => {
      var nowTime = new Date().getTime();
      var timeDiff = countDownDate - nowTime;

      var newDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      var newHours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      var newMinutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      var newSeconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      setDays(newDays);
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);

      if (timeDiff <= 0) {
        clearInterval(updateTime);
        setMessage('Launch Started');
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    });

    return () => {
      clearInterval(updateTime);
    };
  }, [time]);

  const handleClick = () => {
    setTime(newTime);
    setNewTime(0);
  };

  const handleChange = (e: any) => {
    let inputTime = e.target.value;
    setNewTime(inputTime);
  };

  return (
    <div className='flex min-h-screen flex-col items-center bg-[#1e1f29'>
      <Head>
        <title>Launch Countdown Timer</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header message={message} />

      <TimerContainer
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />

      <TimerInput
        value={newTime}
        handleClick={handleClick}
        handleChange={handleChange}
      />

      <Footer />
    </div>
  );
};

export default Home;

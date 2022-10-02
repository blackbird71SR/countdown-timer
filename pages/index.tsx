import type { NextPage } from 'next';
import Head from 'next/head';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { TimerInput } from '../components/TimerInput';
import { TimerContainer } from '../components/TimerContainer';

const Home: NextPage = () => {
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

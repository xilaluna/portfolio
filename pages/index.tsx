import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'phosphor-react';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Xila Luna</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-row items-center justify-between pt-10 pb-5">
        <div className="relative h-60 w-60">
          <Image
            src={'/images/profile-picture.jpg'}
            alt="Profile Image"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-1 flex-col items-center justify-center">
          <h1 className="pb-5">Xila Luna</h1>

          <p>Full-Stack Engineer</p>

          <div className="border-color my-5 w-12 border-b" />

          <p className="px-10 pb-1 text-justify">
            Xila Luna is a creative full-stack engineer who is willing and able
            to find solutions when there are none.
          </p>

          <Link href={'/projects'}>
            <div className="flex items-center space-x-2">
              <p>Projects</p>
              <ArrowUpRight />
            </div>
          </Link>
        </div>
      </div>

      <div className="flex space-x-2">
        <div className="flex flex-col items-center justify-center">
          <span>2022</span>
          <div className="border-color h-20 w-px border-l"></div>
          <span>2021</span>
        </div>
        <div className="flex flex-col">
          <div>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

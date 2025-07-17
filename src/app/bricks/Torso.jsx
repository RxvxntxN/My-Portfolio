'use client';
import React from 'react';
import Button from '@mui/material/Button';
import Cement from './Cement';
import Link from 'next/link';

const Torso = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left section - Content */}
      <div className="flex-1 flex justify-center items-center p-4 md:pl-10 order-1 md:order-1">
        <div className="space-y-4 md:space-y-6 text-center md:text-left">
          <h1 className="text-white text-4xl md:text-6xl font-bold font-alegreya">
            Hello, I&apos;m Musabbir
          </h1>
          <span className="text-teal-500 text-2xl md:text-3xl block">
            Front End Developer
          </span>
          <p className="text-white text-sm md:text-base">
            I&apos;m always trying to bring real value and define problem{' '}
            {window.innerWidth > 768 && <br />}
            with my codes. Welcome to my portfolio.
          </p>
          <div className="pt-2">
            <Link href={'/explore-more'}>
              <Button
                variant="outlined"
                sx={{
                  color: 'white',
                  borderColor: 'teal',
                  '&:hover': {
                    borderColor: 'teal',
                  },
                }}
              >
                Explore More
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Right section - Cement component */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-8 order-2 md:order-2">
        <Cement />
      </div>
    </div>
  );
};

export default Torso;

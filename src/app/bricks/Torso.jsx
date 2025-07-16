'use client';
import React from 'react';
import Button from '@mui/material/Button';
import Cement from './Cement';
import Link from 'next/link';

const Torso = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-1 flex justify-center items-center pl-10">
        <div className="space-y-6">
          <h1 className="text-white text-6xl font-bold font-alegreya">
            Hello, I&apos;m Musabbir
          </h1>
          <span className="text-teal-500 text-3xl">Front End Developer</span>
          <p className="text-white">
            I&apos;m always trying to bring real value and define problem <br />
            with my codes. Welcome to my portfolio.
          </p>
          <div>
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

      {/* Right section */}
      <div className="flex-1 flex items-center justify-center p-8">
        <Cement />
      </div>
    </div>
  );
};

export default Torso;

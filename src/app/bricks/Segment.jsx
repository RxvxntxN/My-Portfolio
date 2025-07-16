import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import { SiFrontendmentor } from 'react-icons/si';
import { MdDesignServices } from 'react-icons/md';
import { FaFileWaveform } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';
import Button from '@mui/material/Button';
import Link from 'next/link';

const Segment = () => {
  return (
    <div
      id="about"
      className="bg-stone-900 text-white min-h-screen flex items-center justify-center"
    >
      {/* Container for the content with maximum width and padding */}
      <div className="max-w-3xl w-full p-6 rounded-lg shadow-lg bg-opacity-80">
        <h1 className="text-4xl font-bold mb-4 flex items-center hover:text-teal-500">
          About Me
        </h1>
        <hr className="w-24 h-1 bg-teal-500 border-0 rounded md:my-5"></hr>
        <p className="text-lg leading-relaxed text-gray-300">
          Hi, I&apos;m Muhammad Musabbir! I was born with{' '}
          <Tooltip
            placement="top"
            title="Profound hearing loss is a level of hearing impairment that makes it difficult to hear most everyday sounds, except for loud sounds."
          >
            <span className="cursor-pointer">profound hearing loss</span>
          </Tooltip>
          . I am passionate about web development, especially working with
          frameworks like Next.js and React. I enjoy building beautiful,
          functional, and responsive web applications. Outside of coding, I love
          gaming, with a special interest in Apex Legends and Counter-Strike 2.
        </p>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2 hover:text-teal-500">
            Skills
          </h2>
          <ul className="list-disc list-inside text-gray-300">
            <li className="flex items-center gap-2 mb-2">
              <SiFrontendmentor className="text-teal-500" />
              <span>Frontend Development (React, Next.js)</span>
            </li>
            <li className="flex items-center gap-2 mb-2">
              <MdDesignServices className="text-teal-500" />
              <span>Styling (Tailwind CSS, Material UI)</span>
            </li>
            <li className="flex items-center gap-2 mb-2">
              <FaFileWaveform className="text-teal-500" />
              <span>Form Handling (Formik, Zod validation)</span>
            </li>
            <li className="flex items-center gap-2 mb-2">
              <FaGithub className="text-teal-500" />
              <span>Version Control (Git, GitHub)</span>
            </li>
          </ul>
          <div className="flex items-center gap-4 mt-4">
            <Link href={'/my-hobbies'}>
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: 'teal',
                  color: 'white',
                }}
              >
                MY HOBBIES
              </Button>
            </Link>

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
              DOWNLOAD CV
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Segment;

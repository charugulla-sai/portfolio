import { useState } from 'react';
import './Hero.css';
import myimage from '../../img/download.png';
import aiImage from '../../img/aiimage.png';
export default function Hero() {
  const [profileImg, setProfileImg] = useState(aiImage);
  return (
    <>
      <main className="w-full  ">
        <div className="max-w-[1100px] mx-auto  p-5 flex gap-6 justify-between items-center">
          <div className="text_box max-w-xl flex flex-col">
            <p className="text-blue-500 font-semibold">Hi, my name is</p>
            <h1 className="font-bold text-5xl mb-1 ">Charugulla Sai.</h1>
            <h1 className="font-bold text-[38px] text-gray-600 mb-2">
              I build things for the web.
            </h1>
            <p className="mb-3">
              I'm a passionate Fullstack developer mainly focussing on Front-end
              <span className="text-blue-600 font-bold text-lg"> React </span>
              Development.
            </p>
            <a
              href="https://maps.app.goo.gl/tex8kWQbtp3Rj3hTA"
              className="flex gap-2 hover:cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-blue-700"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <p>Hyderabad, India</p>
            </a>
          </div>
          <div className="hero_image_box max-w-80 rounded-[50%] overflow-hidden border-solid border-black border-4 ">
            <img
              className="w-full "
              onMouseEnter={() => {
                setProfileImg(myimage);
              }}
              onMouseLeave={() => {
                setProfileImg(aiImage);
              }}
              src={profileImg}
            />
          </div>
        </div>
        <div className="max-w-[900px] mx-auto flex justify-start p-5 items-center">
          <p className="tech_text_box font-bold">Tech stack : </p>
          <div className="icons"></div>
        </div>
      </main>
    </>
  );
}

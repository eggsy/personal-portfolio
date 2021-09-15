/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

import Social from "../components/Social";
import Button from "../components/Button";
import Information from "../components/Information";
import Status from "../components/Status";

/* Import types */
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="grid min-h-screen p-6 space-y-6 md:space-y-0 md:p-0 md:grid-cols-2">
      <div className="flex items-center justify-center">
        <div className="space-y-4 md:space-y-10">
          <div>
            <h1 className="text-3xl font-semibold text-gray-800 md:text-6xl">
              Hello, I am <span className="text-indigo-600">Eggsy</span>
            </h1>
            <h2 className="text-xl text-gray-500 md:text-3xl">
              Full-stack web developer
            </h2>
          </div>

          <div className="text-gray-600 md:text-xl">
            <p>I try to build things that people would use.</p>
            <p>I've started as a Junior Developer with HTML and CSS.</p>
            <p>I enjoy coding little and useful things.</p>
            <p>I spent my free time learning new technologies.</p>
            <p>I'd like to learn more about JavaScript and its history.</p>
            <p>One day I want to find a full-time remote job.</p>
          </div>

          <Button href="https://eggsy.xyz" target="_blank">
            Hire Me
          </Button>
        </div>
      </div>

      <div className="grid grid-rows-2 space-y-6 shadow-lg md:space-y-0">
        <div
          className="flex items-center justify-center truncate md:px-10"
          style={{
            backgroundImage: "url('/gradient.svg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Status />
        </div>

        <div className="items-center justify-center bg-indigo-600 md:space-x-6 md:flex">
          <div className="items-center p-4 space-x-4 bg-white md:rounded md:flex">
            <Image
              src="/memoji.png"
              height="150px"
              width="150px"
              alt="Memoji"
              draggable="false"
            />

            <div className="space-y-2">
              <Information />
            </div>
          </div>

          <div className="flex justify-center my-4 space-x-4 md:space-x-0 md:block md:space-y-2">
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

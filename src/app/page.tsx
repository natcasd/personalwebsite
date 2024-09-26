import Image from "next/image";
import profile from "./images/profile.png";

export default function About() {
  return (
    <>
      <div className="-z-10 absolute w-full h-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="flex flex-col sm:flex-row justify-center items-center min-h-screen p-4 overflow-auto">
          <div className="flex flex-col sm:flex-row justify-center items-center w-full max-w-screen-lg space-y-2 sm:space-y-0 sm:space-x-4">
            <div className="w-full sm:w-auto flex justify-center">
              <Image
                src={profile}
                alt="profile pic"
                className="w-full h-auto max-w-md object-cover object-center rounded-lg"
              />
            </div>
            <div className="flex flex-col w-full sm:w-auto sm:max-w-lg text-left">
              <p className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-7xl xl:text-7xl text-black">
                Hi! I&apos;m <u>Nathan</u>.
              </p>
              <p className="text-sm sm:text-base md:text-lg">
                I am a Master&apos;s student at Brown University studying
                Computer Science. I am from Greenville, South Carolina. I am
                passionate about financial markets, artificial intelligence, and
                the intersection of the two. In my free time I love to cook,
                watch soccer, play tennis, play poker, and slackline.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

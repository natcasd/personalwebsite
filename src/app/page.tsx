import Image from "next/image";
import profile from "./images/profile.png";

export default function About() {
  return (
    <>
      <div className="inset-0 -z-10 h-full w-full fixed inset-0 overflow-hidden bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="flex flex-col sm:flex-row justify-center items-center h-screen p-4">
          <div className="flex flex-col sm:flex-row justify-center items-center w-full space-y-2 sm:space-y-0 sm:space-x-2">
            <Image
              src={profile}
              alt="profile pic"
              className="mx-auto sm:w-1/5 md:w-1/6 lg:w-1/4 rounded-lg"
            />
            <div className="flex flex-col w-full sm:w-2/3">
              <p className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-black">
                Hi! I&apos;m Nathan.
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

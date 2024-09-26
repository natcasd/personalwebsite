import React from "react";
import Contact from "../components/contactform";

export default function ContactPage() {
  return (
    <>
      <div className="inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="flex justify-center items-center h-screen">
          <div className="w-full sm:w-3/4 md:w-1/2">
            <div className="p-5 sm:p-10">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

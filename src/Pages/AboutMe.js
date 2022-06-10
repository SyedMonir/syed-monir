import React from 'react';

const AboutMe = () => {
  return (
    <>
      <section id="about" className="text-white bg-slate-800 body-font py-16">
        <h2 className="text-center mb-10 text-3xl">About Me</h2>
        <div className="container px-5  mx-auto flex flex-wrap">
          <div className="lg:w-2/5 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              className="object-cover object-center  w-full"
              src="https://i.ibb.co/4PHp0Tb/user-0.png"
            />
          </div>
          <div className="flex flex-col justify-center flex-wrap lg:py-6 -mb-10 lg:w-3/5 lg:pl-12 lg:text-left text-center">
            <p className="text-justify">
              I am an enthusiastic developer who likes to explore new
              technologies to keep pace with the competitive world and a
              self-motivated IT professional with huge knowledge and proficiency
              as well as strong skills and ability in writing clean and
              efficient code seeking the position of Frontend Developer.
            </p>
            <a
              className=" mx-auto text-center mt-8 px-6 tracking-widest py-2 flex items-center uppercase font-bold bg-slate-900 text-white hover:bg-white hover:opacity-75 hover:text-black"
              href="https://drive.google.com/file/d/1oV4WaM6JNdGQzuJ7K9CAAPHdR4WAiXtp/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;

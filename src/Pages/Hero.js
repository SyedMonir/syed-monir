import React from 'react';

const Hero = () => {
  return (
    <>
      <section className=" bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] flex justify-center py-32 h-[90vh]">
        <div className="text-center">
          <h2 className="text-7xl text-white font-bold">
            Hello, I am <br />
            Syed Monirul Alam
          </h2>
          <p className="mt-6 text-white text-xl">
            Web Developer | React Developer | Front End Developer
          </p>
          <div className="mt-10">
            <a
              href="https://drive.google.com/file/d/1oV4WaM6JNdGQzuJ7K9CAAPHdR4WAiXtp/view"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 uppercase px-4 ml-4 text-white rounded-sm bg-slate-900 transition hover:bg-white hover:bg-opacity-10"
            >
              My Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

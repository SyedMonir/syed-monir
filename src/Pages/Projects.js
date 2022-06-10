import React, { useEffect } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';

const Projects = () => {
  const [projects, setProjects] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  useEffect(() => {
    setLoading(true);
    fetch('/projects.json')
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .then(() => setLoading(false));
  }, []);
  return (
    <>
      <section
        className="text-white body-font bg-slate-900 py-16"
        id="projects"
      >
        <h2 className="text-center uppercase text-3xl pt-8">
          Checkout My Recent Project
        </h2>
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap m-4">
            {projects.map((project) => (
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36  w-full object-cover "
                    src="https://i.ibb.co/g7PbZw1/Screenshot-624.png"
                    alt="Lamps Manufacturer."
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 uppercase">
                      Parts Manufacturer
                    </h2>
                    <h1 className="title-font text-lg font-medium  mb-3">
                      Lamps Manufacturer.
                    </h1>
                    <p className="leading-relaxed mb-3">
                      User & Admin Dashboard, Part can be add or delete by
                      Admin, Admin can manage parts and orders also Only Admin
                      can make admin, Only User Can purchase part and they can
                      add review, User and Admin can update their profile.
                    </p>
                    <div className="flex items-center justify-between flex-wrap ">
                      <a
                        href="https://lamps-manufacturer.web.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        View Project <AiOutlineArrowRight className="ml-2" />
                      </a>
                      <span>
                        <a
                          href="https://github.com/SyedMonir/lamps-manufacturer-client"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                        >
                          Client <BsGithub className="mx-2" />
                        </a>
                        <a
                          href="https://github.com/SyedMonir/lamps-manufacturer-server"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                        >
                          Server <BsGithub className="ml-2" />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* End */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;

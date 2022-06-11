import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';

const Project = () => {
  const { projectId } = useParams();
  const [project, setProject] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('/projects.json')
      .then((res) => res.json())
      .then((data) => {
        setProject(data);
      })
      .then(() => setLoading(false));
  }, [projectId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const projectData = project.find(
    (p) => parseInt(p._id) === parseInt(projectId)
  );
  console.log(projectData?._id);
  console.log(projectId);
  return (
    <>
      <section className="py-4 bg-slate-900 text-white">
        <div className="container mx-auto flex flex-wrap gap-4">
          <div className="lg:w-2/3 w-full px-4">
            <img
              src={projectData?.image}
              alt={projectData?.title}
              className=" rounded"
            />

            <div className="bg-slate-800 p-4">
              <p className="mt-4 mb-5">{projectData?.description}</p>

              <div className="mt-5">
                <h3>Technology Used: </h3>
                <ul className="list-disc list-inside">
                  {projectData?.technology?.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="sm:w-[30%] w-full sm:mx-0 mx-4">
            <div className="">
              <div className="card bg-slate-800 p-4">
                <h4 className="uppercase font-bold text-center mb-5 pt-4">
                  Project Summery
                </h4>

                <ul className="list-unstyled grid grid-flow-row gap-4 ">
                  <li className="flex justify-between items-center">
                    Category:
                    <span>{projectData?.category}</span>
                  </li>
                  <li className="flex justify-between items-center">
                    Duration:
                    <span>1 weeks</span>
                  </li>
                  <li className="flex justify-between items-center">
                    Js Framework:
                    <span>React.js</span>
                  </li>
                  <li className="flex justify-between items-center">
                    CSS Framework:
                    <span>Tailwind CSS</span>
                  </li>
                  <li className="flex justify-between items-center">
                    Responsive:
                    <span>Yes</span>
                  </li>
                  <li className="text-center ">
                    <a
                      href={projectData?.liveSite}
                      className="flex justify-center items-center border sm:px-3 py-2 tracking-widest uppercase font-bold leading-snug text-white hover:bg-white hover:opacity-75 hover:text-black"
                    >
                      <AiOutlineArrowRight className="mx-2" />
                      Live Site
                    </a>
                  </li>
                  <li className="text-center ">
                    <a
                      href={projectData?.clientCode}
                      className="flex justify-center items-center border sm:px-3 py-2 tracking-widest uppercase font-bold leading-snug text-white hover:bg-white hover:opacity-75 hover:text-black"
                    >
                      <BsGithub className="mx-2" />
                      Client Site
                    </a>
                  </li>
                  {projectData?.serverCode && (
                    <li className="text-center ">
                      <a
                        href={projectData?.serverCode}
                        className="flex justify-center items-center border sm:px-3 py-2 tracking-widest uppercase font-bold leading-snug text-white hover:bg-white hover:opacity-75 hover:text-black"
                      >
                        <BsGithub className="mx-2" />
                        Server Site
                      </a>
                    </li>
                  )}
                </ul>
              </div>

              <div className=" bg-slate-800 p-5 mt-4">
                <h3 className="text-center mb-4">Have any project on mind?</h3>
                <a
                  href="https://www.linkedin.com/in/syed-monirul/"
                  className="flex justify-center items-center border sm:px-3 py-2 tracking-widest uppercase font-bold leading-snug text-white hover:bg-white hover:opacity-75 hover:text-black"
                >
                  Contact me on Linkedin
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;

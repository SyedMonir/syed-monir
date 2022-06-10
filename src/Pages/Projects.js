import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('/projects.json')
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .then(() => setLoading(false));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(projects);
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
              <div key={project._id} className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36  w-full object-cover "
                    src={project?.image}
                    alt={project?.title}
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 uppercase">
                      {project?.category}
                    </h2>
                    <h1 className="title-font text-lg font-medium  mb-3">
                      {project?.title}
                    </h1>
                    <p className="leading-relaxed mb-3">
                      {project?.description.slice(0, 100) + '. .'}
                    </p>

                    <button
                      onClick={() => navigate(`/project/${project._id}`)}
                      className=" mx-auto text-center px-6 tracking-widest py-2 flex items-center uppercase font-bold bg-slate-800 text-white hover:bg-white hover:opacity-75 hover:text-black"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;

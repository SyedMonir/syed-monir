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
        console.log(data);
        setProject(data.filter((project) => project._id === projectId));
      })
      .then(() => setLoading(false));
  }, [projectId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(project);
  return (
    <>
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
    </>
  );
};

export default Project;

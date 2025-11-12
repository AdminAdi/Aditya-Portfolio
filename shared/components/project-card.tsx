/* eslint-disable react/require-default-props */
import { Project } from '@utils/types';
import Link from 'next/link';
import Tilt from 'react-tilt';

type Props = {
  project: Project;
  filter?: {
    key: string;
    value: string | boolean;
  };
};
const ProjectCard = ({ project, filter }: Props): JSX.Element => {
  let show = false;
  if (typeof project[filter.key] !== 'object' && project[filter.key] === filter.value) {
    show = true;
  } else if (
    (Object.prototype.toString.call(project[filter.key]) === '[object Array]' &&
      project[filter.key].includes(filter.value)) ||
    filter.value === 'all'
  ) {
    show = true;
  }
  return (
    show && (
      <>
        <Tilt className="Tilt cursor-pointer" options={{ max: 25 }}>
          <div
            className="my-4 mx-8 lg:mx-16 rounded-2xl
            transition-all duration-300 transform hover:opacity-80 hover:shadow-violet-5xl">
            <Link href={`/project/${project.slug}`}>
              <div className="w-full h-64 overflow-hidden rounded-2xl">
                <img 
                  src={project.img} 
                  alt={project.name} 
                  className="w-full h-full object-cover rounded-2xl transform hover:scale-110 transition-transform duration-500"
                />
              </div>
            </Link>
          </div>
        </Tilt>
      </>
    )
  );
};

export default ProjectCard;

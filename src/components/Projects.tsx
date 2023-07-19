import Casa from './Casa';
import PinkyPromise from './PinkyPromise';
import Todo from './Todo';

function Projects() {
  return (
    <div className="project-container mx-auto pt-12">
      <Todo />
      <PinkyPromise />
      <Casa />
    </div>
  );
}
export default Projects;

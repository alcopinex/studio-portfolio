import ProjectCard from './ProjectCard';

// Shows a row for every project, or a message if there are none.
function ProjectList(props) {
  if (props.projects.length === 0) {
    return <p className="empty" role="status">No projects found. Try a different search.</p>;
  }

  return (
    <ul className="list" aria-label="Projects">
      {props.projects.map(function (project) {
        return <ProjectCard key={project.id} project={project} />;
      })}
    </ul>
  );
}

export default ProjectList;

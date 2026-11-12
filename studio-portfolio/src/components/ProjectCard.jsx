// One row in the list: a thumbnail box, the title and the description.
function ProjectCard(props) {
  const project = props.project;

  return (
    <li className="project">
      {/* Placeholder thumbnail (a box with an X, like the mock-up) */}
      <svg className="thumb" viewBox="0 0 10 10" aria-hidden="true">
        <line x1="0.5" y1="0.5" x2="9.5" y2="9.5" />
        <line x1="9.5" y1="0.5" x2="0.5" y2="9.5" />
      </svg>
      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </li>
  );
}

export default ProjectCard;

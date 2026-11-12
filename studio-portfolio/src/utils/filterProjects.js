// Returns only the projects whose title or description contains the search text.
function filterProjects(projects, searchText) {
  const text = searchText.trim().toLowerCase();

  // No search text? Show everything.
  if (text === '') {
    return projects;
  }

  return projects.filter(function (project) {
    const title = project.title.toLowerCase();
    const description = project.description.toLowerCase();
    return title.includes(text) || description.includes(text);
  });
}

export default filterProjects;

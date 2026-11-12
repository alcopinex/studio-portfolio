import { useState } from 'react';
import Header from './components/Header';
import ProjectForm from './components/ProjectForm';
import SearchBar from './components/SearchBar';
import ProjectList from './components/ProjectList';
import initialProjects from './data/initialProjects';
import filterProjects from './utils/filterProjects';

function App() {
  // State lives in App because it is the closest parent of every
  // component that needs it (form, search bar and list).
  const [projects, setProjects] = useState(initialProjects); // all projects
  const [searchText, setSearchText] = useState('');           // what the user typed

  // Called by the form when the user adds a new project.
  function addProject(newProject) {
    setProjects([newProject, ...projects]); // new project goes first
    setSearchText('');                      // clear the search so it is visible
  }

  const visibleProjects = filterProjects(projects, searchText);

  return (
    <div className="app">
      <Header />
      <main className="content">
        <ProjectForm onAddProject={addProject} />
        <section className="panel">
          <SearchBar searchText={searchText} onSearchChange={setSearchText} />
          <ProjectList projects={visibleProjects} />
        </section>
      </main>
    </div>
  );
}

export default App;

import { useState } from 'react';

// The form keeps its own state: one piece for each input.
function ProjectForm(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(event) {
    event.preventDefault(); // stop the page from reloading

    // Both fields are required.
    if (title.trim() === '' || description.trim() === '') {
      setError('Enter a title and a description.');
      return;
    }

    const newProject = {
      id: Date.now(), // a simple unique number
      title: title.trim(),
      description: description.trim(),
    };

    props.onAddProject(newProject); // send it up to App

    // Clear the form.
    setTitle('');
    setDescription('');
    setError('');
  }

  return (
    <form className="panel form" onSubmit={handleSubmit} aria-label="Add project">
      <h2>Add Project</h2>

      <label htmlFor="title">Title</label>
      <input id="title" value={title} onChange={(e) => setTitle(e.target.value)} />

      <label htmlFor="description">Description</label>
      <textarea id="description" rows="3" value={description} onChange={(e) => setDescription(e.target.value)} />

      {error && <p className="error" role="alert">{error}</p>}

      <button className="btn" type="submit">Add</button>
    </form>
  );
}

export default ProjectForm;

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProjectForm from '../components/ProjectForm';

test('shows an error and does not submit when fields are empty', async () => {
  const onAddProject = jest.fn();
  render(<ProjectForm onAddProject={onAddProject} />);
  await userEvent.click(screen.getByRole('button', { name: 'Add' }));
  expect(screen.getByRole('alert')).toBeInTheDocument();
  expect(onAddProject).not.toHaveBeenCalled();
});

test('submits the project and clears the form', async () => {
  const onAddProject = jest.fn();
  render(<ProjectForm onAddProject={onAddProject} />);
  await userEvent.type(screen.getByLabelText('Title'), '  New Work ');
  await userEvent.type(screen.getByLabelText('Description'), 'Nice');
  await userEvent.click(screen.getByRole('button', { name: 'Add' }));
  expect(onAddProject).toHaveBeenCalledWith(expect.objectContaining({ title: 'New Work', description: 'Nice' }));
  expect(screen.getByLabelText('Title')).toHaveValue('');
});

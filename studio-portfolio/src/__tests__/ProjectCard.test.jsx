import { render, screen } from '@testing-library/react';
import ProjectCard from '../components/ProjectCard';

test('shows the title and description', () => {
  render(<ul><ProjectCard project={{ id: 1, title: 'Demo', description: 'A demo project' }} /></ul>);
  expect(screen.getByRole('heading', { name: 'Demo' })).toBeInTheDocument();
  expect(screen.getByText('A demo project')).toBeInTheDocument();
});

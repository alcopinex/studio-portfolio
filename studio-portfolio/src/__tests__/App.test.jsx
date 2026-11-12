import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('shows the starting projects', () => {
  render(<App />);
  expect(screen.getByText('Harbor Coffee Rebrand')).toBeInTheDocument();
});

test('search filters the list and shows a message when nothing matches', async () => {
  render(<App />);
  const box = screen.getByLabelText(/search projects/i);
  await userEvent.type(box, 'festival');
  expect(screen.getByText('Lakeside Festival Site')).toBeInTheDocument();
  expect(screen.queryByText('Kito Bank App')).not.toBeInTheDocument();
  await userEvent.clear(box);
  await userEvent.type(box, 'nothing-here');
  expect(screen.getByRole('status')).toHaveTextContent(/no projects found/i);
});

test('adding a project through the form shows it in the list', async () => {
  render(<App />);
  await userEvent.type(screen.getByLabelText('Title'), 'Brand New Work');
  await userEvent.type(screen.getByLabelText('Description'), 'Fresh from the studio');
  await userEvent.click(screen.getByRole('button', { name: 'Add' }));
  expect(screen.getByText('Brand New Work')).toBeInTheDocument();
});

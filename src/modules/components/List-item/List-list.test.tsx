import { render, screen } from '@testing-library/react';
import List from './List-item';
import { Game } from '/src/interfaces/api-interface';

test('renders learn react link', () => {
  render(<List game={{} as Game}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

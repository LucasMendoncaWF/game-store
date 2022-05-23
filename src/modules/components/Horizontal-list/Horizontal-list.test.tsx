import { render, screen } from '@testing-library/react';
import List from './Horizontal-list';

test('renders learn react link', () => {
  render(<List title='test' items={[]}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

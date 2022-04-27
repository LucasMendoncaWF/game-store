import { render, screen } from '@testing-library/react';
import Banners from './Banners';

test('renders learn react link', () => {
  render(<Banners />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

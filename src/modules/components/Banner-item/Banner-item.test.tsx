import { render, screen } from '@testing-library/react';
import Banner from './Banner-item';

test('renders learn react link', () => {
  render(<Banner banner={{
    image: 'darksouls',
    name: 'Dark Souls 3',
    description: 'Dark Souls continues to push the boundaries with the latest, ambitious chapter in the critically-acclaimed and genre-defining series. Prepare yourself and Embrace The Darkness!',
    id: 1,
    price: 250.30,
    tags: ['RPG', 'Souls Like', 'Fantasy', 'Co-op', 'Multiplayer', 'Singleplayer', 'Action', 'Adventure'],
    availability: 'available now',
    originalPrice: 300.99,
  }}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

import { Game } from "../interfaces/api-interface";
import darksouls from '/src/assets/images/darksouls.jpg';
import eldenRing from '/src/assets/images/elden-ring.jpg';
import reVillage from '/src/assets/images/re-village.jpg';

export const games: Game[] = [
  {
    image: darksouls,
    name: 'Dark Souls 3',
    description: 'Dark Souls continues to push the boundaries with the latest, ambitious chapter in the critically-acclaimed and genre-defining series. Prepare yourself and Embrace The Darkness!',
    id: 1,
    price: 84.50,
    tags: ['RPG', 'Souls Like', 'Fantasy', 'Co-op', 'Multiplayer', 'Singleplayer', 'Action', 'Adventure'],
    availability: 'available now',
    originalPrice: 150.99,
    isBanner: true,
  },
  {
    image: reVillage,
    name: 'Resident Evil: Village',
    description: 'Experience survival horror like never before in the 8th major installment in the Resident Evil franchise - Resident Evil Village. With detailed graphics, intense first-person action and masterful storytelling, the terror has never felt more realistic.',
    id: 1,
    price: 45,
    tags: ['Horror', 'Survival', 'SinglePlayer', 'Action', 'Adventure'],
    originalPrice: 90.99,
    isBanner: true,
  },
  {
    image: eldenRing,
    name: 'Elden Ring',
    description: 'THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between',
    id: 1,
    price: 250.30,
    tags: ['RPG', 'Souls Like', 'Fantasy', 'Co-op', 'Multiplayer', 'Singleplayer', 'Action', 'Adventure'],
    availability: new Date('11-20-2022'),
    originalPrice: 300.99,
    isBanner: true,
  }
];

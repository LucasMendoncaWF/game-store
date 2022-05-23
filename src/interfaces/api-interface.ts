export interface GameBanner {
  image?: string;
  name: string;
  description?: string;
  id: number;
  price?: number;
  tags?: string[];
  originalPrice?: number;
  availability?: 'available now' | 'available soon' | Date;
}

export interface GameDetails {
  requirements: {
    OS: string;
    Processor: string;
    Memory: string;
    Graphics: string;
    DirectX: string;
    Network: string;
    Storage: string;
    SoundCard: string;
    AdditionalNotes: string;
  },
}

export interface Game {
  image?: string;
  name: string;
  description?: string;
  id: number;
  price?: number;
  tags?: string[];
  originalPrice?: number;
  discount?: number;
  availability?: 'available now' | 'available soon' | Date;
  isBanner?: boolean;
  users: number;
  releaseDate?: Date;
  requirements?: {
    OS: string;
    Processor: string;
    Memory: string;
    Graphics: string;
    DirectX: string;
    Network: string;
    Storage: string;
    SoundCard: string;
    AdditionalNotes: string;
  },
}
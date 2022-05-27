import { Game, GameBanner } from "../interfaces/api-interface";
import { games } from "./mocks"

export const GamesService = {

  getBanners: function(): GameBanner[] {
    return games.filter(game => game.isBanner);
  },

  getRecents: function(): Game[] {
    const pastDate = new Date();
    pastDate.setMonth(pastDate.getMonth() - 2);
    return games.filter(game => game.availability && (game.availability >= pastDate || game.availability === 'available now'));
  },

  getMostDowloaded: function(): Game[] {
    return games.sort((gameA, gameB) => gameA.users > gameB.users ? 1 : 0 );
  },
}
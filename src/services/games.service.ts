import { GameBanner } from "../interfaces/api-interface";
import { games } from "./mocks"

export const GamesService = {

  getBanners: function(): GameBanner[] {
    return games.filter(game => game.isBanner);
  }
}
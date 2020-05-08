import { OQB } from 'OQB';
import Game from './game';
import User from './user';
import GameHasPlayer from './game_has_player';
import GameTurn from './game_turn';
import GameTurnHasPlayer from './game_turn_has_player';
import Order from './order';

export default function (oqb: OQB) {
    Game(oqb);
    User(oqb);
    GameHasPlayer(oqb);
    GameTurn(oqb);
    GameTurnHasPlayer(oqb);
    Order(oqb);
}

import { OQB } from 'OQB';
import Game from './game';
import User from './user';
import GameHasPlayer from './game_has_player';

export default function (oqb: OQB) {
    Game(oqb);
    User(oqb);
    GameHasPlayer(oqb);
}

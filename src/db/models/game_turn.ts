/* eslint-disable @typescript-eslint/camelcase */
import { Model, OQB, DataType } from 'oqb';

export class GameTurn extends Model {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    public static assocate(): void {
        GameTurn.belongsTo({ to: this.oqb.models.game, as: 'game', foreignKey: 'game_id' });
        GameTurn.hasMany({
            to: this.oqb.models.gameTurnHasPlayer,
            as: 'player_turn',
            foreignKey: /*composite of the turn and the game??.*/ 'fk_game_turn-game_turn_has_player'
        });
    }
}

export default function init(oqb: OQB): void {
    GameTurn.init(
        oqb,
        'game_turn',
        {
            game_id: { primary: true, type: DataType.INTEGER },
            turn_number: { primary: true, type: DataType.INTEGER }
        },
        { timeStamps: false }
    );
}

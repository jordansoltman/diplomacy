/* eslint-disable @typescript-eslint/camelcase */
import { Model, OQB, DataType } from 'oqb';

export class GameTurnHasPlayer extends Model {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    public static assocate(): void {}
}

export default function init(oqb: OQB): void {
    GameTurnHasPlayer.init(
        oqb,
        'game_turn_has_player',
        {
            game_id: { primary: true, type: DataType.INTEGER },
            game_player: { primary: true, type: DataType.STRING },
            turn_number: { primary: true, type: DataType.INTEGER },
            state: { type: DataType.STRING, nullable: false }
        },
        { timeStamps: false }
    );
}

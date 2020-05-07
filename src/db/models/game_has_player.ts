/* eslint-disable @typescript-eslint/camelcase */
import { Model, OQB, DataType } from 'oqb';

export class GameHasPlayer extends Model {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    public static assocate(): void {}
}

export default function init(oqb: OQB): void {
    GameHasPlayer.init(
        oqb,
        'game_has_player',
        {
            player: { primary: true, type: DataType.STRING },
            game_id: { primary: true, type: DataType.INTEGER }
        },
        { timeStamps: false }
    );
}

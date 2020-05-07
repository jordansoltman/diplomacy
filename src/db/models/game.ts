/* eslint-disable @typescript-eslint/camelcase */
import { Model, OQB, DataType } from 'oqb';

export class Game extends Model {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    public static associate(): void {
        Game.belongsToMany({
            to: this.oqb.models.user,
            toKey: 'player',
            through: this.oqb.models.game_has_player,
            fromKey: 'game_id',
            as: 'game_players'
        });
    }
}

export default function init(oqb: OQB): void {
    Game.init(
        oqb,
        'game',
        {
            id: { primary: true, type: DataType.INTEGER },
            name: { type: DataType.STRING },
            interval_minutes: { type: DataType.INTEGER },
            password: { type: DataType.STRING },
            win_condition: { type: DataType.INTEGER },
            num_players: { type: DataType.INTEGER }
        },
        { timeStamps: true }
    );
}

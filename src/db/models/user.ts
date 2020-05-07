import { OQB, Model, DataType } from 'oqb';

class User extends Model {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    public static associate(): void {
        User.belongsToMany({
            to: this.oqb.models.game,
            toKey: 'game_id',
            through: this.oqb.models.game_has_player,
            fromKey: 'player',
            as: 'games'
        });
    }
}

export default function init(oqb: OQB): void {
    User.init(
        oqb,
        'user',
        {
            username: { type: DataType.STRING, primary: true },
            password: { type: DataType.STRING },
            email: { type: DataType.STRING }
        },

        { timeStamps: true }
    );
}

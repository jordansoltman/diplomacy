/* eslint-disable @typescript-eslint/camelcase */
import { Model, OQB, DataType } from 'oqb';

export class Order extends Model {
    public static associate(): void {}
}

export default function init(oqb: OQB): void {
    Order.init(
        oqb,
        'order',
        {
            game_player: { type: DataType.STRING, primary: true },
            game_id: { type: DataType.INTEGER, primary: true },
            turn_number: { type: DataType.INTEGER, primary: true },
            type: { type: DataType.STRING },
            territory: { type: DataType.STRING, primary: true },
            territory_secondary: { type: DataType.STRING },
            territory_tertiary: { type: DataType.STRING },
            convoy: { type: DataType.BOOLEAN },
            unit: { type: DataType.STRING }
        },
        {
            timeStamps: false
        }
    );
}

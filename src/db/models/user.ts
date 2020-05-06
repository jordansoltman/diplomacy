import { OQB, Model, DataType } from 'oqb';

class User extends Model {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    public static associate(): void {}
}

export default function init(oqb: OQB): void {
    User.init(
        oqb,
        'User',
        {
            username: { type: DataType.STRING, primary: true, required: true },
            password: { type: DataType.STRING, required: true },
            email: { type: DataType.STRING, required: true }
        },

        { timeStamps: true }
    );
}

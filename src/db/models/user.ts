import { Sequelize, DataTypes } from 'sequelize';
import { InitializableModel } from '../InitializeableModel';

export default class User extends InitializableModel {
    public username!: string;
    public email!: string;
    public password!: string;

    // static associate() { }

    static initialize(sequelize: Sequelize): void {
        User.init(
            {
                username: { type: DataTypes.STRING, primaryKey: true },
                email: DataTypes.STRING,
                password: DataTypes.STRING
            },
            { sequelize }
        );
    }
}

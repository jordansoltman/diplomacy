import { Sequelize, DataTypes } from 'sequelize';
import { InitializableModel } from '../InitializeableModel';

export default class Game extends InitializableModel {
    public username!: string;
    public email!: string;

    // static associate() { }

    static initialize(sequelize: Sequelize): void {
        Game.init(
            {
                username: { type: DataTypes.STRING, primaryKey: true },
                name: DataTypes.STRING
            },
            { sequelize }
        );
    }
}

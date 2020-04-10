import { Model, Sequelize } from 'sequelize';

export class InitializableModel extends Model {
    static associate() {};
    static initialize(sequelize: Sequelize) {};
}
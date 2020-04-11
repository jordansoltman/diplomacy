/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Model, Sequelize } from 'sequelize';

export class InitializableModel extends Model {
    static associate(): void {}
    static initialize(sequelize: Sequelize): void {}
}

'use strict';
module.exports = (sequelize, DataTypes) => {
    const variation = sequelize.define(
        'variation',
        {
            name: DataTypes.STRING
        },
        {}
    );
    variation.associate = function (models) {
        // associations can be defined here
    };
    return variation;
};

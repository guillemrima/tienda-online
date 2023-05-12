const useBcrypt = require('sequelize-bcrypt');

module.exports = function(sequelize, DataTypes) {
    const Cart = sequelize.define('Cart', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
          },
          clientId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
              model: 'client',
              key: 'id'
            }
          },
          fingerprintId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
              model: 'fingerprint',
              key: 'id'
            }
          }
    }, {
        sequelize,
        tableName: 'Carts',
        timestamps: true,
        paranoid: true,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "id" },
                ]
            }
        ]
    });


    Cart.associate = function(models) {
    };

    return Cart;
};
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      cartId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Cart',
          key: 'id'
        },
        allowNull: false
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Product',
          key: 'id'
        }
      },
      productName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Por favor, ingresa el nombre del producto.'
          }
        }
      },
      basePrice: {
        type: DataTypes.DECIMAL(6, 2),
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Por favor, ingresa el precio base.'
          }
        }
      },
      taxPrice: {
        type: DataTypes.DECIMAL(6, 2)
      },
      unitOfMeasurement: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Por favor, ingresa la unidad de medida.'
          }
        }
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Por favor, ingresa la cantidad.'
          }
        }
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      deletedAt: {
        type: DataTypes.DATE
      }
    },
    {
      sequelize,
      modelName: 'CartDetail',
      tableName: 'cart_details',
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
        },
        {
          name: "foreign_cart",
          unique: true,
          using: "BTREE",
          fields: [
              { name: "cartId" },
          ]
      },
      {
        name: "foreign_product",
        unique: true,
        using: "BTREE",
        fields: [
            { name: "product" },
        ]
    }
    ]
    }
  );

  Cart.associate = function(models) {
        Cart.belongsTo(models.Cart, {
          foreignKey: 'cartId',
          as: 'parentCart',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        });

        Cart.belongsTo(models.Product, {
          foreignKey: 'productId',
          as: 'product',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        });
};

  return CartDetail;
};

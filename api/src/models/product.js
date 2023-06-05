module.exports = function(sequelize, DataTypes) {
    const Product = sequelize.define('Product', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        productCategoryId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'ProductCategory',
                key: 'id'  
          }
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "name".'
                }
            }
        },
        featured: {
            type: DataTypes.BOOLEAN,
            references: {
                model: 'feature',
                key: 'id'  
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        deletedAt: {
            type: DataTypes.DATE
        }
    }, {
        sequelize,
        tableName: 'prices',
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
                name: "foreign_productCategory",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "productCategoryId" },
                ]
            }
        ]
    });

    Product.associate = function(models) {
        Product.belongsTo(models.ProductCategory, { foreignKey: 'productCategoryId' });
        Product.belongsTo(models.Feature, { foreignKey: 'featured', onUpdate: 'CASCADE', onDelete: 'SET NULL' });

        Product.hasMany(models.Cart, {
            foreignKey: 'productId',
            as: 'carts',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
          });

          Product.hasMany(models.Price, {
            foreignKey: 'productId',
            as: 'prices',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
          });

          Product.hasMany(models.ReturnDetail, {
            foreignKey: 'productId',
            as: 'returnDetails',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
          });

          Product.hasMany(models.SaleDetail, {
            foreignKey: 'productId',
            as: 'saleDetails',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
          });
          
      };
    

    return Product;
};
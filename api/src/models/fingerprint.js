module.exports = function(sequelize, DataTypes) {
    const Fingerprint = sequelize.define('Fingerprint', {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      customerId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Customer',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      fingerprint: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Por favor, rellena el campo "Fingerprint".'
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
    }, {
      sequelize,
      tableName: 'fingerprints',
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
          name: "foreign_customer",
          unique: true,
          using: "BTREE",
          fields: [
              { name: "customerId" },
          ]
      }
    ]
    });
  
    Fingerprint.associate = function(models) {
      Fingerprint.belongsTo(models.Customer, { foreignKey: 'customerId' });
    };
    
  
    return Fingerprint;
  };
  
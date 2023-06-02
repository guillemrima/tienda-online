module.exports = function(sequelize, DataTypes) {
    const SentEmail = sequelize.define('SentEmail', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      customerId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Customer',
          key: 'id'
        },
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Por favor, rellena el campo "customerId".'
          }
        }
      },
      emailId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Email',
          key: 'id'
        },
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Por favor, rellena el campo "emailId".'
          }
        }
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
      tableName: 'sent_emails',
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
    },
    {
      name: "foreign_email",
      unique: true,
      using: "BTREE",
      fields: [
          { name: "emailId" },
      ]
  },
      ]
    });
  
    SentEmail.associate = function(models) {
      SentEmail.belongsTo(models.Customer, { foreignKey: 'customerId' });
      SentEmail.belongsTo(models.Email, { foreignKey: 'emailId' });
    };
    
    return SentEmail;
  };
  
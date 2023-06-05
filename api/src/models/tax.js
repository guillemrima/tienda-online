module.exports = function(sequelize, DataTypes) {
  const Tax = sequelize.define('Tax', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Tipo".'
        }
      }
    },
    current: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Actual".'
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
    tableName: 'taxes',
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
  Tax.associate = function(models) {
    Tax.hasMany(models.Price, {
      foreignKey: 'taxId',
      as: 'prices',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  };
  
  return Tax;
};

module.exports = function(sequelize, DataTypes) {
    const Tax = sequelize.define('Tax', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      type: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      current: {
        allowNull: false,
        type: DataTypes.BOOLEAN
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
            { name: "id" }
          ]
        }
      ]
    });
  
    Tax.associate = function(models) {
      // Asociaciones de la entidad Tax con otras entidades
    };
  
    return Tax;
  };
  
module.exports = function (sequelize, DataTypes) {
  const Slider = sequelize.define('Slider', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Nombre".'
        }
      }
    },
    visible: {
      type: DataTypes.BOOLEAN
    }
  }, {
    sequelize,
    tableName: 'sliders',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'id' }
        ]
      }
    ]
  })

  Slider.associate = function (models) {

  }

  return Slider
}

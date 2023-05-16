const useBcrypt = require('sequelize-bcrypt');

module.exports = function(sequelize, DataTypes) {
  const ImageConfiguration = sequelize.define('ImageConfiguration', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    entity: {
      allowNull: false,
      type: DataTypes.STRING
    },
    directory: {
      allowNull: false,
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.STRING
    },
    content: {
      type: DataTypes.STRING
    },
    grid: {
      allowNull: false,
      type: DataTypes.STRING
    },
    contentAccepted: {
      allowNull: false,
      type: DataTypes.STRING
    },
    extensionConversion: {
      allowNull: false,
      type: DataTypes.STRING(4)
    },
    widthPx: {
      type: DataTypes.INTEGER(4).UNSIGNED
    },
    heightPx: {
      type: DataTypes.INTEGER(4).UNSIGNED
    },
    quality: {
      allowNull: false,
      type: DataTypes.INTEGER(3).UNSIGNED
    }
  }, {
    sequelize,
    tableName: 'image_configurations',
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

  ImageConfiguration.associate = function(models) {
  };

  return ImageConfiguration;
};

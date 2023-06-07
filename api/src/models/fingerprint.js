module.exports = function (sequelize, DataTypes) {
  const Fingerprint = sequelize.define('Fingerprint', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    customerId: {
      allowNull: true,
      type: DataTypes.INTEGER,
      references: {
        model: 'Customer',
        key: 'id'
      }
    },
    fingerprint: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Fingerprint".'
        }
      }
    }
  }, {
    sequelize,
    tableName: 'fingerprints',
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
      },
      {
        name: 'fingerprint_customerId_fk',
        using: 'BTREE',
        fields: [
          { name: 'customerId' }
        ]
      }
    ]
  })

  Fingerprint.associate = function (models) {
    Fingerprint.belongsTo(models.Customer, { as: 'customer', foreignKey: 'customerId' })
    Fingerprint.hasMany(models.Cart, { as: 'carts', foreignKey: 'fingerprintId' })
    Fingerprint.hasMany(models.Contact, { as: 'contacts', foreignKey: 'fingerprintId' })
  }

  return Fingerprint
}

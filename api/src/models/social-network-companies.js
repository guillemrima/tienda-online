module.exports = function (sequelize, DataTypes) {
  const SocialNetworksCompany = sequelize.define('SocialNetworksCompany', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    companyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "companyId".'
        }
      },
      references: {
        model: 'Company',
        key: 'id'
      }
    },
    socialNetworkId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "socialNetworkId".'
        }
      },
      references: {
        model: 'SocialNetwork',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'social_networks_companies',
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
        name: 'socialNetworksCompany_companyId_fk',
        using: 'BTREE',
        fields: [
          { name: 'companyId' }
        ]
      },
      {
        name: 'socialNetworksCompany_socialNetworkId_fk',
        using: 'BTREE',
        fields: [
          { name: 'socialNetworkId' }
        ]
      }
    ]
  })

  SocialNetworksCompany.associate = function (models) {

  }

  return SocialNetworksCompany
}

module.exports = function(sequelize, DataTypes) {
    const SocialNetworksCompanies = sequelize.define('SocialNetworksCompanies', {
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
              },
              onUpdate: 'CASCADE',
              onDelete: 'CASCADE'
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
              },
              onUpdate: 'CASCADE',
              onDelete: 'CASCADE'
        },
    }, {
        sequelize,
        tableName: 'social_networks_companies',
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
                name: "foreign_company",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "companyId" },
                ]
            },
            {
                name: "foreign_socialNetwork",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "socialNetworkId" },
                ]
            },
        ]
    });

    SocialNetworksCompanies.associate = function(models) {
        // Define las asociaciones con otros modelos aquí
        SocialNetworksCompanies.belongsTo(models.SocialNetwork), { foreignKey: 'socialNetworkId'}
    };

    return SocialNetworksCompanies;
};

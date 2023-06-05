module.exports = function(sequelize, DataTypes) {
    const SocialNetwork = sequelize.define('SocialNetwork', {
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
        baseUrl: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "Base URL".'
                }
            }
        },
    }, {
        sequelize,
        tableName: 'social_networks',
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

    SocialNetwork.associate = function(models) {
        // Define las asociaciones con otros modelos aquí
        SocialNetwork.hasMany(models.SocialNetworksCompanies, {
            foreignKey: 'socialNetworkId',
            as: 'companies',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
          });
          
          SocialNetwork.hasMany(models.SocialNetworkEmployee, {
            foreignKey: 'socialNetworkId',
            as: 'employees',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
          });
          
    };

    return SocialNetwork;
};

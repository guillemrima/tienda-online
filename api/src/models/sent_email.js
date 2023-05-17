module.exports = (sequelize, DataTypes) => {
  const SentEmail = sequelize.define('SentEmail', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    customerId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    emailId: {
      allowNull: false,
      type: DataTypes.INTEGER,

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
    tableName: 'sent_emails',
    timestamps: true,
    paranoid: true
  });

  SentEmail.associate = function(models) {
    // Define associations here
    // SentEmail.belongsTo(models.Customer, { foreignKey: 'customerId' });
    // SentEmail.belongsTo(models.Email, { foreignKey: 'emailId' });
  };

  return SentEmail;
};

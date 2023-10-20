const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('Team', {

    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true
  }
  );
};
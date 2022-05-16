const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define(
    'genres',
    {
      image: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUrl: true,
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
      modelName: 'Genres',
    }
  );
};

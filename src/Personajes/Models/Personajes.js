const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define(
    'personajes',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      age: {
        type: DataTypes.INTEGER,
      },
      weight: {
        type: DataTypes.DECIMAL,
      },
      history: {
        type: DataTypes.TEXT,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUrl: true,
        },
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
};

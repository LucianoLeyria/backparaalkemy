const { DataTypes, Sequelize } = require('sequelize');
const { hashPw } = require('../../hash');

module.exports = (sequelize) => {
  return sequelize.define(
    'user',
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      salt: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
          this.setDataValue('salt', hashPw(value));
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
        created: {
          type: DataTypes.DATEONLY,
          defaultValue: Sequelize.NOW,
        },
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
};

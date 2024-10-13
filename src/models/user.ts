import { DataTypes } from "sequelize";
import sequelize from ".";

const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    type: {
        type: DataTypes.ENUM('admin', 'customer'),
      },
    password: {
        type: DataTypes.STRING
    }
  },
  {
    tableName: "users"
  }
);

export default User;
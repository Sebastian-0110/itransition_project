const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const User = require("./user-model");

const Form = sequelize.define(
	"Form",
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},

		userId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: "User",
				key: "id",
			}
		},

		hash: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},

		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{ tableName: "forms" }
);

Form.belongsTo(User);
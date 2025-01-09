const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Question = sequelize.define(
	"Questions",
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},

		formId: {
			type: DataTypes.UUID,
			allowNull: false,
			references: {
				model: "Form",
				key: "id",
			},
		},

		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},

		required: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: true
		},

		disabled: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false,
		}
	},
	{ tableName: "questions" }
)
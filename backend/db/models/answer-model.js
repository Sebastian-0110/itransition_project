const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Answer = sequelize.define(
	"Answer",
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},

		questionId: {
			type: DataTypes.UUID,
			allowNull: false,
			references: {
				model: "Question",
				key: "id",
			},
		},

		text: {
			type: DataTypes.STRING,
			allowNull: true,
		}

	}, { tableName: "answers" }
)
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const { sequelize } = require("../../../db");
require("dotenv").config();


const store = new SequelizeStore({
	db: sequelize,
});

const sessionOptions = {
	secret: process.env.SECRET_KEY,
	cookie: {},
	store: store,
	resave: false,
	saveUninitialized: false,
	httpOnly: true,
	sameSite: true,
}

if (process.env.NODE_ENV === "production") {
	sessionOptions.cookie.secure = true;
}

const sessionMiddleware = session(sessionOptions);

module.exports = sessionMiddleware;
const express = require("express");
const morgan = require("morgan");
const { passport, session } = require("./middleware");
const authRoutes = require("./routes/auth");
require("dotenv").config();


const app = express();
const port = 5000;

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session);
app.use(passport.authenticate("session"));

app.use("/auth", authRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
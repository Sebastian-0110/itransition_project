const express = require("express");
const morgan = require("morgan");
const path = require("path");
const { passport, session } = require("./middleware");
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");
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
app.use("/admin", adminRoutes);

app.use(express.static(path.join(__dirname, "../frontend/dist"))); // Adjust path as needed

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
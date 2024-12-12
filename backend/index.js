const express = require("express");
const { passport, session } = require("./middleware");
const authRoutes = require("./routes/auth");


const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session);
app.use(passport.authenticate("session"));

app.use("/auth", authRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
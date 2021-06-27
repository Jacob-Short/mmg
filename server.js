const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

app.get('/', (req, res) => res.send('API Up and Running!'));

//Init Middleware
// app.use(express.json({ extended: false }));

app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));
// app.use("/api/like", require("./routes/api/like"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server up and running on PORT ${PORT}`));

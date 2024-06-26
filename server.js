const express = require("express");
const app = express();

const dbConfig = require("./db");
const roomsRoute = require("./routes/roomRoute");
const usersRoute = require("./routes/userRoute");
const bookingRoute = require("./routes/bookingRoute");
const cors = require("cors");
app.use(cors({
    origin: "https://suitespot-flame.vercel.app",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  }));
app.use(express.json());
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);
app.use("/api/bookings", bookingRoute);

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(PORT, () => console.log(`Node app listening on ${PORT} port!`));

module.exports = app; // Using CommonJS syntax to export 'app'

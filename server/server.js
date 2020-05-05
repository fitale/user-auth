const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const userRoute = require("./routes/users");
app.use("/users", userRoute);

const port = 8080;
app.listen(port, () => console.log(`app is listening on PORT: ${port}`));

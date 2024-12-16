const express = require("express");
const cors = require("cors");
require("dotenv").config(); // Variables de entorno
const routes = require("./routes/recordRoutes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/records", routes);

// Puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));

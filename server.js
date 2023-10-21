//Instancia paquetes que se usarán
const express = require("express");
const skillRoutes = require('./routes/skillRoutes')
const companyRoutes = require('./routes/companyRoutes')
const personRoutes = require('./routes/personRoutes')
const contractRoutes = require('./routes/contractRoutes')
const bodyParser = require("body-parser");
const authRoutes = require('./routes/authRoutes');
const { authenticateToken } = require('./middlewares/authMiddleware');

//Se crea una constante para llamar al paquete instanciado
const app = express();

app.use(bodyParser.json());

//Instancias rutas
app.use("/api/skill", authenticateToken, skillRoutes);

//Ruta de company
//...
app.use("/api/company", authenticateToken, companyRoutes);

//Ruta de person
app.use("/api/person", authenticateToken, personRoutes);

//Ruta de contract
app.use("/api/contract", authenticateToken, contractRoutes);

// // Rutas de autenticación
app.use('/api/auth', authRoutes);

//Incia el servicio || servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});

// Manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
  });
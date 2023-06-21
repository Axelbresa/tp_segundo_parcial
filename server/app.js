// Imports
const cors = require('cors');
const express = require('express');

const path = require('path');

const app = express();


// Middlewares
// TODO: Implementar middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan());


app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api', require('./routes/reserva.routes'));

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404

// Starting the server
const PUERTO=process.env.PORT || 45635;
app.listen(45635, () => {
    console.log('Server on port xxxx')}
    );
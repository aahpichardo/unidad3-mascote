const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();
const port = 5000;

app.use(cors({
  origin: '*', 
  credentials: true,
}));
app.use(express.json());

app.use('/api', authRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
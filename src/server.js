import {createPool} from 'mysql2/promise'
import  express  from 'express';

const DB_HOST = process.env.DB_HOST|| 'localhost'
const DB_USER = process.env.DB_USER || 'localhost'
const DB_PASSWORD = process.env.DB_PASSWORD || ''
const DB_NAME = process.env.DB_NAME || 'db_alpha'
const DB_PORT = process.env.port || 3309



// Crea una instancia de la aplicación Express
const app = express();

// Configura el puerto en el que escuchará el servidor
const PORT = process.env.PORT || 3000;


export const conn = createPool({
  user: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: DB_PORT,
  database: DB_NAME
})



// ruta de ejemplo
app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/ping', (req, res) => {
  pool.query()
  res.send('Home');
});


// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express funcionando en el puerto ${PORT}`);
});

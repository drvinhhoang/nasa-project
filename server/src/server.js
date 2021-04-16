const http = require('http');

const app = require('./app');
const { mongoConnect } = require('./services/mongo');
const { loadPlanetsData } = require('./models/planets.model');

const PORT = process.env.PORT || 8000;

// Update below to match your own MongoDB connection string.
const MONGO_URL = 'mongodb+srv://drvinhhoang:Hoangvinh93@nasacluster.kx8xc.mongodb.net/?retryWrites=true&w=majority&appName=NASAClustery';

const server = http.createServer(app);

async function startServer() {
  await mongoConnect();
  await mongoose.connect(MONGO_URL);
  await loadPlanetsData();
  
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();

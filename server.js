const express = require('express')
const dotenv = require('dotenv')
const connectDb = require('./config/database');
const routeCandidats = require('./routes/candidatsRoute');
const routeCentreEPS = require('./routes/centreEPSRoute');
const routeTerrain = require('./routes/terrainRoute');
const routeExaminateur = require('./routes/examinateurRoute');
const routeGroupe = require('./routes/groupeRoute');
const routeSport = require('./routes/sportRoute');
const routeTypeSport = require('./routes/typeSportRoute');




// charger le vaariable d'environment
dotenv.config({ path: "./config/config.env" });


const app = express();

app.use(express.json());
connectDb();

app.use('/candidats',routeCandidats)
app.use('/centreEPS',routeCentreEPS)
app.use('/terrain',routeTerrain)
app.use('/examinateur',routeExaminateur)
app.use('/groupe',routeGroupe)
app.use('/sport',routeSport)
app.use('/typeSport',routeTypeSport)




const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Le serveur est lancer ne mode  sur le port ${PORT}`
  )
);
// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  server.close(() => process.exit(1));
});

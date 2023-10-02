const express = require('express')
const {ajouterTerrain, terrainList,terrainDetails, deleteTerrain, updateTerrain} = require('../controller/terrainController')
const routeTerrain = express.Router()

routeTerrain.route('/').get(terrainList).post(ajouterTerrain)
routeTerrain.route('/:id').get(terrainDetails).delete(deleteTerrain).put(updateTerrain)

module.exports = routeTerrain;
const express = require('express')
const { addTypeSport, typeSportList,typeSportDetails, deleteTypeSport, updateTypeSport } = require('../controller/typeSportController')

const routeTypeSport = express.Router()

routeTypeSport.route('/').get(typeSportList).post(addTypeSport)
routeTypeSport.route('/:id').get(typeSportDetails).delete(deleteTypeSport).put(updateTypeSport)

module.exports = routeTypeSport;
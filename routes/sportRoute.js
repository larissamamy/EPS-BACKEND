const express = require ('express')
const { addSport, sportList, sportDetails, deleteSport,updateSport } = require('../controller/sportController')
const routeSport = express.Router()

routeSport.route('/').get(sportList).post(addSport)
routeSport.route('/:id').get(sportDetails).delete(deleteSport).put(updateSport)

module.exports = routeSport;
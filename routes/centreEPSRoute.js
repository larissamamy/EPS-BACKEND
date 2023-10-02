const express = require('express')
const { ajouterCentreEPS, centreEPSList,centreEPSDetails, deleteCentreEPS, updateCentreEPS} = require('../controller/centreEPSController')
const routeCentreEPS = express.Router()

routeCentreEPS.route('/').get(centreEPSList).post(ajouterCentreEPS)
routeCentreEPS.route('/:id').get(centreEPSDetails).delete(deleteCentreEPS).put(updateCentreEPS)

module.exports = routeCentreEPS;
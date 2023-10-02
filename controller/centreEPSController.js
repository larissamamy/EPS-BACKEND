const CentreEPS = require('../models/centreEPS')
//ajout CentreEPS
exports.ajouterCentreEPS = async (req, res) => {
    try {
        const lieu = req.body.lieu;
        if (!lieu ||lieu === '') {
            res.status(404).json({ success: false, message: `Tous les champs sont requis` });
        } else {
            const addCentreEPS = await CentreEPS.create({lieu })
            if (addCentreEPS) {
                res.status(201).json({ success: true, message: `Ajout reussi` });
            } else {
                res.status(400).json({ success: false, message: `Erreur d'ajout` });
            }
        }
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//Obtenir list centre EPS

exports.centreEPSList = async (req, res) => {
    try {
        const centreEPS = await CentreEPS.find()
        res.status(201).json({ success: true, data: centreEPS });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//Obtenir detail centre EPS

exports.centreEPSDetails = async (req, res) => {
    const centreEPSId = req.params.id;
    try {
        const centreEPS = await CentreEPS.findById(centreEPSId)
        res.status(201).json({ success: true, data: centreEPS });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

// Supprimer le centre eps

exports.deleteCentreEPS = async (req, res) => {
    const centreEPSId = req.params.id;
    try {
        const deleteCentreEPS = await CentreEPS.findByIdAndDelete(centreEPSId)
        if (deleteCentreEPS) {
            res.status(201).json({ success: true, message: 'Suppression reussi' });
        } else {
            res.status(400).json({ success: false, message: `Impossible de supprimer le centreEPS dont l'id est : ${centreEPSId}` });
        }
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

 // modifier le centre eps

exports.updateCentreEPS = async (req, res) => {
    const centreEPSId = req.params.id;
    try {
        const centreEPS = await CentreEPS.findById(centreEPSId);
        if (!centreEPS) {
            res.status(400).json({
                success: false,
                message: `Le centreEPS portant l'id ${centreEPSId} n'a pas ete trouve`,
            });
        }
        const lieu = req.body.lieu;
        const updateCentreEPS = await CentreEPS.findByIdAndUpdate(centreEPSId, {
            lieu ,
            
        });
        if (updateCentreEPS) {
            res.status(200).json({
                success: true,
                updateCentreEPS,
                message: "Modification effectue avec success",
            });
        } else {
            res.status(400).json({
                success: false,
                message: "Erreur de modification",
            });
        }

    } catch (error) {
        res.status(400).json({
            success: false,
            message: `Le centreEPS portant l'id ${centreEPSId} n'a pas ete trouve`,
        });
    }
}
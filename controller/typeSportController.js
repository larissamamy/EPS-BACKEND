const TypeSport = require('../models/typeSport')
//ajout typeSport
exports.addTypeSport = async (req, res) => {
    try {
        const nom_type = req.body.nom_type;
        const candidats = req.body.candidats;
        const sport = req.body.sport;
        if (! nom_type|| nom_type === '') {
            res.status(404).json({ success: false, message: `Tous les champs sont requis` });
        } else {
            const addTypeSport = await TypeSport.create({nom_type,candidats,sport})
            if (addTypeSport) {
                res.status(201).json({ success: true, message: `Ajout reussi` });
            } else {
                res.status(400).json({ success: false, message: `Erreur d'ajout` });
            }
        }
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}
//Obtenir list TypeSport

exports.typeSportList = async (req, res) => {
    try {
        const typeSport = await TypeSport.find()
        res.status(201).json({ success: true, data: typeSport });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

 //Obtenir detail type sport

exports.typeSportDetails = async (req, res) => {
    const typeSportId = req.params.id;
    try {
        const typeSport = await TypeSport.findById(typeSportId)
        res.status(201).json({ success: true, data: typeSport });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

 // Supprimer le type sport

exports.deleteTypeSport = async (req, res) => {
    const typeSportId = req.params.id;
    try {
        const deleteTypeSport = await TypeSport.findByIdAndDelete(typeSportId)
        if (deleteTypeSport) {
            res.status(201).json({ success: true, message: 'Suppression reussi' });
        } else {
            res.status(400).json({ success: false, message: `Impossible de supprimer le typeSport dont l'id est : ${typeSportId}` });
        }
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
 }

 // modifier le type sport

 exports.updateTypeSport = async (req, res) => {
    const typeSportId = req.params.id;
    try {
        const typeSport = await TypeSport.findById(typeSportId);
        if (!typeSport) {
            res.status(400).json({
                success: false,
                message: `Le typeSport portant l'id ${typeSportId} n'a pas ete trouve`,
            });
        }
        const nom_type = req.body.nom_type;
        const  candidats = req.body. candidats;
        const  sport = req.body. sport;

        const updateTypeSport = await TypeSport.findByIdAndUpdate(typeSportId, {
            nom_type,
            candidats,
            sport,
        });
        if (updateTypeSport) {
            res.status(200).json({
                success: true,
                updateTypeSport,
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
            message: `Le typeSport portant l'id ${typeSportId} n'a pas ete trouve`,
        });
    }
}
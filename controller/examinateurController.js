const Examinateur = require('../models/examinateur')
//ajout Examinateur

exports.addExaminateur = async (req, res) => {
    try {
        const nom_examinateur = req.body.nom_examinateur;
        if (! nom_examinateur|| nom_examinateur === '') {
            res.status(404).json({ success: false, message: `Tous les champs sont requis` });
        } else {
            const addExaminateur = await Examinateur.create({ nom_examinateur })
            if (addExaminateur) {
                res.status(201).json({ success: true, message: `Ajout reussi` });
            } else {
                res.status(400).json({ success: false, message: `Erreur d'ajout` });
            }
        }
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
// List examinateur

exports.examinateurList = async (req, res) => {
    try {
        const examinateur = await Examinateur.find()
        res.status(201).json({ success: true, data: examinateur });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

 //detail examinateur

exports.examinateurDetails = async (req, res) => {
    const examinateurId = req.params.id;
    try {
        const examinateur = await Examinateur.findById(examinateurId)
        res.status(201).json({ success: true, data: examinateur });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

// // Suppression examinateur

exports.deleteExaminateur = async (req, res) => {
    const examinateurId = req.params.id;
    try {
        const deleteExaminateur = await Examinateur.findByIdAndDelete(examinateurId)
        if (deleteExaminateur) {
            res.status(201).json({ success: true, message: 'Suppression reussi' });
        } else {
            res.status(400).json({ success: false, message: `Impossible de supprimer le examinateur dont l'id est : ${examinateurId}` });
        }
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

exports.updateExaminateur = async (req, res) => {
    const examinateurId = req.params.id;
    try {
        const examinateur = await Examinateur.findById(examinateurId);
        if (!examinateur) {
            res.status(400).json({
                success: false,
                message: `Le examinateur portant l'id ${examinateurId} n'a pas ete trouve`,
            });
        }
        const nom_examinateur = req.body.nom_examinateur;
        const updateExaminateur = await Examinateur.findByIdAndUpdate(examinateurId, {
             nom_examinateur ,    
        });
        if (updateExaminateur) {
            res.status(200).json({
                success: true,
                updateExaminateur,
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
            message: `Le examinateur portant l'id ${examinateurId} n'a pas ete trouve`,
        });
    }
}
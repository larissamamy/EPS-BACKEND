const Terrain = require('../models/terrain')
//ajout Terrain
exports.ajouterTerrain = async (req, res) => {
    try {
        const nom_terrain = req.body.nom_terrain;
        const centreEPS = req.body.centreEPS;
        if (!nom_terrain ||nom_terrain === '') {
            res.status(404).json({ success: false, message: `Tous les champs sont requis` });
        } else {
            const addTerrain = await Terrain.create({nom_terrain,centreEPS })
            if (addTerrain) {
                res.status(201).json({ success: true, message: `Ajout reussi` });
            } else {
                res.status(400).json({ success: false, message: `Erreur d'ajout` });
            }
        }
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//Obtenir list terrain

exports.terrainList = async (req, res) => {
    try {
        const terrain = await Terrain.find()
        res.status(201).json({ success: true, data: terrain });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

// //Obtenir detail terrain

exports.terrainDetails = async (req, res) => {
    const terrainId = req.params.id;
    try {
        const terrain = await Terrain.findById(terrainId)
        res.status(201).json({ success: true, data: terrain });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

 // Supprimer le terrain

exports.deleteTerrain = async (req, res) => {
    const terrainId = req.params.id;
    try {
        const deleteTerrain = await Terrain.findByIdAndDelete(terrainId)
        if (deleteTerrain) {
            res.status(201).json({ success: true, message: 'Suppression reussi' });
        } else {
            res.status(400).json({ success: false, message: `Impossible de supprimer le terrain dont l'id est : ${terrainId}` });
        }
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
 }

// modifier le terrain

exports.updateTerrain = async (req, res) => {
    const terrainId = req.params.id;
    try {
        const terrain = await Terrain.findById(terrainId);
        if (!terrain) {
            res.status(400).json({
                success: false,
                message: `Le terrain portant l'id ${terrainId} n'a pas ete trouve`,
            });
        }
        const nom_terrain = req.body.nom_terrain;
        const  centreEPS = req.body. centreEPS;
        const updateTerrain = await Terrain.findByIdAndUpdate(terrainId, {
            nom_terrain ,
            centreEPS,
        });
        if (updateTerrain) {
            res.status(200).json({
                success: true,
                updateTerrain,
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
            message: `Le terrain portant l'id ${terrainId} n'a pas ete trouve`,
        });
    }
}
const express = require("express");
const router = express.Router();

const { client } = require("../../bot");

/**
 * @api {get} /api/players Get JSON data of non private players
 * @apiVersion 1.0.0
 * @apiName GetPlayers
 * @apiGroup Players
 * @apiError (503) ClientUnavailable The client is unavailable
 * @apiSampleRequest /api/players
 * @apiSuccess (200) {Object[]} GetPlayersOk Array of objects with all players
 */
router.get("/", (req, res) => {
    if (!client) return res.status(503).json({ message: "Client unavailable" });
    return res.status(200).json(client.players.filter((x) => !x.private).array());
});

module.exports = router;

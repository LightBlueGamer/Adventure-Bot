const express = require("express");
const router = express.Router();

const { client } = require("../../bot");

/**
 * @api {get} /api/players Get JSON data of players
 * @apiVersion 1.3.0
 * @apiName GetPlayers
 * @apiGroup Players
 * @apiHeader {json} authorization A valid auth-key
 * @apiHeaderExample {json} headers:
 *       {
 *          "authorization": "253446F8DB5969C5A87259D69E325"
 *       }
 * @apiExample {js} Example usage:
 *  fetch('http://localhost:3000/api/players', {
 *    headers: {
 *      "authorization": "253446F8DB5969C5A87259D69E325"
 *    },
 *  }).then((response) => {
 *    return response.json();
 *  }).then((data) => {
 *    console.log(data);
 *  }).catch((err) => {
 *    console.error(err);
 *  });
 * @apiError (503) ClientUnavailable The client is unavailable
 * @apiError (401) Unauthorized The input auth-key is invalid
 * @apiSampleRequest /api/players
 * @apiSuccess (200) {Object[]} GetPlayersOk Array of objects with all players
 */
router.get("/", (req, res) => {
    if (!client) return res.status(503).json({ message: "Client unavailable" });
    if(!req.header("authorization") || req.header("authorization") !== process.env.AUTHORIZATION) return res.status(200).json({amount: client.players.size, data: client.players.filter((x) => !x.private).array()});
    else return res.status(200).json({amount: client.players.size, data: client.players.array()});
});

module.exports = router;

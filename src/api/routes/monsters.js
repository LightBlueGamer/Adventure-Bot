const express = require("express");
const router = express.Router();

const { client } = require("../../bot");

/**
 * @api {get} /api/monsters Get JSON data of monsters
 * @apiVersion 1.2.0
 * @apiName GetMonsters
 * @apiGroup Monsters
 * @apiError (503) ClientUnavailable The client is unavailable
 * @apiSampleRequest /api/monsters
 * @apiSuccess (200) {Object[]} getMonstersOk Array of objects with all monsters
 * @apiExample {js} Example usage:
 *  fetch('http://localhost:3000/api/monsters').then((response) => {
 *    return response.json();
 *  }).then((data) => {
 *    console.log(data);
 *  }).catch((err) => {
 *    console.error(err);
 *  });
 */

router.get("/", (req, res) => {
    if (!client) return res.status(503).json({ message: "Client unavailable" });
    return res.status(200).json({amount: client.monsters.size, data: [...client.monsters.values()]});
});

/**
 * @api {get} /api/monsters/:name Get JSON data of a monster
 * @apiVersion 1.2.0
 * @apiName GetMonster
 * @apiGroup Monsters
 * @apiError (503) ClientUnavailable The client is unavailable
 * @apiSampleRequest /api/monsters/name
 * @apiSuccess (200) {Object[]} GetMonsterOk Objects with data of the monster
 * @apiExample {js} Example usage:
 *  fetch('http://localhost:3000/api/monsters/torn_pants').then((response) => {
 *    return response.json();
 *  }).then((data) => {
 *    console.log(data);
 *  }).catch((err) => {
 *    console.error(err);
 *  });
 */

router.get("/:name", (req, res) => {
    const { name } = req.params;
    const fixedName = name
        .split("_")
        .map((x) => x.replace(x[0], x[0].toUpperCase()))
        .join(" ");
    if (!client) return res.status(503).json({ message: "Client unavailable" });
    return res.status(200).json(client.monsters.get(fixedName));
});

module.exports = router;

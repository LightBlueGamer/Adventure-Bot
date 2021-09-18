const express = require("express");
const router = express.Router();

const { client } = require("../../bot");

/**
 * @api {get} /api/items Get JSON data of items
 * @apiVersion 1.1.0
 * @apiName GetItems
 * @apiGroup Items
 * @apiError (503) ClientUnavailable The client is unavailable
 * @apiSampleRequest /api/items
 * @apiSuccess (200) {Object[]} GetItemsOk Array of objects with all items
 */

router.get("/", (req, res) => {
    if (!client) return res.status(503).json({ message: "Client unavailable" });
    return res.status(200).json([...client.items]);
});

/**
 * @api {get} /api/items/:name Get JSON data of a item
 * @apiVersion 1.1.0
 * @apiName GetItem
 * @apiGroup Items
 * @apiError (503) ClientUnavailable The client is unavailable
 * @apiSampleRequest /api/items/name
 * @apiSuccess (200) {Object[]} GetItemOk Objects with data of the item
 */

router.get("/:name", (req, res) => {
    const { name } = req.params;
    const fixedName = name
        .split("_")
        .map((x) => x.replace(x[0], x[0].toUpperCase()))
        .join(" ");
    if (!client) return res.status(503).json({ message: "Client unavailable" });
    return res.status(200).json(client.items.get(fixedName));
});

module.exports = router;

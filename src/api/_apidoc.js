/**
 * @api {get} /api/players Get JSON data of non private players
 * @apiVersion 1.0.0
 * @apiName GetPlayers
 * @apiGroup Players
 * @apiError (503) ClientUnavailable The client is unavailable
 * @apiSampleRequest /api/players
 * @apiSuccess (200) {Object[]} GetPlayersOk Array of objects with all players
 */
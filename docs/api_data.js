define({ "api": [
  {
    "type": "get",
    "url": "/api/players",
    "title": "Get JSON data of players",
    "version": "1.0.0",
    "name": "GetPlayers",
    "group": "Players",
    "error": {
      "fields": {
        "503": [
          {
            "group": "503",
            "optional": false,
            "field": "ClientUnavailable",
            "description": "<p>The client is unavailable</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://lightbluegamer.github.io/adventure-bot/api/players"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "GetPlayersOk",
            "description": "<p>Array of objects with all players</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/players.js",
    "groupTitle": "Players"
  }
] });

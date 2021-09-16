define({ "api": [
  {
    "type": "get",
    "url": "/api/items/:name",
    "title": "Get JSON data of a item",
    "version": "1.1.0",
    "name": "GetItem",
    "group": "Items",
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
        "url": "http://localhost:3000/api/items/name"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "GetItemOk",
            "description": "<p>Objects with data of the item</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/items.js",
    "groupTitle": "Items"
  },
  {
    "type": "get",
    "url": "/api/items",
    "title": "Get JSON data of items",
    "version": "1.1.0",
    "name": "GetItems",
    "group": "Items",
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
        "url": "http://localhost:3000/api/items"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "GetItemsOk",
            "description": "<p>Array of objects with all items</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/items.js",
    "groupTitle": "Items"
  },
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
        "url": "http://localhost:3000/api/players"
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
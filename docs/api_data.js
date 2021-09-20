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
        "url": "/api/items/name"
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
    "examples": [
      {
        "title": "Example usage:",
        "content": "fetch('http://localhost:3000/api/items/gold_coin').then((response) => {\n  return response.json();\n}).then((data) => {\n  console.log(data);\n}).catch((err) => {\n  console.error(err);\n});",
        "type": "js"
      }
    ],
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
        "url": "/api/items"
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
    "examples": [
      {
        "title": "Example usage:",
        "content": "fetch('http://localhost:3000/api/items').then((response) => {\n  return response.json();\n}).then((data) => {\n  console.log(data);\n}).catch((err) => {\n  console.error(err);\n});",
        "type": "js"
      }
    ],
    "filename": "src/api/routes/items.js",
    "groupTitle": "Items"
  },
  {
    "type": "get",
    "url": "/api/monsters/:name",
    "title": "Get JSON data of a monster",
    "version": "1.2.0",
    "name": "GetMonster",
    "group": "Monsters",
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
        "url": "/api/monsters/name"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "GetMonsterOk",
            "description": "<p>Objects with data of the monster</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "fetch('http://localhost:3000/api/monsters/torn_pants').then((response) => {\n  return response.json();\n}).then((data) => {\n  console.log(data);\n}).catch((err) => {\n  console.error(err);\n});",
        "type": "js"
      }
    ],
    "filename": "src/api/routes/monsters.js",
    "groupTitle": "Monsters"
  },
  {
    "type": "get",
    "url": "/api/monsters",
    "title": "Get JSON data of monsters",
    "version": "1.2.0",
    "name": "GetMonsters",
    "group": "Monsters",
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
        "url": "/api/monsters"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "getMonstersOk",
            "description": "<p>Array of objects with all monsters</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "fetch('http://localhost:3000/api/monsters').then((response) => {\n  return response.json();\n}).then((data) => {\n  console.log(data);\n}).catch((err) => {\n  console.error(err);\n});",
        "type": "js"
      }
    ],
    "filename": "src/api/routes/monsters.js",
    "groupTitle": "Monsters"
  },
  {
    "type": "get",
    "url": "/api/players",
    "title": "Get JSON data of players",
    "version": "1.3.0",
    "name": "GetPlayers",
    "group": "Players",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "json",
            "optional": false,
            "field": "authorization",
            "description": "<p>A valid auth-key</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "headers:",
          "content": "{\n   \"authorization\": \"253446F8DB5969C5A87259D69E325\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "fetch('http://localhost:3000/api/players', {\n  headers: {\n    \"authorization\": \"253446F8DB5969C5A87259D69E325\"\n  },\n}).then((response) => {\n  return response.json();\n}).then((data) => {\n  console.log(data);\n}).catch((err) => {\n  console.error(err);\n});",
        "type": "js"
      }
    ],
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>The input auth-key is invalid</p>"
          }
        ],
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
        "url": "/api/players"
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
  },
  {
    "type": "get",
    "url": "/api/players",
    "title": "Get JSON data of non private players",
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
        "url": "/api/players"
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
    "filename": "src/api/_apidoc.js",
    "groupTitle": "Players"
  }
] });

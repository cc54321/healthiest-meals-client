APPID: c2de4cc1

APPKEY: 80b6c474f490ed70b98e50241d12034d	—


APPID: c2de4cc1

APPKEY: 80b6c474f490ed70b98e50241d12034d	—




{
  "swagger": "2.0",
  "info": {
    "version": "1.0",
    "title": "Recipe Book API",
    "description": "API for managing user recipes."
  },
  "schemes": [
    "https"
  ],
  "securityDefinitions": {
    "basicAuth": {
      "type": "basic"
    }
  },
  "security": [
    {
      "basicAuth": []
    }
  ],
  "host": "api.edamam.com",
  "basePath": "/",
  "tags": [
    {
      "name": "draft"
    },
    {
      "name": "published"
    },
    {
      "name": "misc"
    }
  ],
  "paths": {
    "/api/recipe-book/v1/{c2de4cc1}": {
      "get": {
        "tags": ["misc"],
        "description": "List user recipes.",
        "parameters": [
          {
            "name": "app-id",
            "in": "path",
            "type": "string",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "A list of all recipes"
          },
          "401": {
            "description": "Unauthorized"
          }
        }
      }
    },
    "/api/recipe-book/v1/{c2de4cc1}/draft": {
      "post": {
        "tags": ["draft"],
        "description": "Create a new draft recipe. This call will generate a recipe ID.",
        "parameters": [
          {
            "name": "app-id",
            "in": "path",
            "type": "string",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/UserRecipe"
            }
          }
        ],
        "responses": {
          "201": {
            "description": "The access point of new recipe.",
            "headers": {
              "Edamam-Record-Version": {
                "type": "integer",
                "description": "The record version."
              },
              "Edamam-Record-State": {
                "type": "string",
                "enum": [
                  "draft",
                  "published",
                  "modified",
                  "deleted"
                ],
                "description": "The record state."
              },
              "Edamam-Recipe-ID": {
                "type": "string",
                "description": "The recipe ID."
              },
              "location": {
                "type": "string",
                "description": "Link to the newly created draft recipe."
              }
            }
          },
          "401": {
            "description": "Unauthorized."
          },
          "409": {
            "description": "Conflict."
          },
          "422": {
            "description": "Unprocessable entity."
          },
          "555": {
            "description": "Low quality."
          }
        }
      }
    },
    "/api/recipe-book/v1/{c2de4cc1}/published/{recipe-id}": {
      "get": {
        "tags": ["published"],
        "description": "Get the user recipe.",
        "parameters": [
          {
            "name": "app-id",
            "in": "path",
            "type": "string",
            "required": true
          },
          {
            "name": "recipe-id",
            "in": "path",
            "type": "string",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "The recipe.",
            "headers": {
              "Edamam-Record-Version": {
                "type": "integer",
                "description": "The record version."
              },
              "Edamam-Record-State": {
                "type": "string",
                "enum": [
                  "draft",
                  "published",
                  "modified",
                  "deleted"
                ],
                "description": "The record state."
              }
            },
            "schema": {
              "$ref": "#/definitions/UserRecipe"
            }
          },
          "204": {
            "description": "No published recipe.",
            "headers": {
              "Edamam-Record-Version": {
                "type": "integer",
                "description": "The record version."
              },
              "Edamam-Record-State": {
                "type": "string",
                "enum": [
                  "draft",
                  "published",
                  "modified",
                  "deleted"
                ],
                "description": "The record state."
              }
            }
          },
          "401": {
            "description": "Unauthorized"
          },
          "404": {
            "description": "Not found."
          }
        }
      },
      "delete": {
        "tags": ["published"],
        "description": "Delete the user recipe.",
        "parameters": [
          {
            "name": "app-id",
            "in": "path",
            "type": "string",
            "required": true
          },
          {
            "name": "recipe-id",
            "in": "path",
            "type": "string",
            "required": true
          },
          {
            "name": "Edamam-Record-Version",
            "in": "header",
            "type": "integer",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "description": "Success.",
            "headers": {
              "Edamam-Record-Version": {
                "type": "integer",
                "description": "The record version."
              },
              "Edamam-Record-State": {
                "type": "string",
                "enum": [
                  "draft",
                  "published",
                  "modified",
                  "deleted"
                ],
                "description": "The record state."
              }
            }
          },
          "401": {
            "description": "Unauthorized"
          },
          "404": {
            "description": "Not found."
          },
          "409": {
            "description": "Conflict."
          }
        }
      }
    },
    "/api/recipe-book/v1/{c2de4cc1}/draft/{recipe-id}": {
      "get": {
        "tags": ["draft"],
        "description": "Get the user recipe draft.",
        "parameters": [
          {
            "name": "app-id",
            "in": "path",
            "type": "string",
            "required": true
          },
          {
            "name": "recipe-id",
            "in": "path",
            "type": "string",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "The recipe.",
            "headers": {
              "Edamam-Record-Version": {
                "type": "integer",
                "description": "The record version."
              },
              "Edamam-Record-State": {
                "type": "string",
                "enum": [
                  "draft",
                  "published",
                  "modified",
                  "deleted"
                ],
                "description": "The record state."
              }
            },
            "schema": {
              "$ref": "#/definitions/UserRecipe"
            }
          },
          "204": {
            "description": "No draft recipe.",
            "headers": {
              "Edamam-Record-Version": {
                "type": "integer",
                "description": "The record version."
              },
              "Edamam-Record-State": {
                "type": "string",
                "enum": [
                  "draft",
                  "published",
                  "modified",
                  "deleted"
                ],
                "description": "The record state."
              }
            }
          },
          "401": {
            "description": "Unauthorized"
          },
          "404": {
            "description": "Not found."
          }
        }
      },
      "put": {
        "tags": ["draft"],
        "description": "Create or update a user recipe draft.",
        "parameters": [
          {
            "name": "app-id",
            "in": "path",
            "type": "string",
            "required": true
          },
          {
            "name": "recipe-id",
            "in": "path",
            "type": "string",
            "required": true
          },
          {
            "name": "Edamam-Record-Version",
            "in": "header",
            "type": "integer",
            "required": false
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/UserRecipe"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "The recipe.",
            "headers": {
              "Edamam-Record-Version": {
                "type": "integer",
                "description": "The record version."
              },
              "Edamam-Record-State": {
                "type": "string",
                "enum": [
                  "draft",
                  "published",
                  "modified",
                  "deleted"
                ],
                "description": "The record state."
              }
            },
            "schema": {
              "$ref": "#/definitions/UserRecipe"
            }
          },
          "401": {
            "description": "Unauthorized"
          },
          "404": {
            "description": "Not found."
          },
          "409": {
            "description": "Conflict."
          },
          "422": {
            "description": "Unprocessable entity."
          },
          "555": {
            "description": "Low quality."
          }
        }
      },
      "delete": {
        "tags": ["draft"],
        "description": "Delete the user recipe draft.",
        "parameters": [
          {
            "name": "app-id",
            "in": "path",
            "type": "string",
            "required": true
          },
          {
            "name": "recipe-id",
            "in": "path",
            "type": "string",
            "required": true
          },
          {
            "name": "Edamam-Record-Version",
            "in": "header",
            "type": "integer",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "description": "Success.",
            "headers": {
              "Edamam-Record-Version": {
                "type": "integer",
                "description": "The record version."
              },
              "Edamam-Record-State": {
                "type": "string",
                "enum": [
                  "draft",
                  "published",
                  "modified",
                  "deleted"
                ],
                "description": "The record state."
              }
            }
          },
          "401": {
            "description": "Unauthorized"
          },
          "404": {
            "description": "Not found."
          },
          "409": {
            "description": "Conflict."
          }
        }
      }
    },
    "/api/recipe-book/v1/{c2de4cc1}/published/{recipe-id}/search-view": {
      "get": {
        "tags": ["published"],
        "description": "Get user recipe.",
        "parameters": [
          {
            "name": "app-id",
            "in": "path",
            "type": "string",
            "required": true
          },
          {
            "name": "recipe-id",
            "in": "path",
            "type": "string",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "The recipe.",
            "headers": {
              "Edamam-Record-Version": {
                "type": "integer",
                "description": "The record version."
              },
              "Edamam-Record-State": {
                "type": "string",
                "enum": [
                  "draft",
                  "published",
                  "modified",
                  "deleted"
                ],
                "description": "The record state."
              }
            }
          },
          "204": {
            "description": "No published recipe.",
            "headers": {
              "Edamam-Record-Version": {
                "type": "integer",
                "description": "The record version."
              },
              "Edamam-Record-State": {
                "type": "string",
                "enum": [
                  "draft",
                  "published",
                  "modified",
                  "deleted"
                ],
                "description": "The record state."
              }
            }
          },
          "401": {
            "description": "Unauthorized"
          },
          "404": {
            "description": "Not found."
          }
        }
      }
    },
    "/api/recipe-book/v1/{c2de4cc1}/draft/{recipe-id}/search-view": {
      "get": {
        "tags": ["draft"],
        "description": "Get user recipe.",
        "parameters": [
          {
            "name": "app-id",
            "in": "path",
            "type": "string",
            "required": true
          },
          {
            "name": "recipe-id",
            "in": "path",
            "type": "string",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "The recipe.",
            "headers": {
              "Edamam-Record-Version": {
                "type": "integer",
                "description": "The record version."
              },
              "Edamam-Record-State": {
                "type": "string",
                "enum": [
                  "draft",
                  "published",
                  "modified",
                  "deleted"
                ],
                "description": "The record state."
              }
            }
          },
          "204": {
            "description": "No draft recipe.",
            "headers": {
              "Edamam-Record-Version": {
                "type": "integer",
                "description": "The record version."
              },
              "Edamam-Record-State": {
                "type": "string",
                "enum": [
                  "draft",
                  "published",
                  "modified",
                  "deleted"
                ],
                "description": "The record state."
              }
            }
          },
          "401": {
            "description": "Unauthorized"
          },
          "404": {
            "description": "Not found."
          }
        }
      }
    },
    "/api/recipe-book/v1/{c2de4cc1}/draft/{recipe-id}/publish": {
      "post": {
        "tags": ["draft"],
        "description": "Publish the draft changes.",
        "parameters": [
          {
            "name": "app-id",
            "in": "path",
            "type": "string",
            "required": true
          },
          {
            "name": "recipe-id",
            "in": "path",
            "type": "string",
            "required": true
          },
          {
            "name": "Edamam-Record-Version",
            "in": "header",
            "type": "integer",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "The recipe.",
            "headers": {
              "Edamam-Record-Version": {
                "type": "integer",
                "description": "The record version."
              },
              "Edamam-Record-State": {
                "type": "string",
                "enum": [
                  "published"
                ],
                "description": "The record state."
              }
            },
            "schema": {
              "$ref": "#/definitions/UserRecipe"
            }
          },
          "401": {
            "description": "Unauthorized"
          },
          "404": {
            "description": "Not found."
          },
          "409": {
            "description": "Conflict."
          }
        }
      }
    }
  },
  "definitions": {
    "UserRecipe": {
      "properties": {
        "title": {
          "type": "string"
        },
        "ingr": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "summary": {
          "type": "string"
        },
        "yield": {
          "type": "string"
        },
        "time": {
          "type": "string"
        },
        "prep": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "img": {
          "type": "string"
        },
        "tags": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      }
    }
  }
}

{
  "swagger": "2.0",
  "info": {
    "version": "1.0",
    "title": "Recipe Book API",
    "description": "API for managing user recipes."
  },
  "schemes": [
    "https"
  ],
  "securityDefinitions": {
    "basicAuth": {
      "type": "basic"
    }
  },
  "security": [
    {
      "basicAuth": []
    }
  ],
  "host": "api.edamam.com",
  "basePath": "/",
  "tags": [
    {
      "name": "draft"
    },
    {
      "name": "published"
    },
    {
      "name": "misc"
    }
  ],
  "paths": {
    "/api/recipe-book/v1/{app-id}": {
      "get": {
        "tags": ["misc"],
        "description": "List user recipes.",
        "parameters": [
          {
            "name": "app-id",
            "in": "path",
            "type": "string",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "A list of all recipes"
          },
          "401": {
            "description": "Unauthorized"
          }
        }
      }
    },
    "/api/recipe-book/v1/{app-id}/draft": {
      "post": {
        "tags": ["draft"],
        "description": "Create a new draft recipe. This call will generate a recipe ID.",
        "parameters": [
          {
            "name": "app-id",
            "in": "path",
            "type": "string",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/UserRecipe"
            }
          }
        ],
        "responses": {
          "201": {
            "description": "The access point of new recipe.",
            "headers": {
              "Edamam-Record-Version": {
                "type": "integer",
                "description": "The record version."
              },
              "Edamam-Record-State": {
                "type": "string",
                "enum": [
                  "draft",
                  "published",
                  "modified",
                  "deleted"
                ],
                "description": "The record state."
              },
              "Edamam-Recipe-ID": {
                "type": "string",
                "description": "The recipe ID."
              },
              "location": {
                "type": "string",
                "description": "Link to the newly created draft recipe."
              }
            }
          },
          "401": {
            "description": "Unauthorized."
          },
          "409": {
            "description": "Conflict."
          },
          "422": {
            "description": "Unprocessable entity."
          },
          "555": {
            "description": "Low quality."
          }
        }
      }
    },
    "/api/recipe-book/v1/{app-id}/published/{recipe-id}": {
      "get": {
        "tags": ["published"],
        "description": "Get the user recipe.",
        "parameters": [
          {
            "name": "app-id",
            "in": "path",
            "type": "string",
            "required": true
          },
          {
            "name": "recipe-id",
            "in": "path",
            "type": "string",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "The recipe.",
            "headers": {
              "Edamam-Record-Version": {
                "type": "integer",
                "description": "The record version."
              },
              "Edamam-Record-State": {
                "type": "string",
                "enum": [
                  "draft",
                  "published",
                  "modified",
                  "deleted"
                ],
                "description": "The record state."
              }
            },
            "schema": {
              "$ref": "#/definitions/UserRecipe"
            }
          },
          "204": {
            "description": "No published recipe.",
            "headers": {
              "Edamam-Record-Version": {
                "type": "integer",
                "description": "The record version."
              },
              "Edamam-Record-State": {
                "type": "string",
                "enum": [
                  "draft",
                  "published",
                  "modified",
                  "deleted"
                ],
                "description": "The record state."
              }
            }
          },
          "401": {
            "description": "Unauthorized"
          },
          "404": {
            "description": "Not found."
          }
        }
      },
      "delete": {
        "tags": ["published"],
        "description": "Delete the user recipe.",
        "parameters": [
          {
            "name": "app-id",
            "in": "path",
            "type": "string",
            "required": true
          },
          {
            "name": "recipe-id",
            "in": "path",
            "type": "string",
            "required": true
          },
          {
            "name": "Edamam-Record-Version",
            "in": "header",
            "type": "integer",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "description": "Success.",
            "headers": {
              "Edamam-Record-Version": {
                "type": "integer",
                "description": "The record version."
              },
              "Edamam-Record-State": {
                "type": "string",
                "enum": [
                  "draft",
                  "published",
                  "modified",
                  "deleted"
                ],
                "description": "The record state."
              }
            }
          },
          "401": {
            "description": "Unauthorized"
          },
          "404": {
            "description": "Not found."
          },
          "409": {
            "description": "Conflict."
          }
        }
      }
    },
    "/api/recipe-book/v1/{app-id}/draft/{recipe-id}": {
      "get": {
        "tags": ["draft"],
        "description": "Get the user recipe draft.",
        "parameters": [
          {
            "name": "app-id",
            "in": "path",
            "type": "string",
            "required": true
          },
          {
            "name": "recipe-id",
            "in": "path",
            "type": "string",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "The recipe.",
            "headers": {
              "Edamam-Record-Version": {
                "type": "integer",
                "description": "The record version."
              },
              "Edamam-Record-State": {
                "type": "string",
                "enum": [
                  "draft",
                  "published",
                  "modified",
                  "deleted"
                ],
                "description": "The record state."
              }
            },
            "schema": {
              "$ref": "#/definitions/UserRecipe"
            }
          },
          "204": {
            "description": "No draft recipe.",
            "headers": {
              "Edamam-Record-Version": {
                "type": "integer",
                "description": "The record version."
              },
              "Edamam-Record-State": {
                "type": "string",
                "enum": [
                  "draft",
                  "published",
                  "modified",
                  "deleted"
                ],
                "description": "The record state."
              }
            }
          },
          "401": {
            "description": "Unauthorized"
          },
          "404": {
            "description": "Not found."
          }
        }
      },
      "put": {
        "tags": ["draft"],
        "description": "Create or update a user recipe draft.",
        "parameters": [
          {
            "name": "app-id",
            "in": "path",
            "type": "string",
            "required": true
          },
          {
            "name": "recipe-id",
            "in": "path",
            "type": "string",
            "required": true
          },
          {
            "name": "Edamam-Record-Version",
            "in": "header",
            "type": "integer",
            "required": false
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/UserRecipe"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "The recipe.",
            "headers": {
              "Edamam-Record-Version": {
                "type": "integer",
                "description": "The record version."
              },
              "Edamam-Record-State": {
                "type": "string",
                "enum": [
                  "draft",
                  "published",
                  "modified",
                  "deleted"
                ],
                "description": "The record state."
              }
            },
            "schema": {
              "$ref": "#/definitions/UserRecipe"
            }
          },
          "401": {
            "description": "Unauthorized"
          },
          "404": {
            "description": "Not found."
          },
          "409": {
            "description": "Conflict."
          },
          "422": {
            "description": "Unprocessable entity."
          },
          "555": {
            "description": "Low quality."
          }
        }
      },
      "delete": {
        "tags": ["draft"],
        "description": "Delete the user recipe draft.",
        "parameters": [
          {
            "name": "app-id",
            "in": "path",
            "type": "string",
            "required": true
          },
          {
            "name": "recipe-id",
            "in": "path",
            "type": "string",
            "required": true
          },
          {
            "name": "Edamam-Record-Version",
            "in": "header",
            "type": "integer",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "description": "Success.",
            "headers": {
              "Edamam-Record-Version": {
                "type": "integer",
                "description": "The record version."
              },
              "Edamam-Record-State": {
                "type": "string",
                "enum": [
                  "draft",
                  "published",
                  "modified",
                  "deleted"
                ],
                "description": "The record state."
              }
            }
          },
          "401": {
            "description": "Unauthorized"
          },
          "404": {
            "description": "Not found."
          },
          "409": {
            "description": "Conflict."
          }
        }
      }
    },
    "/api/recipe-book/v1/{app-id}/published/{recipe-id}/search-view": {
      "get": {
        "tags": ["published"],
        "description": "Get user recipe.",
        "parameters": [
          {
            "name": "app-id",
            "in": "path",
            "type": "string",
            "required": true
          },
          {
            "name": "recipe-id",
            "in": "path",
            "type": "string",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "The recipe.",
            "headers": {
              "Edamam-Record-Version": {
                "type": "integer",
                "description": "The record version."
              },
              "Edamam-Record-State": {
                "type": "string",
                "enum": [
                  "draft",
                  "published",
                  "modified",
                  "deleted"
                ],
                "description": "The record state."
              }
            }
          },
          "204": {
            "description": "No published recipe.",
            "headers": {
              "Edamam-Record-Version": {
                "type": "integer",
                "description": "The record version."
              },
              "Edamam-Record-State": {
                "type": "string",
                "enum": [
                  "draft",
                  "published",
                  "modified",
                  "deleted"
                ],
                "description": "The record state."
              }
            }
          },
          "401": {
            "description": "Unauthorized"
          },
          "404": {
            "description": "Not found."
          }
        }
      }
    },
    "/api/recipe-book/v1/{app-id}/draft/{recipe-id}/search-view": {
      "get": {
        "tags": ["draft"],
        "description": "Get user recipe.",
        "parameters": [
          {
            "name": "app-id",
            "in": "path",
            "type": "string",
            "required": true
          },
          {
            "name": "recipe-id",
            "in": "path",
            "type": "string",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "The recipe.",
            "headers": {
              "Edamam-Record-Version": {
                "type": "integer",
                "description": "The record version."
              },
              "Edamam-Record-State": {
                "type": "string",
                "enum": [
                  "draft",
                  "published",
                  "modified",
                  "deleted"
                ],
                "description": "The record state."
              }
            }
          },
          "204": {
            "description": "No draft recipe.",
            "headers": {
              "Edamam-Record-Version": {
                "type": "integer",
                "description": "The record version."
              },
              "Edamam-Record-State": {
                "type": "string",
                "enum": [
                  "draft",
                  "published",
                  "modified",
                  "deleted"
                ],
                "description": "The record state."
              }
            }
          },
          "401": {
            "description": "Unauthorized"
          },
          "404": {
            "description": "Not found."
          }
        }
      }
    },
    "/api/recipe-book/v1/{app-id}/draft/{recipe-id}/publish": {
      "post": {
        "tags": ["draft"],
        "description": "Publish the draft changes.",
        "parameters": [
          {
            "name": "app-id",
            "in": "path",
            "type": "string",
            "required": true
          },
          {
            "name": "recipe-id",
            "in": "path",
            "type": "string",
            "required": true
          },
          {
            "name": "Edamam-Record-Version",
            "in": "header",
            "type": "integer",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "The recipe.",
            "headers": {
              "Edamam-Record-Version": {
                "type": "integer",
                "description": "The record version."
              },
              "Edamam-Record-State": {
                "type": "string",
                "enum": [
                  "published"
                ],
                "description": "The record state."
              }
            },
            "schema": {
              "$ref": "#/definitions/UserRecipe"
            }
          },
          "401": {
            "description": "Unauthorized"
          },
          "404": {
            "description": "Not found."
          },
          "409": {
            "description": "Conflict."
          }
        }
      }
    }
  },
  "definitions": {
    "UserRecipe": {
      "properties": {
        "title": {
          "type": "string"
        },
        "ingr": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "summary": {
          "type": "string"
        },
        "yield": {
          "type": "string"
        },
        "time": {
          "type": "string"
        },
        "prep": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "img": {
          "type": "string"
        },
        "tags": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      }
    }
  }
}

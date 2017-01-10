define({ "api": [
  {
    "type": "post",
    "url": "/api/register",
    "title": "Register",
    "name": "01_Register",
    "group": "Authorization",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the Restaurant.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "login",
            "description": "<p>Login of the Restaurant.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "passwordOne",
            "description": "<p>Password of the Restaurant.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "passwordTwo",
            "description": "<p>Password of the Restaurant again.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"username\": \"fatbob\",\n  \"login\": \"Fat Bob Burger\"\n  \"passwordOne\": \"fatbob\",\n  \"passwordTwo\": \"fatbob\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 Created",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Bad request",
          "content": "HTTP/1.1 400 Bad request\n{\n  \"Login already in use\"\n}",
          "type": "json"
        },
        {
          "title": "Server problem",
          "content": "HTTP/1.1 404 Server problem",
          "type": "json"
        }
      ]
    },
    "filename": "routes/authorization.js",
    "groupTitle": "Authorization"
  },
  {
    "type": "post",
    "url": "/api/login",
    "title": "Login",
    "name": "02_Login",
    "group": "Authorization",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the Restaurant.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the Restaurant.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"username\": \"fatbob\",\n  \"password\": \"fatbob\"\n}",
          "type": "x-www-form-urlencoded"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyZXN0X25hbWUiOiJGYXQgQm9iIEJ1cmdlciIsImlkIjoyLCJhZGRyZXNzIjoiS3JhbWFyc2thIDIxLCBQb3puYW4iLCJsb2dpbiI6ImZhdGJvYiIsImF2YXRhciI6dHJ1ZSwiZGVzY3JpcHRpb24iOiJzdXBlciBvcGlzIGZhdCBib2JhIn0._4pN-LCt_RZqkx2Z1QLIV-t6MdEtT0Rl9sAFWza3_n0\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Server problem",
          "content": "HTTP/1.1 404 Server problem",
          "type": "json"
        },
        {
          "title": "Bad request",
          "content": "HTTP/1.1 400 Bad request",
          "type": "json"
        }
      ]
    },
    "filename": "routes/authorization.js",
    "groupTitle": "Authorization"
  },
  {
    "type": "get",
    "url": "/api/foods/:uuid",
    "title": "Get Food",
    "name": "01_GetFood",
    "group": "Food",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "uuid",
            "description": "<p>Food unique id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>Login of the Restaurant.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the Food.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>UUID of the Food.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Name of the Restaurant who owns this food.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Food.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hashtags",
            "description": "<p>Hashtags of the Food.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "likes",
            "description": "<p>Likes of the Food.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "dislikes",
            "description": "<p>Dislikes of the Food.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Food creation date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Food update date.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": " HTTP/1.1 200 OK\n[\n  {\n    \"login\": \"pastwisko\",\n    \"id\": 3,\n    \"uuid\": \"ffa3fa30-9b83-11e6-84da-212055eb89db\",\n    \"username\": \"Pastwisko\",\n    \"description\": \"Nice\",\n    \"hashtags\": \"#love\",\n    \"likes\": 10,\n    \"dislikes\": 13,\n    \"created_at\": \"2016-10-17T20:31:40.000Z\",\n    \"updated_at\": \"2016-10-17T20:31:40.000Z\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Food not found",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "routes/foods.js",
    "groupTitle": "Food"
  },
  {
    "type": "get",
    "url": "/api/foods",
    "title": "Get Foods",
    "name": "02_GetFoods",
    "group": "Food",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>Login of the Restaurant.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the Food.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>UUID of the Food.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Name of the Restaurant who owns this food.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Food.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hashtags",
            "description": "<p>Hashtags of the Food.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "likes",
            "description": "<p>Likes of the Food.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "dislikes",
            "description": "<p>Dislikes of the Food.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Food creation date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Food update date.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": " HTTP/1.1 200 OK\n [\n  {\n    \"login\": \"pastwisko\",\n    \"id\": 3,\n    \"uuid\": \"ffa3fa30-9b83-11e6-84da-212055eb89db\",\n    \"username\": \"Pastwisko\",\n    \"description\": \"Nice\",\n    \"hashtags\": \"#love\",\n    \"likes\": 10,\n    \"dislikes\": 13,\n    \"created_at\": \"2016-10-17T20:31:40.000Z\",\n    \"updated_at\": \"2016-10-17T20:31:40.000Z\"\n  },\n  {\n    \"login\": \"pastwisko\",\n    \"id\": 2,\n    \"uuid\": \"efa3fa30-9b83-11e6-84da-212055eb89db\",\n    \"username\": \"Pastwisko\",\n    \"description\": \"Very nice\",\n    \"hashtags\": \"#tasty #love\",\n    \"likes\": 8,\n    \"dislikes\": 3,\n    \"created_at\": \"2016-10-16T20:31:40.000Z\",\n    \"updated_at\": \"2016-10-16T20:31:40.000Z\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Foods not found",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "routes/foods.js",
    "groupTitle": "Food"
  },
  {
    "type": "post",
    "url": "/api/foods",
    "title": "Add Food",
    "name": "03_AddFood",
    "group": "Food",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>Login of the Restaurant.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>UUID of the Food.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Food.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hashtags",
            "description": "<p>Hashtags of the Food.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Avatar of the Restaurant (base64 format).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"login\": \"fatbob\",\n  \"uuid\": \"ad83hb71s3-9b83-11e6-84da-212025eb3333\",\n  \"description\": \"Very good burger\",\n  \"hashtags\": \"#tasty #awesome\",\n  \"photo\": \"data:image/png;base64,iVBORw0K......\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 Created",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Bad request",
          "content": "HTTP/1.1 400 Bad request\n{\n  \"Description is too short or too long (min: 2, max: 250 letters).\"\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "Server problem",
          "content": "HTTP/1.1 404 Server problem",
          "type": "json"
        }
      ]
    },
    "filename": "routes/foods.js",
    "groupTitle": "Food"
  },
  {
    "type": "delete",
    "url": "/api/foods/:uuid",
    "title": "Delete Food",
    "name": "04_DeleteFood",
    "group": "Food",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "uuid",
            "description": "<p>Food unique id.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "Server problem",
          "content": "HTTP/1.1 404 Server problem",
          "type": "json"
        }
      ]
    },
    "filename": "routes/foods.js",
    "groupTitle": "Food"
  },
  {
    "type": "get",
    "url": "/api/foods/likes/update",
    "title": "Get Likes/Dislikes",
    "name": "05_GetLikesDislikes",
    "group": "Food",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the Food.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "likes",
            "description": "<p>Likes of the Food.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "dislikes",
            "description": "<p>Dislikes of the Food.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": " HTTP/1.1 200 OK\n [\n  {\n    \"id\": 1,\n    \"likes\": 3,\n    \"dislikes\": 5,\n  },\n  {\n    \"id\": 2,\n    \"likes\": 8,\n    \"dislikes\": 3,\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Foods not found",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "routes/foods.js",
    "groupTitle": "Food"
  },
  {
    "type": "put",
    "url": "/api/likes",
    "title": "Add Likes",
    "name": "06_AddLikes",
    "group": "Food",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>UUID of the Food.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"uuid\": \"ad83hb71s3-9b83-11e6-84da-212025eb3333\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Server problem",
          "content": "HTTP/1.1 404 Server problem",
          "type": "json"
        }
      ]
    },
    "filename": "routes/foods.js",
    "groupTitle": "Food"
  },
  {
    "type": "put",
    "url": "/api/likes/decrement",
    "title": "Decrease Likes",
    "name": "07_DecreaseLikes",
    "group": "Food",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>UUID of the Food.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"uuid\": \"ad83hb71s3-9b83-11e6-84da-212025eb3333\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Server problem",
          "content": "HTTP/1.1 404 Server problem",
          "type": "json"
        }
      ]
    },
    "filename": "routes/foods.js",
    "groupTitle": "Food"
  },
  {
    "type": "put",
    "url": "/api/dislikes",
    "title": "Add Dislikes",
    "name": "08_AddDislikes",
    "group": "Food",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>UUID of the Food.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"uuid\": \"ad83hb71s3-9b83-11e6-84da-212025eb3333\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Server problem",
          "content": "HTTP/1.1 404 Server problem",
          "type": "json"
        }
      ]
    },
    "filename": "routes/foods.js",
    "groupTitle": "Food"
  },
  {
    "type": "put",
    "url": "/api/dislikes/decrement",
    "title": "Decrease Dislikes",
    "name": "09_DecreaseDislikes",
    "group": "Food",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>UUID of the Food.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"uuid\": \"ad83hb71s3-9b83-11e6-84da-212025eb3333\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Server problem",
          "content": "HTTP/1.1 404 Server problem",
          "type": "json"
        }
      ]
    },
    "filename": "routes/foods.js",
    "groupTitle": "Food"
  },
  {
    "type": "post",
    "url": "/api/upload-avatar",
    "title": "Save Avatar",
    "name": "01_SaveAvatar",
    "group": "Imagestore",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>Login of the Restaurant.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Avatar of the Restaurant (base64 format).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"login\": \"fatob\",\n  \"avatar\": \"data:image/png;base64,iVBORw0K......\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Server problem",
          "content": "HTTP/1.1 404 Server problem",
          "type": "json"
        }
      ]
    },
    "filename": "../nodestore/index.js",
    "groupTitle": "Imagestore"
  },
  {
    "type": "post",
    "url": "/api/upload",
    "title": "Save Food Image",
    "name": "02_SaveFoodImage",
    "group": "Imagestore",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>UUID of the Food.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photo",
            "description": "<p>Photo of the Food (base64 format).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"uuid\": \"ad83hb71s3-9b83-11e6-84da-212025eb3333\",\n  \"photo\": \"data:image/png;base64,iVBORw0K......\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Server problem",
          "content": "HTTP/1.1 404 Server problem",
          "type": "json"
        }
      ]
    },
    "filename": "../nodestore/index.js",
    "groupTitle": "Imagestore"
  },
  {
    "type": "delete",
    "url": "/api/delete",
    "title": "Delete Food Image",
    "name": "03_DeleteFoodImage",
    "group": "Imagestore",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>UUID of the Food.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"uuid\": \"ad83hb71s3-9b83-11e6-84da-212025eb3333\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Server problem",
          "content": "HTTP/1.1 404 Server problem",
          "type": "json"
        }
      ]
    },
    "filename": "../nodestore/index.js",
    "groupTitle": "Imagestore"
  },
  {
    "type": "get",
    "url": "/api/restaurants/:login",
    "title": "Get Restaurant",
    "name": "01_GetRestaurant",
    "group": "Restaurant",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "login",
            "description": "<p>Restaurant unique LOGIN.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rest_name",
            "description": "<p>Name of the Restaurant.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>Login of the Restaurant.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address of the Restaurant.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "avatar",
            "defaultValue": "false",
            "description": "<p>Checks if avatar of the Restaurant is set.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Restaurant.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "foods",
            "description": "<p>Foods of the Restaurant.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "likes",
            "description": "<p>Likes of the Restaurant.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "dislikes",
            "description": "<p>Dislikes of the Restaurant.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n   \"rest_name\": \"Fat Bob Burger\",\n   \"login\": \"fatbob\",\n   \"address\": \"Kramarska 21, Poznan\",\n   \"avatar\": false,\n   \"description\": \"super opis fat boba\",\n   \"foods\": [\n     {\n      \"uuid\": \"x7dafa30-9b83-11e6-84da-212055eb89db\",\n      \"likes\": 53,\n      \"dislikes\": 23\n     }\n   ],\n   \"likes\": 53,\n   \"dislikes\": 23\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Restaurant not found",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "routes/restaurants.js",
    "groupTitle": "Restaurant"
  },
  {
    "type": "put",
    "url": "/api/restaurants/update",
    "title": "Update Restaurant",
    "name": "02_UpdateRestaurant",
    "group": "Restaurant",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>Login of the Restaurant.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rest_name",
            "description": "<p>Name of the Restaurant.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address of the Restaurant.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Restaurant.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Avatar of the Restaurant (base64 format).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"login\": \"fatbob\",\n  \"rest_name\": \"Fat Bob Burger\",\n  \"address\": \"Kramarska 21, Poznan\",\n  \"description\": \"super opis fat boba\",\n  \"avatar\": \"data:image/jpeg;base64,/9j/4AAQS....\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "Restaurant not found",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "routes/restaurants.js",
    "groupTitle": "Restaurant"
  },
  {
    "type": "put",
    "url": "/api/restaurants/password",
    "title": "Change Password",
    "name": "03_ChangePassword",
    "group": "Restaurant",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>Login of the Restaurant.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "oldPassword",
            "description": "<p>Old password of the Restaurant.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newPassword",
            "description": "<p>New password of the Restaurant.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newPassword2",
            "description": "<p>Again new password of the Restaurant.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"login\": \"fatbob\",\n  \"oldPassword\": \"fatbob\",\n  \"newPassword\": \"newpass\",\n  \"newPassword2\": \"newpass\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "Restaurant not found",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "routes/restaurants.js",
    "groupTitle": "Restaurant"
  }
] });

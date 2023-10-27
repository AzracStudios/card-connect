/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("igat8i5s1sesagm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pzhpgb0s",
    "name": "image",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("igat8i5s1sesagm")

  // remove
  collection.schema.removeField("pzhpgb0s")

  return dao.saveCollection(collection)
})

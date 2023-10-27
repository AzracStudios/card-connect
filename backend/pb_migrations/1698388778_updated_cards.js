/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("igat8i5s1sesagm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "av76dsdu",
    "name": "company",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("igat8i5s1sesagm")

  // remove
  collection.schema.removeField("av76dsdu")

  return dao.saveCollection(collection)
})

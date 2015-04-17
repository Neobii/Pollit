Tags = new Mongo.Collection("tags");

Tags.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },
  slug: {
    type: String,
    label: "Slug"
  }
}))
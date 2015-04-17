Polls = new Meteor.Collection('polls');

Polls.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Poll name"
  },
  description: {
    type: String,
    label: "Description"
  },
  tags: {
    type: [String],
    label: "Tags"
  }
}))
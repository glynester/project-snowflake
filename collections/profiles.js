Profiles = new Mongo.Collection('profiles')

ProfileSchema = new SimpleSchema({
  created_by: {
    type: String,
    label: 'Created by:',
    optional: true,
    autoValue: function() {
      return this.userId;
    },
    autoform: {
      type: 'hidden'
    }
  },
  skills: {
    type: String,
    label: 'Skills:',
  },
  location: {
    type: String,
    label: 'Location:'
  }
});

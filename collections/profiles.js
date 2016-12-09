Profiles = new Mongo.Collection('profiles')

Skills = new SimpleSchema({
  skill: {
    type: String
  }
});

ProfileSchema = new SimpleSchema({
  created_by: {
    type: String,
    label: 'Created by:',
    unique: true,
    autoValue: function() {
      return this.userId;
    },
    autoform: {
      type: 'hidden'
    }
  },
  bio: {
    type: String,
    min: 5,
    max: 1000,
    autoform: {
       rows: 5
    }
  },
  location: {
    type: String,
    label: 'Location:'
  },
  skills: {
    type: [Skills],
    optional: true
  },

});

Profiles.attachSchema(ProfileSchema);

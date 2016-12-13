Profiles = new Mongo.Collection('profiles')

Profiles.allow({
	insert: function(userId, doc) {
		return !!userId;
	},
	update: function(userId, doc) {
		return !!userId;
	}
});


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
  projects: {
    type: [String],
    optional: true,
    autoform: {
      type: 'hidden'
    }
  },
  profileimage: {
    type: String,
		optional: true,
    autoform: {
      afFieldInput: {
        type: "cfs-file",
        collection: "images"
      }
    }
  }
});

Profiles.attachSchema(ProfileSchema);

Profiles = new Mongo.Collection('profiles');

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
    type: [Number],
		decimal: true,
    label: 'Location:',
    autoform: {
      type: 'map',
      afFieldInput: {
        geolocation: false,
        searchBox: false,
        autolocate: false,
				clickableIcons: true,
				searchBox: false,
				zoom: 12,
				defaultLat: 51.453844,
				defaultLng: -2.588578,
        }
      }
  },

	skillsAlt: {
    type: String,
    optional: true,
    autoform: {
      type: "What skills can you share?",
      options: function () {
        return [
          {label: "Plumbing", value: "Plumbing"},
          {label: "Cooking", value: "Cooking"},
          {label: "Cleaning", value: "Cleaning"}
        ];
      }
    }
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

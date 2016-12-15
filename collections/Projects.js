Projects = new Mongo.Collection('projects')

Projects.allow({
	insert: function(userId, doc) {
		return !!userId;
	},
	update: function(userId, doc) {
		return !!userId;
	},
  remove: function(userId, doc) {
    return !!userId;
  }
});

Skills = new SimpleSchema({
  skill: {
    type: String
  }
});

ProjectsSchema = new SimpleSchema({
  created_by: {
    type: String,
    label: 'Created by',
    optional: true,
    autoValue: function() {
      if(this.isInsert) {
        return this.userId;
      } else {
        this.unset();
      }
    },
    autoform: {
      type: 'hidden'
    }
  },
  status: {
    type: Number,
    defaultValue: 0,
    autoform: {
      type: "hidden"
    }
  },
	location: {
		type: [Number],
		decimal: true,
    label: 'Location',
    autoform: {
      type: 'map',
      afFieldInput: {
        geolocation: false,
        searchBox: true,
        autolocate: false,
				clickableIcons: true,
				zoom: 12,
				defaultLat: 52.489063,
				defaultLng: -1.903464,
        }
      }
  },
  description: {
    type: String,
    label: 'Description',
    autoform: {
          afFieldInput: {
            type: "textarea"
          }
        }
  },
  createdAt: {
    type: Date,
    label: "Created At",
    autoValue: function() {
    return new Date()
    },
    autoform: {
          type: "hidden"
      }
    },
  date: {
    type: Date,
    label: "Date of Project",
		min: new Date(),
    optional: true,
    autoform: {
     afFieldInput: {
       type: "date"
     }
   }
  },
	time: {
		type: String,
		label: "Time:",
		optional: true,
		autoform: {
		 afFieldInput: {
			 type: "time"
		 }
	 }
	},
  minPeople: {
    type: Number,
    label: 'Minimum Volunteers'
  },
  maxPeople: {
    type: Number,
    label: 'Maximum Volunteers'
  },
  skills: {
    type: [Skills]
  },
  volunteers: {
    type: [String],
    optional: true,
    autoform: {
      type: "hidden"
  	}
	},
	volunteersEmail: {
	  type: [String],
	  optional: true,
	  autoform: {
	    type: "hidden"

	  }
	}
});

Projects.attachSchema(ProjectsSchema);

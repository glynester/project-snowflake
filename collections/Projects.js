Projects = new Mongo.Collection('projects')

Skills = new SimpleSchema({
  skill: {
    type: String
  }
});

ProjectsSchema = new SimpleSchema({
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
    type: [Skills]
  },
  location: {
    type: String,
    label: 'Location:'
  },
  description: {
    type: String,
    label: 'Description:',
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
    label: "Date of Project"
  },
  minPeople: {
    type: Number,
    label: 'Minumum People Required'
  },
  maxPeople: {
    type: Number,
    label: 'Maximum People Allowed'
  }
});

Projects.attachSchema(ProjectsSchema);

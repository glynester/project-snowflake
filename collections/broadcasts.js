Broadcasts = new Mongo.Collection('broadcasts')

Broadcasts.allow({
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

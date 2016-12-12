var createThumb = function(fileObj, readStream, writeStream) {
  gm(readStream, fileObj.name()).autoOrient().resize('75', '75', "^").gravity('Center').extent('75', '75').stream().pipe(writeStream);
};

var editMain = function(fileObj, readStream, writeStream) {
  gm(readStream, fileObj.name()).autoOrient().resize('250', '250', "^").gravity('Center').extent('250', '250').stream().pipe(writeStream);
};

var imageStore = new FS.Store.GridFS("images", { transformWrite: editMain });
var thumbStore = new FS.Store.GridFS("thumbs", { transformWrite: createThumb });

Images = new FS.Collection("images", {
 stores: [imageStore, thumbStore],
 filter: {
   allow: {
     contentTypes: ['image/*']
   }
 }
});

Images.allow({
 insert: function(){
 return true;
 },
 update: function(){
 return true;
 },
 remove: function(){
 return true;
 },
 download: function(){
 return true;
 }
});

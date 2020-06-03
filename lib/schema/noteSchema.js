const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  }
});

NoteSchema.statics.execute = function(actionObj) {
  if(actionObj.type === 'add') {
    return this.create({
      text: actionObj.payload
    })
    
  } else if(actionObj.type === 'list') {
    return this.find();

  } else (actionObj.type === 'delete') 
    return this.find();
  

};

module.exports = mongoose.model('Note', NoteSchema);
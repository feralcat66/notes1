class Note {
  constructor(id, text) {
    this.id = id;
    this.text = text; 
  }

  static add(actionObj) {
    const note = {
      id: Date.now(),
      text: actionObj.payload
    };

    console.log(`here is your note: ${note.text}`);
    
    return note;
  }

static execute(actionObj) {
  switch(actionObj.type) {
    case 'add':
      return this.add(actionObj);

      default:
        return;
  }
}

}

module.exports = Note 
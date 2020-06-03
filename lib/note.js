// const add = action => {
//   const note = {

//     text: action.payload
//   };
//   console.log(note);
//   return note;
// };

// module.exports = {
//   add
// }

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



}

module.exports = {
  Note
}
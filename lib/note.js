const add = action => {
  const note = {

    text: action.payload
  };
  console.log(note);
  return note;
};

module.exports = {
  add
}
const Note = require('./Note.js');

describe ('Note class', () => {
  it('has and id and text', () => {

    const note = new Note(5, 'Note');

    expect(note.id).toEqual(expect.any(Number));
    expect(note.text).toEqual('Note');
  });

  it('has an add method', () => {
    const actionObj = {
      type: 'add',
      payload: 'Note'
    };

    const note = Note.add(actionObj);

    expect(note.id).toEqual(expect.any(Number));
    expect(note.text).toEqual('Note');
  });

  it('has an execute method', () => {
    const actionObj = {
      type: 'add',
      payload: 'Note'
    };

    const note = Note.execute(actionObj);

    expect(note.id).toEqual(expect.any(Number));
    expect(note.text).toEqual('Note');
  });

  it('does nothing if the action type is not understood', () => {
    const actionObj = {
      type: 'badType',
      payload: 'Note'
    };

    const note = Note.execute(actionObj);

    expect(note).toBeUndefined();
  });
});
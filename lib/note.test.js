const Note = require('./Note.js');

describe ('Note class', () => {
  it('has and id and text', () => {

    const note = new Note(3, 'hello peeps');

    expect(note.id).toEqual(expect.any(Number));
    expect(note.text).toEqual('hello peeps');
  });

  it('has an add method', () => {
    const actionObj = {
      type: 'add',
      payload: 'hello peeps'
    };

    const note = Note.add(actionObj);

    expect(note.id).toEqual(expect.any(Number));
    expect(note.text).toEqual('hello peeps');
  });

  it('has an execute method', () => {
    const actionObj = {
      type: 'add',
      payload: 'ahlan wa sahlan'
    };

    const note = Note.execute(actionObj);

    expect(note.id).toEqual(expect.any(Number));
    expect(note.text).toEqual('ahlan wa sahlan');
  });

  it('does nothing if the action type is not understood', () => {
    const actionObj = {
      type: 'erd',
      payload: 'what'
    };

    const note = Note.execute(actionObj);

    expect(note).toBeUndefined();
  });
});
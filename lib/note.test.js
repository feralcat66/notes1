const { add } = require('./note.js')

describe('note taking functions', () => {
  it('can create a note', () => {
    const actionObj = {
    type: 'add',
    payload: 'your note has been added'  
    };

    const results = add(actionObj);
    expect(results).toEqual({
      text: 'your note has been added'
    });
  });
});
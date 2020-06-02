const { parse, valid } = require ('./input');

describe ('input functions', () => {
  it ('parses first 2 items in an array', () => {
    const arr = ['node', 'index.js', '--add', 'Note'];
    const results = parse(arr);

    expect(results).toEqual({
      type: 'add',
      payload: 'Note'
    });
  });

});
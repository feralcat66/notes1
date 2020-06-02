const { Input, parse, valid } = require ('./input');

describe ('input functions', () => {
  it ('parses first 2 items in an array', () => {
    const arr = ['node', 'index.js', '--add', 'Note'];
    const results = parse(arr);

    expect(results).toEqual({
      type: 'add',
      payload: 'Note'
    });
  });

//old test 

  // it('validates command line arguments', () => {
  //   const action = {
  //     type: 'add',
  //     payload: 'Note'
  //   };

  //   const isValid = valid(action);

  //   expect(isValid).toBeTruthy();
  // });

  // it('validates command line arguments with add', () => {
  //   const action = {
  //     type: 'blerb',
  //     payload: 'Note'
  //   };

  //   const isValid = valid(action);

  //   expect(isValid).toBeFalsy();
  // });

});

describe('Input class', () => {
  let input;
  beforeEach(() => {
    const commands = ['node', 'index.js', '--add', 'Hello, grader of my assignment']

    input = new Input(commands)
  });

  it('is in proper flag format and the payload comes through as text', () => {

    expect(input.type).toEqual('add');
    expect(input.payload).toEqual('Hello, grader of my assignment');
  });


  it('has a valid method', () => {
    const action = {
      type: 'add',
      payload: 'Nick Cage wuz here'
    };
    const isValid = input.valid(action);
  
    expect(isValid).toBeTruthy();
});
});

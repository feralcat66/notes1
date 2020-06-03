const minimist = require('minimist');

const parse = (arr) => {
  const obj = minimist(arr);
  delete obj._;

  const [[type, payload]] = Object.entries(obj);

  return {
    type,
    payload
  };
};



class Input {
  constructor(arr) {
    const { type, payload } = parse(arr);
    this.type = type;
    this.payload = payload;
  }
  
  valid(action) {
    return ( action.type === 'add' && action.payload)
  }
}

module.exports = { 
  parse,
  Input
};
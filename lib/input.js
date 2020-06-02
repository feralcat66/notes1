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

const valid = action => {
  return action.type === 'add' && action.payload;
};

module.exports = { 
  parse,
  valid
};
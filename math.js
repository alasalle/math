module.exports = {
  //2 requirements
  //adds and subtracts nums
  //converts numerical strs
  //returns NaN for non numerical input

  //1 determine functions or units/write shells
  add: (x, y) => {
    //throws errors on non num values
    if(typeof x !== 'number' || typeof y !== 'number') {
      throw new Error('invalid arg')
    } else {
      return x+y
    }
    
    // return Number(x) + Number(y);
  },

  subtract: (x, y) => {
    //could do return x-y because JS does type conversion (doesn't do it for add because string concatenation)
    return Number(x) - Number(y);
  }
};

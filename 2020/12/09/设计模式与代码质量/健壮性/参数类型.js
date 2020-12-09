function add(a, b){
  if(typeof a === 'number' && typeof b === 'number'){
    return a + b;
  } else {
    throw new Error('a or b is not a number')
  }
}
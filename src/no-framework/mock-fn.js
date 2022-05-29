const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')


function fn(implement){
  const mockFn=(...args)=>{
    mockFn.mock.calls.push(args);
    return implement(...args);
  }

  mockFn.mock={calls:[]}
  return mockFn;


}

console.log('!!')

const originalGetWinner=utils.getWinner;
utils.getWinner=fn((p1,p2)=>p1);


const winner=thumbWar('Kent C. Dodds','Ken Wheeler');
assert.strictEqual(winner,'Kent C. Dodds');
console.log(utils.getWinner.mock.calls);

// cleanup
utils.getWinner = originalGetWinner

const j =  require('lodash');
const item = [1,[2,[3,[4]]]];
const newitems = j.flattenDeep(item);
console.log(newitems);

const { readFileSync,writeFileSync } = require('fs'); // this is same as const file = require('fs'); file.readFileSync() file.writeFileSync();

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');
console.log(first);
console.log(second);

writeFileSync('./content/result.txt',`Hello here is the result : ${first} , ${second}`);



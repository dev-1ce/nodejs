const os = require('os') // no dot coz its one of the built in modules
const user = os.userInfo();
// console.log(user);
// console.log(`The system uptime is ${os.uptime()} seconds`);
const curros = {
    name : os.type(),
    release : os.release(),
    total : os.totalmem(),
    free : os.freemem(),
}
console.log(curros);
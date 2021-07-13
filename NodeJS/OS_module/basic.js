const os = require('os');

console.log(`The user information is ${os.userInfo()}`);
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}

console.log(currentOS);

// ---------- Working with PATH ----------
const path = require('path');

const filePath = path.join(__dirname, 'xd', 'omg.js');
console.log(filePath);
module.exports.sleepMs = (ms) => new Promise(resolve => setTimeout(resolve, ms));
module.exports.sleep = s => module.exports.sleepMs(s * 1000);
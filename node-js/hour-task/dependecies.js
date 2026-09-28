const clock = require('./services/clock');
const loginGetter = require('./services/loginGetter');

function clockDependency() {
    return new clock("Europe/Moscow");
}

function loginGetterDependency() {
    return new loginGetter("jojiiikol");
}

function zipperDependency() {
    return new zipper();
}

module.exports = {
    clockDependency,
    loginGetterDependency,
    zipperDependency
};
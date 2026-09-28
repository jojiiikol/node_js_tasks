const hourRoute = require("./hourRoute");
const loginRoute = require("./loginRoute");
const zipRoute = require("./zipRoute");

function route(request, response) {
    hourRoute(request, response);
    loginRoute(request, response);
    zipRoute(request, response);
}

module.exports = route;
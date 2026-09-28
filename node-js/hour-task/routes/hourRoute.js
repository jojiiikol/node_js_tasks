const dependecies = require("../dependecies");

function hourRoute(request, response) {
    if (request.url === "/hour") {
        return response.write(
            dependecies
            .clockDependency()
            .getHour()
        );
    }
}

module.exports = hourRoute;
const dependecies = require("../dependecies");

function loginRoute(request, response) {
    if (request.url === "/login") {
        return response.write(
            dependecies
            .loginGetterDependency()
            .getLogin()
        );
    }
}

module.exports = loginRoute;
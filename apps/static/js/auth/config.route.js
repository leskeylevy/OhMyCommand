(function () {
    'use strict';

    angular
        .module('app.auth')
        .config(configFunction);

    configFunction.$inject = ['$routeProvider', '$resourceProvider',  'STATIC_URL'];

    function configFunction($routeProvider, $resourceProvider, STATIC_URL) {
        $routeProvider.when('/login', {
            templateUrl: STATIC_URL + '/auth/login.html',
            controller: 'AuthController',
            controllerAs: 'vm'
        });
        $routeProvider.when('/register', {
            templateUrl: STATIC_URL + '/auth/register.html',
            controller: 'AuthController',
            controllerAs: 'vm'
        });
    }
})();

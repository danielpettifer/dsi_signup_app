angular.module('app.services', [])

    .factory('BlankFactory', [function () {

    }])

    .factory('sessionService', ['$http', function ($http) {
        return {
            set: function (key, value) {
                return localStorage.setItem(key, JSON.stringify(value));
            },
            get: function (key) {
                return JSON.parse(localStorage.getItem(key));
            },
            destroy: function (key) {
                return localStorage.removeItem(key);
            }
        };
    }])

    .service('BlankService', [function () {

    }])

    .service('LoginService', function ($q, $http, sessionService) {
        return {
            loginUser: function (name, pw) {
                console.log(name, pw);
                var deferred = $q.defer();
                var promise = deferred.promise;

                $http.get("http://localhost/dsi-app/server/login.php", {
                    params: {
                        "email": name, "password": pw
                    }
                })
                    .success(function (data) {
                        console.log(data);
                        if (data.code == 'ok') {
                            sessionService.set('user', {id: 1, name: 'Alecs'});
                            deferred.resolve('Welcome !');
                        } else {
                            deferred.reject('Please check your credentials!');
                        }
                    })
                    .error(function (data) {
                        deferred.reject('Could not connect to server');
                    });

                promise.success = function (fn) {
                    promise.then(fn);
                    return promise;
                };
                promise.error = function (fn) {
                    promise.then(null, fn);
                    return promise;
                };
                return promise;
            }
        }
    });
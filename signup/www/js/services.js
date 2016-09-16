angular.module('app.services', [])

    .factory('BlankFactory', [function () {

    }])

    .factory('sessionService', ['$http', function ($http) {
        return {
            set: function (key, value) {
                return localStorage.setItem(key, JSON.stringify(value));
            },
            get: function (key) {
                if (localStorage.getItem(key) != null && localStorage.getItem(key) != 'undefined')
                    return JSON.parse(localStorage.getItem(key));
                else
                    return null;
            },
            destroy: function (key) {
                return localStorage.removeItem(key);
            }
        };
    }])

    .service('UrlService', [function () {
        return {
            server: 'http://test.digitalsocial.eu'
        };
    }])

    .service('BlankService', [function () {

    }])

    .service('LoginService', function ($q, $http, sessionService, UrlService) {
        return {
            loginUser: function (name, pw) {
                var deferred = $q.defer();
                var promise = deferred.promise;

                $http.get(UrlService.server + "/app-login", {
                    params: {
                        "email": name, "password": pw
                    }
                })
                    .success(function (data) {
                        if (data.code == 'ok') {
                            sessionService.set('user', data.user);
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
    })

    .service('RegisterService', function ($q, $http, sessionService, UrlService) {
        return {
            registerNewUser: function (data) {
                var deferred = $q.defer();
                var promise = deferred.promise;

                $http.get(UrlService.server + "/app-register-user", {
                    params: {
                        userID: sessionService.get('user').id,
                        firstName: data.firstName,
                        lastName: data.lastName,
                        email: data.email,
                        jobTitle: data.jobTitle,
                        organisation: data.organisation
                    }
                })
                    .success(function (data) {
                        if (data.code == 'ok') {
                            deferred.resolve('New user successfully created');
                        } else {
                            deferred.reject(data.errors);
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

angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}]);
    .service('BlankService', [function () {

    }])

    .service('LoginService', function ($q, $http, sessionService) {
        return {
            loginUser: function (name, pw) {
                console.log(name, pw);
                var deferred = $q.defer();
                var promise = deferred.promise;

                $http.get("http://test.digitalsocial.eu/app-login", {
                    // $http.get("https://localhost/DSI4EU/www/app-login", {
                    params: {
                        "email": name, "password": pw
                    }
                })
                    .success(function (data) {
                        console.log(data);
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

    .service('RegisterService', function ($q, $http, sessionService) {
        return {
            registerNewUser: function (data) {
                console.log(data);

                var deferred = $q.defer();
                var promise = deferred.promise;

                // $http.get("http://test.digitalsocial.eu/app-register-user", {
                $http.get("https://localhost/DSI4EU/www/app-register-user", {
                    params: {
                        firstName: data.firstName,
                        lastName: data.lastName,
                        email: data.email,
                        jobTitle: data.jobTitle,
                        organisation: data.organisation
                    }
                })
                    .success(function (data) {
                        console.log(data);
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

;

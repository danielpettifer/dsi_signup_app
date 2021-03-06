angular.module('app.controllers', [])

    .controller('registerUserCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


        }])

    .controller('settingsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


        }])

    .controller('eventsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


        }])

    .controller('pageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


        }])

    .controller('registerCtrl', function ($scope, $state, sessionService) {
        if (!sessionService.get('user')) {
            $state.go('login');
            return;
        }
    })

    .controller('newRegistrationCtrl', function ($rootScope, $scope, $ionicPopup, $state, sessionService, RegisterService) {
        if (!$rootScope.data)
            $rootScope.data = {};

        $scope.save = function () {
            $scope.loading = true;
            RegisterService.registerNewUser($rootScope.data)
                .success(function (data) {
                    $scope.loading = false;
                    $rootScope.data = {};
                    var alertPopup = $ionicPopup.alert({
                        title: 'Success',
                        template: data
                    });
                    alertPopup.then(function () {
                        $state.go('tabsController.registerUser');
                    });
                })
                .error(function (data) {
                    $scope.loading = false;
                    var alertPopup = $ionicPopup.alert({
                        title: 'Please correct the errors',
                        template: data
                    });
                });
        };
    })

    .controller('signupCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


        }])

    .controller('leaderboardCtrl', function ($scope, $stateParams, UrlService, $http, sessionService, $ionicPopup) {
        $scope.imgPath = UrlService.server + '/images/users/profile/';

        $scope.doRefresh = function () {
            $http.get(UrlService.server + "/app-leader-board", {
                params: {
                    userID: sessionService.get('user').id
                }
            })
                .success(function (data) {
                    if (data.code == 'ok') {
                        $scope.leaderBoard = data.leaderBoard;
                    } else {
                        var alertPopup = $ionicPopup.alert({
                            title: 'Application error',
                            template: 'An error occurred. Please retry'
                        });
                    }
                })
                .error(function (data) {
                    var alertPopup = $ionicPopup.alert({
                        title: 'Server error',
                        template: 'Could not load the leaderboard. Please check your internet connection.'
                    });
                });
            $scope.$broadcast('scroll.refreshComplete');
        };

        $scope.doRefresh();
    })

    .controller('aboutDSIRegistrationCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


        }])

    .controller('profileCtrl', function ($scope, sessionService) {
        $scope.user = sessionService.get('user');
    })

    .controller('loginCtrl', function ($scope, LoginService, $ionicPopup, $state, sessionService) {
        if (sessionService.get('user')) {
            $state.go('tabsController.registerUser');
            return;
        }

        $scope.data = {};

        $scope.login = function () {
            $scope.loading = true;
            LoginService.loginUser($scope.data.username, $scope.data.password).success(function (data) {
                $state.go('tabsController.registerUser');
            }).error(function (data) {
                $scope.loading = false;
                var alertPopup = $ionicPopup.alert({
                    title: 'Login failed!',
                    template: data
                });
            });
        }
    })

    .controller('logoutCtrl', function ($scope, $state, sessionService) {
        sessionService.destroy('user');
        $state.go('login');
    })

    .controller('eventsCtrl', function ($scope, $http, UrlService, $ionicPopup) {
        $scope.doRefresh = function () {
            $http.get(UrlService.server + "/events.json")
                .success(function (data) {
                    if ('events' in data) {
                        $scope.events = data.events;
                    } else {
                        var alertPopup = $ionicPopup.alert({
                            title: 'Application error',
                            template: 'An error occurred. Please retry later.'
                        });
                    }
                })
                .error(function (data) {
                    var alertPopup = $ionicPopup.alert({
                        title: 'Server error',
                        template: 'Could not load the events. Please check your internet connection.'
                    });
                });
            $scope.$broadcast('scroll.refreshComplete');
        };

        $scope.doRefresh();
    })

    .controller('eventCtrl', function ($scope, $http, UrlService, $ionicPopup, $stateParams) {
        $http.get(UrlService.server + "/events.json")
            .success(function (data) {
                if ('events' in data) {
                    for(i in data.events){
                        if(data.events[i].id == $stateParams.id){
                            $scope.event = data.events[i];
                        }
                    }
                } else {
                    var alertPopup = $ionicPopup.alert({
                        title: 'Application error',
                        template: 'An error occurred. Please retry later.'
                    });
                }
            })
            .error(function (data) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Server error',
                    template: 'Could not load the events. Please check your internet connection.'
                });
            });
        $scope.$broadcast('scroll.refreshComplete');
    })

    .controller('menuProfileCtrl', function ($scope, sessionService, UrlService) {
        $scope.imgPath = UrlService.server + '/images/users/profile/';
        $scope.user = sessionService.get('user');
    });
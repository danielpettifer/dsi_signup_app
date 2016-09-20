angular.module('app.routes', [])

    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider


            .state('tabsController', {
                url: '/page1',
                templateUrl: 'templates/tabsController.html',
                abstract: true
            })

            .state('tabsController.registerUser', {
                cache: false,
                url: '/register',
                views: {
                    'registerView': {
                        templateUrl: 'templates/registerUser.html',
                        controller: 'registerCtrl'
                    }
                }
            })

            .state('tabsController.newRegistration', {
                url: '/newRegistration',
                views: {
                    'registerView': {
                        templateUrl: 'templates/newRegistration.html',
                        controller: 'newRegistrationCtrl'
                    }
                }
            })

            .state('settings', {
                url: '/settings',
                templateUrl: 'templates/settings.html',
                controller: 'settingsCtrl'
            })

            .state('signup', {
                url: '/page7',
                templateUrl: 'templates/signup.html',
                controller: 'signupCtrl'
            })

            .state('tabsController.leaderboard', {
                url: '/leaderboard',
                views: {
                    'leaderBoardView': {
                        templateUrl: 'templates/leaderBoard.html',
                        controller: 'leaderboardCtrl'
                    }
                }
            })

            .state('aboutDSIRegistration', {
                url: '/about',
                templateUrl: 'templates/aboutDSIRegistration.html',
                controller: 'aboutDSIRegistrationCtrl'
            })

            .state('tabsController.events', {
                url: '/events',
                views: {
                    'eventsView': {
                        templateUrl: 'templates/events.html',
                        controller: 'eventsCtrl'
                    }
                }
            })

            .state('tabsController.event', {
                url: '/event/:id',
                views: {
                    'eventsView': {
                        templateUrl: 'templates/event.html',
                        controller: 'eventCtrl'
                    }
                }
            })

            .state('profile', {
                cache: false,
                url: '/profile',
                templateUrl: 'templates/profile.html',
                controller: 'profileCtrl'
            })

            .state('login', {
                cache: false,
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'loginCtrl'
            })

            .state('logout', {
                cache: false,
                url: '/logout',
                templateUrl: 'templates/login.html',
                controller: 'logoutCtrl'
            });

        $urlRouterProvider.otherwise('/login');
    })
;

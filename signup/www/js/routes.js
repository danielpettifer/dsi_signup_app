angular.module('app.routes', [])

    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider


            .state('tabsController.registerUser', {
                cache: false,
                url: '/register',
                views: {
                    'tab1': {
                        templateUrl: 'templates/registerUser.html',
                        controller: 'registerCtrl'
                    }
                }
            })

            .state('leaderboard', {
                url: '/page3',
                views: {
                    'tab2': {
                        templateUrl: 'templates/leaderboard.html',
                        controller: 'leaderboardCtrl'
                    }
                }
            })

            .state('tabsController.settings', {
                url: '/page4',
                views: {
                    'tab3': {
                        templateUrl: 'templates/settings.html',
                        controller: 'settingsCtrl'
                    }
                }
            })
        
        .state('tabsController.events', {
                url: '/events',
                views: {
                    'tab3': {
                        templateUrl: 'templates/events.html',
                        controller: 'eventsCtrl'
                    }
                }
            })

            .state('tabsController', {
                url: '/page1',
                templateUrl: 'templates/tabsController.html',
                abstract: true
            })

            .state('page', {
                url: '/page5',
                templateUrl: 'templates/page.html',
                controller: 'pageCtrl'
            })

            .state('tabsController.newRegistration', {
                url: '/newRegistration',
                views: {
                    'tab1': {
                        templateUrl: 'templates/newRegistration.html',
                        controller: 'newRegistrationCtrl'
                    }
                }
            })

            .state('signup', {
                url: '/page7',
                templateUrl: 'templates/signup.html',
                controller: 'signupCtrl'
            })

            .state('tabsController.nesta', {
                url: '/page8',
                views: {
                    'tab2': {
                        templateUrl: 'templates/leaderBoard.html',
                        controller: 'nestaCtrl'
                    }
                }
            })

            .state('aboutDSIRegistration', {
                url: '/page9',
                templateUrl: 'templates/aboutDSIRegistration.html',
                controller: 'aboutDSIRegistrationCtrl'
            })

            .state('events', {
                cache: false,
                url: '/events',
                templateUrl: 'templates/events.html',
                controller: 'eventsCtrl'
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
    });

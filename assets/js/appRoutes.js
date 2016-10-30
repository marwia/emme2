/**
 * assets/js/appRoutes.js
 *
 * Mariusz Wiazowski
 *
 * Router per l'applicazione Angular, quindi una sorta di router client-side.
 * E' una parte fondamentale di una applicazione single-page, indica tutti gli stati 
 * possibili dell'applicazione e le rispettive view (template o partials) da 
 * mostrare all'utente.
 * E' stato utilizzato un modulo chiamata "ui-router" perchè è più potente di quello
 * nativo, infatti è possibile creare view annidate e addirittura multiple e
 * distinguerle con dei nomi.
 * 
 */
angular.module('appRoutes', []).config([
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider) {

        // Dichiaro i vari stati dell'app
        $stateProvider

            /**
             * Stato genitore organizzato in 3 view.
             */
            .state('app', {
                url: '/app',
                views: {
                    '': {
                        templateUrl: 'templates/app.html',
                        controller: 'MasterCtrl'
                    },
                    'content@app': {
                        templateUrl: 'templates/content.html',
                        controller: 'MapsCtrl'
                    },
                    'navbar@app': {
                        templateUrl: 'templates/navbar.html',
                        controller: 'NavbarCtrl'
                    },
                    'footer@app': { templateUrl: 'templates/footer.html' }
                },
                onEnter: ['$state', function ($state) {
                    //if (!Auth.isLoggedIn()) {
                    //    $state.go('login');
                    //}
                }]
            })
            
            .state('app.detail', {
                url: '/detail',
                views: {
                    'content@app': {
                        templateUrl: 'templates/detail.html',
                        controller: "DetailCtrl"
                    }
                },
                onEnter: ['$state', function ($state) {
                    //if (!Auth.isLoggedIn()) {
                    //    $state.go('login');
                    //}
                }]
            })

        // disabilito la necessità dei # nelle URL
        $locationProvider.html5Mode(true);

    }]);
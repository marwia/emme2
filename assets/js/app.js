/**
 * Angular application 
 *
 * In questa parte di codice dichiaro tutte le dipendenze relative al modulo principale chiamato "sampleApp".
 * ATTENZIONE: l'ordine è rilevante!
 * Il primo modulo ad essere lanciato sarà 'sampleApp'
 *
 */

var emme2 = angular.module('emme2', ['ui.router', 'ui.bootstrap',
                'uiGmapgoogle-maps', 'angular.filter',
				'appRoutes', 'ngGPlaces',
                'MasterCtrl', 'NavbarCtrl', 'MapsCtrl', 'DetailCtrl'
				]);


emme2.config(['uiGmapGoogleMapApiProvider', function(uiGmapGoogleMapApiProvider){
  // Configurazione delle Google Maps API
  uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyCpj_s-hKfb1dpG__r68JBgTBHNqT4dIb8',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'geometry,visualization',
        language: "it-IT"
    });
    
}]);
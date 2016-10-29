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
                'MasterCtrl', 'NavbarCtrl'
				]);



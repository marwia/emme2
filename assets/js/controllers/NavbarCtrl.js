/**
 * assets/js/controllers/NavbarCtrl.js
 *
 * Mariusz Wiazowski
 *
 * Controller offerto insieme al progetto su Github: https://github.com/rdash/rdash-angular
 * Serve principalmente per gestire la sidebar (chiusura e apertura).
 */
angular.module('NavbarCtrl', []).controller('NavbarCtrl', [
    '$scope',
    function($scope){
        
        // metodi e variabili
        $scope.isNavCollapsed = true;
        $scope.isCollapsed = false;
        $scope.isCollapsedHorizontal = false;

    }]);
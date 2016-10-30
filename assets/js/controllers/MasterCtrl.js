/**
 * assets/js/controllers/MasterCtrl.js
 *
 * Mariusz Wiazowski
 *
 * Controller offerto insieme al progetto su Github: https://github.com/rdash/rdash-angular
 * Serve principalmente per gestire la sidebar (chiusura e apertura).
 */
angular.module('MasterCtrl', []).controller('MasterCtrl', [
    '$scope',
    function($scope){

        $scope.companies = [
            {
                titolo: "AZIENDA BIO LOMBARDIA",
                desc: "Dal 1945 la famiglia Agostini produce Olio Extra Vergine di Oliva nel proprio frantoio, selezionando olive provenienti dalle colline italiane, marchigiane e in particolare della zona del fermano. Le nostre olive vengono ancora raccolte a mano."
            },

            {
                titolo: "AZIENDA BIO",
                desc: "Dal 1945 la famiglia Agostini produce Olio Extra Vergine di Oliva nel proprio frantoio, selezionando olive provenienti dalle colline italiane, marchigiane e in particolare della zona del fermano. Le nostre olive vengono ancora raccolte a mano."
            },

            {
                titolo: "AZIENDA BIO LOMBARDIA",
                desc: "Dal 1945 la famiglia Agostini produce Olio Extra Vergine di Oliva nel proprio frantoio, selezionando olive provenienti dalle colline italiane, marchigiane e in particolare della zona del fermano. Le nostre olive vengono ancora raccolte a mano."
            },

            {
                titolo: "AZIENDA BIO VENETO",
                desc: "Dal 1945 la famiglia Agostini produce Olio Extra Vergine di Oliva nel proprio frantoio, selezionando olive provenienti dalle colline italiane, marchigiane e in particolare della zona del fermano. Le nostre olive vengono ancora raccolte a mano."
            },

            {
                titolo: "BIO CON TE",
                desc: "Dal 1945 la famiglia Agostini produce Olio Extra Vergine di Oliva nel proprio frantoio, selezionando olive provenienti dalle colline italiane, marchigiane e in particolare della zona del fermano. Le nostre olive vengono ancora raccolte a mano."
            },

            {
                titolo: "PRODOTTI BIOLOGICI",
                desc: "Dal 1945 la famiglia Agostini produce Olio Extra Vergine di Oliva nel proprio frantoio, selezionando olive provenienti dalle colline italiane, marchigiane e in particolare della zona del fermano. Le nostre olive vengono ancora raccolte a mano."
            }
        ];
        
        // metodi e variabili

    }]);
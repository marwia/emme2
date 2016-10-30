angular.module('DetailCtrl', []).controller('DetailCtrl', [
    '$scope', '$uibModal',
    function($scope, $uibModal){
        $scope.lists = [
            {
                titolo: "Associacione NoProfit",
                data_n: "4",
                data_m: "NOV."
            },

            {
                titolo: "Associacione NoProfit",
                data_n: "6",
                data_m: "NOV."
            },

            {
                titolo: "G.A.S. Lombardia",
                data_n: "29",
                data_m: "NOV."
            },

            {
                titolo: "G.A.S. Lombardia",
                data_n: "14",
                data_m: "NOV."
            },

            {
                titolo: "G.A.S. Veneto",
                data_n: "1",
                data_m: "DIC."
            },

            {
                titolo: "G.A.S. Veneto",
                data_n: "2",
                data_m: "DIC."
            },

            {
                titolo: "Associacione NoProfit",
                data_n: "6",
                data_m: "DIC."
            }
        ];

        $scope.products = [
            "Pomodori Bio",
            "Carote Bio",
            "Patate Bio",
            "Ceci Bio",
            "Grano Bio",
            "Farina Bio"
        ];


        $scope.openModal = function () {
            $uibModal.open({
                animation: true,
                templateUrl: 'templates/modal.html',
                controller: function ($uibModalInstance, $scope) {
                    // passaggio paramteri
                    
                    // azioni possibili all'interno della modale
                    $scope.ok = function () {
                        
                    };
                    
                    $scope.cancel = function () {
                        $uibModalInstance.dismiss('cancel');
                    }; 
                },
                size: ''
            });
        };

        
    }]
);
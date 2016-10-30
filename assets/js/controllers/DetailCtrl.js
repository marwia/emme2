angular.module('DetailCtrl', []).controller('DetailCtrl', [
    '$scope', '$uibModal',
    function($scope, $uibModal){
        $scope.lists = [
            "i'm a albatros",
            "I Can Fly",
            "Simoncino",
            "Boooomba",
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
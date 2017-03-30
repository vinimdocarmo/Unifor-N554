angular
    .module('SistemaAcademico')
    .controller('CadastroMetaController', function ($scope, MetasHandler) {
        $scope.meta = {
            tarefas: []
        };

        $scope.addMeta = function () {
            MetasHandler.addMeta($scope.meta);
            $scope.meta = {
                tarefas: []
            };
            $scope.metaCasdastrada = true;
        };

        $scope.addTarefa = function () {
            $scope.meta.tarefas.push($scope.tarefa);
            $scope.tarefa = {};
        };
    });

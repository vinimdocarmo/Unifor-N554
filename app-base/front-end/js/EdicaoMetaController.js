angular
    .module('SistemaAcademico')
    .controller('EdicaoMetaController', function ($scope, MetasHandler) {
        var metaOriginal = MetasHandler.getMetaParaEditar();

        $scope.meta = angular.copy(metaOriginal);

        $scope.editarMeta = function () {
            MetasHandler.editarMeta(metaOriginal, $scope.meta);
            $scope.metaEditada = true;
            metaOriginal = $scope.meta;
        };

        $scope.addTarefa = function () {
            $scope.meta.tarefas.push($scope.tarefa);
            $scope.tarefa = {};
        };

        $scope.removerTarefa = function (tarefa) {
            var index = $scope.meta.tarefas.indexOf(tarefa);

            if (index === -1) {
                return;
            }

            $scope.meta.tarefas.splice(index, 1);
        };
    });

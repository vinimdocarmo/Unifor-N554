angular
    .module('SistemaAcademico')
    .controller('TurmaController', function ($scope) {
        $scope.turma = {};

        $scope.semestreLista = [
            {valor: '2016.1'},
            {valor: '2016.2'},
            {valor: '2017.1'}
        ];

        $scope.disciplinaLista = [
            {codigo: '001', valor: 'Tec. Internet I'},
            {codigo: '002', valor: 'Redes I'},
            {codigo: '003', valor: 'Arquitetura de Software'}
        ];

        $scope.turmaLista = [];

        $scope.addTurma = function () {
            $scope.turmaLista.push($scope.turma);
            $scope.turma = {};
        };

        $scope.removerTurma = function (turma) {
            var index = $scope.turmaLista.indexOf(turma);

            $scope.turmaLista.splice(index, 1);
        };
    });

app.controller('DisciplinaController', function($scope) {

	//$scope.disciplina = {};
	$scope.listaDisciplinas = [];

	$scope.gravar = function() {
		$scope.listaDisciplinas.push($scope.disciplina);
		$scope.disciplina = {};
	}
	
	$scope.remover = function (disciplina) {
		var index = $scope.listaDisciplinas.indexOf(disciplina);
		
		if (index === -1) {
			throw new Error('Disciplina não encontrada na lista');
		}
		
		$scope.listaDisciplinas.splice(index, 1);
	}


});
	

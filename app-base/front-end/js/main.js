var app = angular
    .module('SistemaAcademico', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/alunoCadastro', {
                templateUrl: 'aluno.html',
                controller: 'AlunoController'
            })
            .when('/turmaCadastro', {
                templateUrl: 'turma.html',
                controller: 'TurmaController'
            })
            .when('/disciplinaCadastro', {
                templateUrl: 'disciplina.html',
                controller: 'DisciplinaController'
            });
    });

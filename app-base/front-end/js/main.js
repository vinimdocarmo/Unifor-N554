var app = angular
    .module('SistemaAcademico', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/inicio', {
                templateUrl: 'inicio.html',
                controller: 'InicioMetaController'
            })
            .when('/metaCadastro', {
                templateUrl: 'cadastroMeta.html',
                controller: 'CadastroMetaController'
            })
            .when('/metaEdicao', {
                templateUrl: 'edicaoMeta.html',
                controller: 'EdicaoMetaController'
            });
    });

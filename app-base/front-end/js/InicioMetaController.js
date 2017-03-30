angular
    .module('SistemaAcademico')
    .service('MetasHandler', function () {
        var metas = [
            {
                descricao: 'Fazer trabalho de TI',
                prazo: new Date(),
                tarefas: [
                    { descricao: 'Fazer front-end', feita: true },
                    { descricao: 'Fazer EJB', feita: false },
                    { descricao: 'Fazer back-end', feita: false }
                ]
            }
        ];

        var metaParaEditar = {};

        return {
            getMetas: function () {
                return metas;
            },
            addMeta: function (meta) {
                metas.push(meta);
            },
            removerMeta: function (meta) {
                var index = metas.indexOf(meta);

                if (index === -1) {
                    return;
                }

                metas.splice(index, 1);
            },
            getMetaParaEditar: function () {
                return metaParaEditar;
            },
            setMetaParaEditar: function (_metaParaEditar_) {
                metaParaEditar = _metaParaEditar_;
            },
            editarMeta: function (metaOriginal, novaMeta) {
                var index = metas.indexOf(metaOriginal);

                if (index === -1) {
                    throw new Error('meta não encontrada');
                }

                metas[index] = novaMeta;
            }
        };
    })
    .filter('buscarMetas', function () {
        return function (metas, texto) {
            if (!texto) {
                return metas;
            }

            return metas.filter(function (meta) {
                return meta.descricao.match(texto, 'i');
            });
        };
    })
    .controller('InicioMetaController', function ($scope, MetasHandler) {
        $scope.MetasHandler = MetasHandler;

        $scope.calcularPorcentagemDeAtingimento = function (meta) {
            var totalDeTarefas = meta.tarefas.length;

            if (totalDeTarefas === 0) {
                return 0;
            }

            var totalDeTarefasConcluidas = meta.tarefas.filter(function (tarefa) {
                return tarefa.feita;
            }).length;

            return (totalDeTarefasConcluidas * 100 / totalDeTarefas).toFixed(2);
        };
    });

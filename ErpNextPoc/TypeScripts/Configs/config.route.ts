module Hank.Chen.Configs {
    angular.module('Hank.Chen.Configs')
        .config([
            '$stateProvider',
            '$urlRouterProvider',
            '$locationProvider',
            (
                $stateProvider: angular.ui.IStateProvider,
                $urlRouteProvider: angular.ui.IUrlRouterProvider,
                $locationProvider: ng.ILocaleService) => {
                $urlRouteProvider.otherwise("member");
            }
        ])
}
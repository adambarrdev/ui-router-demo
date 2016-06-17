
namespace app {
    'use strict';

    export interface IBaseController {
        title: string;
        headerIcon: string;
    }

    appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function appConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/',
                template: '<home></home>'
            })
            .state('about', {
                url: '/about',
                template: '<about></about>'
            });

        $urlRouterProvider.otherwise('/');

    }

    appRunner.$inject = [];
    function appRunner() {

    }

    angular
        .module('app', [
            'ui.router',
            'ui.bootstrap'
        ])
        .config(appConfig)
        .run(appRunner);
}
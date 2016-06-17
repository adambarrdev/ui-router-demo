
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
                abstract: true,
                url: '',
                template: '<home></home>'
            })
            .state('home.step1', {
                url: '/',
                template: '<h1>Step 1</h1>'
            })
            .state('home.step2', {
                url: '/step2',
                template: '<h1>Step 2</h1>'
            })
            .state('home.step3', {
                url: '/step3',
                template: '<h1>Step 3</h1>'
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
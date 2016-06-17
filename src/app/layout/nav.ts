
namespace app {
    'use strict';

    export interface INavController { }
    export class NavController implements INavController {

        static $inject: Array<string> = ['$state'];
        constructor(public $state: angular.ui.IStateService) { }
    }

    angular
        .module('app')
        .component('appNav', {
            controller: NavController,
            controllerAs: 'vm',
            templateUrl: 'app/layout/nav.html'
        });
}
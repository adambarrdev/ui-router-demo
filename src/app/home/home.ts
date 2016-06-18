
namespace app {
    'use strict';

    export interface IHomeController extends IBaseController { }

    export class HomeController implements IHomeController {

        public title: string = 'Home';
        public headerIcon: string = 'fa fa-home';

        static $inject: Array<string> = [];
        constructor() { }

    }

    angular
        .module('app')
        .component('home', {
            controller: HomeController,
            controllerAs: 'vm',
            templateUrl: 'app/home/home.html'
        });
}
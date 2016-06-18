var app;
(function (app) {
    'use strict';
    appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function appConfig($stateProvider, $urlRouterProvider) {
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
        })
            .state('components', {
            url: '/components',
            template: '<components></components>'
        });
        $urlRouterProvider.otherwise('/');
    }
    appRunner.$inject = [];
    function appRunner() {
    }
    angular
        .module('app', [
        'ui.router',
        'ui.bootstrap',
        'ngAnimate'
    ])
        .config(appConfig)
        .run(appRunner);
})(app || (app = {}));
var app;
(function (app) {
    'use strict';
    var AboutController = (function () {
        function AboutController() {
            this.title = 'About';
            this.headerIcon = 'fa fa-info-circle';
        }
        AboutController.$inject = [];
        return AboutController;
    }());
    app.AboutController = AboutController;
    angular
        .module('app')
        .component('about', {
        controller: AboutController,
        controllerAs: 'vm',
        templateUrl: 'app/about/about.html'
    });
})(app || (app = {}));
var app;
(function (app) {
    'use strict';
    var NavController = (function () {
        function NavController($rootScope, $state) {
            this.$rootScope = $rootScope;
            this.$state = $state;
            this.isCollapsed = true;
            var self = this;
            this.$rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                self.isCollapsed = true;
            });
        }
        NavController.$inject = ['$rootScope', '$state'];
        return NavController;
    }());
    app.NavController = NavController;
    angular
        .module('app')
        .component('appNav', {
        controller: NavController,
        controllerAs: 'vm',
        templateUrl: 'app/layout/nav.html'
    });
})(app || (app = {}));
var app;
(function (app) {
    'use strict';
    var HomeController = (function () {
        function HomeController() {
            this.title = 'Home';
            this.headerIcon = 'fa fa-home';
        }
        HomeController.$inject = [];
        return HomeController;
    }());
    app.HomeController = HomeController;
    angular
        .module('app')
        .component('home', {
        controller: HomeController,
        controllerAs: 'vm',
        templateUrl: 'app/home/home.html'
    });
})(app || (app = {}));
var app;
(function (app) {
    'use strict';
    var ComponentsController = (function () {
        function ComponentsController() {
            this.title = 'Components';
            this.headerIcon = 'fa fa-dashboard';
        }
        ComponentsController.$inject = [];
        return ComponentsController;
    }());
    app.ComponentsController = ComponentsController;
    angular
        .module('app')
        .component('components', {
        controller: ComponentsController,
        controllerAs: 'vm',
        templateUrl: 'app/components/components.html'
    });
})(app || (app = {}));

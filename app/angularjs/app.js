/**
 * Force un "bon" codage
 */

'use strict';

/**
 * Déclaration du module principal de l'application
 */

var mainApp = angular.module('mainApp',
    [
        'ngRoute',
        'ngSanitize',
        'ngAria',
        'ngAnimate',
        'ngMaterial',
        'tmh.dynamicLocale',
        'pascalprecht.translate',
        'headerApp',
        'footerApp',
        'homeApp',
        'notFoundApp',
        'changelogApp',
        'languageService',
        'toastService',
        'dialogService',
        'localStorageService',
        'sessionStorageService'
    ]);

/**
 * Configuration du module principal de l'application
 */

mainApp.config([
    '$routeProvider',
    'tmhDynamicLocaleProvider',
    function (
        $routeProvider,
        tmhDynamicLocaleProvider) {

        tmhDynamicLocaleProvider.defaultLocale('fr');
        tmhDynamicLocaleProvider.localeLocationPattern('./app/angularjs/i18n/angular-locale_{{locale}}.js');

        /**
         * Routes
         */

        $routeProvider.

            /**
             * Page Home
             */

            when('/', {
                templateUrl: './app/views/home.html',
                controller: 'homeController'
            }).

            /**
             * Page 404
             */

            when('/404', {
                templateUrl: './app/views/404.html',
                controller: 'notFoundController'
            }).

            /**
             * Redirection vers la page 404 pour toutes les autres urls
             */

            otherwise({
                redirectTo: '/404'
            });
    }]);

/**
 * Initialisation du module principal de l'application
 */

mainApp.run([
    'languageManager',
    '$rootScope',
    function (
        languageManager,
        $rootScope) {

        /**
         * Initialise la langue actuelle
         */

        languageManager.initCurrentLanguage();

        $rootScope.$on('$routeChangeStart', function (next, current) {
            $rootScope.viewIsLoaded = false;
        });
    }]);
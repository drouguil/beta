/**
 * Force un "bon" codage
 */

'use strict';

/**
 * Déclaration du module principal de l'application
 */

var mainApp = angular.module('mainApp',
    [

        /**
         * Modules d'Angular
         */

        'ngRoute',
        'ngSanitize',
        'ngAria',
        'ngAnimate',
        'ngMaterial',

        /**
         * Modules importés
         */

        'tmh.dynamicLocale',
        'pascalprecht.translate',

        /**
         * Modules des contrôleurs
        */

        /**
         * Globaux
         */

        'headerCtrl',
        'footerCtrl',

        /**
         * Vues
         */

        'homeCtrl',
        'notFoundCtrl',

        /**
         * Popins
         */

        'changelogCtrl',
        'helpCtrl',

        /**
         * Modules des services
         */

        'languageService',
        'toastService',
        'dialogService',
        'localStorageService',
        'sessionStorageService',

        /**
         * Module de configuration
         */

        'appConfig'
    ]);

/**
 * Configuration du module principal de l'application
 */

mainApp.config([
    '$routeProvider',
    'tmhDynamicLocaleProvider',
    'appConfig',
    function (
        $routeProvider,
        tmhDynamicLocaleProvider,
        appConfig) {

        tmhDynamicLocaleProvider.defaultLocale('fr');
        tmhDynamicLocaleProvider.localeLocationPattern(appConfig.paths.i18n + 'angular-locale_{{locale}}.js');

        /**
         * Routes
         */

        $routeProvider.

            /**
             * Page Home
             */

            when('/', {
                templateUrl: appConfig.paths.views + 'home.html',
                controller: 'homeController'
            }).

            /**
             * Page 404
             */

            when('/404', {
                templateUrl: appConfig.paths.views + '404.html',
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
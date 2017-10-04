/**
 * Force un "bon" codage
 */

'use strict';

/**
 * Déclaration du module principal de l'application
 */

let mainApp = angular.module('mainApp',
    [

        /**
         * Modules d'Angular
         */

        'ngRoute',
        'ngSanitize',
        'ngAria',
        'ngAnimate',
        'ngMaterial',
        'ngMessages',

        /**
         * Modules importés
         */

        'tmh.dynamicLocale',
        'pascalprecht.translate',
        'ngclipboard',

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
        'portalsCtrl',
        'notFoundCtrl',
        'puzzleCtrl',

        /**
         * Popins
         */

        'changelogCtrl',
        'helpCtrl',
        'profileCtrl',
        'updatePortalsCtrl',

        /**
         * Identification Popin
         */

        'identificationCtrl',
        'loginCtrl',
        'registerCtrl',

        /**
         * Modules des directives
         */

        'imageOnLoadDirective',

        /**
         * Modules des services
         */

        'languageService',
        'toastService',
        'dialogService',
        'localStorageService',
        'sessionStorageService',
        'puzzleService',
        'devToolsService',
        'imgService',
        'daoService',

        /**
         * Module de configuration
         */

        'appConfig',
        'puzzleConfig'
    ]);

/**
 * Configuration du module principal de l'application
 */

mainApp.config([
    '$routeProvider',
    '$mdThemingProvider',
    '$translateProvider',
    'tmhDynamicLocaleProvider',
    'appConfig',
    function (
        $routeProvider,
        $mdThemingProvider,
        $translateProvider,
        tmhDynamicLocaleProvider,
        appConfig) {

        tmhDynamicLocaleProvider.defaultLocale('fr');
        tmhDynamicLocaleProvider.localeLocationPattern(appConfig.paths.i18n + 'angular-locale_{{locale}}.js');
        $translateProvider.useSanitizeValueStrategy('escape');

        /**
         * Ajout des thèmes personnalisés pour les notifications
         */

        $mdThemingProvider.theme("success");
        $mdThemingProvider.theme("error");

        /**
         * Routes
         */

        $routeProvider.

            /**
             * Page Home
             */

            when('/', {
                templateUrl: appConfig.paths.viewsHome + 'home.html',
                controller: 'homeController'
            }).

            /**
             * Page Puzzle
             */

            when('/puzzle', {
                templateUrl: appConfig.paths.viewsPuzzle + 'puzzle.html',
                controller: 'puzzleController'
            }).

            /**
             * Page Portails
             */

            when('/portals', {
                templateUrl: appConfig.paths.viewsPortals + 'portals.html',
                controller: 'portalsController'
            }).

            /**
             * Page 404
             */

            when('/404', {
                templateUrl: appConfig.paths.views404 + '404.html',
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
    'dialogManager',
    '$rootScope',
    '$interval',
    function (
        languageManager,
        dialogManager,
        $rootScope,
        $interval) {

        /**
         * Initialise la langue actuelle
         */

        languageManager.initCurrentLanguage();

        /**
         * Détermine si l'utilisateur est connecté ou non
         * @public
         */

        $rootScope.isLog = false;

        /**
         * Titre de la page courante
         * @public
         */

        $rootScope.title = '';

        /**
         * Détermine si le haut de page est chargé
         * @public
         */

        $rootScope.headerIsLoaded = false;

        /**
         * Détermine si la page est chargée
         * @public
         */

        $rootScope.imgsIsLoaded = false;

        /**
         * Détermine si le bas de page est chargé
         * @public
         */

        $rootScope.footerIsLoaded = false;

        /**
         * Détermine si l'image de fond est chargée
         * @public
         */

        $rootScope.backgroundIsLoaded = false;

        /**
         * Détermine si l'initialisation de la vue est terminée
         * @public
         */

        $rootScope.viewIsLoaded = false;

        /**
         * Changement de route
         * @public
         */

        $rootScope.$on('$routeChangeStart', function (next, current) {
            $rootScope.viewIsLoaded = false;
            $rootScope.backgroundIsLoaded = false;
            $rootScope.imgsIsLoaded = false;
            dialogManager.closeDialogs();
        });

    }]);
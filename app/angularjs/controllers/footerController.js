/**
 * Force un "bon" codage
 */

'use strict';

/**
 * Déclaration du module du footer
 */

var footerApp = angular.module('footerApp', []);

/**
 * Configuration du module du footer
 */

footerApp.config([
    '$translateProvider',
    function (
        $translateProvider) {

        /**
         * Dictionnaire Français
         */

        $translateProvider.translations('fr', {
            FOLLOW_US: 'Nous suivre',
            PURPOSE_HELP: 'Apporter son aide au site',
            REPORT_BUG: 'Reporter un bug',
            PURPOSE_UPGRADE: 'Proposer une amélioration',
            PURPOSE_PICTURE: 'Proposer un dessin/logo/image',
            CONTACT_US: 'Nous contacter',
        });

        /**
         * Dictionnaire Anglais
         */

        $translateProvider.translations('en', {
            FOLLOW_US: 'Follow us',
            PURPOSE_HELP: 'Purpose help to website',
            REPORT_BUG: 'Report a bug',
            PURPOSE_UPGRADE: 'Purpose an upgrade',
            PURPOSE_PICTURE: 'Purpose a drawing/logo/picture',
            CONTACT_US: 'Contact us',
        });
    }]);

/**
 * Contrôleur du module du header
 */

footerApp.controller('footerController', [
    '$scope',
    '$translate',
    '$rootScope',
    function (
        $scope,
        $translate,
        $rootScope) {

        /**
         * Prévient l'application que le footer est chargé
         */

        $scope.$on('$viewContentLoaded', function () {
            $rootScope.headerIsLoaded = true;
        });

    }]);
/**
 * Force un "bon" codage
 */

'use strict';

/**
 * Déclaration du module du footer
 */

var footerCtrl = angular.module('footerCtrl', []);

/**
 * Configuration du module du footer
 */

footerCtrl.config([
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

footerCtrl.controller('footerController', [
    '$scope',
    '$translate',
    '$rootScope',
    'appConfig',
    function (
        $scope,
        $translate,
        $rootScope,
        appConfig) {

        /**
         * Chemin de l'icône de Twitter
         * @public
         */

        $scope.twitterIconPath = appConfig.paths.svgSocialNetworks + 'twitter.svg';

        /**
         * Chemin de l'icône de Facebook
         * @public
         */

        $scope.facebookIconPath = appConfig.paths.svgSocialNetworks + 'facebook.svg';

        /**
         * Prévient l'application que le footer est chargé
         * @public
         */

        $scope.$on('$viewContentLoaded', function () {
            $rootScope.headerIsLoaded = true;
        });

    }]);
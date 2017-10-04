/**
 * Force un "bon" codage
 */

'use strict';

/**
 * Déclaration du module du footer
 */

let footerCtrl = angular.module('footerCtrl', []);

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

            // Copyright

            COPYRIGHT_1: 'Les icônes faîtes par ',
            COPYRIGHT_2: ' sur ',
            COPYRIGHT_3: ' sont autorisées à être publiées par '
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

            // Copyright

            COPYRIGHT_1: 'Icons made by ',
            COPYRIGHT_2: ' from ',
            COPYRIGHT_3: ' are licensed by '
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
         * Chemin de l'icône de Facebook
         * @public
         */

        $scope.facebookIconPath = appConfig.paths.svgSocialNetworks + 'facebook.svg';

        /**
         * Chemin de l'icône de Twitter
         * @public
         */

        $scope.twitterIconPath = appConfig.paths.svgSocialNetworks + 'twitter.svg';

        /**
         * Chemin de l'icône de YouTube
         * @public
         */

        $scope.youtubeIconPath = appConfig.paths.svgSocialNetworks + 'youtube.svg';

        /**
         * Détermine si toutes les images sont chargées
         * @function imgLoaded
         * @public
         */

        $scope.imgLoaded = function() {
            countImgsLoaded++;
            if(countImgsLoaded == nbImgs) {
                $rootScope.footerIsLoaded = true;
                console.log('footerIsLoaded');
            }
        };

        /**
         * Nombre d'images à charger
         * @private
         */

        var nbImgs = 3;
        
        /**
         * Nombre d'images chargées
         * @private
         */

        var countImgsLoaded = 0;

    }]);
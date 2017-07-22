/**
 * Force un "bon" codage
 */

'use strict';

/**
 * Déclaration du module de la page d'accueil
 */

var homeCtrl = angular.module('homeCtrl', []);

/**
 * Configuration du module de la page d'accueil
 */

homeCtrl.config([
    '$translateProvider',
    function (
        $translateProvider) {

        /**
         * Dictionnaire Français
         */

        $translateProvider.translations('fr', {
            BTN_DIMENSIONS: 'Gestion des portails',
            BTN_CHANGELOG: 'Changements du site',
            PARTNERS: 'Partenaires'
        });

        /**
         * Dictionnaire Anglais
         */

        $translateProvider.translations('en', {
            BTN_DIMENSIONS: 'Portals\' Management',
            BTN_CHANGELOG: 'Website\'s update',
            PARTNERS: 'Partners'
        });
    }]);

/**
 * Contrôleur du module de la page d'accueil
 */

homeCtrl.controller('homeController', [
    '$scope',
    '$rootScope',
    'dialogManager',
    'helpManager',
    'appConfig',
    function (
        $scope,
        $rootScope,
        dialogManager,
        helpManager,
        appConfig) {

        /**
         * Chemin de l'icône du bouton des dimensions
         * @public
         */

        $scope.dimensionsIconBtnPath = appConfig.paths.imgPortals + 'enutrosor.png';

        /**
         * Chemin de l'image du bouton des dimensions
         * @public
         */

        $scope.dimensionsIconPath = appConfig.paths.imgButtons + 'dimensions.jpg';

        /**
         * Chemin de l'icône du bouton du changelog
         * @public
         */

        $scope.changelogIconBtnPath = appConfig.paths.svg + 'changelog.svg';

        /**
         * Chemin de l'image du bouton du changelog
         * @public
         */

        $scope.changelogIconPath = appConfig.paths.imgButtons + 'changelog.png';

        /**
         * Chemin de l'icône du bouton des partenaires
         * @public
         */

        $scope.partnersIconBtnPath = appConfig.paths.svg + 'partners.svg';

        /**
         * Chemin de l'image d'Entraide
         * @public
         */

        $scope.entraideIconPath = appConfig.paths.imgPartners + 'entraide.png';

        /**
         * Chemin de l'image de DofusExchange
         * @public
         */

        $scope.dofusExchangeIconPath = appConfig.paths.imgPartners + 'dofusExchange.png';

        /**
         * Affiche la popin des changelogs
         * @function showChangelogDialog
         * @public
         * @param {Objet} ev Endroit d'où l'on veut faire apparaitre la popin (avec $event)
         */

        $scope.showChangelogDialog = function (ev) {
            dialogManager.showChangelogDialog(ev);
        }

        /**
         * Prévient l'application que la page est chargée
         * @public
         */

        $scope.$on('$viewContentLoaded', function () {
            $rootScope.viewIsLoaded = true;
        });

    }]);
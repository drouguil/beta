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
    'appConfig',
    function (
        $scope,
        $rootScope,
        dialogManager,
        appConfig) {

        $scope.dimensionsIconBtnPath = appConfig.paths.imgPortals + 'enutrosor.png';

        $scope.dimensionsIconPath = appConfig.paths.imgButtons + 'dimensions.jpg';

        $scope.changelogIconBtnPath = appConfig.paths.svg + 'changelog.svg';

        $scope.changelogIconPath = appConfig.paths.imgButtons + 'changelog.png';

        $scope.partnersIconBtnPath = appConfig.paths.svg + 'partners.svg';

        $scope.entraideIconPath = appConfig.paths.imgPartners + 'entraide.png';

        $scope.dofusExchangeIconPath = appConfig.paths.imgPartners + 'dofusExchange.png';

        /**
         * Affiche la popin des changelogs
         * @function
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
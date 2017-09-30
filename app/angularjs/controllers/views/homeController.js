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
            HOME_TITLE: 'Accueil',
            PORTALS_BTN: 'Gestion des portails',
            CHANGELOG_BTN: 'Mises à jour',
            PARTNERS_BTN: 'Partenaires'
        });

        /**
         * Dictionnaire Anglais
         */

        $translateProvider.translations('en', {
            HOME_TITLE: 'Home',
            PORTALS_BTN: 'Portals\' Management',
            CHANGELOG_BTN: 'Website\'s update',
            PARTNERS_BTN: 'Partners'
        });
    }]);

/**
 * Contrôleur du module de la page d'accueil
 */

homeCtrl.controller('homeController', [
    '$scope',
    '$rootScope',
    '$location',
    '$filter',
    'dialogManager',
    'imgManager',
    'appConfig',
    function (
        $scope,
        $rootScope,
        $location,
        $filter,
        dialogManager,
        imgManager,
        appConfig) {

        /**
         * Chemin de l'icône du bouton des portails
         * @public
         */

        $scope.portalsIconBtnPath = appConfig.paths.imgPortals + 'Enurado.png';

        /**
         * Chemin de l'image du bouton des portails
         * @public
         */

        $scope.portalsIconPath = appConfig.paths.imgButtons + 'portals.jpg';

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
        };

        /**
         * Lien vers la page des portails
         * @function portalsLink
         * @public
         */

        $scope.portalsLink = function () {
            $location.path('/portals');
        };

        /**
         * Détermine si toutes les images sont chargées
         * @function imgLoaded
         * @public
         */

        $scope.imgLoaded = function() {
            countImgsLoaded++;
            if(countImgsLoaded == nbImgs) {
                $rootScope.imgsIsLoaded = true;
                console.log('imgsIsLoaded');
            }
        };

        /**
         * Nombre d'images à charger
         * @private
         */

        var nbImgs = 7;
        
        /**
         * Nombre d'images chargées
         * @private
         */

        var countImgsLoaded = 0;

        /**
         * Initalisation de la page d'accueil
         * @function init
         * @private
         */

        function init () {
            
            // Modification du titre de la page

            $rootScope.title = 'Sweet.ovh - ' + $filter('translate')('HOME_TITLE');

            // Initialisation de l'image de fond

            imgManager.initBackgroundImage('home');

            // Initialisation de la vue terminée

            $rootScope.viewIsLoaded = true;

            console.log('viewIsLoaded');
        };

        /**
         * Initialisation de la page d'accueil
         */

        init();

    }]);
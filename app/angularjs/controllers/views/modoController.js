/**
 * Force un "bon" codage
 */

'use strict';

/**
 * Déclaration du module de la page de moderation
 */

let modoCtrl = angular.module('modoCtrl', []);

/**
 * Configuration du module de la page de moderation
 */

modoCtrl.config([
    '$translateProvider',
    function (
        $translateProvider) {

        /**
         * Dictionnaire Français
         */

        $translateProvider.translations('fr', {

            // Titre de la page

            MODO_TITLE: 'Page de moderation'
        });

        /**
         * Dictionnaire Anglais
         */

        $translateProvider.translations('en', {

            // Titre de la page

            MODO_TITLE: 'moderation page'
        });
    }]);

/**
 * Contrôleur du module de la page 404
 */

modoCtrl.controller('modoController', [
    '$scope',
    '$rootScope',
    '$filter',
    'imgManager',
    'daoManager',
    function (
        $scope,
        $rootScope,
        $filter,
        imgManager,
        daoManager) {

        /**
         * Contient les utilisateurs
         * @public
         */
        
        $scope.users = [];

        $scope.selected = [];
        
        $scope.query = {
          order: 'id',
          limit: 5,
          page: 1
        };

        /**
         * Détermine si toutes les images sont chargées
         * @function imgLoaded
         * @public
         */

        $scope.imgLoaded = function () {
            countImgsLoaded++;
            console.log(countImgsLoaded);
            if (countImgsLoaded == nbImgs) {
                $rootScope.imgsIsLoaded = true;
            }
        };

        /**
         * Nombre d'images à charger
         * @private
         */

        var nbImgs = 0;

        /**
         * Nombre d'images chargées
         * @private
         */

        var countImgsLoaded = 0;

        /**
         * Initalisation de la page de moderation
         * @function init
         * @private
         */

        function init() {

            $rootScope.imgsIsLoaded = true;

            // Modification du titre de la page

            $rootScope.title = 'Sweet.ovh - ' + $filter('translate')('MODO_TITLE');

            // Initialisation de l'image de fond

            imgManager.initBackgroundImage('admin');

            // Récupération de tous les utilisateurs

            daoManager.getUsers().then(
                function (response) {
                    $scope.users = response.data;
                    console.log($scope.users);
                },
                function (error) {
                    console.error(error);
                })

            // Initialisation de la vue terminée

            $rootScope.viewIsLoaded = true;
        };

        /**
         * Initialisation de la page de moderation
         */

        init();

    }]);
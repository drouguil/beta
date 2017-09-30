/**
 * Force un "bon" codage
 */

'use strict';

/**
 * Déclaration du module de la page 404
 */

var notFoundCtrl = angular.module('notFoundCtrl', []);

/**
 * Configuration du module de la page 404
 */

notFoundCtrl.config([
    '$translateProvider',
    function (
        $translateProvider) {

        /**
         * Dictionnaire Français
         */

        $translateProvider.translations('fr', {
            NOTFOUND_TITLE: 'Page introuvable'
        });

        /**
         * Dictionnaire Anglais
         */

        $translateProvider.translations('en', {
            NOTFOUND_TITLE: 'Page not found'
        });
    }]);

/**
 * Contrôleur du module de la page 404
 */

notFoundCtrl.controller('notFoundController', [
    '$scope',
    '$rootScope',
    '$filter',
    'imgManager',
    function (
        $scope,
        $rootScope,
        $filter,
        imgManager) {

        /**
         * Détermine si toutes les images sont chargées
         * @function imgLoaded
         * @public
         */

        $scope.imgLoaded = function() {
            countImgsLoaded++;
            console.log(countImgsLoaded);
            if(countImgsLoaded == nbImgs) {
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
         * Initalisation de la page 404
         * @function init
         * @private
         */

        function init () {

            $rootScope.imgsIsLoaded = true;
            
            // Modification du titre de la page

            $rootScope.title = 'Sweet.ovh - ' + $filter('translate')('NOTFOUND_TITLE');

            // Initialisation de l'image de fond

            imgManager.initBackgroundImage('notFound');

            // Initialisation de la vue terminée

            $rootScope.viewIsLoaded = true;
        };

        /**
         * Initialisation de la page 404
         */

        init();

    }]);
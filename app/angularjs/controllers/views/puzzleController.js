/**
 * Force un "bon" codage
 */

'use strict';

/**
 * Déclaration du module de la page des puzzles
 */

let puzzleCtrl = angular.module('puzzleCtrl', []);

/**
 * Configuration du module de la page des puzzles
 */

puzzleCtrl.config([
    '$translateProvider',
    function (
        $translateProvider) {

        /**
         * Dictionnaire Français
         */

        $translateProvider.translations('fr', {
            PUZZLE_TITLE: 'Puzzle',
            CANVAS_NOT_SUPPORTED : 'Votre navigateur ne supporte pas les canvas mettez le à jour ou utilisez en un autre',
            LEVEL : 'Niveau',
            END_LINK : 'Terminer son tour',
            WELCOME : 'Bienvenue, bonne chance !'
        });

        /**
         * Dictionnaire Anglais
         */

        $translateProvider.translations('en', {
            PUZZLE_TITLE: 'Puzzle',
            CANVAS_NOT_SUPPORTED : 'Your browser does not support canvas put up to date or use in an other one',
            LEVEL : 'Level',
            END_LINK : 'End his turn',
            WELCOME : 'Welcome, good luck !'
        });
    }]);

/**
 * Contrôleur du module de la page des puzzles
 */

puzzleCtrl.controller('puzzleController', [
    '$scope',
    '$rootScope',
    '$filter',
    'puzzleManager',
    'imgManager',
    'appConfig',
    function (
        $scope,
        $rootScope,
        $filter,
        puzzleManager,
        imgManager,
        appConfig) {

        /**
         * 
         */

        $scope.actions = [];

        /**
         * 
         */

        $scope.hpEmptyImg = appConfig.paths.imgHud + 'hp_full.png';

        /**
         * 
         */

        $scope.apPathImg = appConfig.paths.imgHud + 'ap.png';

        /**
         * 
         */

        $scope.mpPathImg = appConfig.paths.imgHud + 'mp.png';

        /**
         * 
         */

        $scope.getLevel = function () {
            return puzzleManager.getLevel();
        };

        /**
         * 
         */

        $scope.getSpellsFirstLine = function () {
            return puzzleManager.getSpells().firstLine;
        };

        /**
         * 
         */

        $scope.getSpellsSecondLine = function () {
            return puzzleManager.getSpells().secondLine;
        };

        /**
         * 
         */

        $scope.getSpellsFirstLineEmpty = function () {
            return Array( 9 - $scope.getSpellsFirstLine().length );
        }

        /**
         * 
         */

        $scope.getSpellsSecondLineEmpty = function () {
            return Array( 9 - $scope.getSpellsSecondLine().length );
        } 

        /**
         * 
         */

        $scope.getSpellImg = function (spell) {
            return appConfig.paths.imgSpells + 'rogue_' + spell.id + '.png';
        }

        /**
         * 
         */

        $scope.getSpellEmpty = function () {
            return appConfig.paths.imgSpells + 'empty_slot.png';
        }

        /**
         * @function hoverSpellTiles
         */

        $scope.hoverSpellTiles = function (rangeMin, rangeMax, inline) {
            puzzleManager.hoverSpellTiles(rangeMin, rangeMax, inline);
        }

        /**
         * Détermine si toutes les images sont chargées
         * @function imgLoaded
         * @public
         */

        $scope.imgLoaded = function() {
            countImgsLoaded++;
            if(countImgsLoaded == nbImgs) {
                $rootScope.imgsIsLoaded = true;
            }
        };

        /**
         * Nombre d'images à charger
         * @private
         */

        var nbImgs = 21;
        
        /**
         * Nombre d'images chargées
         * @private
         */

        var countImgsLoaded = 0;

        /**
         * Initialisation du puzzle
         */

        function init () {

            // Modification du titre de la page

            $rootScope.title = 'Sweet.ovh - ' + $filter('translate')('PUZZLE_TITLE');

            // Initialisation de l'image de fond

            imgManager.initBackgroundImage('puzzle');

            puzzleManager.launchLevel(1);
            $scope.level = puzzleManager.getLevel();
            $scope.actions.push('WELCOME');
            
            // Initialisation de la vue terminée

            $rootScope.viewIsLoaded = true;

        };

        init();

    }]);
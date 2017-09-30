/**
 * Force un "bon" codage
 */

'use strict';

/**
 * Déclaration du module de la popin de modification d'un portail
 */

var updatePortalsCtrl = angular.module('updatePortalsCtrl', []);

/**
 * Configuration du module de la popin de modification d'un portail
 */

updatePortalsCtrl.config([
    '$translateProvider',
    function (
        $translateProvider) {

            /**
             * Dictionnaire Français
             */

            $translateProvider.translations('fr', {
                UPDATE_PORTALS_TITLE: 'Modification du portail',
                UPDATE_PORTALS_BTN: 'Valider la modification',
                UPDATE_PORTALS_SUCCESS: 'Modification effectuée',
                NB_USES_LABEL: 'Nombre d\'utilisations',
                IS_UNKNOW_LABEL: 'Position inconnue',
                CANCEL_BTN: 'Annuler'
            });

            /**
             * Dictionnaire Anglais
             */

            $translateProvider.translations('en', {
                UPDATE_PORTALS_TITLE: 'Portal\'s update',
                UPDATE_PORTALS_BTN: 'Valid modifications',
                UPDATE_PORTALS_SUCCESS: 'Successfully update',
                NB_USES_LABEL: 'Number of uses',
                IS_UNKNOW_LABEL: 'Unknow position',
                CANCEL_BTN: 'Cancel'
            });
    }]);

/**
 * Contrôleur du module de la popin de modification d'un portail
 */

updatePortalsCtrl.controller('updatePortalsController', [
    '$scope',
    '$rootScope',
    '$filter',
    'dialogManager',
    'toastManager',
    'appConfig',
    'portal',
    'dimension',
    function (
        $scope,
        $rootScope,
        $filter,
        dialogManager,
        toastManager,
        appConfig,
        portal,
        dimension) {

        /**
         * Portail modifié
         * @public
         */

        $scope.newPortal = {};

        /**
         * Dimension du portail
         * @public
         */

        $scope.dimension = {};

        /**
         * Tableau des modificateurs trié
         */

        $scope.modifiers = [];

        /**
         * Rotation actuelle du cycle des modificateurs
         * @public
         */

        $scope.currentRotation = 0;

        /**
         * Chemin de l'icône de fermeture de la popin
         * @public
         */

        $scope.closeIconPath = appConfig.paths.svg + 'close.svg';
        
        /**
         * Détermine si tous les champs du formulaire de modification du portail sont valides
         * @function isReady
         * @public
         */

        $scope.isReady = function () {
            var portal = $scope.newPortal;

            var val = 
            
            // Vérification de la position X

            portal.posX != undefined && $scope.updatePortalForm.posX.$valid && portal.posX < 100 && portal.posX > -100 &&

            // Vérification de la position Y

            portal.posY != undefined && $scope.updatePortalForm.posY.$valid && portal.posY < 100 && portal.posY > -100 && 
            
            // Vérification du nombre d'utilisations

            portal.numberUses != undefined && $scope.updatePortalForm.numberUses.$valid && portal.numberUses <= 128 && portal.numberUses >= 1 && 
            
            // Vérification de la position inconnue

            portal.isUnknow != undefined &&

            // Vérification de l'identifiant du modificateur

            portal.modifierId != undefined &&
            
            // Vérification qu'une donnée à été modifiée

            (portal.posX != oldPortal.posX || portal.posY != oldPortal.posY || portal.numberUses != oldPortal.numberUses || portal.isUnknow != oldPortal.isUnknow || portal.modifierId != oldPortal.modifierId);

            return val;
        };

        /**
         * Récupère le nom du modificateur actuel
         * @function getCurrentModifierName
         * @public
         */

        $scope.getCurrentModifierName = function () {
            var name = "";
            $scope.modifiers.forEach(function(modifier) {
                if(modifier.id == $scope.newPortal.modifierId) {
                    name = modifier.name;
                }
            });
            return name;
        };

        /**
         * @function getCurrentRotation
         * @public
         */

        $scope.getCurrentRotation = function () {
            return "rotate(" + $scope.currentRotation + "deg)";
        };

        /**
         * @function changeModifier
         * @public
         * @param {Nombre} modifierId
         */

        $scope.changeModifier = function (modifierId) {
            if(modifierId != $scope.newPortal.modifierId) {
                var indexModifier = 0;
                var indexCurrentModifier = 0;
                $scope.modifiers.forEach(function(modifier, index) {
                    if(modifier.id == modifierId) {
                        indexModifier = index;
                    }
                    if(modifier.id == $scope.newPortal.modifierId) {
                        indexCurrentModifier = index;
                    }
                });
                var rotation = 0;
                if((indexModifier - indexCurrentModifier) > 5) {
                    rotation = ((indexModifier - indexCurrentModifier)-10)%10;
                }
                else if((indexModifier - indexCurrentModifier) < -5) {
                    rotation = ((indexModifier - indexCurrentModifier)+10)%10;
                }
                else {
                    rotation = (indexModifier - indexCurrentModifier)%10;
                }
                $scope.currentRotation -= rotation*36;
                
                $scope.newPortal.modifierId = modifierId;
            }
        };

        /**
         * Récupère le nom de la dimension du portail
         * @function getDimensionName
         * @public
         */

        $scope.getDimensionName = function () {
            return $filter('translate')($scope.dimension.name.toUpperCase());
        };

        /**
         * Récupère le chemin de l'image de la dimension
         * @function getModifierImgPathByName
         * @public
         * @param {Caractères} name Nom de la dimension
         */

        $scope.getModifierImgPathByName = function (name) {
            var icon = name.replace(/ /g, '_');
            return appConfig.paths.imgModifiers + icon + '.png';
        };

        /**
         * Met à jour le portail
         * @function update
         * @public
         */

        $scope.update = function () {
            $scope.newPortal.isUnknow ? $scope.newPortal.isUnknow = 1 : $scope.newPortal.isUnknow = 0;
            $scope.closeDialog();
            toastManager.showSimpleToast($filter('translate')('UPDATE_PORTALS_SUCCESS'), 'success');
            console.log($scope.newPortal);
        };

        /**
         * Ferme la popin de modification d'un portail
         * @function closeDialog
         * @public
         */

        $scope.closeDialog = function () {
            dialogManager.closeDialogs();
        };

        /**
         * Portail avant modification
         * @private
         */

        var oldPortal = {};

        /**
         * Trie le tableau des modificateurs
         * @function sortModifiers
         * @private
         */

        function sortModifiers () {
            var isFound = false;
            $scope.dimension.modifiers.forEach(function(modifier) {
                if(modifier.id == $scope.newPortal.modifierId) {
                    isFound = true;
                }
                else if(isFound) {
                    $scope.modifiers.push(modifier);
                }
            });
            $scope.dimension.modifiers.forEach(function(modifier) {
                if($scope.modifiers.length < 10) {
                    $scope.modifiers.push(modifier);
                }
            });
        };

        /**
         * Initialise de la popin de modification d'un portail
         * @function init
         * @private
         */

        function init () {
            portal.isUnknow == 0 ? portal.isUnknow = false : portal.isUnknow = true;
            oldPortal = JSON.parse(JSON.stringify(portal));;
            $scope.newPortal = JSON.parse(JSON.stringify(portal));;
            $scope.dimension = dimension;
            $scope.currentRotation = 0;
            sortModifiers();
        }

        /**
         * Initialise de la popin de modification d'un portail
         */

        init();

    }]);
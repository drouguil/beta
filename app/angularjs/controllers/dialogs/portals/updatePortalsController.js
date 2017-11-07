/**
 * Force un "bon" codage
 */

'use strict';

/**
 * Déclaration du module de la popin de modification d'un portail
 */

let updatePortalsCtrl = angular.module('updatePortalsCtrl', []);

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
            UPDATE_PORTALS_ERROR: 'Modification échouée',
            NB_USES_LABEL: 'Nombre d\'utilisations',
            IS_UNKNOW_LABEL: 'Position inconnue',
            CANCEL_BTN: 'Annuler',
            EXPLOSIVE_DISAPPEARANCE: 'Disparitions détonnantes',
            CYCLIC_POWER: 'Puissance cyclique',
            INVIGORATING_PUSHES: 'Poussées revigorantes',
            LONG_RANGE_LIAISON: 'Liaison longue portée',
            STUNNING_SUMMONS: 'Invocations incapacitantes',
            CRITICAL_REGENERATION: 'Régénération Critique',
            ELEMENTARY_ROULETTE: 'Roulette élémentaire',
            BONUS_CELL: 'Case bonus',
            PRIORITY_TARGET: 'Cible Prioritaire',
            CORRECT_DISTANCE: 'Bonne distance',
            HURTFUL_HINDRANCES: 'Entraves blessantes',
            INCAPACITATING_MOVEMENT: 'Déplacements incapacitants',
            SOLIDARITY: 'Solidaires',
            MEASURED_DISTANCE: 'Distance mesurée',
            INVIGORATING_SOLITUDE: 'Solitude revigorante',
            LOW_BLOWS: 'Coups bas',
            BERSERKER: 'Berserker',
            DANGEROUS_GAME: 'Jeu dangereux',
            LARCENY: 'Larcin',
            EVASION: 'Evasion',
            LOOKING_FOR_ACTION: 'En quête d\'action',
            LEAP_GOBBALL: 'Saute-Bouftou',
            GO_BACK: 'Retour arrière',
            FETTERED_ACTIONS: 'Actions entravées',
            MUMMIFYING_SOLITUDE: 'Solitude Momifiante',
            REQUIRED_LOGIN_ERROR: 'Connexion requise',
            BANISHED_USER_ERROR: 'Compte banni'
        });

        /**
         * Dictionnaire Anglais
         */

        $translateProvider.translations('en', {
            UPDATE_PORTALS_TITLE: 'Portal\'s update',
            UPDATE_PORTALS_BTN: 'Valid modifications',
            UPDATE_PORTALS_SUCCESS: 'Successfully update',
            UPDATE_PORTALS_ERROR: 'Failed update',
            NB_USES_LABEL: 'Number of uses',
            IS_UNKNOW_LABEL: 'Unknow position',
            CANCEL_BTN: 'Cancel',
            EXPLOSIVE_DISAPPEARANCE: 'Explosive disappearance',
            CYCLIC_POWER: 'Cyclic power',
            INVIGORATING_PUSHES: 'Invigorating pushes',
            LONG_RANGE_LIAISON: 'Long-range liaison',
            STUNNING_SUMMONS: 'Stunning summons',
            CRITICAL_REGENERATION: 'Critical regeneration',
            ELEMENTARY_ROULETTE: 'Elementary roulette',
            BONUS_CELL: 'Bonus cell',
            PRIORITY_TARGET: 'Priority target',
            CORRECT_DISTANCE: 'Correct distance',
            HURTFUL_HINDRANCES: 'Hurtful hindrances',
            INCAPACITATING_MOVEMENT: 'Incapacitating movement',
            SOLIDARITY: 'Solidarity',
            MEASURED_DISTANCE: 'Measured distance',
            INVIGORATING_SOLITUDE: 'Invigorating solitude',
            LOW_BLOWS: 'Low blows',
            BERSERKER: 'Berserker',
            DANGEROUS_GAME: 'Dangerous game',
            LARCENY: 'Larceny',
            EVASION: 'Evasion',
            LOOKING_FOR_ACTION: 'Looking for action',
            LEAP_GOBBALL: 'Leap-gobball',
            GO_BACK: 'Go back',
            FETTERED_ACTIONS: 'Fettered actions',
            MUMMIFYING_SOLITUDE: 'Mummifying solitude',
            REQUIRED_LOGIN_ERROR: 'Required login',
            BANISHED_USER_ERROR: 'Banished account'
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
    'daoManager',
    'appConfig',
    'portal',
    'dimension',
    function (
        $scope,
        $rootScope,
        $filter,
        dialogManager,
        toastManager,
        daoManager,
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
         * @public
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

        $scope.closeIconPath = appConfig.paths.svgDialogs + 'close.svg';

        /**
         * Chemin de l'icône de la position des portails
         * @public
         */

        $scope.positionIconPath = appConfig.paths.imgIcons + 'position.png';

        /**
         * Chemin de l'icône du nombre d'utilisations des portails
         * @public
         */

        $scope.numberUsesIconPath = appConfig.paths.imgIcons + 'uses.png';

        /**
         * Détermine si tous les champs du formulaire de modification du portail sont valides
         * @function isReady
         * @public
         * @return {Booléen} Validité du formulaire (true -> Valide, false -> Invalide)
         */

        $scope.isReady = function () {
            let portal = $scope.newPortal;

            let val =

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
         * @return {Caractères} Nom du modificateur actuel traduit 
         */

        $scope.getCurrentModifierName = function () {
            let name = "";
            $scope.modifiers.forEach(function (modifier) {
                if (modifier.id == $scope.newPortal.modifierId) {
                    name = modifier.name;
                }
            });
            return $filter('translate')(name);
        };

        /**
         * Récupère la rotation actuelle du cycle des modificateurs (format CSS)
         * @function getCurrentRotation
         * @public
         * @return {Caractères} Rotation actuelle du cycle des modificateurs (format CSS)
         */

        $scope.getCurrentRotation = function () {
            return "rotate(" + $scope.currentRotation + "deg)";
        };

        /**
         * Changement du modificateur actuel
         * @function changeModifier
         * @public
         * @param {Nombre} modifierId Identifiant du modificateur
         */

        $scope.changeModifier = function (modifierId) {
            if (modifierId != $scope.newPortal.modifierId) {
                let indexModifier = 0;
                let indexCurrentModifier = 0;
                $scope.modifiers.forEach(function (modifier, index) {
                    if (modifier.id == modifierId) {
                        indexModifier = index;
                    }
                    if (modifier.id == $scope.newPortal.modifierId) {
                        indexCurrentModifier = index;
                    }
                });
                let rotation = 0;
                if ((indexModifier - indexCurrentModifier) > 5) {
                    rotation = ((indexModifier - indexCurrentModifier) - 10) % 10;
                }
                else if ((indexModifier - indexCurrentModifier) < -5) {
                    rotation = ((indexModifier - indexCurrentModifier) + 10) % 10;
                }
                else {
                    rotation = (indexModifier - indexCurrentModifier) % 10;
                }
                $scope.currentRotation -= rotation * 36;

                $scope.newPortal.modifierId = modifierId;
            }
        };

        /**
         * Récupère le nom de la dimension du portail
         * @function getDimensionName
         * @public
         * @return
         */

        $scope.getDimensionName = function () {
            return $filter('translate')($scope.dimension.name);
        };

        /**
         * Récupère le nom de la classe de la dimension du portail
         * @function getDimensionClassName
         * @public
         * @return
         */

        $scope.getDimensionClassName = function () {
            return angular.lowercase($scope.dimension.name);
        };

        /**
         * Récupère le chemin de l'image de la dimension
         * @function getModifierImgPathByName
         * @public
         * @param {Caractères} name Nom de la dimension
         * @return
         */

        $scope.getModifierImgPathByName = function (name) {
            return appConfig.paths.imgModifiers + angular.lowercase(name) + '.png';
        };

        /**
         * Met à jour le portail
         * @function update
         * @public
         */

        $scope.update = function () {
            $scope.newPortal.isUnknow ? $scope.newPortal.isUnknow = 1 : $scope.newPortal.isUnknow = 0;
            $scope.closeDialog();
            daoManager.updatePortal($scope.newPortal).then(
                function (response) {
                    console.log(response);
                    if(response.data > 0) {
                        toastManager.showSimpleToast($filter('translate')('UPDATE_PORTALS_SUCCESS'), 'success');
                        $rootScope.$broadcast('refreshDataPortals');
                    }
                    else if(response.data == 'BANISHED') {
                        toastManager.showSimpleToast($filter('translate')('BANISHED_USER_ERROR'), 'error');
                    }
                    else {
                        toastManager.showSimpleToast($filter('translate')('REQUIRED_LOGIN_ERROR'), 'error');
                    }
                }, function (error) {
                    toastManager.showSimpleToast($filter('translate')('UPDATE_PORTALS_ERROR'), 'error');
                }
            );
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

        function sortModifiers() {
            let isFound = false;
            $scope.dimension.modifiers.forEach(function (modifier) {
                if (modifier.id == $scope.newPortal.modifierId) {
                    isFound = true;
                }
                else if (isFound) {
                    $scope.modifiers.push(modifier);
                }
            });
            $scope.dimension.modifiers.forEach(function (modifier) {
                if ($scope.modifiers.length < 10) {
                    $scope.modifiers.push(modifier);
                }
            });
        };

        /**
         * Initialise de la popin de modification d'un portail
         * @function init
         * @private
         */

        function init() {
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
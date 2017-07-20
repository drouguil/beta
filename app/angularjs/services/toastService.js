/**
 * Force un "bon" codage
 */

'use strict';

/**
 * Déclaration du module du service de gestion des notifications
 */

var toastService = angular.module('toastService', []);

/**
 * Service de gestion des notifications
 */

toastService.service('toastManager', [
    '$mdToast',
    function (
        $mdToast) {

        /**
         * Affiche une notification classique
         * @function showSimpleToast
         * @public
         * @param {Caractères} textContent Texte du contenu de la notification
         * @param {Caractères} position Optionnel valeur par défault : 'top right' ; Position de la notification ('top left', 'top right', 'bottom left', 'bottom right')
         * @param {Nombre} delay Optionnel valeur par défault : 3000 ; Durée d'affichage de la notification en millisecondes
         */

        this.showSimpleToast = function (textContent, position, delay) {
            if (!delay) {
                delay = 3000;
            }
            if (!position) {
                position = 'top right';
            }
            if (textContent) {
                $mdToast.show(
                    $mdToast.simple()
                        .textContent(textContent)
                        .position(position)
                        .hideDelay(delay)
                );
            }
            else {
                console.error('Le texte n\'est pas défini')
            }

        };

        /**
         * Cache toutes les notifications en cours
         * @function closeToasts
         * @public
         */

        this.closeToasts = function () {
            $mdToast.hide();
        };

    }]);
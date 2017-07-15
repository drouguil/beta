/**
 * Force un "bon" codage
 */

'use strict';

/**
 * Déclaration du module du service de gestion des popins
 */

var dialogService = angular.module('dialogService', []);

/**
 * Service de gestion des popins
 */

dialogService.service('dialogManager', [
    '$mdDialog',
    function (
        $mdDialog) {

        /**
         * Affiche une popin de confirmation
         * @function showConfirmDialog
         * @public
         * @param {Caractères} title Titre de la popin
         * @param {Caractères} textContent Texte du contenu de la popin
         * @param {Caractères} textOk Texte de confirmation
         * @param {Caractères} textCancel Texte d'annulation
         * @param {Objet} ev Endroit d'où l'on veut faire apparaitre la popin (avec $event)
         */

        this.showConfirmDialog = function (title, textContent, textOk, textCancel, ev) {
            if(ev)
            {
                var confirmDialog = $mdDialog.confirm()
                .title(title)
                .textContent(textContent)
                .targetEvent(ev)
                .ok(textOk)
                .cancel(textCancel);
            }
            else
            {
                var confirmDialog = $mdDialog.confirm()
                .title(title)
                .textContent(textContent)
                .ok(textOk)
                .cancel(textCancel);
            }
            
            return $mdDialog.show(confirmDialog);
        };

        /**
         * Ferme toutes les popins en cours
         * @function closeDialogs
         * @public
         */

        this.closeDialogs = function () {
            $mdDialog.cancel();
        };

    }]);
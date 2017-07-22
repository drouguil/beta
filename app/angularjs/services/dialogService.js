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
    'appConfig',
    function (
        $mdDialog,
        appConfig) {

        /**
         * Affiche une popin de confirmation
         * @function showConfirmDialog
         * @public
         * @param {Caractères} title Titre de la popin
         * @param {Caractères} textContent Texte du contenu de la popin
         * @param {Caractères} textOk Texte de confirmation
         * @param {Caractères} textCancel Texte d'annulation
         * @param {Objet} ev Endroit d'où l'on veut faire apparaitre la popin (avec $event)
         * @return
         */

        this.showConfirmDialog = function (title, textContent, textOk, textCancel, ev) {
            var confirmDialog = null;
            if (title) {
                if (textContent) {
                    if (textOk) {
                        if (textCancel) {
                            if (ev) {
                                var confirmDialog = $mdDialog.confirm()
                                    .title(title)
                                    .textContent(textContent)
                                    .targetEvent(ev)
                                    .ok(textOk)
                                    .cancel(textCancel);
                            }
                            else {
                                var confirmDialog = $mdDialog.confirm()
                                    .title(title)
                                    .textContent(textContent)
                                    .ok(textOk)
                                    .cancel(textCancel);
                            }

                            return $mdDialog.show(confirmDialog);
                        }
                        else {
                            console.error('Le texte d\'annulation n\'est pas défini');
                        }
                    }
                    else {
                        console.error('Le texte de confirmation n\'est pas défini');
                    }
                }
                else {
                    console.error('Le texte du contenu n\'est pas défini');
                }
            }
            else {
                console.error('Le titre n\'est pas défini');
            }

            return 'Erreur lors de l\'ouverture de la popin de confirmation';
        };

        /**
         * Affiche la popin des changelogs
         * @function showChangelogDialog
         * @public
         * @param {Objet} ev Endroit d'où l'on veut faire apparaitre la popin (avec $event)
         * @param {Booléen} clickOutside Détermine si le clic en dehors de la popin la ferme ou non
         */

        this.showChangelogDialog = function(ev, clickOutside) {
            if(clickOutside == undefined)
            {
                clickOutside = true;
            }
            if(ev)
            {
                $mdDialog.show({
                    controller: 'changelogController',
                    templateUrl: appConfig.paths.views + 'changelog.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: clickOutside
                    });
            }
            else
            {
                $mdDialog.show({
                    controller: 'changelogController',
                    templateUrl: appConfig.paths.views + 'changelog.html',
                    parent: angular.element(document.body),
                    clickOutsideToClose: clickOutside
                    });
            }
        }

        /**
         * Affiche la popin d'aide
         * @function showHelpDialog
         * @public
         * @param {Objet} ev Endroit d'où l'on veut faire apparaitre la popin (avec $event)
         * @param {Booléen} clickOutside Détermine si le clic en dehors de la popin la ferme ou non
         */

        this.showHelpDialog = function(ev, clickOutside) {
            if(clickOutside == undefined)
            {
                clickOutside = true;
            }
            if(ev)
            {
                $mdDialog.show({
                    controller: 'helpController',
                    templateUrl: appConfig.paths.views + 'help.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: clickOutside
                    });
            }
            else
            {
                $mdDialog.show({
                    controller: 'helpController',
                    templateUrl: appConfig.paths.views + 'help.html',
                    parent: angular.element(document.body),
                    clickOutsideToClose: clickOutside
                    });
            }
        }

        /**
         * Ferme toutes les popins en cours
         * @function closeDialogs
         * @public
         */

        this.closeDialogs = function () {
            $mdDialog.cancel();
        };

    }]);
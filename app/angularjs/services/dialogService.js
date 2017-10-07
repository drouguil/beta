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
         * Référence sur le service
         * @private
         */

        var self = this;

        /**
         * Affiche une popin de confirmation
         * @function showConfirmDialog
         * @public
         * @param {Caractères} title Titre de la popin
         * @param {Caractères} textContent Texte du contenu de la popin
         * @param {Caractères} textOk Texte de confirmation
         * @param {Caractères} textCancel Texte d'annulation
         * @param {Objet} ev Endroit d'où l'on veut faire apparaitre la popin (avec $event)
         * @return {Promesse}
         */

        self.showConfirmDialog = function (title, textContent, textOk, textCancel, ev) {
            let confirmDialog = null;
            let error = 'Une erreur est survenue lors de l\'ouverture de la popin de confirmation';
            if (title) {
                if (textContent) {
                    if (textOk) {
                        if (textCancel) {
                            if (ev) {
                                confirmDialog = $mdDialog.confirm()
                                    .title(title)
                                    .textContent(textContent)
                                    .targetEvent(ev)
                                    .ok(textOk)
                                    .cancel(textCancel);
                            }
                            else {
                                confirmDialog = $mdDialog.confirm()
                                    .title(title)
                                    .textContent(textContent)
                                    .ok(textOk)
                                    .cancel(textCancel);
                            }

                            return $mdDialog.show(confirmDialog);
                        }
                        else {
                            error = 'Le texte d\'annulation n\'est pas défini';
                        }
                    }
                    else {
                        error = 'Le texte de confirmation n\'est pas défini';
                    }
                }
                else {
                    error = 'Le texte du contenu n\'est pas défini';
                }
            }
            else {
                error = 'Le titre n\'est pas défini';
            }

            return Promise.reject(new Error(error));
        };

        /**
         * Affiche la popin des changelogs
         * @function showChangelogDialog
         * @public
         * @param {Objet} ev Endroit d'où l'on veut faire apparaitre la popin (avec $event)
         * @param {Booléen} clickOutside Détermine si le clic en dehors de la popin la ferme ou non
         */

        self.showChangelogDialog = function (ev, clickOutside = true) {
            showDialog('changelogController', appConfig.paths.viewsHome + 'changelog.html', ev, clickOutside);
        };

        /**
         * Affiche la popin d'aide
         * @function showHelpDialog
         * @public
         * @param {Objet} ev Endroit d'où l'on veut faire apparaitre la popin (avec $event)
         * @param {Booléen} clickOutside Détermine si le clic en dehors de la popin la ferme ou non
         */

        self.showHelpDialog = function (ev, clickOutside = true) {
            showDialog('helpController', appConfig.paths.viewsHeader + 'help.html', ev, clickOutside);
        };

        /**
         * Affiche la popin de modification d'un portail
         * @function showUpdatePortalsDialog
         * @public
         * @param {Objet} ev Endroit d'où l'on veut faire apparaitre la popin (avec $event)
         * @param {Booléen} clickOutside Détermine si le clic en dehors de la popin la ferme ou non
         * @param {Objet} portal Portail que l'on veut modifier
         * @param {Objet} dimension Dimension du portail que l'on veut modifier
         */

        self.showUpdatePortalsDialog = function (ev, clickOutside = true, portal, dimension) {
            let locals = {
                portal: portal,
                dimension: dimension
            };
            showDialog('updatePortalsController', appConfig.paths.viewsPortals + 'updatePortals.html', ev, clickOutside, locals);
        };

        /**
         * Affiche la popin d'identification
         * @function showIdentificationDialog
         * @public
         * @param {Objet} ev Endroit d'où l'on veut faire apparaitre la popin (avec $event)
         * @param {Booléen} clickOutside Détermine si le clic en dehors de la popin la ferme ou non
         * @param {Booléen} isRegister Détermine si l'on doit afficher le formulaire d'inscription (true) ou le formulaire de connexion (false)
         */

        self.showIdentificationDialog = function (ev, clickOutside = true, isRegister = false) {
            let locals = {
                isRegister: isRegister
            };
            showDialog('identificationController', appConfig.paths.viewsHeader + 'identification.html', ev, clickOutside, locals);
        };

        /**
         * Affiche la popin du profil
         * @function showProfileDialog
         * @public
         * @param {Objet} ev Endroit d'où l'on veut faire apparaitre la popin (avec $event)
         * @param {Booléen} clickOutside Détermine si le clic en dehors de la popin la ferme ou non
         * @param {Booléen} isUpdate Détermine si l'on doit afficher le formulaire d'inscription (true) ou le formulaire de connexion (false)
         */

        self.showProfileDialog = function (ev, clickOutside = true, isUpdate = false) {
            let locals = {
                isUpdate: isUpdate
            };
            showDialog('profileController', appConfig.paths.viewsHeader + 'profile.html', ev, clickOutside, locals);
        };

        /**
         * Ferme toutes les popins en cours
         * @function closeDialogs
         * @public
         */

        self.closeDialogs = function () {
            $mdDialog.cancel();
        };

        /**
         * Affiche une popin
         * @function showDialog
         * @private
         * @param {Objet} ev Endroit d'où l'on veut faire apparaitre la popin (avec $event)
         * @param {Booléen} clickOutside Détermine si le clic en dehors de la popin la ferme ou non
         */

        function showDialog(controller, templateUrl, ev, clickOutside = true, locals) {
            let dialog = {
                controller: controller,
                templateUrl: templateUrl,
                parent: angular.element(document.body),
                clickOutsideToClose: clickOutside
            }
            if (ev) {
                dialog.targetEvent = ev
            }
            if (locals) {
                dialog.locals = locals
            }
            $mdDialog.show(dialog);
        };

    }]);
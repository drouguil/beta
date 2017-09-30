/**
 * Force un "bon" codage
 */

'use strict';

/**
 * Déclaration du module de la page des portails
 */

var portalsCtrl = angular.module('portalsCtrl', []);

/**
 * Configuration du module de la page des portails
 */

portalsCtrl.config([
    '$translateProvider',
    function (
        $translateProvider) {

        /**
         * Dictionnaire Français
         */

        $translateProvider.translations('fr', {
            PORTALS_TITLE: 'Portails',
            ECAFLIPUS: 'Ecaflipus',
            ENURADO: 'Enutrosor',
            SRAMBAD: 'Srambad',
            XELORIUM: 'Xelorium',
            SERVER_LABEL: 'Serveur actuel',
            UPDATE_BTN: 'Mettre à jour',
            POSITION_TOOLTIP: 'Coordonnées du portail',
            NUMBER_USES_TOOLTIP: 'Nombre d\'utilisations restant',
            USER_TOOLTIP: 'Utilisateur ayant renseigné la première fois les coordonnées du portail',
            COPY_INFOS_BTN: 'Copier les informations',
            COPY_INFOS_SUCCESS: 'Copie réussie',
            COPY_INFOS_ERROR: 'Copie échouée',
            COPY_INFOS_TOOLTIP: 'Copier les informations du portail',
            COPY_POSITION_TOOLTIP: 'Copier les coordonnées du portail',
            COPY_ANNOUNCEMENT_TOOLTIP: 'Copier les informations des portails pour une annonce de guilde ou d\'alliance',
            REFRESH_TOOLTIP: 'Rafraîchissement des données',
            CONFIRM_TOOLTIP: 'Confirmer la position du portail',
            REPORT_TOOLTIP: 'Rapporter le joueur',
            CURRENT_MODIFIER_TOOLTIP: 'Modificateur actuel',
            DISPLAY_MODIFIERS_TOOLTIP: 'Afficher le cycle des modificateurs',
            HIDE_MODIFIERS_TOOLTIP: 'Cacher le cycle des modificateurs',
            MODIFIERS_CYCLE: 'Cycle des modificateurs',
            UPDATE_TIME_TOOLTIP: 'Temps depuis la dernière mise à jour',
            UPDATE_LINK_TOOLTIP: 'Mettre à jour les informations du portails',
            EXPLOSIVE_DISAPPEARANCE: 'Disparitions détonnantes',
            EXPLOSIVE_DISAPPEARANCE_TOOLTIP: 'Disparitions détonnantes : Quand un ennemi meurt, il occasionne des dommages à ses alliés autour de lui proportionnellement à son nombre maximal de points de vie'
        });

        /**
         * Dictionnaire Anglais
         */

        $translateProvider.translations('en', {
            PORTALS_TITLE: 'Portals',
            ECAFLIPUS: 'Ecaflipus',
            ENURADO: 'Enurado',
            SRAMBAD: 'Srambad',
            XELORIUM: 'Xelorium',
            SERVER_LABEL: 'Current server',
            UPDATE_BTN: 'Update',
            POSITION_TOOLTIP: 'Portal\'s location',
            NUMBER_USES_TOOLTIP: 'Uses\' remaining number',
            USER_TOOLTIP: 'User having informed the first time the portal\'s location',
            COPY_INFOS_BTN: 'Copy informations',
            COPY_INFOS_SUCCESS: 'Successfully copy',
            COPY_INFOS_ERROR: 'Failed copy',
            COPY_INFOS_TOOLTIP: 'Copy portal\'s informations',
            COPY_POSITION_TOOLTIP: 'Copy portal\'s location',
            COPY_ANNOUNCEMENT_TOOLTIP: 'Copy portal\'s informations for a guild or alliance\'s announcement',
            REFRESH_TOOLTIP: 'Data refresh',
            CONFIRM_TOOLTIP: 'Confirm portal\'s location',
            REPORT_TOOLTIP: 'Report player',
            CURRENT_MODIFIER_TOOLTIP: 'Modificateur actuel',
            DISPLAY_MODIFIERS_TOOLTIP: 'Display modifiers\' cycle',
            HIDE_MODIFIERS_TOOLTIP: 'Hide modifiers\' cycle',
            MODIFIERS_CYCLE: 'Modifiers\' cycle',
            UPDATE_TIME_TOOLTIP: 'Time since the last update',
            UPDATE_LINK_TOOLTIP: 'Update portal\'s informations',
            EXPLOSIVE_DISAPPEARANCE: 'Explosive disappearance',
            EXPLOSIVE_DISAPPEARANCE_TOOLTIP: 'Explosive disappearance'
        });
    }]);

/**
 * Contrôleur du module de la page des portails
 */

portalsCtrl.controller('portalsController', [
    '$scope',
    '$rootScope',
    '$filter',
    '$interval',
    'imgManager',
    'dialogManager',
    'toastManager',
    'daoManager',
    'devToolsManager',
    'appConfig',
    function (
        $scope,
        $rootScope,
        $filter,
        $interval,
        imgManager,
        dialogManager,
        toastManager,
        daoManager,
        devToolsManager,
        appConfig) {

        /**
         * Liste des serveurs de jeu
         */

        $scope.servers = [];

        /**
         * Liste des dimensions
         */

        $scope.dimensions = [];

        /**
         * Serveur actuel
         */

        $scope.currentServer = {};

        /**
         * Timeur d'actualisation des données
         */

        $scope.refreshTimer = appConfig.portals.refreshTime / 1000;

        /**
         * Chemin de l'icône de la position des portails
         */

        $scope.positionIconPath = appConfig.paths.imgIcons + 'position.png';

        /**
         * Chemin de l'icône du nombre d'utilisations des portails
         */

        $scope.numberUsesIconPath = appConfig.paths.imgIcons + 'uses.png';

        /**
         * Chemin de l'icône de la copie dans le presse-papier
         */

        $scope.clipboardIconPath = appConfig.paths.svgPortals + 'clipboard.svg';

        /**
         * Chemin de l'icône de la mise à jour
         */

        $scope.updateIconPath = appConfig.paths.svgPortals + 'update.svg';

        /**
         * Chemin de l'icône du temps de la dernière mise à jour
         */

        $scope.updateTimeIconPath = appConfig.paths.svgPortals + 'update_time.svg';

        /**
         * Chemin de l'icône de confirmation
         */

        $scope.confirmIconPath = appConfig.paths.svgPortals + 'confirm.svg';

        /**
         * Chemin de l'icône de report
         */

        $scope.reportIconPath = appConfig.paths.svgPortals + 'report.svg';

        /**
         * Chemin de l'icône d'affichage du cycle des modificateurs
         */

        $scope.displayModifiersIconPath = appConfig.paths.svgPortals + 'plus.svg';

        /**
         * Chemin de l'icône de cachage du cycle des modificateurs
         */

        $scope.hideModifiersIconPath = appConfig.paths.svgPortals + 'minus.svg';

        /**
         * Chemin de l'icône de refrachissement des données
         */

        $scope.refreshIconPath = appConfig.paths.svgPortals + 'refresh.svg';

        /**
         * Chemin de l'icône de la copie pour l'annonce de guilde
         */

        $scope.guildIconPath = appConfig.paths.imgIcons + 'guild.png';

        /**
         * Chemin de l'icône de la copie pour l'annonce d'alliance
         */

        $scope.allianceIconPath = appConfig.paths.imgIcons + 'alliance.png';

        /**
         * Détermine si l'on affiche le cycle des modificateurs
         */

        $scope.displayModifiers = false;

        /**
         * Récupère le chemin de l'image d'une dimension en fonction de son identifiant
         * @function getDimensionImgPathById
         * @public
         * @param {Nombre} id Identifiant de la dimension
         * @return Chemind e l'image de la dimension
         */

        $scope.getDimensionImgPathById = function (id) {
            if ($scope.dimensions[id - 1]) {
                return appConfig.paths.imgPortals + $scope.dimensions[id - 1].name + '.png';
            }
            else {
                return '';
            }
        };

        /**
         * Récupère la classe d'une dimension en fonction de son identifiant
         * @function getDimensionClassNameById
         * @public
         * @param {Nombre} id Identifiant de la dimension
         * @return Classe de la dimension
         */

        $scope.getDimensionClassNameById = function (id) {
            if ($scope.dimensions[id - 1]) {
                return $scope.dimensions[id - 1].name.toLowerCase();
            }
            else {
                return '';
            }
        };

        /**
         * Récupère le nom d'une dimension en fonction de son identifiant
         * @function getDimensionNameById
         * @public
         * @param {Nombre} id Identifiant de la dimension
         * @return Nom de la dimension
         */

        $scope.getDimensionNameById = function (id) {
            if ($scope.dimensions[id - 1]) {
                return $filter('translate')($scope.dimensions[id - 1].name.toUpperCase());
            }
            else {
                return '';
            }
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
         * Récupère les modificateurs en fonction de l'identifiant de la dimension
         * @function getModifiersByDimensionId
         * @public
         * @param {Nombre} id Identifiant de la dimension
         * @return Modificateurs
         */

        $scope.getModifiersByDimensionId = function (id) {
            if ($scope.dimensions[id - 1]) {
                return $scope.dimensions[id - 1].modifiers;
            }
            else {
                return [];
            }
        };

        /**
         * Récupère l'infobulle d'un modificateur
         * @function getModifierTooltip
         * @public
         * @param {Caractères} modiferName Nom du modificateur
         */

        $scope.getModifierTooltip = function (modifierName) {
            var name = modifierName.replace(/ /g, '_');
            name += '_TOOLTIP';
            return $filter('translate')(name.toUpperCase());
        };

        /**
         * Affiche la popin de modification d'un portail
         * @function showUpdatePortalsDialog
         * @public
         * @param {Objet} ev Endroit d'où l'on veut faire apparaitre la popin (avec $event)
         * @param {Objet} portal Portail que l'on veut modifier
         * @param {Objet} dimension Dimension du portail que l'on veut modifier
         */

        $scope.showUpdatePortalsDialog = function (ev, portal, dimension) {
            dialogManager.showUpdatePortalsDialog(ev, true, portal, dimension);
        };

        /**
         * Récupère la couleur du nombre d'utilisations
         * @function getColorNumberUses
         * @public
         * @param {Nombre} numberUses Nombre d'utilisations
         * @return {Caractères} Couleur css au format rgb
         */

        $scope.getColorNumberUses = function (numberUses) {
            var red = Math.abs((numberUses * 2 - 1) - 255);
            var green = numberUses * 2 - 1;
            var color = 'rgb(' + red + ', ' + green + ', 0)';
            return color;
        };

        /**
         * Détermine si toutes les images sont chargées
         * @function imgLoaded
         * @public
         */

        $scope.imgLoaded = function () {
            countImgsLoaded++;
            if (countImgsLoaded == nbImgs) {
                $rootScope.imgsIsLoaded = true;
                console.log('imgsIsLoaded');
            }
        };

        /**
         * 
         * @function copyInfos
         * @public
         * @param {Caractères} type 'success' ou 'error'
         */

        $scope.copyInfos = function (type) {
            if (type == 'success') {
                toastManager.showSimpleToast($filter('translate')('COPY_INFOS_SUCCESS'), 'success');
            }
            else {
                toastManager.showSimpleToast($filter('translate')('COPY_INFOS_ERROR'), 'error');
            }
        };

        /**
         * Récupère le nom du modificateur actuel pour un protail donné
         * @function getCurrentModifierName
         * @public
         * @param {Objet} portal Portail
         */

        $scope.getCurrentModifierName = function (portal) {
            var name = "";
            $scope.dimensions[portal.dimensionId - 1].modifiers.forEach(function (modifier) {
                if (modifier.id == portal.modifierId) {
                    name = modifier.name;
                }
            });
            name = name.replace(/ /g, '_');
            return $filter('translate')(name.toUpperCase());
        };

        /**
         * Suppression de l'intervalle de rafrachissement lorsqu'on quitte la page
         * @function
         * @public
         */

        $scope.$on('$destroy', function () {
            if (refreshDataInterval) {
                $interval.cancel(refreshDataInterval);
            }
        });

        /**
         * Actualise les données
         * @function refreshData
         * @public
         */

        $scope.refreshData = function () {
            devToolsManager.startTimer();
            $scope.refreshTimer = appConfig.portals.refreshTime / 1000;
            $scope.currentServer.portals.forEach(function (portal, indexPortal, portals) {
                daoManager.getPortalById(portal.id).then(function (response) {
                    var data = response.data;

                    var refreshPortal = {
                        id: data[0],
                        dimensionId: data[1],
                        serverId: data[2],
                        userId: data[3],
                        modifierId: data[4],
                        user: portal.user,
                        posX: parseInt(data[5]),
                        posY: parseInt(data[6]),
                        numberUses: parseInt(data[7]),
                        isUnknow: parseInt(data[8])
                    };

                    // Récupération de l'utilisateur

                    daoManager.getUserById(refreshPortal.userId).then(function (response) {
                        var data = response.data;

                        var user = {
                            id: data[0],
                            username: data[1],
                            serverId: data[2]
                        };

                        refreshPortal.user = user;

                        if (!_.isEqual(refreshPortal, portal)) {
                            $scope.currentServer.portals[indexPortal] = refreshPortal;
                            if(!_.isEqual(refreshPortal.modifierId, portal.modifierId)) {
                                sortModifiers($scope.currentServer.portals[indexPortal]);
                            }
                        }

                        if(indexPortal == portals.length - 1) {
                            devToolsManager.stopTimer();
                        }
                    });
                });
            });
        };

        /**
         * Actualise les données
         * @private
         */

        var refreshDataInterval = $interval(function () {
            $scope.refreshTimer--;
            if ($scope.refreshTimer == 0) {
               $scope.refreshData();
            }
        }, 1000);

        /**
         * Trie le tableau des modificateurs du portail
         * @function sortModifiers
         * @private
         * @param {Objet} portal
         */

        function sortModifiers(portal) {
            if (portal) {
                var isFound = false;
                var modifiers = [];

                $scope.dimensions[portal.dimensionId - 1].modifiers.forEach(function (modifier) {
                    if (modifier.id == portal.modifierId) {
                        isFound = true;
                    }
                    else if (isFound) {
                        modifiers.push(modifier);
                    }
                });
                $scope.dimensions[portal.dimensionId - 1].modifiers.forEach(function (modifier) {
                    if (modifiers.length < 10) {
                        modifiers.push(modifier);
                    }
                });

                $scope.dimensions[portal.dimensionId - 1].modifiers = modifiers;
            }
            else {
                $scope.currentServer.portals.forEach(function (portal) {
                    var isFound = false;
                    var modifiers = [];

                    $scope.dimensions[portal.dimensionId - 1].modifiers.forEach(function (modifier) {
                        if (modifier.id == portal.modifierId) {
                            isFound = true;
                        }
                        else if (isFound) {
                            modifiers.push(modifier);
                        }
                    });
                    $scope.dimensions[portal.dimensionId - 1].modifiers.forEach(function (modifier) {
                        if (modifiers.length < 10) {
                            modifiers.push(modifier);
                        }
                    });

                    $scope.dimensions[portal.dimensionId - 1].modifiers = modifiers;
                });
            }
        };

        /**
         * Initalisation de la page des portails
         * @function init
         * @private
         */

        function init() {

            // Modification du titre de la page

            $rootScope.title = 'Sweet.ovh - ' + $filter('translate')('PORTALS_TITLE');

            // Initialisation de l'image de fond

            imgManager.initBackgroundImage('portals');

            // Récupération des dimensions

            daoManager.getDimensions().then(function (response) {
                response.data.forEach(function (data) {
                    var dimension = {
                        id: data[0],
                        name: data[1],
                        modifiers: []
                    };

                    // Récupération des modificateurs

                    daoManager.getModifiersByDimensionId(dimension.id).then(function (response) {
                        response.data.forEach(function (data) {
                            var modifier = {
                                id: data[0],
                                name: data[1]
                            };

                            dimension.modifiers.push(modifier);
                        });
                    });

                    $scope.dimensions.push(dimension);

                });
            });

            // Récupération des serveurs

            daoManager.getServers().then(function (servers) {
                servers.data.forEach(function (data, indexServer, servers) {
                    var server = {
                        id: data[0],
                        name: data[1],
                        portals: []
                    };

                    // Récupération des portails

                    daoManager.getPortalsByServerId(server.id).then(function (portals) {
                        portals.data.forEach(function (data, indexPortal, portals) {
                            var portal = {
                                id: data[0],
                                dimensionId: data[1],
                                serverId: data[2],
                                userId: data[3],
                                modifierId: data[4],
                                user: {},
                                posX: parseInt(data[5]),
                                posY: parseInt(data[6]),
                                numberUses: parseInt(data[7]),
                                isUnknow: parseInt(data[8])
                            };

                            // Récupération de l'utilisateur

                            daoManager.getUserById(portal.userId).then(function (user) {
                                var data = user.data;

                                var user = {
                                    id: data[0],
                                    username: data[1],
                                    serverId: data[2]
                                };

                                portal.user = user;

                                server.portals.push(portal);

                                if (indexPortal == (portals.length - 1) && indexServer == (servers.length - 1)) {

                                    $scope.currentServer = $scope.servers[0];

                                    sortModifiers();

                                    // Initialisation de la vue terminée

                                    $rootScope.viewIsLoaded = true;

                                    console.log('viewIsLoaded');

                                    console.log($scope.servers);

                                    console.log($scope.dimensions);
                                }
                            });
                        });
                    });
                    $scope.servers.push(server);
                });
            });
        };

        /**
         * Nombre d'images à charger
         * @private
         */

        var nbImgs = 87;

        /**
         * Nombre d'images chargées
         * @private
         */

        var countImgsLoaded = 0;

        /**
         * Initialisation de la page des portails
         */

        init();

    }]);
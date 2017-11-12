/**
 * Force un "bon" codage
 */

'use strict';

/**
 * Déclaration du module de la page des portails
 */

let portalsCtrl = angular.module('portalsCtrl', []);

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

            // Titre de la page

            PORTALS_TITLE: 'Portails',

            // Dimensions

            ECAFLIPUS: 'Ecaflipus',
            ENURADO: 'Enutrosor',
            SRAMBAD: 'Srambad',
            XELORIUM: 'Xelorium',

            // Serveurs

            AGRIDE: 'Agride',
            ATCHAM: 'Atcham',
            BETA_1: 'Bêta 1',
            BETA_2: 'Bêta 2',
            BRUMEN: 'Brumen',
            CROCABULIA: 'Crocabulia',
            ECHO: 'Echo',
            FURYE: 'Furye',
            ILYZAELLE: 'Ilyzaelle',
            MERIANA: 'Meriana',
            MERKATOR: 'Merkator',
            NIDAS: 'Nidas',
            OTO_MUSTAM: 'Oto Mustam',
            PANDORE: 'Pandore',
            RUBILAX: 'Rubilax',
            SHADOW: 'Ombre',

            //

            SERVER_SELECTED_LABEL: 'Serveur actuel',
            UPDATE_BTN: 'Mettre à jour',
            POSITION_TOOLTIP: 'Coordonnées du portail',
            NUMBER_USES_TOOLTIP: 'Nombre d\'utilisations restant',
            USER_TOOLTIP: 'Utilisateur ayant renseigné la première fois les coordonnées du portail',
            COPY_INFOS_BTN: 'Copier les informations',
            COPY_INFOS_SUCCESS: 'Copie réussie',
            COPY_INFOS_ERROR: 'Copie échouée',
            COPY_INFOS_TOOLTIP: 'Copier les informations du portail',
            COPY_POSITION_TOOLTIP: 'Copier les coordonnées du portail',
            COPY_ANNOUNCEMENT: 'Copier pour une annonce',
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

            // Modificateurs

            EXPLOSIVE_DISAPPEARANCE: 'Disparitions détonnantes',
            EXPLOSIVE_DISAPPEARANCE_TOOLTIP: 'Disparitions détonnantes : Quand un ennemi meurt, il occasionne des dommages à ses alliés autour de lui proportionnellement à son nombre maximal de points de vie',
            CYCLIC_POWER: 'Puissance cyclique',
            CYCLIC_POWER_TOOLTIP: 'Puissance cyclique : Les ennemis ont 50% de vitalité supplémentaire. Les alliés gagnent 25% de dommages supplémentaires par tour à partir du second tour et reviennent à leurs dommages de base tous les 5 tours',
            INVIGORATING_PUSHES: 'Poussées revigorantes',
            INVIGORATING_PUSHES_TOOLTIP: 'Poussées revigorantes : Quand un ennemi reçoit des dommages de poussée, une fois par tour, il génère du soin aux alliés autour de lui',
            LONG_RANGE_LIAISON: 'Liaison longue portée',
            LONG_RANGE_LIAISON_TOOLTIP: 'Liaison longue portée : Quand un ennemi est attaqué, 20% des dommages qu\'il subit sont renvoyés aux ennemis à plus de 10 PO',
            STUNNING_SUMMONS: 'Invocations incapacitantes',
            STUNNING_SUMMONS_TOOLTIP: 'Invocations incapacitantes : Les dommages occasionnés par les invocations non-statiques enlèvent un tour d\'envoûtement aux ennemis',
            CRITICAL_REGENERATION: 'Régénération Critique',
            CRITICAL_REGENERATION_TOOLTIP: 'Régénération Critique : À chaque fois qu\'un allié occasionne un coup critique, il est soigné de 2% de sa vitalité maximale',
            ELEMENTARY_ROULETTE: 'Roulette élémentaire',
            ELEMENTARY_ROULETTE_TOOLTIP: 'Roulette élémentaire : À chaque début de tour d\'un allié, il gagne aléatoirement 200 d\'intelligence, de chance, d\'agilité ou de force pendant 1 tour',
            BONUS_CELL: 'Case bonus',
            BONUS_CELL_TOOLTIP: 'Case bonus : À chaque début de tour d\'un allié, des cellules bonus sont posées à 4 cases de distance en ligne avec cet allié. S\'il se déplace sur une de ces cellules, il gagne 2PA pour le tour en court. Non-cumulable',
            PRIORITY_TARGET: 'Cible Prioritaire',
            PRIORITY_TARGET_TOOLTIP: 'Cible Prioritaire : À chaque début de tour d\'un ennemi, il y a 10% de chance pour que cet ennemi devienne une cible prioritaire : la première fois qu\'il subit des dommages dans le tour, son attaquant gagne 2PA pendant 2 tours. Non-cumulable',
            CORRECT_DISTANCE: 'Bonne distance',
            CORRECT_DISTANCE_TOOLTIP: 'Bonne distance : Quand un ennemi subit des dommages, 20 % de ses dommages soignent les alliés situés à une distance d\'exactement 7 cases de la cible',
            HURTFUL_HINDRANCES: 'Entraves blessantes',
            HURTFUL_HINDRANCES_TOOLTIP: 'Entraves blessantes : Les ennemis perdent des points de vie supplémentaires à chaque retrait de PM subi',
            INCAPACITATING_MOVEMENT: 'Déplacements incapacitants',
            INCAPACITATING_MOVEMENT_TOOLTIP: 'Déplacements incapacitants : Lorsqu\'un ennemi est porté, poussé, attiré ou transposé, la durée de ses envoûtements est réduite de 1 tour',
            SOLIDARITY: 'Solidaires',
            SOLIDARITY_TOOLTIP: 'Solidaires : À chaque début de tour, le personnage se soigne en fonction du nombre d\'alliés à moins de 3 cases',
            MEASURED_DISTANCE: 'Distance mesurée',
            MEASURED_DISTANCE_TOOLTIP: 'Distance mesurée : Les ennemis perdent 1 PM lorsqu\'ils sont attaqués en mêlée. Limite de cumul à 3. Les alliés subissent 20% de dommages en moins à distance',
            INVIGORATING_SOLITUDE: 'Solitude revigorante',
            INVIGORATING_SOLITUDE_TOOLTIP: 'Solitude revigorante : À chaque début de tour d\'un allié, s\'il n\'a aucun allié à moins de 5 cases de lui, il est soigné de 10% de sa vitalité',
            LOW_BLOWS: 'Coups bas',
            LOW_BLOWS_TOOLTIP: 'Coups bas : Les dommages occasionnés par les glyphes, pièges, poisons, bombes et invocations sur les ennemis sont multipliés par 1,25',
            BERSERKER: 'Berserker',
            BERSERKER_TOOLTIP: 'Berserker : Au début de leur tour, les alliés gagnent une augmentation de 33% de dommage s\'ils ont moins de 50% de leur vie',
            DANGEROUS_GAME: 'Jeu dangereux',
            DANGEROUS_GAME_TOOLTIP: 'Jeu dangereux : Chaque allié pose un piège à ses pieds au début de son tour. Ce piège occasionne des dommages aux ennemis et n\'affecte pas les alliés',
            LARCENY: 'Larcin',
            LARCENY_TOOLTIP: 'Larcin : Les alliés volent de la vie quand ils attaquent en mêlée',
            EVASION: 'Evasion',
            EVASION_TOOLTIP: 'Evasion : Les attaques en mêlée poussent les ennemis de 3 cases',
            LOOKING_FOR_ACTION: 'En quête d\'action',
            LOOKING_FOR_ACTION_TOOLTIP: 'En quête d\'action : Les ennemis perdent des points de vie supplémentaires à chaque retrait de PA subi',
            LEAP_GOBBALL: 'Saute-Bouftou',
            LEAP_GOBBALL_TOOLTIP: 'Saute-Bouftou : Quand un allié subit des dommages d\'un autre allié, ce dernier est téléporté symétriquement par rapport à sa cible',
            GO_BACK: 'Retour arrière',
            GO_BACK_TOOLTIP: 'Retour arrière : Quand un ennemi reçoit des dommages de mêlée, il retourne à sa position précédente',
            FETTERED_ACTIONS: 'Actions entravées',
            FETTERED_ACTIONS_TOOLTIP: 'Actions entravées : Les dommages d\'arme retirent des PA aux adversaires',
            MUMMIFYING_SOLITUDE: 'Solitude Momifiante',
            MUMMIFYING_SOLITUDE_TOOLTIP: 'Solitude Momifiante : Solitude momifiante : A chaque début de tour d\'un allié, s\'il n\'a aucun allé à moins de 5 cases de lui, il se transforme en momie et réduit les dommages reçus pendant 1 tour'
        });

        /**
         * Dictionnaire Anglais
         */

        $translateProvider.translations('en', {

            // Titre de la page

            PORTALS_TITLE: 'Portals',

            // Dimensions

            ECAFLIPUS: 'Ecaflipus',
            ENURADO: 'Enurado',
            SRAMBAD: 'Srambad',
            XELORIUM: 'Xelorium',

            // Serveurs

            AGRIDE: 'Agride',
            ATCHAM: 'Atcham',
            BETA_1: 'Bêta 1',
            BETA_2: 'Bêta 2',
            BRUMEN: 'Brumen',
            CROCABULIA: 'Crocabulia',
            ECHO: 'Echo',
            FURYE: 'Furye',
            ILYZAELLE: 'Ilyzaelle',
            MERIANA: 'Meriana',
            MERKATOR: 'Merkator',
            NIDAS: 'Nidas',
            OTO_MUSTAM: 'Oto Mustam',
            PANDORE: 'Pandore',
            RUBILAX: 'Rubilax',
            SHADOW: 'Shadow',

            //

            SERVER_SELECTED_LABEL: 'Current server',
            UPDATE_BTN: 'Update',
            POSITION_TOOLTIP: 'Portal\'s location',
            NUMBER_USES_TOOLTIP: 'Uses\' remaining number',
            USER_TOOLTIP: 'User having informed the first time the portal\'s location',
            COPY_INFOS_BTN: 'Copy informations',
            COPY_INFOS_SUCCESS: 'Successfully copy',
            COPY_INFOS_ERROR: 'Failed copy',
            COPY_INFOS_TOOLTIP: 'Copy portal\'s informations',
            COPY_POSITION_TOOLTIP: 'Copy portal\'s location',
            COPY_ANNOUNCEMENT: 'Copy for an announcement',
            COPY_ANNOUNCEMENT_TOOLTIP: 'Copy portal\'s informations for a guild or alliance\'s announcement',
            REFRESH_TOOLTIP: 'Data refresh',
            CONFIRM_TOOLTIP: 'Confirm portal\'s location',
            REPORT_TOOLTIP: 'Report player',
            CURRENT_MODIFIER_TOOLTIP: 'Current modifier',
            DISPLAY_MODIFIERS_TOOLTIP: 'Display modifiers\' cycle',
            HIDE_MODIFIERS_TOOLTIP: 'Hide modifiers\' cycle',
            MODIFIERS_CYCLE: 'Modifiers\' cycle',
            UPDATE_TIME_TOOLTIP: 'Time since the last update',
            UPDATE_LINK_TOOLTIP: 'Update portal\'s informations',

            // Modificateurs

            EXPLOSIVE_DISAPPEARANCE: 'Explosive disappearance',
            EXPLOSIVE_DISAPPEARANCE_TOOLTIP: 'Explosive disappearance : When an enemy dies it deals fire damage to other enemies in a 2 cell AoE around it, equal to 20% of its max HP (reduced by the target\'s resistance). It does not damage characters',
            CYCLIC_POWER: 'Cyclic power',
            CYCLIC_POWER_TOOLTIP: 'Cyclic power : Enemies have 50% more HP. Allies deal 25% more damage every turn starting from turn 2 (so on turn 3 they\'ll deal 50% more damage, on turn 4 they\'ll deal 75% more damage etc.) The damage bonus resets every 5 turns',
            INVIGORATING_PUSHES: 'Invigorating pushes',
            INVIGORATING_PUSHES_TOOLTIP: 'Invigorating pushes : When an enemy receives pushback damage, they heal allies around them (once a turn)',
            LONG_RANGE_LIAISON: 'Long-range liaison',
            LONG_RANGE_LIAISON_TOOLTIP: 'Long-range liaison : When an enemy is attacked, 20% of the damages they suffer are inflicted on enemies that are farther than 10 range away from the target',
            STUNNING_SUMMONS: 'Stunning summons',
            STUNNING_SUMMONS_TOOLTIP: 'Stunning summons : Damage from non-static summons removes one turn of bewitchments from enemies',
            CRITICAL_REGENERATION: 'Critical regeneration',
            CRITICAL_REGENERATION_TOOLTIP: 'Critical regeneration : Each time an ally lands a critical hit (attacks or non-damaging spells), they are healed by 2% of their max HP',
            ELEMENTARY_ROULETTE: 'Elementary roulette',
            ELEMENTARY_ROULETTE_TOOLTIP: 'Elementary roulette : At each start of an ally\'s turn, they randomly gain 200 strength, intelligence, chance or agility for a turn',
            BONUS_CELL: 'Bonus cell',
            BONUS_CELL_TOOLTIP: 'Bonus cell : Each time an ally starts their turn, bonus cells are placed 4 cells away in line with that ally. If they move onto one of these cells, they gain 2 AP for the current turn (not stackable)',
            PRIORITY_TARGET: 'Priority target',
            PRIORITY_TARGET_TOOLTIP: 'Priority target : Each time an enemy starts their turn, there\'s a 10% chance that the enemy becomes a priority target. When a priority target is hit for the first time during that turn, their attacker gains 2 AP for 2 turns (not stackable)',
            CORRECT_DISTANCE: 'Correct distance',
            CORRECT_DISTANCE_TOOLTIP: 'Correct distance : When an enemy suffers damage, 20% of the damages heal characters situated exactly 7 cells from the target',
            HURTFUL_HINDRANCES: 'Hurtful hindrances',
            HURTFUL_HINDRANCES_TOOLTIP: 'Hurtful hindrances : Enemies lose an additional 5% of their HP whenever an attempt is made to remove their MP',
            INCAPACITATING_MOVEMENT: 'Incapacitating movement',
            INCAPACITATING_MOVEMENT_TOOLTIP: 'Incapacitating movement : Throwing, pushing, pulling or swapping an enemy reduces their bewitchments by 1 turn',
            SOLIDARITY: 'Solidarity',
            SOLIDARITY_TOOLTIP: 'Solidarity : When starting their turn, allies heal themselves depending on the number of allies within 3 cells. Summons don\'t count',
            MEASURED_DISTANCE: 'Measured distance',
            MEASURED_DISTANCE_TOOLTIP: 'Measured distance : Attacking an enemy in melee range removes 1 MP (stacks up to 3 times). Allies take 20% less damage at range',
            INVIGORATING_SOLITUDE: 'Invigorating solitude',
            INVIGORATING_SOLITUDE_TOOLTIP: 'Invigorating solitude : If there\'s no ally within 5 cells, characters are healed 10% of their vitality at the start of their turn',
            LOW_BLOWS: 'Low blows',
            LOW_BLOWS_TOOLTIP: 'Low blows : Summons, poisons, traps, Rogue bombs/walls and glyphs deal 25% more damage',
            BERSERKER: 'Berserker',
            BERSERKER_TOOLTIP: 'Berserker : At the beginning of their turn, allies get a 33% increase to damage if they have less than 50% of their life',
            DANGEROUS_GAME: 'Dangerous game',
            DANGEROUS_GAME_TOOLTIP: 'Dangerous game : Each ally places a trap at their feet at the beginning of their turn. If an enemy activates this trap, it deals damage equal to 10% of their life (in a random element, reduced by resistance). Allies do not take damage',
            LARCENY: 'Larceny',
            LARCENY_TOOLTIP: 'Larceny : Close combat attacks (i.e. any hit on an adjacent enemy) steal life',
            EVASION: 'Evasion',
            EVASION_TOOLTIP: 'Evasion : Enemies have 1 extra MP, but close combat attacks push them back 4 cells',
            LOOKING_FOR_ACTION: 'Looking for action',
            LOOKING_FOR_ACTION_TOOLTIP: 'Looking for action : Enemies lose an additional 3% of their HP whenever an attempt is made to remove their AP',
            LEAP_GOBBALL: 'Leap-gobball',
            LEAP_GOBBALL_TOOLTIP: 'Leap-gobball : When an ally is damaged by another ally, the latter teleports to the other side of the target',
            GO_BACK: 'Go back',
            GO_BACK_TOOLTIP: 'Go back : When an enemy is hit in melee, they are teleported back to their previous location',
            FETTERED_ACTIONS: 'Fettered actions',
            FETTERED_ACTIONS_TOOLTIP: 'Fettered actions : When an enemy is attacked with a weapon, they lose 2 AP (dodgeable)',
            MUMMIFYING_SOLITUDE: 'Mummifying solitude',
            MUMMIFYING_SOLITUDE_TOOLTIP: 'Mummifying solitude : At each start of an ally\'s turn, if there are no allies within 5 cells, the ally transforms into a mummy and takes 33% less damage for 1 turn'
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
         * @public
         */

        $scope.servers = [];

        /**
         * Liste des dimensions
         * @public
         */

        $scope.dimensions = [];

        /**
         * Liste des serveurs favoris de l'utilisateur
         */

        $scope.favouritesServers = [];

        /**
         * Serveur actuel
         * @public
         */

        $scope.currentServer = {};

        /**
         * Serveur sélectionné
         * @public
         */

        $scope.selectedServer = {
            id: undefined,
            name: undefined,
            portals: []
        };

        /**
         * Serveur favori sélectionné
         */

        $scope.selectedFavouriteServer = undefined;

        /**
         * 
         */

        $scope.searchServerName = undefined;

        /**
         * Timeur d'actualisation des données
         * @public
         */

        $scope.refreshTimer = appConfig.portals.refreshTime / 1000;

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
         * Chemin de l'icône de la copie dans le presse-papier
         * @public
         */

        $scope.clipboardIconPath = appConfig.paths.svgPortals + 'clipboard.svg';

        /**
         * Chemin de l'icône de la mise à jour
         * @public
         */

        $scope.updateIconPath = appConfig.paths.svgPortals + 'update.svg';

        /**
         * Chemin de l'icône du temps de la dernière mise à jour
         * @public
         */

        $scope.updateTimeIconPath = appConfig.paths.svgPortals + 'update_time.svg';

        /**
         * Chemin de l'icône de confirmation
         * @public
         */

        $scope.confirmIconPath = appConfig.paths.svgPortals + 'confirm.svg';

        /**
         * Chemin de l'icône de report
         * @public
         */

        $scope.reportIconPath = appConfig.paths.svgPortals + 'report.svg';

        /**
         * Chemin de l'icône d'affichage du cycle des modificateurs
         * @public
         */

        $scope.displayModifiersIconPath = appConfig.paths.svgPortals + 'plus.svg';

        /**
         * Chemin de l'icône de cachage du cycle des modificateurs
         * @public
         */

        $scope.hideModifiersIconPath = appConfig.paths.svgPortals + 'minus.svg';

        /**
         * Chemin de l'icône de refrachissement des données
         * @public
         */

        $scope.refreshIconPath = appConfig.paths.svgPortals + 'refresh.svg';

        /**
         * Chemin de l'icône de la copie pour l'annonce de guilde
         * @public
         */

        $scope.guildIconPath = appConfig.paths.imgIcons + 'guild.png';

        /**
         * Chemin de l'icône de la copie pour l'annonce d'alliance
         * @public
         */

        $scope.allianceIconPath = appConfig.paths.imgIcons + 'alliance.png';

        /**
         * Détermine si l'on affiche le cycle des modificateurs
         * @public
         */

        $scope.displayModifiers = false;

        /*$scope.transformChip = function(chip) {
            // If it is an object, it's already a known chip
            if (angular.isObject(chip)) {
              return chip;
            }
      
            // Otherwise, create a new one
            return { name: chip, type: 'new' }
        }*/

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
                return angular.lowercase($scope.dimensions[id - 1].name);
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
                return $filter('translate')($scope.dimensions[id - 1].name);
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
            return appConfig.paths.imgModifiers + angular.lowercase(name) + '.png';
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
            let name = modifierName += '_TOOLTIP';
            return $filter('translate')(name);
        };

        /**
         * Récupère le texte de l'annonce de guilde/alliance
         * @function getAnnouncement
         * @public
         * @return Texte de l'annonce de guilde/alliance
         */

        $scope.getAnnouncement = function () {
            let announcement = '';
            if ($scope.currentServer.portals) {
                $scope.currentServer.portals.forEach(function (portal) {
                    announcement += '{map,';
                    announcement += portal.posX;
                    announcement += ',';
                    announcement += portal.posY;
                    announcement += ',1, ';
                    announcement += $scope.getDimensionNameById(portal.dimensionId);
                    announcement += ' }';
                });
            }
            return announcement;
        };

        /**
         * Récupère le texte des informations d'un portail
         * @function getInfos
         * @public
         * @param {Objet} portal Portail
         * @return Texte des informations d'un portail
         */

        $scope.getInfos = function (portal) {
            return $scope.getDimensionNameById(portal.dimensionId) + ' ' + $scope.getPos(portal) + ' - ' + portal.numberUses + ' utilisations - ' + $scope.getCurrentModifierName(portal) + ' (10j 12h 15min)';
        };

        /**
         * Récupère le texte de la position d'un portail
         * @function getPos
         * @public
         * @param {Objet} portal Portail
         * @return Texte de la position d'un portail
         */

        $scope.getPos = function (portal) {
            return '[' + portal.posX + ',' + portal.posY + ']';
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
            let red = Math.abs((numberUses * 2 - 1) - 255);
            let green = numberUses * 2 - 1;
            let color = 'rgb(' + red + ', ' + green + ', 0)';
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
         * Change le serveur actuel
         * @function changeCurrentServer
         * @public
         */

        $scope.changeCurrentServer = function () {
            if ($scope.selectedServer) {
                $scope.currentServer = JSON.parse($scope.selectedServer);
                $scope.refreshData();
                sortModifiers();
            }
        }

        /**
         * Change le serveur actuel avec le serveur sélectionné parmi les serveurs favoris
         * @function selectFavouriteServer
         * @public
         * @param {Objet}
         */

        $scope.selectFavouriteServer = function (server) {
            if (server) {
                if($scope.currentServer.id != server.id) {
                    $scope.currentServer = server;
                }
            }
        }

        /**
         * Ajoute un serveur aux favoris de l'utilisateur connecté
         * @function addFavouriteServer
         * @public
         * @param {Objet}
         */

        $scope.addFavouriteServer = function (server) {
            console.log($scope.favouritesServers);
            if (server) {
                daoManager.addFavouriteServer(server.id).then(
                    function (response) {
                        console.log(response);
                    }, function (error) {
                        console.log(error);
                    }
                );
            }
        }

        /**
         * Enlève un serveur des favoris de l'utilisateur connecté
         * @function removeFavouriteServer
         * @public
         * @param {Objet} server Serveur
         */

        $scope.removeFavouriteServer = function (server) {
            if (server) {
                daoManager.removeFavouriteServer(server.id).then(
                    function (response) {
                        console.log(response);
                    }, function (error) {
                        console.log(error);
                    }
                );
            }
        }

        /**
         * Transform la chip en objet
         * @function transformChip
         * @public
         * @param {Objet} chip Chip
         */

        $scope.transformChip = function (chip) {
            if (angular.isObject(chip)) {
                return chip;
            }

            return { name: chip }
        }

        /**
         * Recherche d'un serveur par nom
         * @function searchServer
         * @public
         * @param {Caractères} serverName Nom du serveur à rechercher
         */

        $scope.searchServer = function (serverName) {
            return serverName ? $scope.servers.filter(createFilterFor(serverName)) : [];
        }

        /**
         * Récupère le nom du modificateur actuel pour un protail donné
         * @function getCurrentModifierName
         * @public
         * @param {Objet} portal Portail
         */

        $scope.getCurrentModifierName = function (portal) {
            let name = "";
            $scope.dimensions[portal.dimensionId - 1].modifiers.forEach(function (modifier) {
                if (modifier.id == portal.modifierId) {
                    name = modifier.name;
                }
            });
            return $filter('translate')(name);
        };

        /**
         * 
         * @function connectUser
         * @public
         */

        $scope.$on('connectUser', function () {
            daoManager.getFavouritesServers().then(
                function (response) {
                    console.log(response);
                }, function (error) {
                    console.log(error);
                }
            );
        });

        /**
         * Suppression de l'intervalle de rafrachissement lorsqu'on quitte la page
         * @function $destroy
         * @public
         */

        $scope.$on('$destroy', function () {
            if (refreshDataInterval) {
                $interval.cancel(refreshDataInterval);
            }
        });

        /**
         * Rafraîchit les données des portails
         * @function refreshDataPortals
         * @public
         */

        $scope.$on('refreshDataPortals', function () {
            $scope.refreshData();
        });

        /**
         * Actualise les données
         * @function refreshData
         * @public
         */

        $scope.refreshData = function () {
            $scope.refreshTimer = appConfig.portals.refreshTime / 1000;
            $scope.currentServer.portals.forEach(function (portal, indexPortal, portals) {
                daoManager.getPortalById(portal.id).then(function (response) {

                    let data = response.data;

                    let refreshPortal = {
                        id: data['id'],
                        dimensionId: data['dimension_id'],
                        serverId: data['server_id'],
                        userId: data['user_id'],
                        modifierId: data['modifier_id'],
                        user: portal.user,
                        posX: data['pos_x'],
                        posY: data['pos_y'],
                        numberUses: data['number_uses'],
                        isUnknow: data['is_unknow'],
                        numberConfirms: data['number_confirms'],
                        numberReports: data['number_reports']
                    };

                    // Récupération de l'utilisateur

                    daoManager.getUserById(refreshPortal.userId).then(function (response) {
                        let data = response.data;

                        let user = {
                            id: data['id'],
                            username: data['username'],
                            serverId: data['server_id']
                        };

                        refreshPortal.user = user;

                        if (!_.isEqual(refreshPortal, portal)) {
                            $scope.currentServer.portals[indexPortal] = refreshPortal;
                            if (!_.isEqual(refreshPortal.modifierId, portal.modifierId)) {
                                sortModifiers($scope.currentServer.portals[indexPortal]);
                            }
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
         * Filtre de recherche
         * @function createFilterFor
         * @private
         * @param {Caractères} serverName Nom du serveur à filtrer
         */

        function createFilterFor(serverName) {
            return function filterFn(server) {
                var toSearch = angular.lowercase($filter('translate')(server.name)).replace(/[éêè]/g, "e");
                var toFind = angular.lowercase(serverName).replace(/[éêè]/g, "e");
                return (toSearch.indexOf(toFind) === 0);
            };
        }

        /**
         * Trie le tableau des modificateurs du portail
         * @function sortModifiers
         * @private
         * @param {Objet} portal
         */

        function sortModifiers(portal) {
            if (portal) {
                let isFound = false;
                let modifiers = [];

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
                    let isFound = false;
                    let modifiers = [];

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

            daoManager.getFavouritesServers().then(
                function (response) {
                    let favouritesServers = response.data;
                    if(_.isArray(response.data)) {
                        favouritesServers.forEach(function (favouriteServer) {
                            favouriteServer.portals = [];
                            $scope.favouritesServers.push(favouriteServer);
                        });
                    }
                }, function (error) {
                    console.log(error);
                }
            );

            // Récupération des dimensions

            daoManager.getDimensions().then(function (response) {
                response.data.forEach(function (data) {
                    let dimension = {
                        id: data['id'],
                        name: data['name'],
                        modifiers: []
                    };

                    // Récupération des modificateurs

                    daoManager.getModifiersByDimensionId(dimension.id).then(function (response) {
                        response.data.forEach(function (data) {
                            let modifier = {
                                id: data['id'],
                                name: data['name']
                            };

                            dimension.modifiers.push(modifier);
                        });
                    });

                    $scope.dimensions.push(dimension);

                });
            });

            // Récupération des serveurs

            daoManager.getServers().then(function (servers) {
                let serversTemp = [];
                servers.data.forEach(function (data, indexServer, servers) {
                    let server = {
                        id: data['id'],
                        name: data['name'],
                        portals: []
                    };

                    // Récupération des portails

                    daoManager.getPortalsByServerId(server.id).then(function (portals) {
                        portals.data.forEach(function (data, indexPortal, portals) {
                            let portal = {
                                id: data['id'],
                                dimensionId: data['dimension_id'],
                                serverId: data['server_id'],
                                userId: data['user_id'],
                                modifierId: data['modifier_id'],
                                user: {},
                                posX: parseInt(data['pos_x']),
                                posY: parseInt(data['pos_y']),
                                numberUses: parseInt(data['number_uses']),
                                isUnknow: parseInt(data['is_unknow']),
                                numberConfirms: parseInt(data['number_confirms']),
                                numberReports: parseInt(data['number_reports'])
                            };

                            // Récupération de l'utilisateur

                            daoManager.getUserById(portal.userId).then(function (user) {
                                let data = user.data;

                                let userTemp = {
                                    id: data['id'],
                                    username: data['username'],
                                    serverId: data['server_id']
                                };

                                portal.user = userTemp;

                                server.portals.push(portal);

                                if (indexPortal == (portals.length - 1) && indexServer == (servers.length - 1)) {

                                    $scope.servers = JSON.parse(JSON.stringify(serversTemp));

                                    $scope.currentServer = $scope.servers[0];

                                    sortModifiers();

                                    // Initialisation de la vue terminée

                                    $rootScope.viewIsLoaded = true;

                                    console.log('viewIsLoaded');
                                }
                            });
                        });
                    });
                    serversTemp.push(server);
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
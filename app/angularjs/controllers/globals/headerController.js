/**
 * Force un "bon" codage
 */

'use strict';

/**
 * Déclaration du module du header
 */

let headerCtrl = angular.module('headerCtrl', []);

/**
 * Configuration du module du header
 */

headerCtrl.config([
    '$translateProvider',
    function (
        $translateProvider) {

        /**
         * Dictionnaire Français
         */

        $translateProvider.translations('fr', {
            LANGUAGE_CHANGED: 'Langue changée',
            HELP_TOOLTIP: 'Aide',
            REGISTER_TOOLTIP: 'Inscription',
            LOGIN_TOOLTIP: 'Connexion',
            PROFILE_TOOLTIP: 'Profil',
            LOGOUT_TOOLTIP: 'Déconnexion',
            LOGOUT_SUCCESS: 'Déconnexion réussie',
            LOGOUT_ERROR: 'Une erreur est survenue pendant la déconnexion'
        });

        /**
         * Dictionnaire Anglais
         */

        $translateProvider.translations('en', {
            LANGUAGE_CHANGED: 'Language changed',
            HELP_TOOLTIP: 'Help',
            REGISTER_TOOLTIP: 'Register',
            LOGIN_TOOLTIP: 'Login',
            PROFILE_TOOLTIP: 'Profile',
            LOGOUT_TOOLTIP: 'Logout',
            LOGOUT_SUCCESS: 'Successfully logout',
            LOGOUT_ERROR: 'An error has occured during the logout'
        });
    }]);

/**
 * Contrôleur du module du header
 */

headerCtrl.controller('headerController', [
    '$scope',
    '$locale',
    '$filter',
    '$rootScope',
    '$location',
    'tmhDynamicLocale',
    'languageManager',
    'toastManager',
    'dialogManager',
    'appConfig',
    function (
        $scope,
        $locale,
        $filter,
        $rootScope,
        $location,
        tmhDynamicLocale,
        languageManager,
        toastManager,
        dialogManager,
        appConfig) {

        /**
         * Chemin de l'icône d'aide
         * @public
         */

        $scope.helpIconPath = appConfig.paths.svgHeader + 'help.svg';

        /**
         * Chemin de l'icône d'inscription
         * @public
         */

        $scope.registerIconPath = appConfig.paths.svgHeader + 'register.svg';

        /**
         * Chemin de l'icône de connexion
         * @public
         */

        $scope.loginIconPath = appConfig.paths.svgHeader + 'login.svg';

        /**
         * Chemin de l'icône du profil
         * @public
         */

        $scope.profileIconPath = appConfig.paths.svgHeader + 'profile.svg';

        /**
         * Chemin de l'icône de déconnexion
         * @public
         */

        $scope.logoutIconPath = appConfig.paths.svgHeader + 'logout.svg';

        /**
         * Chemin de l'image du logo
         * @public
         */

        $scope.logoImgPath = appConfig.paths.img + 'logo.png';

        /**
         * Langue actuelle
         * @public
         */

        $scope.currentLanguage = languageManager.getCurrentLanguage();

        /**
         * Activité du menu des langues
         * @public
         */

        $scope.isLanguagesList = false;

        /**
         * Affiche la popin d'aide
         * @function showHelpDialog
         * @public
         * @param {Objet} ev Endroit d'où l'on veut faire apparaitre la popin (avec $event)
         */

        $scope.showHelpDialog = function (ev) {
            dialogManager.showHelpDialog(ev);
        };

        /**
         * Affiche la popin d'identification partie inscription
         * @function showRegisterDialog
         * @public
         * @param {Objet} ev Endroit d'où l'on veut faire apparaitre la popin (avec $event)
         */

        $scope.showRegisterDialog = function (ev) {
            dialogManager.showIdentificationDialog(ev, true, true);
        };

        /**
         * Affiche la popin d'identification partie connexion
         * @function showLoginDialog
         * @public
         * @param {Objet} ev Endroit d'où l'on veut faire apparaitre la popin (avec $event)
         */

        $scope.showLoginDialog = function (ev) {
            dialogManager.showIdentificationDialog(ev, true, false);
        };

        /**
         * Affiche la popin du profil
         * @function showProfileDialog
         * @public
         * @param {Objet} ev Endroit d'où l'on veut faire apparaitre la popin (avec $event)
         */

        $scope.showProfileDialog = function (ev) {
            dialogManager.showProfileDialog(ev, true, false);
        };

        /**
         * Déconnecte l'utilisateur en cours
         * @function logout
         * @public
         */

        $scope.logout = function () {
            $rootScope.isLog = false;
            toastManager.showSimpleToast($filter('translate')('LOGOUT_SUCCESS'));
        }

        /**
         * Chemin de l'icône de la langue actuelle
         * @function displayLanguageList
         * @public
         * @param {Objet} language Affichage ou non du menu des langues
         * @return {}
         */

        $scope.languageIconPath = function (language) {
            return appConfig.paths.svgCountries + language.id + '.svg';
        };

        /**
         * Affiche ou cache le menu des langues
         * @function displayLanguageList
         * @public
         * @param {Booléen} newVal Affichage ou non du menu des langues
         */

        $scope.displayLanguageList = function (newVal) {
            if (newVal) {
                toastManager.closeToasts();
            }
            $scope.isLanguagesList = newVal;
        };

        /**
         * Récupère la liste des langues
         * @function languages
         * @public
         * @return {[Objet]} Liste des langues
         */

        $scope.languages = function () {
            return languageManager.getLanguages();
        };

        /**
         * Met à jour la langue actuelle
         * @function updateLanguage
         * @public
         * @param {Objet} languageSelected Langue à mettre à jour
         */

        $scope.updateLanguage = function (languageSelected) {
            if (languageManager.getCurrentLanguage().id != languageSelected.id) {
                toastManager.showSimpleToast($filter('translate')('LANGUAGE_CHANGED') + ' : ' + languageSelected.name);
                $scope.currentLanguage = languageSelected;
                languageManager.setCurrentLanguage(languageSelected);
                $scope.isLanguagesList = false;
            }
        };

        /**
         * Détermine si la page est une page pleine écran ou non
         * @function isFullscreenPage
         * @public
         * @return true -> Page plein écran, false -> Page normale
         */

        $scope.isFullscreenPage = function () {
            if ($location.$$path == '/puzzle') {
                return true;
            }
            else {
                return false;
            }
        };

        /**
         * Lien vers la page d'accueil
         * @function homeLink
         * @public
         */

        $scope.homeLink = function () {
            $location.path('/');
        }

        /**
         * Détermine si toutes les images sont chargées
         * @function imgLoaded
         * @public
         */

        $scope.imgLoaded = function() {
            countImgsLoaded++;
            if(countImgsLoaded == nbImgs) {
                $rootScope.headerIsLoaded = true;
                console.log('headerIsLoaded');
            }
        };

        /**
         * Nombre d'images à charger
         * @private
         */

        var nbImgs = 5;
        
        /**
         * Nombre d'images chargées
         * @private
         */

        var countImgsLoaded = 0;

    }]);
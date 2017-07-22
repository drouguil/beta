/**
 * Force un "bon" codage
 */

'use strict';

/**
 * Déclaration du module du header
 */

var headerCtrl = angular.module('headerCtrl', []);

/**
 * Configuration du module du header
 */

headerCtrl.config([
    '$translateProvider', 
    function(
        $translateProvider) {
    
    /**
     * Dictionnaire Français
     */

    $translateProvider.translations('fr', {
        LANGUAGE_CHANGED: 'Langue changée',
        HELP_TOOLTIP: 'Aide',
        REGISTER_TOOLTIP: 'Inscription',
        LOGIN_TOOLTIP: 'Connexion'
    });

    /**
     * Dictionnaire Anglais
     */

    $translateProvider.translations('en', {
        LANGUAGE_CHANGED: 'Language changed',
        HELP_TOOLTIP: 'Help',
        REGISTER_TOOLTIP: 'Register',
        LOGIN_TOOLTIP: 'Login'
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
        tmhDynamicLocale, 
        languageManager,
        toastManager,
        dialogManager,
        appConfig) {

        /**
         * Chemin de l'icône d'aide
         * @public
         */

        $scope.helpIconPath = appConfig.paths.svg + 'help.svg';

        /**
         * Chemin de l'icône d'inscription
         * @public
         */

        $scope.registerIconPath = appConfig.paths.svg + 'register.svg';

        /**
         * Chemin de l'icône de connexion
         * @public
         */

        $scope.loginIconPath = appConfig.paths.svg + 'login.svg';

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
         * Chemin de l'icône de la langue actuelle
         * @function displayLanguageList
         * @public
         * @param {Objet} language Affichage ou non du menu des langues
         */

        $scope.languageIconPath = function (language) {
            return appConfig.paths.svgCountries + language.id + '.svg';
        }

        /**
         * Affiche ou cache le menu des langues
         * @function displayLanguageList
         * @public
         * @param {Booléen} newVal Affichage ou non du menu des langues
         */

        $scope.displayLanguageList = function(newVal) {
            if(newVal)
            {
                toastManager.closeToasts();
            }
            $scope.isLanguagesList = newVal;
        };

        /**
         * Récupère la liste des langues
         * @function languages
         * @public
         * @return Liste des langues
         */

        $scope.languages = function() {
            return languageManager.getLanguages();
        };

        /**
         * Met à jour la langue actuelle
         * @function updateLanguage
         * @public
         * @param {Objet} languageSelected Langue à mettre à jour
         */

        $scope.updateLanguage = function (languageSelected) {
            if(languageManager.getCurrentLanguage().id != languageSelected.id)
            {
                toastManager.showSimpleToast($filter('translate')('LANGUAGE_CHANGED') + ' : ' + languageSelected.name, 'top right');
                $scope.currentLanguage = languageSelected;
                languageManager.setCurrentLanguage(languageSelected);
                $scope.isLanguagesList = false;
            }
        };

        /**
         * Prévient l'application que le header est chargé
         * @public
         */

        $scope.$on('$viewContentLoaded', function () {
            $rootScope.headerIsLoaded = true;
        });

    }]);
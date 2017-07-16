/**
 * Force un "bon" codage
 */

'use strict';

/**
 * Déclaration du module du header
 */

var headerApp = angular.module('headerApp', []);

/**
 * Configuration du module du header
 */

headerApp.config([
    '$translateProvider', 
    function(
        $translateProvider) {
    
    /**
     * Dictionnaire Français
     */

    $translateProvider.translations('fr', {
        LANGUAGE_CHANGED: 'Langue changée',
        REGISTER_TOOLTIP: 'Inscription',
        LOGIN_TOOLTIP: 'Connexion'
    });

    /**
     * Dictionnaire Anglais
     */

    $translateProvider.translations('en', {
        LANGUAGE_CHANGED: 'Language changed',
        REGISTER_TOOLTIP: 'Register',
        LOGIN_TOOLTIP: 'Login'
    });
}]);

/**
 * Contrôleur du module du header
 */

headerApp.controller('headerController', [
    '$scope',
    '$locale',
    '$filter',
    '$rootScope',
    'tmhDynamicLocale',
    'languageManager',
    'toastManager',
    function (
        $scope, 
        $locale,
        $filter,
        $rootScope,
        tmhDynamicLocale, 
        languageManager,
        toastManager) {

        /**
         * Activité du menu des langues
         * @public
         */

        $scope.isLanguagesList = false;

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
         * Récupère la langue actuelle
         * @function currentLanguage
         * @public
         * @return Langue actuelle
         */

        $scope.currentLanguage = languageManager.getCurrentLanguage();

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

        $scope.$on('$viewContentLoaded', function () {
            $rootScope.headerIsLoaded = true;
        });

    }]);
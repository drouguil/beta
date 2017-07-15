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
        LANGUAGE_CHANGED: 'Langue changée'
    });

    /**
     * Dictionnaire Anglais
     */

    $translateProvider.translations('en', {
        LANGUAGE_CHANGED: 'Language changed'
    });
}]);

/**
 * Contrôleur du module du header
 */

headerApp.controller('headerController', [
    '$scope',
    '$locale',
    '$filter',
    'tmhDynamicLocale',
    'languageManager',
    'toastManager',
    function (
        $scope, 
        $locale,
        $filter,
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
         * Récupère l'identifiant de la langue actuelle
         * @function currentLanguageId
         * @public
         * @return Identifiant de la langue actuelle
         */

        $scope.currentLanguageId = function() {
            return languageManager.getCurrentLanguageId();
        };

        /**
         * Met à jour la langue actuelle
         * @function updateLanguage
         * @public
         * @param {Objet} languageSelected Langue à mettre à jour
         */

        $scope.updateLanguage = function (languageSelected) {
            if(languageManager.getCurrentLanguageId() != languageSelected.id)
            {
                toastManager.showSimpleToast($filter('translate')('LANGUAGE_CHANGED') + ' : ' + languageSelected.name, 'top right');
                languageManager.setCurrentLanguageId(languageSelected.id);
            }
        };
    }]);
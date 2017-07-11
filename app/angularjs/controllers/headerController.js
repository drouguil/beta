'use strict';
var headerApp = angular.module('headerApp', []);

headerApp.config([
    '$translateProvider', 
    function($translateProvider) {
    
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
         * Activité du menu des langages
         */

        $scope.isLanguagesList = false;

        /**
         * Affiche ou cache le menu des langages
         */

        $scope.displayLanguageList = function(value) {
            if(value)
            {
                toastManager.hideToast();
            }
            $scope.isLanguagesList = value;
        }

        /**
         * Retourne la liste des langages
         */

        $scope.languages = function() {
            return languageManager.getLanguages();
        };

        /**
         * Retourne l'identifiant du langage actuel
         */

        $scope.currentLanguageId = function() {
            return languageManager.getCurrentLanguageId();
        };

        /**
         * Mise à jour du langage
         */

        $scope.updateLanguage = function (languageSelected) {
            toastManager.showSimpleToast($filter('translate')('LANGUAGE_CHANGED') + ' : ' + languageSelected.name, 'top right');
            languageManager.setCurrentLanguageId(languageSelected.id);
        }
    }]);
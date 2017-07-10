'use strict';
var headerApp = angular.module('headerApp', []);

headerApp.controller('headerController', [
    '$scope',
    '$locale',
    'tmhDynamicLocale',
    'languageManager',
    function (
        $scope, 
        $locale, 
        tmhDynamicLocale, 
        languageManager) {

        /**
         * Activité du menu des langages
         */

        $scope.isLanguagesList = false;

        /**
         * Retourne si le menu des langages est actif 
         */

        $scope.displayLanguageList = function(value) {
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
            languageManager.setCurrentLanguageId(languageSelected.id);
        }
    }]);
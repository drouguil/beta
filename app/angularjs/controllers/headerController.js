'use strict';
var headerApp = angular.module('headerApp', []);

headerApp.controller('headerController', [
    '$scope',
    '$locale',
    'tmhDynamicLocale',
    'languageManager',
    function ($scope, $locale, tmhDynamicLocale, languageManager) {

        $scope.languages = [
            {
                'name': 'Français',
                'id': 'fr'
            },
            {
                'name': 'English',
                'id': 'en'
            }];

        $scope.languageSelected = $scope.languages[0];

        $scope.updateLanguage = function (languageSelected) {
            languageManager.changeLanguage(languageSelected.id);
        }
    }]);
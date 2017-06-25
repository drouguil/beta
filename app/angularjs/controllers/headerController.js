var headerApp = angular.module('headerApp', []);

headerApp.controller('headerController', ['$scope', '$locale', 'tmhDynamicLocale', function($scope, $locale, tmhDynamicLocale){
    $scope.test = 'HEADER';
    $scope.languages = [
        {
            'name':'Français',
            'id':'fr'
        },
        {
            'name':'English',
            'id':'en'
        }];

    tmhDynamicLocale.set('fr');

    $scope.languageSelected = $scope.languages[0];

    $scope.updateLanguage = function(languageSelected){
        tmhDynamicLocale.set(languageSelected.id);
    }
}]);
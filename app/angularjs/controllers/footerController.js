'use strict';
var footerApp = angular.module('footerApp', []);

footerApp.config(['$translateProvider', function($translateProvider) {
    
    /**
     * Dictionnaire Français
     */

    $translateProvider.translations('fr', {
        PURPOSE_HELP: 'Apporter son aide au site',
        REPORT_BUG: 'Reporter un bug',
        PURPOSE_UPGRADE: 'Proposer une amélioration',
        PURPOSE_PICTURE: 'Proposer un dessin/logo/image',
        CONTACT_US: 'Nous contacter',
    });

    /**
     * Dictionnaire Anglais
     */

    $translateProvider.translations('en', {
        PURPOSE_HELP: 'Purpose help to website',
        REPORT_BUG: 'Report a bug',
        PURPOSE_UPGRADE: 'Purpose an upgrade',
        PURPOSE_PICTURE: 'Purpose a drawing/logo/picture',
        CONTACT_US: 'Contact us',
    });
    
    $translateProvider.preferredLanguage('fr');
}]);

footerApp.controller('footerController', ['$scope', '$translate', function ($scope, $translate) {
    
}]);
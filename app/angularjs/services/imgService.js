/**
 * Force un "bon" codage
 */

'use strict';

/**
 * Déclaration du module du service de gestion des images
 */

var imgService = angular.module('imgService', []);

/**
 * Service de gestion des images
 */

imgService.service('imgManager', [
    '$rootScope',
    'appConfig',
    function (
        $rootScope,
        appConfig
    ) {

        var self = this;

        /**
         * Modifie l'image de fond
         * @function initBackgroundImage
         * @param idView Identifiant de la vue
         */

        self.initBackgroundImage = function (idView) {
            var src = angular.element(document.querySelector('#' + idView + '-view')).css('background-image', "url('" + appConfig.paths.imgBackgrounds + idView + "_background.jpg')");
            
            var img = new Image();
            img.src = appConfig.paths.imgBackgrounds + idView + '_background.jpg';
            img.onload = function() {
                $rootScope.backgroundIsLoaded = true;
                console.log('backgroundIsLoaded');
                if(!$rootScope.$$phase) {
                    $rootScope.$digest();
                }
            }
            if (img.complete) img.onload();
        }

    }]);
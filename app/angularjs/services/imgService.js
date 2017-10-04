/**
 * Force un "bon" codage
 */

'use strict';

/**
 * Déclaration du module du service de gestion des images
 */

let imgService = angular.module('imgService', []);

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

        /**
         * Référence sur le service
         * @private
         */

        var self = this;

        /**
         * Modifie l'image de fond
         * @function initBackgroundImage
         * @public
         * @param idView Identifiant de la vue
         */

        self.initBackgroundImage = function (idView) {
            if(idView) {
                let src = angular.element(document.querySelector('#' + idView + '-view')).css('background-image', "url('" + appConfig.paths.imgBackgrounds + idView + "_background.jpg')");
                
                let img = new Image();
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
            else {
                console.error('L\'identifiant de la vue est manquant');
            }
            
        }

    }]);
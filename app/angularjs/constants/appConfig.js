/**
 * Force un "bon" codage
 */

'use strict';

/**
 * Déclaration du module des paramètres de configuration de l'application
 */

var appConfig = angular.module('appConfig', []);

/**
 * Paramètres de configuration de l'application
 */

appConfig.constant('appConfig', {
    paths: {
        app : './app/',
            angularjs : './app/angularjs/',
                controllers : './app/angularjs/controllers/',
                    dialogsControllers : './app/angularjs/controllers/dialogs/',
                    globalsControllers : './app/angularjs/controllers/globals/',
                    viewsControllers : './app/angularjs/controllers/views/',
                i18n : './app/angularjs/i18n/',
                services : './app/angularjs/services/',
                constants : './app/angularjs/constants/',
            assets : './app/assets/',
                css : './app/assets/css/',
                fonts : './app/assets/fonts/',
                img : './app/assets/img/',
                    imgBackgrounds : './app/assets/img/backgrounds/',
                    imgButtons : './app/assets/img/buttons/',
                    imgIcons : './app/assets/img/icons/',
                    imgPartners : './app/assets/img/partners/',
                    imgPortals : './app/assets/img/portals/',
                svg : './app/assets/svg/',
                    svgCountries : './app/assets/svg/countries/',
                    svgSocialNetworks : './app/assets/svg/socialNetworks/',
            views : './app/views/',
    },
    localStorage : {
        languageName : 'language'
    },
    sessionStorage : {

    }
});
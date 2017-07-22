/**
 * Force un "bon" codage
 */

'use strict';

/**
 * Déclaration du module du service de gestion de la popin d'aide
 */

var helpService = angular.module('helpService', []);

/**
 * Service de gestion de la popin d'aide
 */

helpService.service('helpManager', [
    function () {

        this.content =  {

        };

        this.getContent = function () {
            return this.content;
        }

        this.setContent = function (content) {
            this.content = content;
        }

    }]);
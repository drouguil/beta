/**
 * Force un "bon" codage
 */

'use strict';

/**
 * Déclaration du module du service de gestion des outils de développement
 */

let devToolsService = angular.module('devToolsService', []);

/**
 * Service de gestion des outils de développement
 */

devToolsService.service('devToolsManager', [
    '$interval',
    function (
        $interval
    ) {

        /**
         * Référence sur le service
         * @private
         */

        var self = this;

        /**
         * Timer
         * @public
         */

        self.timer = 0;

        /**
         * Lance le timer
         * @function
         * @public
         */

        self.startTimer = function () {
            self.timer = 0;
        };

        /**
         * Incrémentation du timeur
         * @function runTimer
         * @private
         */
        
        var runTimer = $interval(function () {
            self.timer++;
        }, 100);

        /**
         * Stop le timer
         * @function
         * @public
         */

        self.stopTimer = function () {
            $interval.cancel(self.startTimer);
            console.log('Timer', self.timer);
        }

    }]);
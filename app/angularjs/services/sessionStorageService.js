/**
 * Force un "bon" codage
 */

'use strict';

/**
 * Déclaration du module du service de gestion du sessionStorage
 */

var sessionStorageService = angular.module('sessionStorageService', []);

/**
 * Service de gestion du sessionStorage
 */

sessionStorageService.service('sessionStorageManager', [
    '$window',
    function (
        $window) {

        var self = this;

        /**
         * Récupère l'objet du sessionStorage associé à la clef
         * @function getObj
         * @public
         * @param {Caractères} key Clef
         * @return Objet du sessionStorage associé à la clef
         */

        self.getObj = function (key) {
            if (key) {
                return JSON.parse($window.sessionStorage.getItem(key));
            }
            else {
                console.error('La clef n\'est pas définie');
            }
        };

        /**
         * Modifie/Ajoute l'objet du sessionStorage associé à la clef
         * @function setObj
         * @public
         * @param {Caractères} key Clef
         * @param {Objet} obj Objet
         */

        self.setObj = function (key, obj) {
            if (key) {
                if (obj) {
                    $window.sessionStorage.setItem(key, JSON.stringify(obj));
                }
                else {
                    console.error('L\'objet n\'est pas défini');
                }
            }
            else {
                console.error('La clef n\'est pas définie');
            }
        };

        /**
         * Vide le sessionStorage
         * @function clear
         * @public
         */

        self.clear = function () {
            $window.sessionStorage.clear();
        };

    }]);
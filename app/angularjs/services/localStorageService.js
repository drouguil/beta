/**
 * Force un "bon" codage
 */

'use strict';

/**
 * Déclaration du module du service de gestion du localStorage
 */

var localStorageService = angular.module('localStorageService', []);

/**
 * Service de gestion du localStorage
 */

localStorageService.service('localStorageManager', [
    '$window',
    function (
        $window) {

        /**
         * Récupère l'objet du localStorage associé à la clef
         * @function getObj
         * @public
         * @param {Caractères} key Clef
         * @return Objet du localStorage associé à la clef
         */

        this.getObj = function (key) {
            if (key) {
                return JSON.parse($window.localStorage.getItem(key));
            }
            else {
                console.error('La clef n\'est pas définie');
            }
        };

        /**
         * Modifie/Ajoute l'objet du localStorage associé à la clef
         * @function setObj
         * @public
         * @param {Caractères} key Clef
         * @param {Objet} obj Objet
         */

        this.setObj = function (key, obj) {
            if (key) {
                if (obj) {
                    $window.localStorage.setItem(key, JSON.stringify(obj));
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
         * Vide le localStorage
         */

        this.clear = function () {
            $window.localStorage.clear();
        };

    }]);
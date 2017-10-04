/**
 * Force un "bon" codage
 */

'use strict';

/**
 * Déclaration du module de la directive imageOnLoad
 */

let imageOnLoadDirective = angular.module('imageOnLoadDirective', []);

/**
 * Directive imageOnLoad
 */

imageOnLoadDirective.directive('imageonload', function() {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.bind('load', function() {
                    scope.$apply(attrs.imageonload);
                });
            }
        };
    })
'use strict';
var toastService = angular.module('toastService', []);

toastService.service('toastManager', [
    '$mdToast', 
    function ($mdToast) {

    this.showSimpleToast = function(text, position, delay) {
        if(!delay)
        {
            delay = 3000;
        }
        if(!position)
        {
            position = 'top right';
        }
        $mdToast.show(
        $mdToast.simple()
            .textContent(text)
            .position(position)
            .hideDelay(delay)
        );
    };

    this.hideToast = function() {
        $mdToast.hide();
    }

}]);
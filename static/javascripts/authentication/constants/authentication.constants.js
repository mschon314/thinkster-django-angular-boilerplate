(function () {
    'use strict';

    angular
        .module('thinkster.authentication.constants')
        .constant('messages', function () {
            var login =  {
                failed: 'invalid username or password'
            };

            return login;
        });
});
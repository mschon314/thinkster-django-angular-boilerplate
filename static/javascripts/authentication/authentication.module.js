(function () {
    'use strict';

    angular
        .module('thinkster.authentication', [
            'thinkster.authentication.controllers',
            'thinkster.authentication.services',
            'thinkster.authentication.constants'
        ]);

    angular
        .module('thinkster.authentication.controllers', []);

    angular
        .module('thinkster.authentication.services', ['ngCookies']);

    angular
        .module('thinkster.authentication.constants', []);
})();

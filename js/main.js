(function(global, toastr, $, application) {
    'use strict';
    application.init();

    toastr.options = {
        'debug': false,
        'positionClass': 'toast-bottom-right',
        'onclick': null,
        'fadeIn': 300,
        'fadeOut': 1000,
        'timeOut': 2000,
        'extendedTimeOut': 2000
    };
    toastr.info('Admin Panel Active');
})(window, toastr, jQuery, app);
(function(global, toastr, $) {
    'use strict';
    var $headerMenu = $('.header-menu');
    var $menuItem = $('.menu-list_item, .logo_main');
    var $pushMenu = $('.push-menu, .header-top , .admin-section');
    var $searchBox = $('.menu-list_search');
    var $searchAside = $('.search-aside');
    var $datetime = $(".datetime");

    $datetime.prop('disabled', true);
    var toggle = function() {
        $headerMenu.toggleClass('fa-bar fa-list-ul');
        $menuItem.toggle();
        $pushMenu.toggleClass('toggle');
    }

    $headerMenu.click(function() {
        toggle();
    });

    $searchBox.click(function() {
        $searchAside.toggle();
    });

})(window, toastr, jQuery);
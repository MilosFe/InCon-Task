var app = (function(global, toastr, $) {
    'use strict';
    var init = function() {
        var $headerMenu = $('.header-menu');
        var $menuItem = $('.menu-list_item, .logo-text');
        var $pushMenu = $('.push-menu, .header-top , .admin-section');
        var $searchBox = $('.menu-list_search');
        var $searchAside = $('.search-aside');
        var $datetime = $('.datetime');
        var $radioYear = $('.radio-year');
        var $radioInterval = $('.radio-interval');

        $datetime.prop('disabled', true);
        $radioYear.on('change', function() {
            $('.year-options').attr('disabled', false);
            $datetime.prop('disabled', true);
        });

        $radioInterval.on('change', function() {
            $('.year-options').attr('disabled', true);
            $datetime.prop('disabled', false)
        })

        var toggleLayout = function() {
            $headerMenu.toggleClass('fa-bar fa-list-ul');
            $menuItem.toggle();
            $pushMenu.toggleClass('toggle');
        };

        $headerMenu.click(function() {
            toggleLayout();
        });

        $searchBox.click(function() {
            $searchBox.children().toggleClass('fa-columns fa-times');
            $searchAside.toggle();
        });
    }

    return {
        init: init
    }

})(window, toastr, jQuery);
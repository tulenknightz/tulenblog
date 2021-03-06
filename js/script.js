$(document).ready(function () {
    var showMenu = function () {
        $('.left-slidebar').css('left', '0');
        $('.cover').fadeIn();
        $('#btn-hidemenu').css('display', 'block');
    }

    var hideMenu = function () {
        $('.left-slidebar').css('left', '-100%');
        $('.cover').fadeOut();
    }
    
    var home = "https://tulenknightz.github.io/tulenblog/";

    $('#btn-showmenu').on('click', showMenu);
    $('#btn-hidemenu').on('click', hideMenu);
    $('.cover').on('click', hideMenu);

    $('.menu li').on('click', function () {
        if ($(this).attr('data-active') != 'true') {
            $('.menu li').each(function () {
                $(this).attr('data-active', 'false');
            });
            $(this).attr('data-active', 'true');
            $('.content').css('display', 'hide');
            $.ajax(home+"pages/" + $(this).attr('class') + ".html", {
                success: function (response) {
                    $('.content').fadeOut(500);
                    $('.container-fluid').html(response).slideDown();
                    
                }
                
            })
            if($('#btn-showmenu').css('display')=='block') hideMenu();
        }
        

    });

})

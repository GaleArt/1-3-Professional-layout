function showMenu() {
    document.getElementById('menu').style.display = "block";
 }

function closeMenu() {
    document.getElementById('menu').style.display = "none";
}

/* Тест выделения в меню */

$(document).ready(function(){
    $('#gmenu > ul > li >a').each(function () {
        if($(this).attr('href') == location.href) $(this).addClass('Selected');
    });
});
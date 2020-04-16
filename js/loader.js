$(document).ready(function(){
    $('.modal').modal();
    $('.parallax').parallax();
    $('.sidenav').sidenav();
    $(".slider").slider({full_width: true});
    $('.parallax').parallax();
    $(".myfaq").carousel({
        numVisible: 5,
        shift: 55,
        padding: 55
    })
});

function toggleModal(){
    var instance = M.Modal.getInstance($(''));
    instance.open();
}
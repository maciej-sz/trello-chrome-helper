
activateModule(function () {

    $('.card-short-id').filter(function(){
        return !$(this).hasClass('card-short-id-show-right')
    }).each(function(){
        $(this).addClass('card-short-id-show-right')
    })


})
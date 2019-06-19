var build = function () {
    $('.card-short-id').filter(function(){
        console.log($(this))
        return !$(this).hasClass('card-number')
    }).each(function(){
        $(this).addClass('card-number')
    })
};

$(build)
$(function(){
    // let timeouts = [1000, 2500, 5000, 10000]
    let timeouts = [2500]
    for (let i = 0; i < timeouts.length; i++) {
        setTimeout(build, timeouts[i])
    }
})
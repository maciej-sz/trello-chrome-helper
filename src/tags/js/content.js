
activateModule(function(){
    $('.list-card').each(function(){
        $(this).find('.list-card-title').each(function(){

            let children = $(this).children().detach()

            let title = extractTitleTags($(this).text())
            $(this).text(title.value)

            children.appendTo($(this))
            // $(this).appendChild(children)
        })

    })
})

let extractTitleTags = function(title){
    let retval = {
        value: '',
        tags: []
    }
    retval.value = title.replace(/(^|\s)(#[a-z\d-]+)/ig, function(a, b, c){
        console.log(a)
        console.log(b)
        console.log(c)
        return ''
    })
    console.log(retval.value)
    return retval
}
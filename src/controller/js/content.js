
let activeModules = []
function activateModule(fn) {
    activeModules.push(fn)
}

$(function(){
    activeModules.forEach(function(fn){
        fn()
        // let timeouts = [1000, 2500, 5000, 10000]
        let timeouts = [2500]
        for (let i = 0; i < timeouts.length; i++) {
            setTimeout(fn, timeouts[i])
        }
    })
})

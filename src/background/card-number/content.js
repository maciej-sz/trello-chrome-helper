var build = function () {
    var shortIds = document.querySelectorAll(".card-short-id")
    for (var i = 0; i < shortIds.length; i++) {
        console.log(shortIds[i].innerHTML)
        shortIds[i].style.display = 'inline'
        shortIds[i].style.float = 'right'
        shortIds[i].style.width = '40px'
        shortIds[i].style.fontWeight = 'bold'
        shortIds[i].style.textAlign = 'right'
        // shortIds[i].innerHTML += " "
    }
};
window.addEventListener("load", build)
window.addEventListener("load", function(){
    var timeouts = [1000, 2500, 5000, 10000]
    for (var i = 0; i < timeouts.length; i++) {
        setTimeout(build, timeouts[i])
    }
});

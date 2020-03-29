$(document).ready(function () {
    var string = "WEB DEVELOPER";
    var i = 0;
    if (i < string.length) {
        setInterval(function () {
            document.querySelector(".changeproffesion").innerHTML += string.charAt(i);
            i++;
        }, 40);
    }
});
//2nd
$(document).ready(function () {
    setTimeout(function () {

        var string = "UI/UX DESIGNER";
        var i = 0;
        document.querySelector(".changeproffesion").innerHTML = "";
        if (i < string.length) {
            setInterval(function () {
                document.querySelector(".changeproffesion").innerHTML += string.charAt(
                    i);
                i++;
            }, 40);
        }

    }, 2000);
});
//3rd
$(document).ready(function () {
    setTimeout(function () {

        var string = "CREATIVE DIRECTOR";
        var i = 0;
        document.querySelector(".changeproffesion").innerHTML = "";
        if (i < string.length) {
            setInterval(function () {
                document.querySelector(".changeproffesion").innerHTML += string.charAt(
                    i);
                i++;
            }, 40);
        }

    }, 4000);
});

//portfolio 
$(document).ready(function(){
    $(".portfolio-btn").each(function(){
        $(this).click(function(){
            var state = $(this).attr('state');
            $(".all").each(function(){
                $(this).hide();
                $("."+state).each(function(){
                    $(this).show(300);
                });
            });
        })
    })
})
var $box_left = parseInt($(".box").css("left"))
var $box_top = parseInt($(".box").css("top"))
var width = window.innerWidth - 70
var height = window.innerHeight
var counter = 0

function animation () {
    $(".box").stop()
    counter++
    $box_top = parseInt($(".box").css("top"))
    move_to_start()
    nelson_haha()
    if ($box_left <= 0) {
        $(".box").animate({
            left: width,
            top: "+=60px"
        }, 1000, repeat);
    }
}
function repeat() {
    $("#doh").get(0).play()
    $(".box").animate({
        left: "0",
        top: "+=60px"
    }, 1000, animation);
}
function move_to_start() {
    if($box_top >= height) {
        $(".box").animate({
            left: "0",
            top: "-30"
        }, 0, animation);
    }
}
function nelson_haha() {
    if (counter % 4 === 0) {
        $('.nelson').css("display", "block")
        $("#ha_ha").get(0).play()
        $('.nelson').delay(2000).show().fadeOut('slow');
    }
}
$(".box").click(animation)



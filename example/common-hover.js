/* eslint-disable */

// this example is for js--common isuues in lists

$(function() {
    $(".js--hover").hover(
        function () {
            // console.log('add class');
            var classes = $(this).attr('class').split(' ');
            var bemClass = classes[0];
            $(this).addClass(bemClass + '--hover');
        },
        function () {
            // console.log('remove class');
            var classes = $(this).attr('class').split(' ');
            var bemClass = classes[0];
            $(this).removeClass(bemClass + '--hover');
        }
    );
});
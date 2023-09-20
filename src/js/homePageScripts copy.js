// Preloader
$(function() {
    $('#preload-homepage').click(function() {
        $(this)
            .fadeOut('300')
            .remove();
    });
    if (!sessionStorage.getItem('homePagePreloader')) {
        sessionStorage.setItem('homePagePreloader', true);
        $('#preload-homepage').css('display', 'block');
        setTimeout(function() {
            $('#preload-homepage').fadeOut();
        }, 2000);
        setTimeout(function() {
            $('#preload-homepage').remove();
        }, 2500);
    } else {
        $('#preload-homepage').css('display', 'none');
    }
});

//Desktop

$(function() {
    var card = $('.card');
    card.on('mousemove', function(e) {
        // get mouse pos
        var x = e.clientX - $(this).offset().left + $(window).scrollLeft();
        var y = e.clientY - $(this).offset().top + $(window).scrollTop();
        // update vals
        var rY = map(x, 0, $(this).width(), -17, 17);
        var rX = map(y, 0, $(this).height(), -17, 17);
        // apply
        $(this)
            .children('.image')
            .css(
                'transform',
                'rotateY(' + rY + 'deg)' + ' ' + 'rotateX(' + -rX + 'deg)',
            );
    });
    // return vals
    function map(x, in_min, in_max, out_min, out_max) {
        return ((x - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
    }
});

//Mobile
let is_running = false;
$(document).on('click touchstart', function(event) {
    // Request permission for iOS 13+ devices
    if (
        DeviceMotionEvent &&
        typeof DeviceMotionEvent.requestPermission === 'function'
    ) {
        DeviceMotionEvent.requestPermission();
    }

    if (is_running) {
        console.log('Request permission for iOS 13+ devices');
    } else {
        window.ondevicemotion = function(event) {
            // get mouse pos
            var x =
            event.accelerationIncludingGravity.x;
            var y =
            event.accelerationIncludingGravity.y;

            xFixed = (Math.round(x * 10) / 10).toFixed();
            yFixed = (Math.round(y * 10) / 10).toFixed();

            xGyro = 500 + xFixed * 20;
            yGyro = 100 + yFixed * 4;

            var rY = map(xGyro, 0, $('.card').width(), -17, 17);
            var rX = map(yGyro, 0, $('.card').height(), -17, 17);


                $('.card')
                .children('.image')
                .css(
                    'transform',
                    'rotateY(' + rY + 'deg)' + ' ' + 'rotateX(' + -rX + 'deg)',
                );

            };
        // return vals
        function map(x, in_min, in_max, out_min, out_max) {
            return (
                ((x - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
            );
        }
    };
});

// let is_running = false;
// $(document).on('click touchstart', function () {
// 	if (
// 		DeviceMotionEvent &&
// 		typeof DeviceMotionEvent.requestPermission === "function"
// 	) {
// 		DeviceMotionEvent.requestPermission();
// 	}
// 	if (is_running) {
// 		console.log('running1')
// 	} else {
// 		console.log('running2')
// 		is_running = true;
// 	}
// });

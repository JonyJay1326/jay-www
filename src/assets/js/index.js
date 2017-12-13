$(function () {
    //  1280*360
    $("#imgBar").slider({
        imgs: [
            "http://image.lovefay1994.com/banner/banner01.jpg",
            "http://image.lovefay1994.com/banner/banner02.jpg",       
            "http://images.cnitblog.com/blog/708426/201501/100602118284450.jpg"
        ],
        scale: 128 / 36,
        border: true,
        delay: 2000,
        x: 10,
        y: 3
    });
})
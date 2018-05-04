$("#info").html('jq loaded')
var $player = $("#my-video");
$player.attr({
    "width":$(window).width(),
    "height":$(window).width()*54/96
})

require.config({
    paths: {
        "jquery": "https://ajax.aspnetcdn.com/ajax/jQuery/jquery-2.1.1.min",
        "amp":"https://amp.azure.net/libs/amp/2.1.3/azuremediaplayer.min",
        "videojs":"video.min"
    },
    shim:{
        "amp":{
            deps:['css!//amp.azure.net/libs/amp/2.1.3/skins/amp-default/azuremediaplayer.min.css'],
            exports:"amp"
        },
        "videojs":{
            deps:['css!video-js.min.css'],
            exports:"videojs"
        }
    },
    map:{
        '*':{
            'css':'css.min'
        }
    }
});

require(['jquery'],function($){


    if(isIphone()){
        $("#info").html('iphone')
        $player.addClass('video-js vjs-big-play-centered')
        require(['videojs'],function(videojs){

        })

    }
    else{
        $("#info").html('other')
        $player.addClass('azuremediaplayer amp-default-skin amp-big-play-centered')
        require(['amp'],function(amp){
            $("#info").html('ready!go!')
            var myPlayer = amp('my-video', { /* Options */
                    nativeControlsForTouch: !1,
                    techOrder: ["azureHtml5JS", "flashSS", "html5FairPlayHLS", "silverlightSS", "html5"],
                    fluid: !1,
                    autoplay: false,
                    controls: true
                }, function() {

                    console.log('Good to go!');
                    // add an event listener
                    this.addEventListener('ended', function() {
                        console.log('Finished!');
                    })
                }
            );

        })
    }









    function isIphoneWechat() {
        var ua = navigator.userAgent.toLowerCase();
        return (/micromessenger/i).test(ua) && (/iphone/).test(ua);
    }
    function isIphone() {
        var ua = navigator.userAgent.toLowerCase();
        return (/iphone/).test(ua);
    }


})
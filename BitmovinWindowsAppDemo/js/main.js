window.onload = function () {
    setupPlayer();
};

function setupPlayer() {
    var conf = {
        key: "<YOUR_PLAYER_KEY>",
        source: {
            // AVC Stream
            //dash: "https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd",
            // HEVC Stream
            dash : "https://bitmovin-a.akamaihd.net/content/multi-codec/hevc/stream.mpd"
        },
        playback: {
            autoplay: true
        },
        tweaks: {
            max_buffer_level: 30,
            file_protocol: true
        }
    };

    window.player = bitmovin.player("player");
    player.setup(conf).then(function (value) {
        // Success
        console.log("Successfully created bitmovin player instance");
    }, function (reason) {
        // Error!
        console.log("Error while creating bitmovin player instance");
    });
    player.addEventHandler(bitmovin.player.EVENT.ON_WARNING, function (data) {
        console.log("On Warning: " + JSON.stringify(data));
    });

    player.addEventHandler(bitmovin.player.EVENT.ON_ERROR, function (data) {
        console.log("On Error: " + JSON.stringify(data));
    });
}
window.onload = function () {
    setupPlayer();
};

function setupPlayer() {

    const config = {
        key: '<YOUR_PLAYER_KEY>',
        playback: {
            autoplay: true
        },
        ui: false,
        logs: {
            level: 'debug'
        }
    };

    var container = document.getElementById('player');
    var player = new bitmovin.player.Player(container, config);
    var uiManager = new bitmovin.playerui.UIFactory.buildDefaultTvUI(player);

    var source = {
        dash: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd',
        hls: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
        progressive:
            'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/MI201109210084_mpeg-4_hd_high_1080p25_10mbits.mp4',
        poster: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/poster.jpg'
    };

    player.load(source).then(
        function (player) {
            console.log('Successfully created Bitmovin Player instance');
        },
        function (reason) {
            console.log('Error while creating Bitmovin Player instance');
        }
    );

    player.on('warning', function (data) {
        console.log("On Warning: " + JSON.stringify(data));
    });

    player.on('error', function (data) {
        console.log("On Error: " + JSON.stringify(data));
    });
}
# bitmovin-player-windows-app-demo
Sample app for how to use the Bitmovin Web SDK in Universal Windows Platform (UWP) apps

### Using the Sample App on Windows 10 
1. Download [Visual Studio 2017](https://www.visualstudio.com/downloads/)
2. Open the sample app with Visual Studio
3. Input your player key into `main.js`
4. Allowlist the default package name `windows.sample.bitmovin.com` on `https://dashboard.bitmovin.com/player`. You can change this package name in `package.appxmanifest`
5. Run/debug the sample app on your `Local Machine`

## Using the Sample App on Xbox
1. Put your Xbox One into development mode. This guide was useful: https://docs.microsoft.com/en-us/windows/uwp/xbox-apps/devkit-activation
2. Follow the steps 1-4 above for "Using the Sample App on Windows 10"
3. Run/debug on your `Remote Machine`. Follow this guide to see how to deploy to your Xbox https://docs.microsoft.com/en-us/windows/uwp/xbox-apps/development-environment-setup


### Notes for developing your own app
 - Make sure to enable `file_protocol` in the `tweaks` section of your config.
 - Update the package name in `package.appxmanifest`. It must be in URL format, for example `windows.sample.bitmovin.com`
 - Allowlist the package name on `https://dashboard.bitmovin.com/player`

```
var conf = {
	key : "<YOUR_PLAYER_KEY>",
	source : {
		dash: "https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd"
	},
	playback : {
		autoplay : true
	},
	tweaks : {
		file_protocol : true,
	}
};
```

### Additional Documentation

Complete API documentation is available at https://developer.bitmovin.com/hc/en-us

Other demo applications https://bitmovin.com/demo/

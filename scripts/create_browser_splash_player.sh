echo off
clear
echo Creating Browser Splash Player...
cp ../code/js/target/js/bundle.js ../bin/browser/splashjs-lib.js
cp ../code/js/target/js/core-classes.js ../bin/browser/core-classes.js
cp ../libs/js/babel.min.js ../bin/browser/babel.min.js
cp ../code/js/target/js/index.html ../bin/browser/index.html
cd ../bin/browser
jar cfe ../BrowserSplashPlayer.jar splashjs.player.Player *
cd ../../scripts

echo on
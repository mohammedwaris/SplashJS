@echo off
cls
echo Creating Browser Splash Player...
copy ..\code\js\target\js\bundle.js ..\bin\browser\splashjs-lib.js
copy ..\code\js\target\js\core-classes.js ..\bin\browser\core-classes.js
copy ..\libs\js\babel.min.js ..\bin\browser\babel.min.js
copy ..\code\js\target\js\index.html ..\bin\browser\index.html
cd ..\bin\browser
jar cfe ../BrowserSplashPlayer.jar splashjs.player.Player *
cd ../../scripts

@echo on
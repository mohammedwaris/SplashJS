@echo off
cls
echo Creating Desktop Splash Player...
copy ..\code\js\target\js\bundle.js ..\bin\desktop\splashjs-lib.js
copy ..\code\js\target\js\core-classes.js ..\bin\desktop\core-classes.js
copy ..\code\js\target\js\desktop-classes.js ..\bin\desktop\desktop-classes.js
copy ..\libs\js\babel.min.js ..\bin\desktop\babel.min.js
cd ../bin/desktop
jar cfe ../DesktopSplashPlayer.jar splashjs.player.DesktopPlayer *
cd ../../scripts

@echo on
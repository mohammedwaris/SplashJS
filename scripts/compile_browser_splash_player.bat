@echo off
cls
echo Compiling Browser Splash Player...
set JARS=jars/w3c-dom.jar;jars/json-simple-1.1.jar;jars/org.w3c.dom.svg-1.1.0.jar;jars/jetty-server-9.3.28.v20191105.jar;jars/jetty-http-9.3.28.v20191105.jar;jars/jetty-io-9.3.28.v20191105.jar;jars/jetty-util-9.3.28.v20191105.jar;
set OUTPUT_DIR=../bin/browser

set APPJSON=code/java/sdk/splashjs/sdk/AppJSON.java
set CONSOLE=code/java/sdk/splashjs/sdk/Console.java
set CONSOLE_WINDOW=code/java/sdk/splashjs/sdk/ConsoleWindow.java
set CONSOLE_IFACE=code/java/sdk/splashjs/sdk/iface/IConsole.java
set CONSOLE_WINDOW_IFACE=code/java/sdk/splashjs/sdk/iface/IConsoleWindow.java

set PLAYER=code/java/player/browser/splashjs/player/*.java
set PLAYER_COMPONENTS=code/java/player/browser/splashjs/player/components/*.java
set SDK_SERVER=code/java/sdk/splashjs/sdk/server/*.java

set ALL_PACKAGE=%SDK_SERVER% %APPJSON% %CONSOLE% %CONSOLE_WINDOW% %CONSOLE_IFACE% %CONSOLE_WINDOW_IFACE% %PLAYER% %PLAYER_COMPONENTS%


javac -classpath ".;%JARS%;%OUTPUT_DIR%" %ALL_PACKAGE% -d %OUTPUT_DIR%

@echo on
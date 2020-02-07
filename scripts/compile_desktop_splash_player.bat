@echo off
cls
echo Compiling Desktop Splash Player...
set JARS=../jars/w3c-dom.jar;../jars/json-simple-1.1.jar;../jars/org.w3c.dom.svg-1.1.0.jar;
set OUTPUT_DIR=../bin/desktop

set APPJSON=../code/java/sdk/splashjs/sdk/AppJSON.java
set CONSOLE=../code/java/sdk/splashjs/sdk/Console.java
set CONSOLE_WINDOW=../code/java/sdk/splashjs/sdk/ConsoleWindow.java
set CONSOLE_IFACE=../code/java/sdk/splashjs/sdk/iface/IConsole.java
set CONSOLE_WINDOW_IFACE=../code/java/sdk/splashjs/sdk/iface/IConsoleWindow.java

set DESKTOP_PLAYER=../code/java/player/desktop/splashjs/player/*.java
set DESKTOP_PLAYER_COMPONENTS=../code/java/player/desktop/splashjs/player/components/*.java
set STUBS_DISPLAY=../code/java/injectable/splashjs/display/desktop/stubs/*.java
set STUBS_FILESYSTEM=../code/java/injectable/splashjs/filesystem/desktop/stubs/*.java

set ALL_PACKAGE=%APPJSON% %CONSOLE% %CONSOLE_WINDOW% %CONSOLE_IFACE% %CONSOLE_WINDOW_IFACE% %DESKTOP_PLAYER% %DESKTOP_PLAYER_COMPONENTS% %STUBS_DISPLAY% %STUBS_FILESYSTEM%


javac -classpath ".;%JARS%;%OUTPUT_DIR%" %ALL_PACKAGE% -d %OUTPUT_DIR%

@echo on
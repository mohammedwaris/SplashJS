echo off
clear
echo Compiling Browser Splash Player...
export JARS=../jars/w3c-dom.jar:../jars/json-simple-1.1.jar:../jars/org.w3c.dom.svg-1.1.0.jar:../jars/jetty-server-9.3.28.v20191105.jar:../jars/jetty-http-9.3.28.v20191105.jar:../jars/jetty-io-9.3.28.v20191105.jar:../jars/jetty-util-9.3.28.v20191105.jar:
export OUTPUT_DIR=../bin/browser

export APPJSON=../code/java/sdk/splashjs/sdk/AppJSON.java
export CONSOLE=../code/java/sdk/splashjs/sdk/Console.java
export CONSOLE_WINDOW=../code/java/sdk/splashjs/sdk/ConsoleWindow.java
export CONSOLE_IFACE=../code/java/sdk/splashjs/sdk/iface/IConsole.java
export CONSOLE_WINDOW_IFACE=../code/java/sdk/splashjs/sdk/iface/IConsoleWindow.java

export PLAYER=../code/java/player/browser/splashjs/player/*.java
export PLAYER_COMPONENTS=../code/java/player/browser/splashjs/player/components/*.java
export SDK_SERVER=../code/java/sdk/splashjs/sdk/server/*.java

export ALL_PACKAGE="$SDK_SERVER $APPJSON $CONSOLE $CONSOLE_WINDOW $CONSOLE_IFACE $CONSOLE_WINDOW_IFACE $PLAYER $PLAYER_COMPONENTS"


javac -classpath ".:../bin/classes:$JARS:$OUTPUT_DIR" $ALL_PACKAGE -d $OUTPUT_DIR

echo on
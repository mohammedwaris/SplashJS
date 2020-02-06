@echo off
cls
echo Compiling NanoHTTPD...
set JARS=
set OUTPUT_DIR=../bin/classes

set P_1=../libs/java/nanohttpd/org/nanohttpd/protocols/http/content/*.java
set P_2=../libs/java/nanohttpd/org/nanohttpd/protocols/http/request/*.java
set P_3=../libs/java/nanohttpd/org/nanohttpd/protocols/http/response/*.java
set P_4=../libs/java/nanohttpd/org/nanohttpd/protocols/http/sockets/*.java
set P_5=../libs/java/nanohttpd/org/nanohttpd/protocols/http/tempfiles/*.java
set P_6=../libs/java/nanohttpd/org/nanohttpd/protocols/http/threading/*.java
set P_7=../libs/java/nanohttpd/org/nanohttpd/protocols/http/*.java
set P_8=../libs/java/nanohttpd/org/nanohttpd/util/*.java
set P_9=../libs/java/nanohttpd/org/nanohttpd/webserver/*.java

set ALL_PACKAGE=%P_1% %P_2% %P_3% %P_4% %P_5% %P_6% %P_7% %P_8% %P_9%

javac -classpath ".;%JARS%;%OUTPUT_DIR%" %ALL_PACKAGE% -d %OUTPUT_DIR%

@echo on
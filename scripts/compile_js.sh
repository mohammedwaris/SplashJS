export jars=../jars/jsweet-core-6.0.1.jar

export animation=../code/js/src/main/java/splashjs/animation/*.java
export animation_easing=../code/js/src/main/java/splashjs/animation/easing/*.java
export animation_iface=../code/js/src/main/java/splashjs/animation/iface/*.java

export application=../code/js/src/main/java/splashjs/application/*.java
export application_iface=../code/js/src/main/java/splashjs/application/iface/*.java

export controls=../code/js/src/main/java/splashjs/controls/*.java
export controls_iface=../code/js/src/main/java/splashjs/controls/iface/*.java

export display=../code/js/src/main/java/splashjs/display/*.java
export display_iface=../code/js/src/main/java/splashjs/display/iface/*.java

export def_js=../code/js/src/main/java/splashjs/def/js/*.java
export def_webrtc=../code/js/src/main/java/splashjs/def/webrtc/*.java

export events=../code/js/src/main/java/splashjs/events/*.java
export events_iface=../code/js/src/main/java/splashjs/events/iface/*.java

export filters=../code/js/src/main/java/splashjs/filters/*.java
export filters_iface=../code/js/src/main/java/splashjs/filters/iface/*.java

export geom=../code/js/src/main/java/splashjs/geom/*.java
export geom_iface=../code/js/src/main/java/splashjs/geom/iface/*.java

export lang=../code/js/src/main/java/splashjs/lang/*.java
export lang_iface=../code/js/src/main/java/splashjs/lang/iface/*.java


export media=../code/js/src/main/java/splashjs/media/*.java
export media_iface=../code/js/src/main/java/splashjs/media/iface/*.java


export net=../code/js/src/main/java/splashjs/net/*.java
export net_iface=../code/js/src/main/java/splashjs/net/iface/*.java


export permissions=../code/js/src/main/java/splashjs/permissions/*.java
export permissions_iface=../code/js/src/main/java/splashjs/permissions/*.java


export text=../code/js/src/main/java/splashjs/text/*.java
export text_iface=../code/js/src/main/java/splashjs/text/iface/*.java


export ui=../code/js/src/main/java/splashjs/ui/*.java
export ui_iface=../code/js/src/main/java/splashjs/ui/iface/*.java


export utils=../code/js/src/main/java/splashjs/utils/*.java
export utils_iface=../code/js/src/main/java/splashjs/utils/iface/*.java

export splashjs=../code/js/src/main/java/splashjs/*.java
export splashjs_iface=../code/js/src/main/java/splashjs/iface/*.java

export render=../code/js/src/main/java/splashjs/render/*.java
export render_iface=../code/js/src/main/java/splashjs/render/iface/*.java

export render_animation=../code/js/src/main/java/splashjs/render/animation/*.java
export render_animation_iface=../code/js/src/main/java/splashjs/render/animation/iface/*.java

export render_application=../code/js/src/main/java/splashjs/render/application/*.java
export render_application_iface=../code/js/src/main/java/splashjs/render/application/iface/*.java

export render_controls=../code/js/src/main/java/splashjs/render/controls/*.java
export render_controls_iface=../code/js/src/main/java/splashjs/render/controls/iface/*.java

export render_display=../code/js/src/main/java/splashjs/display/*.java
export render_display_iface=../code/js/src/main/java/splashjs/display/iface/*.java

export render_events=../code/js/src/main/java/splashjs/render/events/*.java
export render_events_iface=../code/js/src/main/java/splashjs/render/events/iface/*.java

export render_filters=../code/js/src/main/java/splashjs/render/filters/*.java
export render_filters_iface=../code/js/src/main/java/splashjs/render/filters/iface/*.java

export render_geom=../code/js/src/main/java/splashjs/render/geom/*.java
export render_geom_iface=../code/js/src/main/java/splashjs/render/geom/*.java

export render_lang=../code/js/src/main/java/splashjs/render/lang/*.java
export render_lang_iface=../code/js/src/main/java/splashjs/render/lang/iface/*.java


export render_media=../code/js/src/main/java/splashjs/render/media/*.java
export render_media_iface=../code/js/src/main/java/splashjs/render/media/iface/*.java


export render_net=../code/js/src/main/java/splashjs/render/net/*.java
export render_net_iface=../code/js/src/main/java/splashjs/render/net/iface/*.java


export render_permissions=../code/js/src/main/java/splashjs/render/permissions/*.java
export render_permissions_iface=../code/js/src/main/java/splashjs/render/permissions/iface/*.java


export render_text=../code/js/src/main/java/splashjs/render/text/*.java
export render_text_iface=../code/js/src/main/java/splashjs/render/text/iface/*.java


export render_ui=../code/js/src/main/java/splashjs/render/ui/*.java
export render_ui_iface=../code/js/src/main/java/splashjs/render/ui/iface/*.java


export render_utils=../code/js/src/main/java/splashjs/render/utils/*.java
export render_utils_iface=../code/js/src/main/java/splashjs/render/utils/iface/*.java


export all_package="$def_js $def_webrtc $render_iface $render_text $render_text_iface $render_lang $render_lang_iface $render_media $render_media_iface $render_events $render_events_iface $render_application $render_application_iface $render_controls $render_controls_iface $render_display $render_display_iface $render $render_animation $render_animation_iface $splashjs $splashjs_iface $animation $animation_easing $animation_iface $application $application_iface $controls $controls_iface $display $display_iface $events $events_iface $filters $filters_iface $geom $geom_iface $lang $lang_iface $media $media_iface $net $net_iface $permissions $permissions_iface $text $text_iface $ui $ui_iface $utils $utils_iface"

javac -cp ".:../bin/js/:$jars:../jars/*.jar" $all_package -d "../bin/js"
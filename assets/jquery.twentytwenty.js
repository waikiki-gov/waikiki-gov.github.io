!function(u){u.fn.twentytwenty=function(h){h=u.extend({default_offset_pct:.5,orientation:"horizontal",before_label:"Before",after_label:"After",no_overlay:!1,move_slider_on_hover:!1,move_with_handle_only:!0,click_to_move:!1},h);return this.each(function(){var e=h.default_offset_pct,a=u(this),i=h.orientation,t="vertical"===i?"down":"left",n="vertical"===i?"up":"right";a.wrap("<div class='twentytwenty-wrapper twentytwenty-"+i+"'></div>"),h.no_overlay||(a.append("<div class='twentytwenty-overlay'></div>"),(y=a.find(".twentytwenty-overlay")).append("<div class='twentytwenty-before-label' data-content='"+h.before_label+"'></div>"),y.append("<div class='twentytwenty-after-label' data-content='"+h.after_label+"'></div>"));var o=a.find("img:first"),s=a.find("img:last");a.append("<div class='twentytwenty-handle'></div>");var c=a.find(".twentytwenty-handle");c.append("<span class='twentytwenty-"+t+"-arrow'></span>"),c.append("<span class='twentytwenty-"+n+"-arrow'></span>"),a.addClass("twentytwenty-container"),o.addClass("twentytwenty-before"),s.addClass("twentytwenty-after");function d(t){var e,n,t=(e=t,n=o.width(),t=o.height(),{w:n+"px",h:t+"px",cw:e*n+"px",ch:e*t+"px"});c.css("vertical"===i?"top":"left","vertical"===i?t.ch:t.cw),t=t,"vertical"===i?(o.css("clip","rect(0,"+t.w+","+t.ch+",0)"),s.css("clip","rect("+t.ch+","+t.w+","+t.h+",0)")):(o.css("clip","rect(0,"+t.cw+","+t.h+",0)"),s.css("clip","rect(0,"+t.w+","+t.h+","+t.cw+")")),a.css("height",t.h)}function l(t,e){var n;return n="vertical"===i?(e-f)/p:(t-w)/v,e=0,t=1,Math.max(e,Math.min(t,n))}u(window).on("resize.twentytwenty",function(t){d(e)});function r(t){((t.distX>t.distY&&t.distX<-t.distY||t.distX<t.distY&&t.distX>-t.distY)&&"vertical"!==i||(t.distX<t.distY&&t.distX<-t.distY||t.distX>t.distY&&t.distX>-t.distY)&&"vertical"===i)&&t.preventDefault(),a.addClass("active"),w=a.offset().left,f=a.offset().top,v=o.width(),p=o.height()}var w=0,f=0,v=0,p=0,y=function(t){a.hasClass("active")&&(e=l(t.pageX,t.pageY),d(e))},t=function(){a.removeClass("active")},n=h.move_with_handle_only?c:a;n.on("movestart",r),n.on("move",y),n.on("moveend",t),h.move_slider_on_hover&&(a.on("mouseenter",r),a.on("mousemove",y),a.on("mouseleave",t)),c.on("touchmove",function(t){t.preventDefault()}),a.find("img").on("mousedown",function(t){t.preventDefault()}),h.click_to_move&&a.on("click",function(t){w=a.offset().left,f=a.offset().top,v=o.width(),p=o.height(),e=l(t.pageX,t.pageY),d(e)}),u(window).trigger("resize.twentytwenty")})}}(jQuery);
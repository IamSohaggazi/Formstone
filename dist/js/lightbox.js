/*! formstone v0.8.16 [lightbox.js] 2015-09-26 | MIT License | formstone.it */

!function(a,b,c){"use strict";function d(){Y=b.$body,Z=a("html, body")}function e(){$&&k()}function f(){$&&z()}function g(a){this.on(U.click,a,j)}function h(a){l(),this.off(U.namespace)}function i(b,c){b instanceof a&&j.apply(W,[{data:a.extend(!0,{},{$object:b},R,c||{})}])}function j(c){if(!$){var d=c.data,e=d.$el,f=d.$object,g=e&&e[0].href?e[0].href||"":"",h=e&&e[0].hash?e[0].hash||"":"",i=g.toLowerCase().split(".").pop().split(/\#|\?/),j=i[0],k=e?e.data(Q+"-type"):"",m="image"===k||a.inArray(j,d.extensions)>-1||"data:image"===g.substr(0,10),n=O(g),p="url"===k||!m&&!n&&"http"===g.substr(0,4)&&!h,r="element"===k||!m&&!n&&!p&&"#"===h.substr(0,1),s="undefined"!=typeof f;if(r&&(g=h),!(m||n||p||r||s))return;if(V.killEvent(c),$=a.extend({},{visible:!1,gallery:{active:!1},isMobile:b.isMobile||d.mobile,isTouch:b.support.touch,isAnimating:!0,oldContentHeight:0,oldContentWidth:0},d),$.touch=d.touch&&$.isMobile&&$.isTouch,$.margin*=2,m?$.type="image":n?$.type="video":$.type="element",m||n){var u=e.data(Q+"-gallery");u&&($.gallery.active=!0,$.gallery.id=u,$.gallery.$items=a("a[data-lightbox-gallery= "+$.gallery.id+"], a[rel= "+$.gallery.id+"]"),$.gallery.index=$.gallery.$items.index($.$el),$.gallery.total=$.gallery.$items.length-1)}var v="";$.isMobile||(v+='<div class="'+[S.raw.overlay,$.customClass].join(" ")+'"></div>');var w=[S.raw.base,S.raw.loading,S.raw.animating,$.customClass];$.fixed&&w.push(S.raw.fixed),$.isMobile&&w.push(S.raw.mobile),$.isTouch&&w.push(S.raw.touch),p&&w.push(S.raw.iframed),(r||s)&&w.push(S.raw.inline),v+='<div class="'+w.join(" ")+'">',v+='<button type="button" class="'+S.raw.close+'">'+$.labels.close+"</button>",v+='<span class="'+S.raw.loading_icon+'"></span>',v+='<div class="'+S.raw.container+'">',v+='<div class="'+S.raw.content+'">',(m||n)&&(v+='<div class="'+S.raw.tools+'">',v+='<div class="'+S.raw.controls+'">',$.gallery.active&&(v+='<button type="button" class="'+[S.raw.control,S.raw.control_previous].join(" ")+'">'+$.labels.previous+"</button>",v+='<button type="button" class="'+[S.raw.control,S.raw.control_next].join(" ")+'">'+$.labels.next+"</button>"),$.isMobile&&$.isTouch&&(v+='<button type="button" class="'+[S.raw.caption_toggle].join(" ")+'">'+$.labels.captionClosed+"</button>"),v+="</div>",v+='<div class="'+S.raw.meta+'">',$.gallery.active&&(v+='<p class="'+S.raw.position+'"',$.gallery.total<1&&(v+=' style="display: none;"'),v+=">",v+='<span class="'+S.raw.position_current+'">'+($.gallery.index+1)+"</span> ",v+=$.labels.count,v+=' <span class="'+S.raw.position_total+'">'+($.gallery.total+1)+"</span>",v+="</p>"),v+='<div class="'+S.raw.caption+'">',v+=$.formatter.call(e,d),v+="</div></div>",v+="</div>"),v+="</div></div></div>",Y.append(v),$.$overlay=a(S.overlay),$.$lightbox=a(S.base),$.$close=a(S.close),$.$container=a(S.container),$.$content=a(S.content),$.$tools=a(S.tools),$.$meta=a(S.meta),$.$position=a(S.position),$.$caption=a(S.caption),$.$controlBox=a(S.controls),$.$controls=a(S.control),$.isMobile?($.paddingVertical=$.$close.outerHeight(),$.paddingHorizontal=0,$.mobilePaddingVertical=parseInt($.$content.css("paddingTop"),10)+parseInt($.$content.css("paddingBottom"),10),$.mobilePaddingHorizontal=parseInt($.$content.css("paddingLeft"),10)+parseInt($.$content.css("paddingRight"),10)):($.paddingVertical=parseInt($.$lightbox.css("paddingTop"),10)+parseInt($.$lightbox.css("paddingBottom"),10),$.paddingHorizontal=parseInt($.$lightbox.css("paddingLeft"),10)+parseInt($.$lightbox.css("paddingRight"),10),$.mobilePaddingVertical=0,$.mobilePaddingHorizontal=0),$.contentHeight=$.$lightbox.outerHeight()-$.paddingVertical,$.contentWidth=$.$lightbox.outerWidth()-$.paddingHorizontal,$.controlHeight=$.$controls.outerHeight(),o(),$.gallery.active&&($.$lightbox.addClass(T.has_controls),G()),X.on(U.keyDown,H),Y.on(U.click,[S.overlay,S.close].join(", "),l),$.gallery.active&&$.$lightbox.on(U.click,S.control,F),$.isMobile&&$.isTouch&&$.$lightbox.on(U.click,S.caption_toggle,q),$.$lightbox.fsTransition({property:"opacity"},function(){m?t(g):n?C(g):p?J(g):r?I(g):s&&K($.$object)}).addClass(S.raw.open),$.$overlay.addClass(S.raw.open)}}function k(a){"object"!=typeof a&&($.targetHeight=arguments[0],$.targetWidth=arguments[1]),"element"===$.type?L($.$content.find("> :first-child")):"image"===$.type?A():"video"===$.type&&D(),n()}function l(a){V.killEvent(a),$&&($.$lightbox.fsTransition("destroy"),$.$container.fsTransition("destroy"),u(),$.$lightbox.addClass(S.raw.animating).fsTransition({property:"opacity"},function(a){$.$lightbox.off(U.namespace),$.$container.off(U.namespace),X.off(U.namespace),Y.off(U.namespace),$.$overlay.remove(),$.$lightbox.remove(),$=null,X.trigger(U.close)}),$.$lightbox.removeClass(S.raw.open),$.$overlay.removeClass(S.raw.open),$.isMobile&&Z.removeClass(T.lock))}function m(){var a=p();$.isMobile?0:$.duration;$.isMobile||$.$controls.css({marginTop:($.contentHeight-$.controlHeight-$.metaHeight)/2}),$.$lightbox.fsTransition({property:$.contentHeight!==$.oldContentHeight?"height":"width"},function(){$.$container.fsTransition({property:"opacity"},function(){$.$lightbox.removeClass(S.raw.animating),$.isAnimating=!1}),$.$lightbox.removeClass(S.raw.loading),$.visible=!0,X.trigger(U.open),$.gallery.active&&E()}),$.isMobile||$.$lightbox.css({height:$.contentHeight+$.paddingVertical,width:$.contentWidth+$.paddingHorizontal,top:$.fixed?0:a.top});var b=$.oldContentHeight!==$.contentHeight||$.oldContentWidth!==$.contentWidth;($.isMobile||!b)&&$.$lightbox.fsTransition("resolve"),$.oldContentHeight=$.contentHeight,$.oldContentWidth=$.contentWidth,$.isMobile&&Z.addClass(T.lock)}function n(){if($.visible&&!$.isMobile){var a=p();$.$controls.css({marginTop:($.contentHeight-$.controlHeight-$.metaHeight)/2}),$.$lightbox.css({height:$.contentHeight+$.paddingVertical,width:$.contentWidth+$.paddingHorizontal,top:$.fixed?0:a.top})}}function o(){var a=p();$.$lightbox.css({top:$.fixed?0:a.top})}function p(){if($.isMobile)return{left:0,top:0};var a={left:(b.windowWidth-$.contentWidth-$.paddingHorizontal)/2,top:$.top<=0?(b.windowHeight-$.contentHeight-$.paddingVertical)/2:$.top};return $.fixed!==!0&&(a.top+=X.scrollTop()),a}function q(a){V.killEvent(a),$.captionOpen?r():($.$lightbox.addClass(S.raw.caption_open).find(S.caption_toggle).text($.labels.captionOpen),$.captionOpen=!0)}function r(){$.$lightbox.removeClass(S.raw.caption_open).find(S.caption_toggle).text($.labels.captionClosed),$.captionOpen=!1}function s(){var a=this.attr("title"),b=a!==c&&a?a.replace(/^\s+|\s+$/g,""):!1;return b?'<p class="caption">'+b+"</p>":""}function t(b){$.hasScaled=!1,$.$imageContainer=a('<div class="'+S.raw.image_container+'"><img></div>'),$.$image=$.$imageContainer.find("img"),$.$image.one(U.load,function(){var a=N($.$image);$.naturalHeight=a.naturalHeight,$.naturalWidth=a.naturalWidth,$.retina&&($.naturalHeight/=2,$.naturalWidth/=2),$.$content.prepend($.$imageContainer),""===$.$caption.html()?($.$caption.hide(),$.$lightbox.removeClass(T.has_caption)):($.$caption.show(),$.$lightbox.addClass(T.has_caption)),A(),m(),$.touch&&(v(),x({scale:1,deltaX:0,deltaY:0}),y(),$.$container.fsTouch({pan:!0,scale:!0}).on(U.scaleStart,w).on(U.scaleEnd,y).on(U.scale,x))}).error(M).attr("src",b).addClass(S.raw.image),($.$image[0].complete||4===$.$image[0].readyState)&&$.$image.trigger(U.load)}function u(){$.$image&&$.$image.length&&$.$container.fsTouch("destroy")}function v(){$.scalePosition=$.$imageContainer.position(),$.scaleY=$.scalePosition.top,$.scaleX=$.scalePosition.left,$.scaleHeight=$.$image.outerHeight(),$.scaleWidth=$.$image.outerWidth()}function w(a){v(),$.$lightbox.removeClass(S.raw.animating)}function x(a){$.targetContainerY=$.scaleY+a.deltaY,$.targetContainerX=$.scaleX+a.deltaX,$.targetImageHeight=$.scaleHeight*a.scale,$.targetImageWidth=$.scaleWidth*a.scale,$.targetImageHeight<$.scaleMinHeight&&($.targetImageHeight=$.scaleMinHeight),$.targetImageHeight>$.scaleMaxHeight&&($.targetImageHeight=$.scaleMaxHeight),$.targetImageWidth<$.scaleMinWidth&&($.targetImageWidth=$.scaleMinWidth),$.targetImageWidth>$.scaleMaxWidth&&($.targetImageWidth=$.scaleMaxWidth),$.hasScaled=!0,$.isScaling=!0}function y(a){v(),$.isScaling=!1;var b=$.$container.outerHeight()-$.metaHeight,c=$.$container.outerWidth();$.scaleMinY=b-$.scaleHeight/2,$.scaleMinX=c-$.scaleWidth/2,$.scaleMaxY=$.scaleHeight/2,$.scaleMaxX=$.scaleWidth/2,$.scaleHeight<b?$.scalePosition.top=b/2:($.scalePosition.top<$.scaleMinY&&($.scalePosition.top=$.scaleMinY),$.scalePosition.top>$.scaleMaxY&&($.scalePosition.top=$.scaleMaxY)),$.scaleWidth<c?$.scalePosition.left=c/2:($.scalePosition.left<$.scaleMinX&&($.scalePosition.left=$.scaleMinX),$.scalePosition.left>$.scaleMaxX&&($.scalePosition.left=$.scaleMaxX)),$.$lightbox.addClass(S.raw.animating),$.$imageContainer.css({left:$.scalePosition.left,top:$.scalePosition.top})}function z(){$.$image&&$.$image.length&&$.isScaling&&($.$imageContainer.css({top:$.targetContainerY,left:$.targetContainerX}),$.$image.css({height:$.targetImageHeight,width:$.targetImageWidth,top:-($.targetImageHeight/2),left:-($.targetImageWidth/2)}))}function A(){var a=0;for($.windowHeight=$.viewportHeight=b.windowHeight-$.mobilePaddingVertical-$.paddingVertical,$.windowWidth=$.viewportWidth=b.windowWidth-$.mobilePaddingHorizontal-$.paddingHorizontal,$.contentHeight=1/0,$.contentWidth=1/0,$.imageMarginTop=0,$.imageMarginLeft=0;$.contentHeight>$.viewportHeight&&2>a;)$.imageHeight=0===a?$.naturalHeight:$.$image.outerHeight(),$.imageWidth=0===a?$.naturalWidth:$.$image.outerWidth(),$.metaHeight=0===a?0:$.metaHeight,$.spacerHeight=0===a?0:$.spacerHeight,0===a&&($.ratioHorizontal=$.imageHeight/$.imageWidth,$.ratioVertical=$.imageWidth/$.imageHeight,$.isWide=$.imageWidth>$.imageHeight),$.imageHeight<$.minHeight&&($.minHeight=$.imageHeight),$.imageWidth<$.minWidth&&($.minWidth=$.imageWidth),$.isMobile?($.isTouch?($.$controlBox.css({width:b.windowWidth}),$.spacerHeight=$.$controls.outerHeight(!0)):($.$tools.css({width:b.windowWidth}),$.spacerHeight=$.$tools.outerHeight(!0)),$.contentHeight=$.viewportHeight,$.contentWidth=$.viewportWidth,B(),$.imageMarginTop=($.contentHeight-$.targetImageHeight-$.spacerHeight)/2,$.imageMarginLeft=($.contentWidth-$.targetImageWidth)/2):(0===a&&($.viewportHeight-=$.margin+$.paddingVertical,$.viewportWidth-=$.margin+$.paddingHorizontal),$.viewportHeight-=$.metaHeight,B(),$.contentHeight=$.targetImageHeight,$.contentWidth=$.targetImageWidth),$.isMobile||$.isTouch||$.$meta.css({width:$.contentWidth}),$.hasScaled||($.$image.css({height:$.targetImageHeight,width:$.targetImageWidth}),$.touch?$.$image.css({top:-($.targetImageHeight/2),left:-($.targetImageWidth/2)}):$.$image.css({marginTop:$.imageMarginTop,marginLeft:$.imageMarginLeft})),$.isMobile||($.metaHeight=$.$meta.outerHeight(!0),$.contentHeight+=$.metaHeight),a++;$.touch&&($.scaleMinHeight=$.targetImageHeight,$.scaleMinWidth=$.targetImageWidth,$.scaleMaxHeight=$.naturalHeight,$.scaleMaxWidth=$.naturalWidth)}function B(){var a=$.isMobile?$.contentHeight-$.spacerHeight:$.viewportHeight,b=$.isMobile?$.contentWidth:$.viewportWidth;$.isWide?($.targetImageWidth=b,$.targetImageHeight=$.targetImageWidth*$.ratioHorizontal,$.targetImageHeight>a&&($.targetImageHeight=a,$.targetImageWidth=$.targetImageHeight*$.ratioVertical)):($.targetImageHeight=a,$.targetImageWidth=$.targetImageHeight*$.ratioVertical,$.targetImageWidth>b&&($.targetImageWidth=b,$.targetImageHeight=$.targetImageWidth*$.ratioHorizontal)),($.targetImageWidth>$.imageWidth||$.targetImageHeight>$.imageHeight)&&($.targetImageHeight=$.imageHeight,$.targetImageWidth=$.imageWidth),($.targetImageWidth<$.minWidth||$.targetImageHeight<$.minHeight)&&($.targetImageWidth<$.minWidth?($.targetImageWidth=$.minWidth,$.targetImageHeight=$.targetImageWidth*$.ratioHorizontal):($.targetImageHeight=$.minHeight,$.targetImageWidth=$.targetImageHeight*$.ratioVertical))}function C(b){var c=b.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i),d=b.match(/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/),e=b.split("?"),f=null!==c?"//www.youtube.com/embed/"+c[1]:"//player.vimeo.com/video/"+d[3];e.length>=2&&(f+="?"+e.slice(1)[0].trim()),$.$videoWrapper=a('<div class="'+S.raw.video_wrapper+'"></div>'),$.$video=a('<iframe class="'+S.raw.video+'" frameborder="0" seamless="seamless" allowfullscreen></iframe>'),$.$video.attr("src",f).addClass(S.raw.video).prependTo($.$videoWrapper),$.$content.prepend($.$videoWrapper),D(),m()}function D(){$.windowHeight=$.viewportHeight=b.windowHeight-$.mobilePaddingVertical-$.paddingVertical,$.windowWidth=$.viewportWidth=b.windowWidth-$.mobilePaddingHorizontal-$.paddingHorizontal,$.videoMarginTop=0,$.videoMarginLeft=0,$.isMobile?($.isTouch?($.$controlBox.css({width:b.windowWidth}),$.spacerHeight=$.$controls.outerHeight(!0)):($.$tools.css({width:b.windowWidth}),$.spacerHeight=$.$tools.outerHeight(!0)),$.viewportHeight-=$.spacerHeight,$.targetVideoWidth=$.viewportWidth,$.targetVideoHeight=$.targetVideoWidth*$.videoRatio,$.targetVideoHeight>$.viewportHeight&&($.targetVideoHeight=$.viewportHeight,$.targetVideoWidth=$.targetVideoHeight/$.videoRatio),$.videoMarginTop=($.viewportHeight-$.targetVideoHeight)/2,$.videoMarginLeft=($.viewportWidth-$.targetVideoWidth)/2):($.viewportHeight=$.windowHeight-$.margin,$.viewportWidth=$.windowWidth-$.margin,$.targetVideoWidth=$.videoWidth>$.viewportWidth?$.viewportWidth:$.videoWidth,$.targetVideoWidth<$.minWidth&&($.targetVideoWidth=$.minWidth),$.targetVideoHeight=$.targetVideoWidth*$.videoRatio,$.contentHeight=$.targetVideoHeight,$.contentWidth=$.targetVideoWidth),$.isMobile||$.isTouch||$.$meta.css({width:$.contentWidth}),$.$videoWrapper.css({height:$.targetVideoHeight,width:$.targetVideoWidth,marginTop:$.videoMarginTop,marginLeft:$.videoMarginLeft}),$.isMobile||($.metaHeight=$.$meta.outerHeight(!0),$.contentHeight=$.targetVideoHeight+$.metaHeight)}function E(b){var c="";$.gallery.index>0&&(c=$.gallery.$items.eq($.gallery.index-1).attr("href"),O(c)||a('<img src="'+c+'">')),$.gallery.index<$.gallery.total&&(c=$.gallery.$items.eq($.gallery.index+1).attr("href"),O(c)||a('<img src="'+c+'">'))}function F(b){V.killEvent(b);var c=a(b.currentTarget);$.isAnimating||c.hasClass(S.raw.control_disabled)||($.isAnimating=!0,u(),r(),$.gallery.index+=c.hasClass(S.raw.control_next)?1:-1,$.gallery.index>$.gallery.total&&($.gallery.index=$.infinite?0:$.gallery.total),$.gallery.index<0&&($.gallery.index=$.infinite?$.gallery.total:0),$.$lightbox.addClass(S.raw.animating),$.$container.fsTransition({property:"opacity"},function(){"undefined"!=typeof $.$image&&$.$image.remove(),"undefined"!=typeof $.$videoWrapper&&$.$videoWrapper.remove(),$.$el=$.gallery.$items.eq($.gallery.index),$.$caption.html($.formatter.call($.$el,$)),$.$position.find(S.position_current).html($.gallery.index+1);var a=$.$el.attr("href"),b=O(a);b?C(a):t(a),G()}),$.$lightbox.addClass(S.raw.loading))}function G(){$.$controls.removeClass(S.raw.control_disabled),$.infinite||(0===$.gallery.index&&$.$controls.filter(S.control_previous).addClass(T.control_disabled),$.gallery.index===$.gallery.total&&$.$controls.filter(S.control_next).addClass(T.control_disabled))}function H(a){!$.gallery.active||37!==a.keyCode&&39!==a.keyCode?27===a.keyCode&&$.$close.trigger(U.click):(V.killEvent(a),$.$controls.filter(37===a.keyCode?S.control_previous:S.control_next).trigger(U.click))}function I(b){var c=a(b).find("> :first-child").clone();K(c)}function J(b){b+=b.indexOf("?")>-1?"&"+$.requestKey+"=true":"?"+$.requestKey+"=true";var c=a('<iframe class="'+S.raw.iframe+'" src="'+b+'"></iframe>');K(c)}function K(a){$.$content.append(a),L(a),m()}function L(a){$.windowHeight=b.windowHeight-$.mobilePaddingVertical-$.paddingVertical,$.windowWidth=b.windowWidth-$.mobilePaddingHorizontal-$.paddingHorizontal,$.objectHeight=a.outerHeight(!0),$.objectWidth=a.outerWidth(!0),$.targetHeight=$.targetHeight||($.$el?$.$el.data(Q+"-height"):null),$.targetWidth=$.targetWidth||($.$el?$.$el.data(Q+"-width"):null),$.maxHeight=$.windowHeight<0?$.minHeight:$.windowHeight,$.isIframe=a.is("iframe"),$.objectMarginTop=0,$.objectMarginLeft=0,$.isMobile||($.windowHeight-=$.margin,$.windowWidth-=$.margin),$.contentHeight=$.targetHeight?$.targetHeight:$.isIframe||$.isMobile?$.windowHeight:$.objectHeight,$.contentWidth=$.targetWidth?$.targetWidth:$.isIframe||$.isMobile?$.windowWidth:$.objectWidth,($.isIframe||$.isObject)&&$.isMobile?($.contentHeight=$.windowHeight,$.contentWidth=$.windowWidth):$.isObject&&($.contentHeight=$.contentHeight>$.windowHeight?$.windowHeight:$.contentHeight,$.contentWidth=$.contentWidth>$.windowWidth?$.windowWidth:$.contentWidth)}function M(b){var c=a('<div class="'+S.raw.error+'"><p>Error Loading Resource</p></div>');$.type="element",$.$tools.remove(),$.$image.off(U.namespace),K(c)}function N(a){var b=a[0],c=new Image;return"undefined"!=typeof b.naturalHeight?{naturalHeight:b.naturalHeight,naturalWidth:b.naturalWidth}:"img"===b.tagName.toLowerCase()?(c.src=b.src,{naturalHeight:c.height,naturalWidth:c.width}):!1}function O(a){return a.indexOf("youtube.com")>-1||a.indexOf("youtu.be")>-1||a.indexOf("vimeo.com")>-1}var P=b.Plugin("lightbox",{widget:!0,defaults:{customClass:"",extensions:["jpg","sjpg","jpeg","png","gif"],fixed:!1,formatter:s,infinite:!1,labels:{close:"Close",count:"of",next:"Next",previous:"Previous",captionClosed:"View Caption",captionOpen:"Close Caption"},margin:50,minHeight:100,minWidth:100,mobile:!1,retina:!1,requestKey:"fs-lightbox",top:0,touch:!0,videoRatio:.5625,videoWidth:800},classes:["loading","animating","fixed","mobile","touch","inline","iframed","open","overlay","close","loading_icon","container","content","image","image_container","video","video_wrapper","tools","meta","controls","control","control_previous","control_next","control_disabled","position","position_current","position_total","caption_toggle","caption","caption_open","has_controls","has_caption","iframe","error","lock"],events:{open:"open",close:"close"},methods:{_setup:d,_construct:g,_destruct:h,_resize:e,_raf:f,resize:k},utilities:{_initialize:i,close:l}}),Q=P.namespace,R=P.defaults,S=P.classes,T=S.raw,U=P.events,V=P.functions,W=b.window,X=b.$window,Y=null,Z=null,$=null}(jQuery,Formstone);
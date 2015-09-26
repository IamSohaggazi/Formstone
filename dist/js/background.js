/*! formstone v0.8.16 [background.js] 2015-09-26 | MIT License | formstone.it */

!function(a,b,c){"use strict";function d(a){x.iterate.call(z,q)}function e(){z=a(u.base)}function f(b){b.youTubeGuid=0,b.$container=a('<div class="'+v.container+'"></div>').appendTo(this),this.addClass([v.base,b.customClass].join(" "));var c=b.source;b.source=null,h(b,c,!0),e()}function g(a){a.$container.remove(),this.removeClass([v.base,a.customClass].join(" ")).off(w.namespace),e()}function h(b,c,d){if(c!==b.source){if(b.source=c,b.responsive=!1,b.isYouTube=!1,"object"===a.type(c)&&"string"===a.type(c.video)){var e=c.video.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i);e&&e.length>=1&&(b.isYouTube=!0,b.videoId=e[1])}var f=!b.isYouTube&&"object"===a.type(c)&&(c.hasOwnProperty("mp4")||c.hasOwnProperty("ogg")||c.hasOwnProperty("webm"));if(b.video=b.isYouTube||f,b.playing=!1,b.isYouTube)b.playerReady=!1,b.posterLoaded=!1,l(b,c,d);else if("object"===a.type(c)&&c.hasOwnProperty("poster"))k(b,c,d);else{var g=c;if("object"===a.type(c)){var h,m=[],n=[];for(h in c)c.hasOwnProperty(h)&&n.push(h);n.sort(x.sortAsc);for(h in n)n.hasOwnProperty(h)&&m.push({width:parseInt(n[h]),url:c[n[h]],mq:window.matchMedia("(min-width: "+parseInt(n[h])+"px)")});b.responsive=!0,b.sources=m,g=i(b)}j(b,g,!1,d)}}else b.$el.trigger(w.loaded)}function i(a){var b=a.source;if(a.responsive){b=a.sources[0].url;for(var c in a.sources)a.sources.hasOwnProperty(c)&&a.sources[c].mq.matches&&(b=a.sources[c].url)}return b}function j(b,c,d,e){var f=[v.media,v.image,e!==!0?v.animated:""].join(" "),g=a('<div class="'+f+'"><img></div>'),h=g.find("img"),i=c;h.one(w.load,function(){A&&g.addClass(v["native"]).css({backgroundImage:"url('"+i+"')"}),g.fsTransition({property:"opacity"},function(){d||m(b)}).css({opacity:1}),r(b),(!d||e)&&b.$el.trigger(w.loaded)}).attr("src",i),b.responsive&&g.addClass(v.responsive),b.$container.append(g),(h[0].complete||4===h[0].readyState)&&h.trigger(w.load),b.currentSource=i}function k(c,d,e){if(c.source&&c.source.poster&&(j(c,c.source.poster,!0,!0),e=!1),!b.isMobile){var f=[v.media,v.video,e!==!0?v.animated:""].join(" "),g='<div class="'+f+'">';g+="<video",c.loop&&(g+=" loop"),c.mute&&(g+=" muted"),g+=">",c.source.webm&&(g+='<source src="'+c.source.webm+'" type="video/webm" />'),c.source.mp4&&(g+='<source src="'+c.source.mp4+'" type="video/mp4" />'),c.source.ogg&&(g+='<source src="'+c.source.ogg+'" type="video/ogg" />'),g+="</video>",g+="</div>";var h=a(g),i=h.find("video");i.one(w.loadedMetaData,function(a){h.fsTransition({property:"opacity"},function(){m(c)}).css({opacity:1}),r(c),c.$el.trigger(w.loaded),c.autoPlay&&p(c)}),c.$container.append(h)}}function l(c,d,e){if(!c.videoId){var f=d.match(/^.*(?:youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/);c.videoId=f[1]}if(c.posterLoaded||(c.source.poster||(c.source.poster="http://img.youtube.com/vi/"+c.videoId+"/0.jpg"),c.posterLoaded=!0,j(c,c.source.poster,!0,e),e=!1),!b.isMobile)if(a("script[src*='youtube.com/iframe_api']").length||a("head").append('<script src="//www.youtube.com/iframe_api"></script>'),B){var g=c.guid+"_"+c.youTubeGuid++,h=[v.media,v.embed,e!==!0?v.animated:""].join(" "),i='<div class="'+h+'">';i+='<div id="'+g+'"></div>',i+="</div>";var k=a(i),l=a.extend(!0,{},{controls:0,rel:0,showinfo:0,wmode:"transparent",enablejsapi:1,version:3,playerapiid:g,loop:c.loop?1:0,autoplay:1,origin:y.location.protocol+"//"+y.location.host},c.youtubeOptions);c.$container.append(k),c.player&&(c.oldPlayer=c.player,c.player=null),c.player=new y.YT.Player(g,{videoId:c.videoId,playerVars:l,events:{onReady:function(a){c.playerReady=!0,c.mute&&c.player.mute(),c.autoPlay&&c.player.playVideo()},onStateChange:function(a){c.playing||a.data!==y.YT.PlayerState.PLAYING?c.loop&&c.playing&&a.data===y.YT.PlayerState.ENDED&&c.player.playVideo():(c.playing=!0,c.autoPlay||c.player.pauseVideo(),k.fsTransition({property:"opacity"},function(){m(c)}).css({opacity:1}),r(c),c.$el.trigger(w.loaded)),c.$el.find(u.embed).addClass(v.ready)},onPlaybackQualityChange:function(a){},onPlaybackRateChange:function(a){},onError:function(a){},onApiChange:function(a){}}}),r(c)}else C.push({data:c,source:d})}function m(a){var b=a.$container.find(u.media);b.length>=1&&(b.not(":last").remove(),a.oldPlayer=null)}function n(a){var b=a.$container.find(u.media);b.length>=1&&b.fsTransition({property:"opacity"},function(){b.remove(),delete a.source}).css({opacity:0})}function o(a){if(a.video){if(a.isYouTube&&a.playerReady)a.player.pauseVideo();else{var b=a.$container.find("video");b.length&&b[0].pause()}a.playing=!1}}function p(a){if(a.video){if(a.isYouTube&&a.playerReady)a.player.playVideo();else{var b=a.$container.find("video");b.length&&b[0].play()}a.playing=!0}}function q(a){if(a.responsive){var b=i(a);b!==a.currentSource?j(a,b,!1,!0):r(a)}else r(a)}function r(a){for(var b=a.$container.find(u.media),c=0,d=b.length;d>c;c++){var e=b.eq(c),f=a.isYouTube?"iframe":e.find("video").length?"video":"img",g=e.find(f);if(g.length&&("img"!==f||!A)){var h=a.$el.outerWidth(),i=a.$el.outerHeight(),j=s(a,g);a.width=j.width,a.height=j.height,a.left=0,a.top=0;var k=a.isYouTube?a.embedRatio:a.width/a.height;a.height=i,a.width=a.height*k,a.width<h&&(a.width=h,a.height=a.width/k),a.left=-(a.width-h)/2,a.top=-(a.height-i)/2,e.css({height:a.height,width:a.width,left:a.left,top:a.top})}}}function s(b,c){if(b.isYouTube)return{height:500,width:500/b.embedRatio};if(c.is("img")){var d=c[0];if("undefined"!==a.type(d.naturalHeight))return{height:d.naturalHeight,width:d.naturalWidth};var e=new Image;return e.src=d.src,{height:e.height,width:e.width}}return{height:c[0].videoHeight,width:c[0].videoWidth}}var t=b.Plugin("background",{widget:!0,defaults:{autoPlay:!0,customClass:"",embedRatio:1.777777,loop:!0,mute:!0,source:null,youtubeOptions:{}},classes:["container","media","animated","responsive","native","fixed","ready"],events:{loaded:"loaded",ready:"ready",loadedMetaData:"loadedmetadata"},methods:{_construct:f,_destruct:g,_resize:d,play:p,pause:o,resize:r,load:h,unload:n}}),u=t.classes,v=u.raw,w=t.events,x=t.functions,y=b.window,z=[],A="backgroundSize"in b.document.documentElement.style,B=!1,C=[];y.onYouTubeIframeAPIReady=function(){B=!0;for(var a in C)C.hasOwnProperty(a)&&l(C[a].data,C[a].source);C=[]}}(jQuery,Formstone);
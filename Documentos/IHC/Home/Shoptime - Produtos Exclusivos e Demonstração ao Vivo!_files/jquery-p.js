$.extend({historyCurrentHash: undefined, historyCallback: undefined, historyIframeSrc: undefined, historyNeedIframe: $.browser.msie && ($.browser.version < 8 || document.documentMode < 8), historyInit: function(callback, src) {$.historyCallback = callback; if (src) {$.historyIframeSrc = src; } var current_hash = location.hash; $.historyCurrentHash = current_hash; if ($.historyNeedIframe) {if ($.historyCurrentHash === '') {$.historyCurrentHash = '#'; } $("body").prepend('<iframe id="$_history" style="display:none;"' + ' src="javascript:false;"></iframe>'); var ihistory = $("#$_history")[0]; var iframe = ihistory.contentWindow.document; iframe.open(); iframe.close(); iframe.location.hash = current_hash; } else if ($.browser.safari) {$.historyBackStack = []; $.historyBackStack.length = $.length; $.historyForwardStack = []; $.lastHistoryLength = history.length; $.isFirst = true; } if (current_hash) {$.historyCallback(current_hash.replace(/^#/, '')); } if ($.browser.safari) {window.addEventListener('hashchange', $.historyCheckChrome, false); } else {setInterval($.historyCheck, 100); } }, historyAddHistory: function(hash) {$.historyBackStack.push(hash); $.historyForwardStack.length = 0; this.isFirst = true; }, historyCheckChrome: function() {current_hash = location.hash; if (current_hash !== $.historyCurrentHash) {$.historyCurrentHash = current_hash; $.historyCallback(current_hash.replace(/^#/, '')); } }, historyCheck: function() {if ($.historyNeedIframe) {var ihistory = $("#$_history")[0]; var iframe = ihistory.contentDocument || ihistory.contentWindow.document; current_hash = iframe.location.hash; if ((current_hash !== $.historyCurrentHash) && ($.historyCurrentHash !== "#")) {location.hash = current_hash; $.historyCurrentHash = current_hash; $.historyCallback(current_hash.replace(/^#/, '')); } } else if ($.browser.safari) { /**/ } else {current_hash = location.hash; if (current_hash !== $.historyCurrentHash) {$.historyCurrentHash = current_hash; $.historyCallback(current_hash.replace(/^#/, '')); } } }, historyLoad: function(hash) {var newhash; hash = decodeURIComponent(hash.replace(/\?.*$/, '')); if ($.browser.safari) {newhash = hash; } else {newhash = '#' + hash; location.hash = newhash; } $.historyCurrentHash = newhash; if ($.historyNeedIframe) {var ihistory = $("#$_history")[0]; var iframe = ihistory.contentWindow.document; iframe.open(); iframe.close(); iframe.location.hash = newhash; $.lastHistoryLength = history.length; $.historyCallback(hash); } else if ($.browser.safari) {$.dontCheck = true; this.historyAddHistory(hash); var fn = function() {$.dontCheck = false; }; window.setTimeout(fn, 200); $.historyCallback(hash); location.hash = newhash; } else {$.historyCallback(hash); } } });

// Magnific Popup v0.9.6 by Dmitry Semenov
// http://bit.ly/magnific-popup#build=inline+ajax+iframe+fastclick
(function(a){var b="Close",c="BeforeClose",d="AfterClose",e="BeforeAppend",f="MarkupParse",g="Open",h="Change",i="mfp",j="."+i,k="mfp-ready",l="mfp-removing",m="mfp-prevent-close",n,o=function(){},p=!!window.jQuery,q,r=a(window),s,t,u,v,w,x=function(a,b){n.ev.on(i+a+j,b)},y=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},z=function(b,c){n.ev.triggerHandler(i+b,c),n.st.callbacks&&(b=b.charAt(0).toLowerCase()+b.slice(1),n.st.callbacks[b]&&n.st.callbacks[b].apply(n,a.isArray(c)?c:[c]))},A=function(){(n.st.focus?n.content.find(n.st.focus).eq(0):n.wrap).focus()},B=function(b){if(b!==w||!n.currTemplate.closeBtn)n.currTemplate.closeBtn=a(n.st.closeMarkup.replace("%title%",n.st.tClose)),w=b;return n.currTemplate.closeBtn},C=function(){a.magnificPopup.instance||(n=new o,n.init(),a.magnificPopup.instance=n)},D=function(b){if(a(b).hasClass(m))return;var c=n.st.closeOnContentClick,d=n.st.closeOnBgClick;if(c&&d)return!0;if(!n.content||a(b).hasClass("mfp-close")||n.preloader&&b===n.preloader[0])return!0;if(b!==n.content[0]&&!a.contains(n.content[0],b)){if(d&&a.contains(document,b))return!0}else if(c)return!0;return!1},E=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(a.transition!==undefined)return!0;while(b.length)if(b.pop()+"Transition"in a)return!0;return!1};o.prototype={constructor:o,init:function(){var b=navigator.appVersion;n.isIE7=b.indexOf("MSIE 7.")!==-1,n.isIE8=b.indexOf("MSIE 8.")!==-1,n.isLowIE=n.isIE7||n.isIE8,n.isAndroid=/android/gi.test(b),n.isIOS=/iphone|ipad|ipod/gi.test(b),n.supportsTransition=E(),n.probablyMobile=n.isAndroid||n.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),s=a(document.body),t=a(document),n.popupsCache={}},open:function(b){var c;if(b.isObj===!1){n.items=b.items.toArray(),n.index=0;var d=b.items,e;for(c=0;c<d.length;c++){e=d[c],e.parsed&&(e=e.el[0]);if(e===b.el[0]){n.index=c;break}}}else n.items=a.isArray(b.items)?b.items:[b.items],n.index=b.index||0;if(n.isOpen){n.updateItemHTML();return}n.types=[],v="",b.mainEl&&b.mainEl.length?n.ev=b.mainEl.eq(0):n.ev=t,b.key?(n.popupsCache[b.key]||(n.popupsCache[b.key]={}),n.currTemplate=n.popupsCache[b.key]):n.currTemplate={},n.st=a.extend(!0,{},a.magnificPopup.defaults,b),n.fixedContentPos=n.st.fixedContentPos==="auto"?!n.probablyMobile:n.st.fixedContentPos,n.st.modal&&(n.st.closeOnContentClick=!1,n.st.closeOnBgClick=!1,n.st.showCloseBtn=!1,n.st.enableEscapeKey=!1),n.bgOverlay||(n.bgOverlay=y("bg").on("click"+j,function(){n.close()}),n.wrap=y("wrap").attr("tabindex",-1).on("click"+j,function(a){D(a.target)&&n.close()}),n.container=y("container",n.wrap)),n.contentContainer=y("content"),n.st.preloader&&(n.preloader=y("preloader",n.container,n.st.tLoading));var h=a.magnificPopup.modules;for(c=0;c<h.length;c++){var i=h[c];i=i.charAt(0).toUpperCase()+i.slice(1),n["init"+i].call(n)}z("BeforeOpen"),n.st.showCloseBtn&&(n.st.closeBtnInside?(x(f,function(a,b,c,d){c.close_replaceWith=B(d.type)}),v+=" mfp-close-btn-in"):n.wrap.append(B())),n.st.alignTop&&(v+=" mfp-align-top"),n.fixedContentPos?n.wrap.css({overflow:n.st.overflowY,overflowX:"hidden",overflowY:n.st.overflowY}):n.wrap.css({top:r.scrollTop(),position:"absolute"}),(n.st.fixedBgPos===!1||n.st.fixedBgPos==="auto"&&!n.fixedContentPos)&&n.bgOverlay.css({height:t.height(),position:"absolute"}),n.st.enableEscapeKey&&t.on("keyup"+j,function(a){a.keyCode===27&&n.close()}),r.on("resize"+j,function(){n.updateSize()}),n.st.closeOnContentClick||(v+=" mfp-auto-cursor"),v&&n.wrap.addClass(v);var l=n.wH=r.height(),m={};if(n.fixedContentPos&&n._hasScrollBar(l)){var o=n._getScrollbarSize();o&&(m.paddingRight=o)}n.fixedContentPos&&(n.isIE7?a("body, html").css("overflow","hidden"):m.overflow="hidden");var p=n.st.mainClass;return n.isIE7&&(p+=" mfp-ie7"),p&&n._addClassToMFP(p),n.updateItemHTML(),z("BuildControls"),a("html").css(m),n.bgOverlay.add(n.wrap).prependTo(document.body),n._lastFocusedEl=document.activeElement,setTimeout(function(){n.content?(n._addClassToMFP(k),A()):n.bgOverlay.addClass(k),t.on("focusin"+j,function(b){if(b.target!==n.wrap[0]&&!a.contains(n.wrap[0],b.target))return A(),!1})},16),n.isOpen=!0,n.updateSize(l),z(g),b},close:function(){if(!n.isOpen)return;z(c),n.isOpen=!1,n.st.removalDelay&&!n.isLowIE&&n.supportsTransition?(n._addClassToMFP(l),setTimeout(function(){n._close()},n.st.removalDelay)):n._close()},_close:function(){z(b);var c=l+" "+k+" ";n.bgOverlay.detach(),n.wrap.detach(),n.container.empty(),n.st.mainClass&&(c+=n.st.mainClass+" "),n._removeClassFromMFP(c);if(n.fixedContentPos){var e={paddingRight:""};n.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}t.off("keyup"+j+" focusin"+j),n.ev.off(j),n.wrap.attr("class","mfp-wrap").removeAttr("style"),n.bgOverlay.attr("class","mfp-bg"),n.container.attr("class","mfp-container"),n.st.showCloseBtn&&(!n.st.closeBtnInside||n.currTemplate[n.currItem.type]===!0)&&n.currTemplate.closeBtn&&n.currTemplate.closeBtn.detach(),n._lastFocusedEl&&a(n._lastFocusedEl).focus(),n.currItem=null,n.content=null,n.currTemplate=null,n.prevHeight=0,z(d)},updateSize:function(a){if(n.isIOS){var b=document.documentElement.clientWidth/window.innerWidth,c=window.innerHeight*b;n.wrap.css("height",c),n.wH=c}else n.wH=a||r.height();n.fixedContentPos||n.wrap.css("height",n.wH),z("Resize")},updateItemHTML:function(){var b=n.items[n.index];n.contentContainer.detach(),n.content&&n.content.detach(),b.parsed||(b=n.parseEl(n.index));var c=b.type;z("BeforeChange",[n.currItem?n.currItem.type:"",c]),n.currItem=b;if(!n.currTemplate[c]){var d=n.st[c]?n.st[c].markup:!1;z("FirstMarkupParse",d),d?n.currTemplate[c]=a(d):n.currTemplate[c]=!0}u&&u!==b.type&&n.container.removeClass("mfp-"+u+"-holder");var e=n["get"+c.charAt(0).toUpperCase()+c.slice(1)](b,n.currTemplate[c]);n.appendContent(e,c),b.preloaded=!0,z(h,b),u=b.type,n.container.prepend(n.contentContainer),z("AfterChange")},appendContent:function(a,b){n.content=a,a?n.st.showCloseBtn&&n.st.closeBtnInside&&n.currTemplate[b]===!0?n.content.find(".mfp-close").length||n.content.append(B()):n.content=a:n.content="",z(e),n.container.addClass("mfp-"+b+"-holder"),n.contentContainer.append(n.content)},parseEl:function(b){var c=n.items[b],d=c.type;c.tagName?c={el:a(c)}:c={data:c,src:c.src};if(c.el){var e=n.types;for(var f=0;f<e.length;f++)if(c.el.hasClass("mfp-"+e[f])){d=e[f];break}c.src=c.el.attr("data-mfp-src"),c.src||(c.src=c.el.attr("href"))}return c.type=d||n.st.type||"inline",c.index=b,c.parsed=!0,n.items[b]=c,z("ElementParse",c),n.items[b]},addGroup:function(a,b){var c=function(c){c.mfpEl=this,n._openClick(c,a,b)};b||(b={});var d="click.magnificPopup";b.mainEl=a,b.items?(b.isObj=!0,a.off(d).on(d,c)):(b.isObj=!1,b.delegate?a.off(d).on(d,b.delegate,c):(b.items=a,a.off(d).on(d,c)))},_openClick:function(b,c,d){var e=d.midClick!==undefined?d.midClick:a.magnificPopup.defaults.midClick;if(!e&&(b.which===2||b.ctrlKey||b.metaKey))return;var f=d.disableOn!==undefined?d.disableOn:a.magnificPopup.defaults.disableOn;if(f)if(a.isFunction(f)){if(!f.call(n))return!0}else if(r.width()<f)return!0;b.type&&(b.preventDefault(),n.isOpen&&b.stopPropagation()),d.el=a(b.mfpEl),d.delegate&&(d.items=c.find(d.delegate)),n.open(d)},updateStatus:function(a,b){if(n.preloader){q!==a&&n.container.removeClass("mfp-s-"+q),!b&&a==="loading"&&(b=n.st.tLoading);var c={status:a,text:b};z("UpdateStatus",c),a=c.status,b=c.text,n.preloader.html(b),n.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),n.container.addClass("mfp-s-"+a),q=a}},_addClassToMFP:function(a){n.bgOverlay.addClass(a),n.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),n.wrap.removeClass(a)},_hasScrollBar:function(a){return(n.isIE7?t.height():document.body.scrollHeight)>(a||r.height())},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),z(f,[b,c,d]),a.each(c,function(a,c){if(c===undefined||c===!1)return!0;e=a.split("_");if(e.length>1){var d=b.find(j+"-"+e[0]);if(d.length>0){var f=e[1];f==="replaceWith"?d[0]!==c[0]&&d.replaceWith(c):f==="img"?d.is("img")?d.attr("src",c):d.replaceWith('<img src="'+c+'" class="'+d.attr("class")+'" />'):d.attr(e[1],c)}}else b.find(j+"-"+a).html(c)})},_getScrollbarSize:function(){if(n.scrollbarSize===undefined){var a=document.createElement("div");a.id="mfp-sbm",a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),n.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return n.scrollbarSize}},a.magnificPopup={instance:null,proto:o.prototype,modules:[],open:function(b,c){return C(),b?b=a.extend(!0,{},b):b={},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Fechar (Esc)",tLoading:"Loading..."}},a.fn.magnificPopup=function(b){C();var c=a(this);if(typeof b=="string")if(b==="open"){var d,e=p?c.data("magnificPopup"):c[0].magnificPopup,f=parseInt(arguments[1],10)||0;e.items?d=e.items[f]:(d=c,e.delegate&&(d=d.find(e.delegate)),d=d.eq(f)),n._openClick({mfpEl:d},c,e)}else n.isOpen&&n[b].apply(n,Array.prototype.slice.call(arguments,1));else b=a.extend(!0,{},b),p?c.data("magnificPopup",b):c[0].magnificPopup=b,n.addGroup(c,b);return c};var F="inline",G,H,I,J=function(){I&&(H.after(I.addClass(G)).detach(),I=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){n.types.push(F),x(b+"."+F,function(){J()})},getInline:function(b,c){J();if(b.src){var d=n.st.inline,e=a(b.src);if(e.length){var f=e[0].parentNode;f&&f.tagName&&(H||(G=d.hiddenClass,H=y(G),G="mfp-"+G),I=e.after(H).detach().removeClass(G)),n.updateStatus("ready")}else n.updateStatus("error",d.tNotFound),e=a("<div>");return b.inlineElement=e,e}return n.updateStatus("ready"),n._parseMarkup(c,{},b),c}}});var K="ajax",L,M=function(){L&&s.removeClass(L)},N=function(){M(),n.req&&n.req.abort()};a.magnificPopup.registerModule(K,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){n.types.push(K),L=n.st.ajax.cursor,x(b+"."+K,N),x("BeforeChange."+K,N)},getAjax:function(b){L&&s.addClass(L),n.updateStatus("loading");var c=a.extend({url:b.src,success:function(c,d,e){var f={data:c,xhr:e};z("ParseAjax",f),n.appendContent(a(f.data),K),b.finished=!0,M(),A(),setTimeout(function(){n.wrap.addClass(k)},16),n.updateStatus("ready"),z("AjaxContentAdded")},error:function(){M(),b.finished=b.loadError=!0,n.updateStatus("error",n.st.ajax.tError.replace("%url%",b.src))}},n.st.ajax.settings);return n.req=a.ajax(c),""}}});var O,P=function(){return O===undefined&&(O=document.createElement("p").style.MozTransform!==undefined),O};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a=n.st.zoom,d=".zoom",e;if(!a.enabled||!n.supportsTransition)return;var f=a.duration,g=function(b){var c=b.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+a.duration/1e3+"s "+a.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,c.css(e),c},h=function(){n.content.css("visibility","visible")},i,j;x("BuildControls"+d,function(){if(n._allowZoom()){clearTimeout(i),n.content.css("visibility","hidden"),e=n._getItemToZoom();if(!e){h();return}j=g(e),j.css(n._getOffset()),n.wrap.append(j),i=setTimeout(function(){j.css(n._getOffset(!0)),i=setTimeout(function(){h(),setTimeout(function(){j.remove(),e=j=null,z("ZoomAnimationEnded")},16)},f)},16)}}),x(c+d,function(){if(n._allowZoom()){clearTimeout(i),n.st.removalDelay=f;if(!e){e=n._getItemToZoom();if(!e)return;j=g(e)}j.css(n._getOffset(!0)),n.wrap.append(j),n.content.css("visibility","hidden"),setTimeout(function(){j.css(n._getOffset())},16)}}),x(b+d,function(){n._allowZoom()&&(h(),j&&j.remove(),e=null)})},_allowZoom:function(){return n.currItem.type==="image"},_getItemToZoom:function(){return n.currItem.hasSize?n.currItem.img:!1},_getOffset:function(b){var c;b?c=n.currItem.img:c=n.st.zoom.opener(n.currItem.el||n.currItem);var d=c.offset(),e=parseInt(c.css("padding-top"),10),f=parseInt(c.css("padding-bottom"),10);d.top-=a(window).scrollTop()-e;var g={width:c.width(),height:(p?c.innerHeight():c[0].offsetHeight)-f-e};return P()?g["-moz-transform"]=g.transform="translate("+d.left+"px,"+d.top+"px)":(g.left=d.left,g.top=d.top),g}}});var Q="iframe",R="//about:blank",S=function(a){if(n.currTemplate[Q]){var b=n.currTemplate[Q].find("iframe");b.length&&(a||(b[0].src=R),n.isIE8&&b.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(Q,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){n.types.push(Q),x("BeforeChange",function(a,b,c){b!==c&&(b===Q?S():c===Q&&S(!0))}),x(b+"."+Q,function(){S()})},getIframe:function(b,c){var d=b.src,e=n.st.iframe;a.each(e.patterns,function(){if(d.indexOf(this.index)>-1)return this.id&&(typeof this.id=="string"?d=d.substr(d.lastIndexOf(this.id)+this.id.length,d.length):d=this.id.call(this,d)),d=this.src.replace("%id%",d),!1});var f={};return e.srcAction&&(f[e.srcAction]=d),n._parseMarkup(c,f,b),n.updateStatus("ready"),c}}}),function(){var b=1e3,c="ontouchstart"in window,d=function(){r.off("touchmove"+f+" touchend"+f)},e="mfpFastClick",f="."+e;a.fn.mfpFastClick=function(e){return a(this).each(function(){var g=a(this),h;if(c){var i,j,k,l,m,n;g.on("touchstart"+f,function(a){l=!1,n=1,m=a.originalEvent?a.originalEvent.touches[0]:a.touches[0],j=m.clientX,k=m.clientY,r.on("touchmove"+f,function(a){m=a.originalEvent?a.originalEvent.touches:a.touches,n=m.length,m=m[0];if(Math.abs(m.clientX-j)>10||Math.abs(m.clientY-k)>10)l=!0,d()}).on("touchend"+f,function(a){d();if(l||n>1)return;h=!0,a.preventDefault(),clearTimeout(i),i=setTimeout(function(){h=!1},b),e()})})}g.on("click"+f,function(){h||e()})})},a.fn.destroyMfpFastClick=function(){a(this).off("touchstart"+f+" click"+f),c&&r.off("touchmove"+f+" touchend"+f)}}()})(window.jQuery||window.Zepto);

// MustacheJS
// https://github.com/janl/mustache.js/
(function(global,factory){if(typeof exports==="object"&&exports){factory(exports)}else if(typeof define==="function"&&define.amd){define(["exports"],factory)}else{factory(global.Mustache={})}})(this,function(mustache){var Object_toString=Object.prototype.toString;var isArray=Array.isArray||function(object){return Object_toString.call(object)==="[object Array]"};function isFunction(object){return typeof object==="function"}function escapeRegExp(string){return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}var RegExp_test=RegExp.prototype.test;function testRegExp(re,string){return RegExp_test.call(re,string)}var nonSpaceRe=/\S/;function isWhitespace(string){return!testRegExp(nonSpaceRe,string)}var entityMap={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function escapeHtml(string){return String(string).replace(/[&<>"'\/]/g,function(s){return entityMap[s]})}var whiteRe=/\s*/;var spaceRe=/\s+/;var equalsRe=/\s*=/;var curlyRe=/\s*\}/;var tagRe=/#|\^|\/|>|\{|&|=|!/;function parseTemplate(template,tags){if(!template)return[];var sections=[];var tokens=[];var spaces=[];var hasTag=false;var nonSpace=false;function stripSpace(){if(hasTag&&!nonSpace){while(spaces.length)delete tokens[spaces.pop()]}else{spaces=[]}hasTag=false;nonSpace=false}var openingTagRe,closingTagRe,closingCurlyRe;function compileTags(tags){if(typeof tags==="string")tags=tags.split(spaceRe,2);if(!isArray(tags)||tags.length!==2)throw new Error("Invalid tags: "+tags);openingTagRe=new RegExp(escapeRegExp(tags[0])+"\\s*");closingTagRe=new RegExp("\\s*"+escapeRegExp(tags[1]));closingCurlyRe=new RegExp("\\s*"+escapeRegExp("}"+tags[1]))}compileTags(tags||mustache.tags);var scanner=new Scanner(template);var start,type,value,chr,token,openSection;while(!scanner.eos()){start=scanner.pos;value=scanner.scanUntil(openingTagRe);if(value){for(var i=0,valueLength=value.length;i<valueLength;++i){chr=value.charAt(i);if(isWhitespace(chr)){spaces.push(tokens.length)}else{nonSpace=true}tokens.push(["text",chr,start,start+1]);start+=1;if(chr==="\n")stripSpace()}}if(!scanner.scan(openingTagRe))break;hasTag=true;type=scanner.scan(tagRe)||"name";scanner.scan(whiteRe);if(type==="="){value=scanner.scanUntil(equalsRe);scanner.scan(equalsRe);scanner.scanUntil(closingTagRe)}else if(type==="{"){value=scanner.scanUntil(closingCurlyRe);scanner.scan(curlyRe);scanner.scanUntil(closingTagRe);type="&"}else{value=scanner.scanUntil(closingTagRe)}if(!scanner.scan(closingTagRe))throw new Error("Unclosed tag at "+scanner.pos);token=[type,value,start,scanner.pos];tokens.push(token);if(type==="#"||type==="^"){sections.push(token)}else if(type==="/"){openSection=sections.pop();if(!openSection)throw new Error('Unopened section "'+value+'" at '+start);if(openSection[1]!==value)throw new Error('Unclosed section "'+openSection[1]+'" at '+start)}else if(type==="name"||type==="{"||type==="&"){nonSpace=true}else if(type==="="){compileTags(value)}}openSection=sections.pop();if(openSection)throw new Error('Unclosed section "'+openSection[1]+'" at '+scanner.pos);return nestTokens(squashTokens(tokens))}function squashTokens(tokens){var squashedTokens=[];var token,lastToken;for(var i=0,numTokens=tokens.length;i<numTokens;++i){token=tokens[i];if(token){if(token[0]==="text"&&lastToken&&lastToken[0]==="text"){lastToken[1]+=token[1];lastToken[3]=token[3]}else{squashedTokens.push(token);lastToken=token}}}return squashedTokens}function nestTokens(tokens){var nestedTokens=[];var collector=nestedTokens;var sections=[];var token,section;for(var i=0,numTokens=tokens.length;i<numTokens;++i){token=tokens[i];switch(token[0]){case"#":case"^":collector.push(token);sections.push(token);collector=token[4]=[];break;case"/":section=sections.pop();section[5]=token[2];collector=sections.length>0?sections[sections.length-1][4]:nestedTokens;break;default:collector.push(token)}}return nestedTokens}function Scanner(string){this.string=string;this.tail=string;this.pos=0}Scanner.prototype.eos=function(){return this.tail===""};Scanner.prototype.scan=function(re){var match=this.tail.match(re);if(!match||match.index!==0)return"";var string=match[0];this.tail=this.tail.substring(string.length);this.pos+=string.length;return string};Scanner.prototype.scanUntil=function(re){var index=this.tail.search(re),match;switch(index){case-1:match=this.tail;this.tail="";break;case 0:match="";break;default:match=this.tail.substring(0,index);this.tail=this.tail.substring(index)}this.pos+=match.length;return match};function Context(view,parentContext){this.view=view==null?{}:view;this.cache={".":this.view};this.parent=parentContext}Context.prototype.push=function(view){return new Context(view,this)};Context.prototype.lookup=function(name){var cache=this.cache;var value;if(name in cache){value=cache[name]}else{var context=this,names,index;while(context){if(name.indexOf(".")>0){value=context.view;names=name.split(".");index=0;while(value!=null&&index<names.length)value=value[names[index++]]}else if(typeof context.view=="object"){value=context.view[name]}if(value!=null)break;context=context.parent}cache[name]=value}if(isFunction(value))value=value.call(this.view);return value};function Writer(){this.cache={}}Writer.prototype.clearCache=function(){this.cache={}};Writer.prototype.parse=function(template,tags){var cache=this.cache;var tokens=cache[template];if(tokens==null)tokens=cache[template]=parseTemplate(template,tags);return tokens};Writer.prototype.render=function(template,view,partials){var tokens=this.parse(template);var context=view instanceof Context?view:new Context(view);return this.renderTokens(tokens,context,partials,template)};Writer.prototype.renderTokens=function(tokens,context,partials,originalTemplate){var buffer="";var self=this;function subRender(template){return self.render(template,context,partials)}var token,value;for(var i=0,numTokens=tokens.length;i<numTokens;++i){token=tokens[i];switch(token[0]){case"#":value=context.lookup(token[1]);if(!value)continue;if(isArray(value)){for(var j=0,valueLength=value.length;j<valueLength;++j){buffer+=this.renderTokens(token[4],context.push(value[j]),partials,originalTemplate)}}else if(typeof value==="object"||typeof value==="string"){buffer+=this.renderTokens(token[4],context.push(value),partials,originalTemplate)}else if(isFunction(value)){if(typeof originalTemplate!=="string")throw new Error("Cannot use higher-order sections without the original template");value=value.call(context.view,originalTemplate.slice(token[3],token[5]),subRender);if(value!=null)buffer+=value}else{buffer+=this.renderTokens(token[4],context,partials,originalTemplate)}break;case"^":value=context.lookup(token[1]);if(!value||isArray(value)&&value.length===0)buffer+=this.renderTokens(token[4],context,partials,originalTemplate);break;case">":if(!partials)continue;value=isFunction(partials)?partials(token[1]):partials[token[1]];if(value!=null)buffer+=this.renderTokens(this.parse(value),context,partials,value);break;case"&":value=context.lookup(token[1]);if(value!=null)buffer+=value;break;case"name":value=context.lookup(token[1]);if(value!=null)buffer+=mustache.escape(value);break;case"text":buffer+=token[1];break}}return buffer};mustache.name="mustache.js";mustache.version="1.0.0";mustache.tags=["{{","}}"];var defaultWriter=new Writer;mustache.clearCache=function(){return defaultWriter.clearCache()};mustache.parse=function(template,tags){return defaultWriter.parse(template,tags)};mustache.render=function(template,view,partials){return defaultWriter.render(template,view,partials)};mustache.to_html=function(template,view,partials,send){var result=mustache.render(template,view,partials);if(isFunction(send)){send(result)}else{return result}};mustache.escape=escapeHtml;mustache.Scanner=Scanner;mustache.Context=Context;mustache.Writer=Writer});

/* mousewheel 3.0.2 */
(function(b) {
	function d(a) {
		var f = [].slice.call(arguments, 1), e = 0;
		a = b.event.fix(a || window.event);
		a.type = "mousewheel";
		if (a.wheelDelta)
			e = a.wheelDelta / 120;
		if (a.detail)
			e = -a.detail / 3;
		f.unshift(a, e);
		return b.event.handle.apply(this, f)
	}
	var c = [ "DOMMouseScroll", "mousewheel" ];
	b.event.special.mousewheel = {
		setup : function() {
			if (this.addEventListener)
				for ( var a = c.length; a;)
					this.addEventListener(c[--a], d, false);
				else
					this.onmousewheel = d
			},
			teardown : function() {
				if (this.removeEventListener)
					for ( var a = c.length; a;)
						this.removeEventListener(c[--a], d, false);
					else
						this.onmousewheel = null
				}
			};
			b.fn.extend({
				mousewheel : function(a) {
					return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
				},
				unmousewheel : function(a) {
					return this.unbind("mousewheel", a)
				}
			})
		})(jQuery);

		/* Bordas Arredondadas */

		borders = function() {

			jQuery('.rBox').each(
				function() {
					if ($(".boxR1", this).length == 0) {
						jQuery(this).css('border', 'none');
						jQuery(this).wrapInner('<div class="boxR1"></div>');
						jQuery(this).find('.boxR1').eq(0).wrapInner(
							'<div class="boxR2"></div>');
						jQuery(this).find('.boxR2').eq(0).wrapInner(
							'<div class="boxR3"></div>');
						jQuery(this).find('.boxR3').eq(0).wrapInner(
							'<div class="boxR4"></div>');
					}
				});
			jQuery('.rBox2')
			.each(
				function() {
					if ($(".boxR1", this).length == 0) {
						if (jQuery(this).css('display') == 'block') {
							jQuery(this)
							.prepend(
								'<div class="boxR1"></div><div class="boxR2"></div><div class="boxR3"></div><div class="boxR4"></div>');
						} else {
							jQuery(this)
							.prepend(
								'<span class="boxR1"></span><span class="boxR2"></span><span class="boxR3"></span><span class="boxR4"></span>');
						}
					}
				});

		};

		/* fancy box */
/*
 * FancyBox - jQuery Plugin Simple and fancy lightbox alternative
 *
 * Examples and documentation at: http://fancybox.net
 *
 * Copyright (c) 2008 - 2010 Janis Skarnelis
 *
 * Version: 1.3.1 (05/03/2010) Requires: jQuery v1.3+
 *
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */

 (function($) {

 	var tmp, loading, overlay, wrap, outer, inner, close, nav_left, nav_right,

 	selectedIndex = 0, selectedOpts = {}, selectedArray = [], currentIndex = 0, currentOpts = {}, currentArray = [],

 	ajaxLoader = null, imgPreloader = new Image(), imgRegExp = /\.(jpg|gif|png|bmp|jpeg)(.*)?$/i, swfRegExp = /[^\.]\.(swf)\s*$/i,

 	loadingTimer, loadingFrame = 1,

 	start_pos, final_pos, busy = false, shadow = 20, fx = $.extend(
 		$('<div/>')[0], {
 			prop : 0
 		}), titleh = 0,

 	isIE6 = !$.support.opacity && !window.XMLHttpRequest,

	/*
	 * Private methods
	 */

	 fancybox_abort = function() {
	 	loading.hide();

	 	imgPreloader.onerror = imgPreloader.onload = null;

	 	if (ajaxLoader) {
	 		ajaxLoader.abort();
	 	}

	 	tmp.empty();
	 },

	 fancybox_error = function() {
	 	$
	 	.fancybox(
	 		'<p id="fancybox_error">The requested content cannot be loaded.<br />Please try again later.</p>',
	 		{
	 			'scrolling' : 'no',
	 			'padding' : 20,
	 			'transitionIn' : 'none',
	 			'transitionOut' : 'none'
	 		});
	 },

	 fancybox_get_viewport = function() {
	 	return [ $(window).width(), $(window).height(),
	 	$(document).scrollLeft(), $(document).scrollTop() ];
	 },

	 fancybox_get_zoom_to = function() {
	 	var view = fancybox_get_viewport(), to = {},

	 	margin = currentOpts.margin, resize = currentOpts.autoScale,

	 	horizontal_space = (shadow + margin) * 2, vertical_space = (shadow + margin) * 2, double_padding = (currentOpts.padding * 2),

	 	ratio;

	 	if (currentOpts.width.toString().indexOf('%') > -1) {
	 		to.width = ((view[0] * parseFloat(currentOpts.width)) / 100)
	 		- (shadow * 2);
	 		resize = false;

	 	} else {
	 		to.width = currentOpts.width + double_padding;
	 	}

	 	if (currentOpts.height.toString().indexOf('%') > -1) {
	 		to.height = ((view[1] * parseFloat(currentOpts.height)) / 100)
	 		- (shadow * 2);
	 		resize = false;

	 	} else {
	 		to.height = currentOpts.height + double_padding;
	 	}

	 	if (resize
	 		&& (to.width > (view[0] - horizontal_space) || to.height > (view[1] - vertical_space))) {
	 		if (selectedOpts.type == 'image' || selectedOpts.type == 'swf') {
	 			horizontal_space += double_padding;
	 			vertical_space += double_padding;

	 			ratio = Math.min(Math.min(view[0] - horizontal_space,
	 				currentOpts.width)
	 			/ currentOpts.width, Math.min(view[1] - vertical_space,
	 				currentOpts.height)
	 			/ currentOpts.height);

	 			to.width = Math.round(ratio * (to.width - double_padding))
	 			+ double_padding;
	 			to.height = Math.round(ratio * (to.height - double_padding))
	 			+ double_padding;

	 		} else {
	 			to.width = Math.min(to.width, (view[0] - horizontal_space));
	 			to.height = Math.min(to.height, (view[1] - vertical_space));
	 		}
	 	}

	 	to.top = view[3] + ((view[1] - (to.height + (shadow * 2))) * 0.5);
	 	to.left = view[2] + ((view[0] - (to.width + (shadow * 2))) * 0.5);

	 	if (currentOpts.autoScale === false) {
	 		to.top = Math.max(view[3] + margin, to.top);
	 		to.left = Math.max(view[2] + margin, to.left);
	 	}

	 	return to;
	 },

	 fancybox_format_title = function(title) {
	 	if (title && title.length) {
	 		switch (currentOpts.titlePosition) {
	 			case 'inside':
	 			return title;
	 			case 'over':
	 			return '<span id="fancybox-title-over">' + title + '</span>';
	 			default:
	 			return '<span id="fancybox-title-wrap"><span id="fancybox-title-left"></span><span id="fancybox-title-main">'
	 			+ title
	 			+ '</span><span id="fancybox-title-right"></span></span>';
	 		}
	 	}

	 	return false;
	 },

	 fancybox_process_title = function() {
	 	var title = currentOpts.title, width = final_pos.width
	 	- (currentOpts.padding * 2), titlec = 'fancybox-title-'
	 	+ currentOpts.titlePosition;

	 	$('#fancybox-title').remove();

	 	titleh = 0;

	 	if (currentOpts.titleShow === false) {
	 		return;
	 	}

	 	title = $.isFunction(currentOpts.titleFormat) ? currentOpts
	 	.titleFormat(title, currentArray, currentIndex, currentOpts)
	 	: fancybox_format_title(title);

	 	if (!title || title === '') {
	 		return;
	 	}

	 	$('<div id="fancybox-title" class="' + titlec + '" />').css({
	 		'width' : width,
	 		'paddingLeft' : currentOpts.padding,
	 		'paddingRight' : currentOpts.padding
	 	}).html(title).appendTo('body');

	 	switch (currentOpts.titlePosition) {
	 		case 'inside':
	 		titleh = $("#fancybox-title").outerHeight(true)
	 		- currentOpts.padding;
	 		final_pos.height += titleh;
	 		break;

	 		case 'over':
	 		$('#fancybox-title').css('bottom', currentOpts.padding);
	 		break;

	 		default:
	 		$('#fancybox-title').css('bottom',
	 			$("#fancybox-title").outerHeight(true) * -1);
	 		break;
	 	}

	 	$('#fancybox-title').appendTo(outer).hide();
	 },

	 fancybox_set_navigation = function() {
	 	$(document).unbind('keydown.fb').bind('keydown.fb', function(e) {
	 		if (e.keyCode == 27 && currentOpts.enableEscapeButton) {
	 			e.preventDefault();
	 			$.fancybox.close();

	 		} else if (e.keyCode == 37) {
	 			e.preventDefault();
	 			$.fancybox.prev();

	 		} else if (e.keyCode == 39) {
	 			e.preventDefault();
	 			$.fancybox.next();
	 		}
	 	});

	 	if ($.fn.mousewheel) {
	 		wrap.unbind('mousewheel.fb');

	 		if (currentArray.length > 1) {
	 			wrap.bind('mousewheel.fb', function(e, delta) {
	 				e.preventDefault();

	 				if (busy || delta === 0) {
	 					return;
	 				}

	 				if (delta > 0) {
	 					$.fancybox.prev();
	 				} else {
	 					$.fancybox.next();
	 				}
	 			});
	 		}
	 	}

	 	if (!currentOpts.showNavArrows) {
	 		return;
	 	}

	 	if ((currentOpts.cyclic && currentArray.length > 1)
	 		|| currentIndex !== 0) {
	 		nav_left.show();
	 }

	 if ((currentOpts.cyclic && currentArray.length > 1)
	 	|| currentIndex != (currentArray.length - 1)) {
	 	nav_right.show();
	}
},

fancybox_preload_images = function() {
	var href, objNext;

	if ((currentArray.length - 1) > currentIndex) {
		href = currentArray[currentIndex + 1].href;

		if (typeof href !== 'undefined' && href.match(imgRegExp)) {
			objNext = new Image();
			objNext.src = href;
		}
	}

	if (currentIndex > 0) {
		href = currentArray[currentIndex - 1].href;

		if (typeof href !== 'undefined' && href.match(imgRegExp)) {
			objNext = new Image();
			objNext.src = href;
		}
	}
},

_finish = function() {
	inner
	.css(
		'overflow',
		(currentOpts.scrolling == 'auto' ? (currentOpts.type == 'image'
			|| currentOpts.type == 'iframe'
			|| currentOpts.type == 'swf' ? 'hidden'
			: 'auto')
		: (currentOpts.scrolling == 'yes' ? 'auto'
			: 'visible')));

	if (!$.support.opacity) {
		inner.get(0).style.removeAttribute('filter');
		wrap.get(0).style.removeAttribute('filter');
	}

	$('#fancybox-title').show();

	if (currentOpts.hideOnContentClick) {
		inner.one('click', $.fancybox.close);
	}
	if (currentOpts.hideOnOverlayClick) {
		overlay.one('click', $.fancybox.close);
	}

	if (currentOpts.showCloseButton) {
		close.show();
	}

	fancybox_set_navigation();

	$(window).bind("resize.fb", $.fancybox.center);

	if (currentOpts.centerOnScroll) {
		$(window).bind("scroll.fb", $.fancybox.center);
	} else {
		$(window).unbind("scroll.fb");
	}

	if ($.isFunction(currentOpts.onComplete)) {
		currentOpts.onComplete(currentArray, currentIndex, currentOpts);
	}

	busy = false;

	fancybox_preload_images();
},

fancybox_draw = function(pos) {
	var width = Math.round(start_pos.width
		+ (final_pos.width - start_pos.width) * pos), height = Math
	.round(start_pos.height + (final_pos.height - start_pos.height)
		* pos),

	top = Math.round(start_pos.top + (final_pos.top - start_pos.top) * pos), left = Math
	.round(start_pos.left + (final_pos.left - start_pos.left) * pos);

	wrap.css({
		'width' : width + 'px',
		'height' : height + 30 + 'px',
		'top' : top + 'px',
		'left' : left + 'px'
	});

		// width = Math.max(width - currentOpts.padding * 2, 0);
		// height = Math.max(height - (currentOpts.padding * 2 + (titleh *
		// pos)), 0);
inner.css({
	'width' : width - 30 + 'px',
	'height' : height - 30 + 'px'
});
$("#fancy-bg-n, #fancy-bg-s").width(width - 30);
$("#fancy-bg-e, #fancy-bg-w").height(height - 30);
if (typeof final_pos.opacity !== 'undefined') {
	wrap.css('opacity', (pos < 0.5 ? 0.5 : pos));
}
},

fancybox_get_obj_pos = function(obj) {
	var pos = obj.offset();

	pos.top += parseFloat(obj.css('paddingTop')) || 0;
	pos.left += parseFloat(obj.css('paddingLeft')) || 0;

	pos.top += parseFloat(obj.css('border-top-width')) || 0;
	pos.left += parseFloat(obj.css('border-left-width')) || 0;

	pos.width = obj.width();
	pos.height = obj.height();

	return pos;
},

fancybox_get_zoom_from = function() {
	var orig = selectedOpts.orig ? $(selectedOpts.orig) : false, from = {}, pos, view;

	if (orig && orig.length) {
		pos = fancybox_get_obj_pos(orig);

		from = {
			width : (pos.width + (currentOpts.padding * 2)),
			height : (pos.height + (currentOpts.padding * 2)),
			top : (pos.top - currentOpts.padding - shadow),
			left : (pos.left - currentOpts.padding - shadow)
		};

	} else {
		view = fancybox_get_viewport();

		from = {
			width : 1,
			height : 1,
			top : view[3] + view[1] * 0.5,
			left : view[2] + view[0] * 0.5
		};
	}

	return from;
},

fancybox_show = function() {
	loading.hide();

	if (wrap.is(":visible") && $.isFunction(currentOpts.onCleanup)) {
		if (currentOpts.onCleanup(currentArray, currentIndex, currentOpts) === false) {
			$.event.trigger('fancybox-cancel');

			busy = false;
			return;
		}
	}

	currentArray = selectedArray;
	currentIndex = selectedIndex;
	currentOpts = selectedOpts;

	inner.get(0).scrollTop = 0;
	inner.get(0).scrollLeft = 0;

	if (currentOpts.overlayShow) {
		if (isIE6) {
			$('select:not(#fancybox-tmp select)').filter(function() {
				return this.style.visibility !== 'hidden';
			}).css({
				'visibility' : 'hidden'
			}).one('fancybox-cleanup', function() {
				this.style.visibility = 'inherit';
			});
		}

		overlay.css({
			'background-color' : currentOpts.overlayColor,
			'opacity' : currentOpts.overlayOpacity
		}).unbind().show();
	}

	final_pos = fancybox_get_zoom_to();
	fancybox_process_title();

	if (wrap.is(":visible")) {
		$(close.add(nav_left).add(nav_right)).hide();

		var pos = wrap.position(), equal;

		start_pos = {
			top : pos.top,
			left : pos.left,
			width : wrap.width(),
			height : wrap.height()
		};

		equal = (start_pos.width == final_pos.width && start_pos.height == final_pos.height);

		inner.fadeOut(currentOpts.changeFade, function() {
			var finish_resizing = function() {
				inner.html(tmp.contents()).fadeIn(currentOpts.changeFade,
					_finish);
			};

			$.event.trigger('fancybox-change');

			inner.empty().css('overflow', 'hidden');

			if (equal) {
					/*
					 * inner.css({ top : currentOpts.padding, left :
					 * currentOpts.padding, width : Math.max(final_pos.width -
					 * (currentOpts.padding * 2), 1), height :
					 * Math.max(final_pos.height - (currentOpts.padding * 2) -
					 * titleh, 1) });
		*/
		$("#fancy-bg-n, #fancy-bg-s").width(
			Math.max(final_pos.width
				- (currentOpts.padding * 2), 1));
		$("#fancy-bg-e, #fancy-bg-w").height(
			Math.max(final_pos.height
				- (currentOpts.padding * 2) - titleh, 1));
		finish_resizing();

	} else {
					/*
					 * inner.css({ top : currentOpts.padding, left :
					 * currentOpts.padding, width : Math.max(start_pos.width -
					 * (currentOpts.padding * 2), 1), height :
					 * Math.max(start_pos.height - (currentOpts.padding * 2), 1)
					 * });
*/
$("#fancy-bg-n, #fancy-bg-s").width(
	Math.max(start_pos.width
		- (currentOpts.padding * 2), 1));
$("#fancy-bg-e, #fancy-bg-w").height(
	Math.max(start_pos.height
		- (currentOpts.padding * 2), 1) - 30);
fx.prop = 0;

$(fx).animate({
	prop : 1
}, {
	duration : currentOpts.changeSpeed,
	easing : currentOpts.easingChange,
	step : fancybox_draw,
	complete : finish_resizing
});
}
});

return;
}

wrap.css('opacity', 1);

if (currentOpts.transitionIn == 'elastic') {
	start_pos = fancybox_get_zoom_from();

	inner.css(
	{
		width : Math.max(start_pos.width
			- (currentOpts.padding * 2), 1),
		height : Math.max(start_pos.height
			- (currentOpts.padding * 2), 1)
	}).html(tmp.contents());

	$("#fancy-bg-n, #fancy-bg-s").width(
		Math.max(start_pos.width - (currentOpts.padding * 2), 1));
	$("#fancy-bg-e, #fancy-bg-w")
	.height(
		Math.max(start_pos.height
			- (currentOpts.padding * 2), 1) - 30);

			// inner.html( tmp.contents() );

			wrap.css(start_pos).show();

			if (currentOpts.opacity) {
				final_pos.opacity = 0;
			}

			fx.prop = 0;

			$(fx).animate({
				prop : 1
			}, {
				duration : currentOpts.speedIn,
				easing : currentOpts.easingIn,
				step : fancybox_draw,
				complete : _finish
			});

		} else {
			inner.css(
			{
				width : Math.max(final_pos.width
					- (currentOpts.padding * 2), 1),
				height : Math.max(final_pos.height
					- (currentOpts.padding * 2) - titleh, 1)

			}).html(tmp.contents());

			$("#fancy-bg-n, #fancy-bg-s").width(
				Math.max(final_pos.width - (currentOpts.padding * 2), 1));
			$("#fancy-bg-e, #fancy-bg-w").height(
				Math.max(final_pos.height - (currentOpts.padding * 2)
					- titleh, 1));

			if (selectedOpts.type == 'swf') {
				final_pos.height += 60;
				final_pos.width += 30;
			} else {
				final_pos.height += 30;
			}
			wrap.css(final_pos).fadeIn(
				currentOpts.transitionIn == 'none' ? 0
				: currentOpts.speedIn, _finish);
		}
	},

	fancybox_process_inline = function() {
		tmp.width(selectedOpts.width);
		tmp.height(selectedOpts.height);

		if (selectedOpts.width == 'auto') {
			selectedOpts.width = tmp.width();
		}
		if (selectedOpts.height == 'auto') {
			selectedOpts.height = tmp.height();
		}

		fancybox_show();
	},

	fancybox_process_image = function() {
		busy = true;

		selectedOpts.width = imgPreloader.width;
		selectedOpts.height = imgPreloader.height;

		$("<img />").attr({
			'id' : 'fancybox-img',
			'src' : imgPreloader.src,
			'alt' : selectedOpts.title
		}).appendTo(tmp);

		fancybox_show();
	},

	fancybox_start = function() {
		fancybox_abort();

		var obj = selectedArray[selectedIndex], href, type, title, str, emb, selector, data;

		selectedOpts = $.extend({}, $.fn.fancybox.defaults, (typeof $(obj)
			.data('fancybox') == 'undefined' ? selectedOpts : $(obj).data(
				'fancybox')));
		title = obj.title || $(obj).title || selectedOpts.title || '';

		if (obj.nodeName && !selectedOpts.orig) {
			selectedOpts.orig = $(obj).children("img:first").length ? $(obj)
			.children("img:first") : $(obj);
		}

		if (title === '' && selectedOpts.orig) {
			title = selectedOpts.orig.attr('alt');
		}

		if (obj.nodeName && (/^(?:javascript|#)/i).test(obj.href)) {
			href = selectedOpts.href || null;
		} else {
			href = selectedOpts.href || obj.href || null;
		}

		if (selectedOpts.type) {
			type = selectedOpts.type;

			if (!href) {
				href = selectedOpts.content;
			}

		} else if (selectedOpts.content) {
			type = 'html';

		} else if (href) {
			if (href.match(imgRegExp)) {
				type = 'image';

			} else if (href.match(swfRegExp)) {
				type = 'swf';

			} else if ($(obj).hasClass("iframe")) {
				type = 'iframe';

			} else if (href.match(/#/)) {
				obj = href.substr(href.indexOf("#"));

				type = $(obj).length > 0 ? 'inline' : 'ajax';
			} else {
				type = 'ajax';
			}
		} else {
			type = 'inline';
		}

		selectedOpts.type = type;
		selectedOpts.href = href;
		selectedOpts.title = title;

		if (selectedOpts.autoDimensions && selectedOpts.type !== 'iframe'
			&& selectedOpts.type !== 'swf') {
			selectedOpts.width = 'auto';
		selectedOpts.height = 'auto';
	}

	if (selectedOpts.modal) {
		selectedOpts.overlayShow = true;
		selectedOpts.hideOnOverlayClick = false;
		selectedOpts.hideOnContentClick = false;
		selectedOpts.enableEscapeButton = false;
		selectedOpts.showCloseButton = false;
	}

	if ($.isFunction(selectedOpts.onStart)) {
		if (selectedOpts
			.onStart(selectedArray, selectedIndex, selectedOpts) === false) {
			busy = false;
		return;
	}
}

tmp.css('padding',
	(shadow + selectedOpts.padding + selectedOpts.margin));

$('.fancybox-inline-tmp').unbind('fancybox-cancel').bind(
	'fancybox-change', function() {
		$(this).replaceWith(inner.children());
	});

switch (type) {
	case 'html':
	tmp.html(selectedOpts.content);
	fancybox_process_inline();
	break;

	case 'inline':
	$('<div class="fancybox-inline-tmp" />').hide()
	.insertBefore($(obj)).bind('fancybox-cleanup', function() {
		$(this).replaceWith(inner.children());
	}).bind('fancybox-cancel', function() {
		$(this).replaceWith(tmp.children());
	});

	$(obj).appendTo(tmp);

	fancybox_process_inline();
	break;

	case 'image':
	busy = false;

	$.fancybox.showActivity();

	imgPreloader = new Image();

	imgPreloader.onerror = function() {
		fancybox_error();
	};

	imgPreloader.onload = function() {
		imgPreloader.onerror = null;
		imgPreloader.onload = null;
		fancybox_process_image();
	};

	imgPreloader.src = href;

	break;

	case 'swf':
	str = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'
	+ selectedOpts.width
	+ '" height="'
	+ selectedOpts.height
	+ '"><param name="movie" value="' + href + '"></param>';
	emb = '';

	$.each(selectedOpts.swf, function(name, val) {
		str += '<param name="' + name + '" value="' + val
		+ '"></param>';
		emb += ' ' + name + '="' + val + '"';
	});

	str += '<embed src="' + href
	+ '" type="application/x-shockwave-flash" width="'
	+ selectedOpts.width + '" height="' + selectedOpts.height
	+ '"' + emb + '></embed></object>';

	tmp.html(str);

	fancybox_process_inline();
	break;

	case 'ajax':
	selector = href.split('#', 2);
	data = selectedOpts.ajax.data || {};

	if (selector.length > 1) {
		href = selector[0];

		if (typeof data == "string") {
			data += '&selector=' + selector[1];
		} else {
			data.selector = selector[1];
		}
	}

	busy = false;
	$.fancybox.showActivity();

	ajaxLoader = $.ajax($.extend(selectedOpts.ajax, {
		url : href,
		data : data,
		error : fancybox_error,
		success : function(data, textStatus, XMLHttpRequest) {
			if (ajaxLoader.status == 200) {
				tmp.html(data);
				fancybox_process_inline();
			}
		}
	}));

	break;

	case 'iframe':
	$(
		'<iframe id="fancybox-frame" name="fancybox-frame'
		+ new Date().getTime()
		+ '" frameborder="0" hspace="0" scrolling="'
		+ selectedOpts.scrolling + '" src="'
		+ selectedOpts.href + '"></iframe>').appendTo(tmp);
	fancybox_show();
	break;
}
},

fancybox_animate_loading = function() {
	if (!loading.is(':visible')) {
		clearInterval(loadingTimer);
		return;
	}

	$('div', loading).css('top', (loadingFrame * -40) + 'px');

	loadingFrame = (loadingFrame + 1) % 12;
},

fancybox_init = function() {
	if ($("#fancybox-wrap").length) {
		return;
	}

	$('body').append(tmp = $('<div id="fancybox-tmp"></div>'),
		loading = $('<div id="fancybox-loading"><div></div></div>'),
		overlay = $('<div id="fancybox-overlay"></div>'),
		wrap = $('<div id="fancybox-wrap"></div>'));

	if (!$.support.opacity) {
		wrap.addClass('fancybox-ie');
		loading.addClass('fancybox-ie');
	}

	outer = $('<div id="fancybox-outer"></div>')
	.append(
		'<div class="fancy-bg" id="fancy-bg-n"></div><div class="fancy-bg" id="fancy-bg-ne"></div><div class="fancy-bg" id="fancy-bg-e"></div><div class="fancy-bg" id="fancy-bg-se"></div><div class="fancy-bg" id="fancy-bg-s"></div><div class="fancy-bg" id="fancy-bg-sw"></div><div class="fancy-bg" id="fancy-bg-w"></div><div class="fancy-bg" id="fancy-bg-nw"></div>')
	.appendTo(wrap);

	outer
	.append(
		inner = $('<div id="fancybox-inner"></div>'),
		close = $('<a id="fancybox-close"></a>'),

		nav_left = $('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'),
		nav_right = $('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>'));

	close.click($.fancybox.close);
	loading.click($.fancybox.cancel);

	nav_left.click(function(e) {
		e.preventDefault();
		$.fancybox.prev();
	});

	nav_right.click(function(e) {
		e.preventDefault();
		$.fancybox.next();
	});

	if (isIE6) {
		overlay.get(0).style
		.setExpression(
			'height',
			"document.body.scrollHeight > document.body.offsetHeight ? document.body.scrollHeight : document.body.offsetHeight + 'px'");
		loading.get(0).style
		.setExpression(
			'top',
			"(-20 + (document.documentElement.clientHeight ? document.documentElement.clientHeight/2 : document.body.clientHeight/2 ) + ( ignoreMe = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop )) + 'px'");

			// outer.prepend('<iframe id="fancybox-hide-sel-frame2"
			// src="javascript:\'\';" scrolling="no" frameborder="0"
			// ></iframe>');
}
};

	/*
	 * Public methods
	 */

	 $.fn.fancybox = function(options) {
	 	$(this).data('fancybox',
	 		$.extend({}, options, ($.metadata ? $(this).metadata() : {})))
	 	.unbind('click.fb').bind(
	 		'click.fb',
	 		function(e) {
	 			e.preventDefault();

	 			if (busy) {
	 				return;
	 			}

	 			busy = true;

	 			$(this).blur();

	 			selectedArray = [];
	 			selectedIndex = 0;

	 			var rel = $(this).attr('rel') || '';

	 			if (!rel || rel == '' || rel === 'nofollow') {
	 				selectedArray.push(this);

	 			} else {
	 				selectedArray = $("a[rel=" + rel
	 					+ "], area[rel=" + rel + "]");
	 				selectedIndex = selectedArray.index(this);
	 			}

	 			fancybox_start();

	 			return false;
	 		});

	 	return this;
	 };

	 $.fancybox = function(obj) {
	 	if (busy) {
	 		return;
	 	}

	 	busy = true;

	 	var opts = typeof arguments[1] !== 'undefined' ? arguments[1] : {};

	 	selectedArray = [];
	 	selectedIndex = opts.index || 0;

	 	if ($.isArray(obj)) {
	 		for ( var i = 0, j = obj.length; i < j; i++) {
	 			if (typeof obj[i] == 'object') {
	 				$(obj[i]).data('fancybox', $.extend({}, opts, obj[i]));
	 			} else {
	 				obj[i] = $({}).data('fancybox', $.extend({
	 					content : obj[i]
	 				}, opts));
	 			}
	 		}

	 		selectedArray = jQuery.merge(selectedArray, obj);

	 	} else {
	 		if (typeof obj == 'object') {
	 			$(obj).data('fancybox', $.extend({}, opts, obj));
	 		} else {
	 			obj = $({}).data('fancybox', $.extend({
	 				content : obj
	 			}, opts));
	 		}

	 		selectedArray.push(obj);
	 	}

	 	if (selectedIndex > selectedArray.length || selectedIndex < 0) {
	 		selectedIndex = 0;
	 	}

	 	fancybox_start();
	 };

	 $.fancybox.showActivity = function() {
	 	clearInterval(loadingTimer);

	 	loading.show();
	 	loadingTimer = setInterval(fancybox_animate_loading, 66);
	 };

	 $.fancybox.hideActivity = function() {
	 	loading.hide();
	 };

	 $.fancybox.next = function() {
	 	return $.fancybox.pos(currentIndex + 1);
	 };

	 $.fancybox.prev = function() {
	 	return $.fancybox.pos(currentIndex - 1);
	 };

	 $.fancybox.pos = function(pos) {
	 	if (busy) {
	 		return;
	 	}

	 	pos = parseInt(pos, 10);

	 	if (pos > -1 && currentArray.length > pos) {
	 		selectedIndex = pos;
	 		fancybox_start();
	 	}

	 	if (currentOpts.cyclic && currentArray.length > 1 && pos < 0) {
	 		selectedIndex = currentArray.length - 1;
	 		fancybox_start();
	 	}

	 	if (currentOpts.cyclic && currentArray.length > 1
	 		&& pos >= currentArray.length) {
	 		selectedIndex = 0;
	 	fancybox_start();
	 }

	 return;
	};

	$.fancybox.cancel = function() {
		if (busy) {
			return;
		}

		busy = true;

		$.event.trigger('fancybox-cancel');

		fancybox_abort();

		if (selectedOpts && $.isFunction(selectedOpts.onCancel)) {
			selectedOpts.onCancel(selectedArray, selectedIndex, selectedOpts);
		}

		busy = false;
	};

	// Note: within an iframe use - parent.$.fancybox.close();
	$.fancybox.close = function() {
		if (busy || wrap.is(':hidden')) {
			return;
		}

		busy = true;

		if (currentOpts && $.isFunction(currentOpts.onCleanup)) {
			if (currentOpts.onCleanup(currentArray, currentIndex, currentOpts) === false) {
				busy = false;
				return;
			}
		}

		fancybox_abort();

		$(close.add(nav_left).add(nav_right)).hide();

		$('#fancybox-title').remove();

		wrap.add(inner).add(overlay).unbind();

		$(window).unbind("resize.fb scroll.fb");
		$(document).unbind('keydown.fb');

		function _cleanup() {
			overlay.fadeOut('fast');

			wrap.hide();

			$.event.trigger('fancybox-cleanup');

			inner.empty();

			if ($.isFunction(currentOpts.onClosed)) {
				currentOpts.onClosed(currentArray, currentIndex, currentOpts);
			}

			currentArray = selectedOpts = [];
			currentIndex = selectedIndex = 0;
			currentOpts = selectedOpts = {};

			busy = false;
		}

		inner.css('overflow', 'hidden');

		if (currentOpts.transitionOut == 'elastic') {
			start_pos = fancybox_get_zoom_from();

			var pos = wrap.position();

			final_pos = {
				top : pos.top,
				left : pos.left,
				width : wrap.width(),
				height : wrap.height()
			};

			if (currentOpts.opacity) {
				final_pos.opacity = 1;
			}

			fx.prop = 1;

			$(fx).animate({
				prop : 0
			}, {
				duration : currentOpts.speedOut,
				easing : currentOpts.easingOut,
				step : fancybox_draw,
				complete : _cleanup
			});

		} else {
			wrap.fadeOut(currentOpts.transitionOut == 'none' ? 0
				: currentOpts.speedOut, _cleanup);
		}
	};

	$.fancybox.resize = function() {
		var c, h;

		if (busy || wrap.is(':hidden')) {
			return;
		}

		busy = true;

		c = inner.wrapInner("<div style='overflow:auto'></div>").children();
		h = c.height();

		wrap.css({
			height : h + (currentOpts.padding * 2) + titleh
		});
		inner.css({
			height : h
		});

		c.replaceWith(c.children());

		$.fancybox.center();
	};
	$.fancybox.forceResizeTo = function(w, h) {
		var c;

		if (busy || wrap.is(':hidden')) {
			return;
		}

		busy = true;

		c = inner.wrapInner("<div style='overflow:auto'></div>").children();
		// h = c.height();
		// alert()
		wrap.css({
			height : h + (currentOpts.padding * 2) + titleh,
			width : w + (currentOpts.padding * 2)
		});
		inner.css({
			height : h - 30,
			width : w
		});

		$("#fancy-bg-n,#fancy-bg-s").width(w);
		$("#fancy-bg-w,#fancy-bg-e").height(h - (currentOpts.padding * 2));
		c.replaceWith(c.children());

		$.fancybox.center();
	};
	$.fancybox.center = function() {
		busy = true;

		var view = fancybox_get_viewport(), margin = currentOpts.margin, to = {};

		to.top = view[3]
		+ ((view[1] - ((wrap.height() - titleh) + (shadow * 2))) * 0.5);
		to.left = view[2] + ((view[0] - (wrap.width() + (shadow * 2))) * 0.5);

		to.top = Math.max(view[3] + margin, to.top);
		to.left = Math.max(view[2] + margin, to.left);

		wrap.css(to);

		busy = false;
	};

	$.fn.fancybox.defaults = {
		padding : 15,
		margin : 20,
		opacity : false,
		modal : false,
		cyclic : false,
		scrolling : 'auto', // 'auto', 'yes' or 'no'

		width : 560,
		height : 340,

		autoScale : true,
		autoDimensions : true,
		centerOnScroll : false,

		ajax : {},
		swf : {
			wmode : 'transparent'
		},

		hideOnOverlayClick : true,
		hideOnContentClick : false,

		overlayShow : true,
		overlayOpacity : 0.3,
		overlayColor : '#666',

		titleShow : false,
		titlePosition : 'outside', // 'outside', 'inside' or 'over'
		titleFormat : null,

		transitionIn : 'none', // 'elastic', 'fade' or 'none'
		transitionOut : 'none', // 'elastic', 'fade' or 'none'

		speedIn : 300,
		speedOut : 300,

		changeSpeed : 300,
		changeFade : 'fast',

		easingIn : 'swing',
		easingOut : 'swing',

		showCloseButton : true,
		showNavArrows : true,
		enableEscapeButton : true,

		onStart : null,
		onCancel : null,
		onComplete : borders(),
		onCleanup : null,
		onClosed : null
	};

	$(document).ready(function() {
		fancybox_init();
	});

})(jQuery);

/*
 * funcao para corrigir problema do IE de nao reconhecer o valor relativo que
 * vem attr href
 */
 ;(function($){
 	jQuery.fn.relativeHref = function(){
 		var url = $(this).get(0);
 		if($(this).is("a")) {
 			var res = url.pathname+url.search+url.hash;
 			if(res[0] != "/") {
 				res = "/"+res;
 			}
 			return res;
 		}
 		else {
 			var href = $(this).attr('data-url'), a = document.createElement('a');
 			a.setAttribute('href', href);
 			a.innerHTML = ".";
 			var res = a.pathname+a.search+a.hash;
 			if(res[0] != "/") {
 				res = "/"+res;
 			}
 			return res;
 		}
 	};
 })(jQuery);
 jQuery.fn.contentToggle = function(x, y) {
 	this.each(function() {
 		this.innerHTML = (this.innerHTML == y) ? x : y;
 	});
 };
 jQuery.fn.accordion = function(type) {
 	var count = 0;
 	switch (type) {
 		case 'click':
 		jQuery(this).click(
 			function() {
 				if (!jQuery(this).hasClass('open') && count == 0) {
 					count = 1;
 					jQuery(this).parent().find('>li').removeClass('open')
 					.addClass('close');
 					jQuery(this).parent().find('>li .handler').next()
 					.slideUp('fast');
 					jQuery(this).removeClass('close').addClass('open');
 					jQuery(this).find('.handler').next().slideDown('fast',
 						function() {
 							setTimeout(function() {
 								count = 0
 							}, 30);
 						});
 				}
 				return false;
 			}).parent().find('>li .handler').next().hide();
 		break;
 		case 'hover':
 		default:
 		jQuery(this).hover(
 			function() {
 				if (!jQuery(this).hasClass('open') && count == 0) {
 					count = 1;
 					jQuery(this).parent().find('>li').removeClass('open')
 					.addClass('close');
 					jQuery(this).parent().find('>li .handler').next()
 					.slideUp('fast');
 					jQuery(this).removeClass('close').addClass('open');
 					jQuery(this).find('.handler').next().slideDown('fast',
 						function() {
 							setTimeout(function() {
 								count = 0
 							}, 30);
 						});
 				}

 			}).parent().find('>li .handler').next().hide();
 		break;
 	}
 	jQuery(this).parent().find('>li:first .handler').next().show();
 	jQuery(this).parent().find('>li:first').eq(0).addClass('open');
 };
 jQuery.fn.banner = function(bannerType) {
 	var velocity = 5000;
 	var aniVel = 500;
 	var node = jQuery(this);
 	var bannerList = jQuery(node).find('.bList');
 	var lBanner = jQuery(node).find('.bList li');
 	if (jQuery(node).parent().hasClass('aBnr')) {
 		switch (bannerType) {
 			case 'scroller':
 			break;
 			case 'arrows':
 			var bpl = (jQuery(node).hasClass('banner03')) ? 3 : 2;
 			if (jQuery(lBanner).length > bpl) {
 				jQuery(bannerList).wrap('<div class="wBlist"></div>');
				// jQuery(node).find('.wBlist').css({'width':
				// (jQuery(node).width())});
jQuery(node)
.append(
	'<span id="bt-prev-carousel" class="prev"><span class="ico prev-carousel" href="#">&#8226;</span></span><span id="bt-next-carousel" class="next"><span class="ico next-carousel" href="#">&#8226;</span></span>');
var wBanner = jQuery(lBanner).eq(0).width();
jQuery(bannerList).css({
	'width' : (wBanner * lBanner.length) + (lBanner.length)
});
if (bpl == 2) {
	jQuery(node).find('.bList li:odd').addClass('odd');
}
jQuery(lBanner).each(function(i) {
	if (bpl == 3) {
		if (i % 3 != 0) {
			jQuery(this).addClass('odd');
		}
	}
	jQuery(this).css({
		'width' : wBanner,
		'left' : (wBanner) * i
	});
});
var totalLeft = (wBanner * ((lBanner.length) - bpl)) * (-1);
jQuery('#bt-prev-carousel').click(function() {
	blScroll('prev');
	clearInterval(bannerInt);
});
jQuery('#bt-next-carousel').click(function() {
	blScroll('next');
	clearInterval(bannerInt);
});
var bannerInt = setInterval(function() {
	blScroll('next');
}, velocity);
function blScroll(dir) {
	if (dir == 'next') {
		var listLeft = jQuery(node).find('.bList').css('left');
		listLeft = listLeft.slice(0, -2);
		if (listLeft > totalLeft) {
			jQuery(bannerList).animate({
				left : '-=' + (wBanner * bpl)
			}, aniVel);
		} else {
			jQuery(bannerList).animate({
				left : '0'
			}, aniVel);
		}
	} else if (dir == 'prev') {
		var listLeft = jQuery(node).find('.bList').css('left');
		listLeft = listLeft.slice(0, -2);
		if (listLeft < 0) {
			jQuery(bannerList).animate({
				left : '+=' + (wBanner * bpl)
			}, aniVel);
		} else {
			jQuery(bannerList).animate({
				left : totalLeft
			}, aniVel);
		}
	}
}
}
break;
case 'paginated':
default:
var tBanner = jQuery(lBanner).length;
var bPag = '';
if (tBanner > 1) {
	bPag = '<div class="box2"><div class="boxR1"><div class="boxR2"><ul class="pag">';
	for (i = 1; i <= tBanner; i++) {
		var onClass = '';
		if (i == 1) {
			onClass = ' class="on"'
		}
		bPag += '<li' + onClass + '>' + i + '</li>';
	}

	bPag += '<li class="ct"><span class="ico pgPause">pause</span></li></ul></div></div></div>';
}
jQuery(node).append(bPag);
jQuery(node).find('div.box2').css(
{
	'margin-left' : '-'	+ jQuery(node).find('div.box2').eq(0).width()/ 2 + 'px'
});
jQuery(lBanner).each(function() {
	if (!jQuery(this).hasClass('on')) {
		jQuery(this).hide();
	} else {
		jQuery(this).hide().show();
	}
});
var bannerInt = setInterval(function() {
	randBanner()
}, velocity);
function randBanner() {
	if (jQuery(node).find('.bList li.on').next().length > 0) {
		jQuery(node).find('.bList li.on').fadeOut('slow')
		.removeClass('on').next().addClass('on').fadeIn();
	} else {
		jQuery(node).find('.bList li:last').fadeOut('slow')
		.removeClass('on');
		jQuery(node).find('.bList li:first').fadeIn()
		.addClass('on');
	}
	if (!jQuery(node).find('ul.pag li.on').next().hasClass('ct')) {
		jQuery(node).find('ul.pag li.on').removeClass('on').next()
		.addClass('on');
	} else {
		jQuery(node).find('ul.pag li.on').removeClass('on');
		jQuery(node).find('ul.pag li:first').addClass('on');
	}
}
jQuery(node).find('ul.pag li').click(
	function() {
		if (jQuery(this).hasClass('ct')
			&& !jQuery(this).hasClass('play')) {
	clearInterval(bannerInt);
	jQuery(this).html(
		'<span class="ico pgPlay">play</span>');
jQuery(this).addClass('play');
} else {
	jQuery(node).find('ul.pag li:last').removeClass(
		'play');
jQuery(node).find('ul.pag li:last').html(
	'<span class="ico pgPause">pause</span>');
if (!jQuery(this).hasClass('ct')) {
	jQuery(this).parent().find('li.on')
	.removeClass('on');
	jQuery(this).addClass('on');
}

jQuery(node).find('.bList li').fadeOut('slow')
.removeClass('on');
jQuery(node).find('.bList li').eq(
	jQuery(this).text() - 1).fadeIn().addClass(
	'on');
clearInterval(bannerInt);
bannerInt = setInterval(function() {
	randBanner()
}, velocity);
}
});
break;
}
}
};
function removeAcento(s) {
	var a = "áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ", b = "aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC", c = "";
	for ( var i = 0; i < s.length; i++) {
		if (a.indexOf(s.charAt(i)) != -1) {
			c += b.substr(a.search(s.substr(i, 1)), 1);
		} else {
			c += s.substr(i, 1);
		}
	}
	return c;
}

jQuery.fn.highlight = function(pat, focus) {
	function hlFocus() {
		if ($('.description span.highlight-term').length > 0) {
			var t = $('.description span.highlight-term').eq(0).offset().top - 85;
			timeWait = 500;
			$("body, html").animate({
				scrollTop : t
			}, timeWait - 10);
} else {
	// var deptString = (typeof(depid) != "undefined") ? '?dep=' + depid
	// : '';
	// var noString = '<div class="popUp notFound"><div
			// class="boxR1"><div class="boxR2"><div class="boxR3"><div
			// class="boxR4"><div class="nfMessage"><p><span class="ico
			// warning">atenção</span> Não foi encontrado o termo
			// <strong>'+pat+'</strong> para esse produto</p></div><p>Ver
			// produtos similares com <a
			// href="/busca/'+pat+deptString+'">'+pat+'</a></p></div></div></div></div></div>';
			// $.fancybox(noString,{'width': 445, 'height': 'auto',
			// 'autoDimensions': false});
}
}
function innerHighlight(node, pat) {
	var skip = 0;
	if (node.nodeType == 3) {
		var data = removeAcento(node.data.toUpperCase());
		var pos = data.search(new RegExp('\\b(' + removeAcento(pat)+ ')\\b'));
		var middlebit = "";
		if (pos >= 0) {
			var spannode = document.createElement('span');
			spannode.className = 'highlight-term';
			var middlebit = node.splitText(pos);
			var endbit = middlebit.splitText(pat.length);
			var middleclone = middlebit.cloneNode(true);
			spannode.appendChild(middleclone);
			middlebit.parentNode.replaceChild(spannode, middlebit);
			skip = 1;
		}
	} else if (node.nodeType == 1 && node.childNodes
		&& !/(script|style)/i.test(node.tagName)) {
		for ( var i = 0; i < node.childNodes.length; ++i) {
			i += innerHighlight(node.childNodes[i], pat);
		}
	}
	return skip;
}
return this.each(function() {
	innerHighlight(this, pat.toUpperCase());
	if (focus) {
		hlFocus();
	}
});
};

jQuery.fn.removeHighlight = function() {
	return this.find("span.highlight-term").each(function() {
		this.parentNode.firstChild.nodeName;
		with (this.parentNode) {
			replaceChild(this.firstChild, this);
			normalize();
		}
	}).end();
};

// Inicio da borda arrendondada JQUERY
jQuery(document).ready(function() {
	jQuery('html').addClass('readyJs');
	borders();

});


/*
 * jQuery Autocomplete plugin 1.1
 *
 * Copyright (c) 2009 JÃ¶rn Zaefferer
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Revision: $Id: jquery.autocomplete.js 15 2009-08-22 10:30:27Z joern.zaefferer $
 */

 ;(function($) {

 	$.fn.extend({
 		autocomplete: function(urlOrData, options) {
 			var isUrl = typeof urlOrData == "string";
 			options = $.extend({}, $.Autocompleter.defaults, {
 				url: isUrl ? urlOrData : null,
 				data: isUrl ? null : urlOrData,
 				delay: isUrl ? $.Autocompleter.defaults.delay : 10,
 				max: options && !options.scroll ? 10 : 150
 			}, options);

		// if highlight is set to false, replace it with a do-nothing function
		options.highlight = options.highlight || function(value) { return value; };

		// if the formatMatch option is not specified, then use formatItem for backwards compatibility
		options.formatMatch = options.formatMatch || options.formatItem;

		return this.each(function() {
			new $.Autocompleter(this, options);
		});
	},
	result: function(handler) {
		return this.bind("result", handler);
	},
	search: function(handler) {
		return this.trigger("search", [handler]);
	},
	flushCache: function() {
		return this.trigger("flushCache");
	},
	setOptions: function(options){
		return this.trigger("setOptions", [options]);
	},
	unautocomplete: function() {
		return this.trigger("unautocomplete");
	}
});

$.Autocompleter = function(input, options) {

	var KEY = {
		UP: 38,
		DOWN: 40,
		DEL: 46,
		TAB: 9,
		RETURN: 13,
		ESC: 27,
		COMMA: 188,
		PAGEUP: 33,
		PAGEDOWN: 34,
		BACKSPACE: 8
	};

	// Create $ object for input element
	var $input = $(input).attr("autocomplete", "off").addClass(options.inputClass);

	var timeout;
	var previousValue = "";
	var cache = $.Autocompleter.Cache(options);
	var hasFocus = 0;
	var lastKeyPressCode;
	var config = {
		mouseDownOnSelect: false
	};
	var select = $.Autocompleter.Select(options, input, selectCurrent, config);

	var blockSubmit;

	// prevent form submit in opera when selecting with return key
	$.browser.opera && $(input.form).bind("submit.autocomplete", function() {
		if (blockSubmit) {
			blockSubmit = false;
			return false;
		}
	});

	// only opera doesn't trigger keydown multiple times while pressed, others don't work with keypress at all
	$input.bind(($.browser.opera ? "keypress" : "keydown") + ".autocomplete", function(event) {
		// a keypress means the input has focus
		// avoids issue where input had focus before the autocomplete was applied
		hasFocus = 1;
		// track last key pressed
		lastKeyPressCode = event.keyCode;
		switch(event.keyCode) {

			case KEY.UP:
			event.preventDefault();
			if ( select.visible() ) {
				select.prev(this);
			} else {
				onChange(0, true);
			}
			break;

			case KEY.DOWN:
			event.preventDefault();
			if ( select.visible() ) {
				select.next(this);
			} else {
				onChange(0, true);
			}
			break;

			case KEY.PAGEUP:
			event.preventDefault();
			if ( select.visible() ) {
				select.pageUp(this);
			} else {
				onChange(0, true);
			}
			break;

			case KEY.PAGEDOWN:
			event.preventDefault();
			if ( select.visible() ) {
				select.pageDown(this);
			} else {
				onChange(0, true);
			}
			break;

			// matches also semicolon
			case options.multiple && $.trim(options.multipleSeparator) == "," && KEY.COMMA:
			case KEY.TAB:
			case KEY.RETURN:
			if( selectCurrent() ) {
					// stop default to prevent a form submit, Opera needs special handling
					// event.preventDefault();
					// blockSubmit = true;
					// return true;
				}
				break;

				case KEY.ESC:
				select.hide();
				break;

				default:
				clearTimeout(timeout);
				timeout = setTimeout(onChange, options.delay);
				break;
			}
		}).focus(function(){
		// track whether the field has focus, we shouldn't process any
		// results if the field no longer has focus
		hasFocus++;
	}).blur(function() {
		hasFocus = 0;
		if (!config.mouseDownOnSelect) {
			hideResults();
		}
	}).click(function() {

		// show select when clicking in a focused field
		if ( hasFocus++ > 1 && !select.visible() ) {
			onChange(0, true);
		}
	}).bind("search", function() {
		// TODO why not just specifying both arguments?
		var fn = (arguments.length > 1) ? arguments[1] : null;
		function findValueCallback(q, data) {
			var result;
			if( data && data.length ) {
				for (var i=0; i < data.length; i++) {
					if( data[i].result.toLowerCase() == q.toLowerCase() ) {
						result = data[i];
						break;
					}
				}
			}
			if( typeof fn == "function" ) fn(result);
			else $input.trigger("result", result && [result.data, result.value]);
		}
		$.each(trimWords($input.val()), function(i, value) {
			request(value, findValueCallback, findValueCallback);
		});
	}).bind("flushCache", function() {
		cache.flush();
	}).bind("setOptions", function() {
		$.extend(options, arguments[1]);
		// if we've updated the data, repopulate
		if ( "data" in arguments[1] )
			cache.populate();
	}).bind("unautocomplete", function() {
		select.unbind();
		$input.unbind();
		$(input.form).unbind(".autocomplete");
	});


	function selectCurrent() {
		var selected = select.selected();
		if( !selected )
			return false;

		var v = selected.result;
		previousValue = v;

		if ( options.multiple ) {
			var words = trimWords($input.val());
			if ( words.length > 1 ) {
				var seperator = options.multipleSeparator.length;
				var cursorAt = $(input).selection().start;
				var wordAt, progress = 0;
				$.each(words, function(i, word) {
					progress += word.length;
					if (cursorAt <= progress) {
						wordAt = i;
						return false;
					}
					progress += seperator;
				});
				words[wordAt] = v;
				// TODO this should set the cursor to the right position, but it gets overriden somewhere
				//$.Autocompleter.Selection(input, progress + seperator, progress + seperator);
				v = words.join( options.multipleSeparator );
			}
			v += options.multipleSeparator;
		}

		$input.val(v);
		hideResultsNow();
		$input.trigger("result", [selected.data, selected.value]);
		return true;
	}

	function onChange(crap, skipPrevCheck) {
		if( lastKeyPressCode == KEY.DEL ) {
			select.hide();
			return;
		}
		var currentValue = $input.val();

		if ( !skipPrevCheck && currentValue == previousValue )
			return;

		previousValue = currentValue;

		currentValue = lastWord(currentValue);
		if ( currentValue.length >= options.minChars) {
			$input.addClass(options.loadingClass);
			if (!options.matchCase)
				currentValue = currentValue.toLowerCase();
			request(currentValue, receiveData, hideResultsNow);
		} else {
			stopLoading();
			select.hide();
		}
	};

	function trimWords(value) {
		if (!value)
			return [""];
		if (!options.multiple)
			return [$.trim(value)];
		return $.map(value.split(options.multipleSeparator), function(word) {
			return $.trim(value).length ? $.trim(word) : null;
		});
	}

	function lastWord(value) {
		if ( !options.multiple )
			return value;
		var words = trimWords(value);
		if (words.length == 1)
			return words[0];
		var cursorAt = $(input).selection().start;
		if (cursorAt == value.length) {
			words = trimWords(value)
		} else {
			words = trimWords(value.replace(value.substring(cursorAt), ""));
		}
		return words[words.length - 1];
	}

	// fills in the input box w/the first match (assumed to be the best match)
	// q: the term entered
	// sValue: the first matching result
	function autoFill(q, sValue){
		// autofill in the complete box w/the first match as long as the user hasn't entered in more data
		// if the last user key pressed was backspace, don't autofill
		if( options.autoFill && (lastWord($input.val()).toLowerCase() == q.toLowerCase()) && lastKeyPressCode != KEY.BACKSPACE ) {
			// fill in the value (keep the case the user has typed)
			$input.val($input.val() + sValue.substring(lastWord(previousValue).length));
			// select the portion of the value not typed by the user (so the next character will erase)
			$(input).selection(previousValue.length, previousValue.length + sValue.length);
		}
	};

	function hideResults() {
		clearTimeout(timeout);
		timeout = setTimeout(hideResultsNow, 200);
	};

	function hideResultsNow() {
		var wasVisible = select.visible();
		select.hide();
		clearTimeout(timeout);
		stopLoading();
		if (options.mustMatch) {
			// call search and run callback
			$input.search(
				function (result){
					// if no value found, clear the input box
					if( !result ) {
						if (options.multiple) {
							var words = trimWords($input.val()).slice(0, -1);
							$input.val( words.join(options.multipleSeparator) + (words.length ? options.multipleSeparator : "") );
						}
						else {
							$input.val( "" );
							$input.trigger("result", null);
						}
					}
				}
				);
		}
	};

	function receiveData(q, data) {
		if ( data && data.length && hasFocus ) {
			stopLoading();
			select.display(data, q);
			autoFill(q, data[0].value);
			select.show();
		} else {
			hideResultsNow();
		}
	};

	function request(term, success, failure) {
		if (!options.matchCase)
			term = term.toLowerCase();
		var data = cache.load(term);
		// recieve the cached data
		if (data && data.length) {
			success(term, data);
		// if an AJAX url has been supplied, try loading the data now
	} else if( (typeof options.url == "string") && (options.url.length > 0) ){

		var extraParams = {
			timestamp: +new Date()
		};
		$.each(options.extraParams, function(key, param) {
			extraParams[key] = typeof param == "function" ? param() : param;
		});

		$.ajax({
				// try to leverage ajaxQueue plugin to abort previous requests
				mode: "abort",
				// limit abortion to this input
				port: "autocomplete" + input.name,
				dataType: options.dataType,
				url: options.url,
				data: $.extend({
					q: lastWord(term),
					limit: options.max
				}, extraParams),
				success: function(data) {
					var parsed = options.parse && options.parse(data) || parse(data);
					cache.add(term, parsed);
					success(term, parsed);
				}
			});
	} else {
			// if we have a failure, we need to empty the list -- this prevents the the [TAB] key from selecting the last successful match
			select.emptyList();
			failure(term);
		}
	};

	function parse(data) {
		var parsed = [];
		var rows = data.split("\n");
		for (var i=0; i < rows.length; i++) {
			var row = $.trim(rows[i]);
			if (row) {
				row = row.split("|");
				parsed[parsed.length] = {
					data: row,
					value: row[0],
					result: options.formatResult && options.formatResult(row, row[0]) || row[0]
				};
			}
		}
		return parsed;
	};

	function stopLoading() {
		$input.removeClass(options.loadingClass);
	};

};

$.Autocompleter.defaults = {
	inputClass: "ac_input",
	resultsClass: "autoComplete",
	loadingClass: "ac_loading",
	minChars: 1,
	delay: 400,
	matchCase: false,
	matchSubset: true,
	matchContains: false,
	cacheLength: 0,
	max: 100,
	mustMatch: false,
	extraParams: {},
	selectFirst: false,
	formatItem: function(row) { return row[0]; },
	formatMatch: null,
	autoFill: false,
	width: 0,
	multiple: false,
	multipleSeparator: ", ",
	highlight: function(value, term) {
		return value.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + term.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi, "\\$1") + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
	},
	scroll: true,
	scrollHeight: 180
};

$.Autocompleter.Cache = function(options) {

	var data = {};
	var length = 0;

	function matchSubset(s, sub) {
		if (!options.matchCase)
			s = s.toLowerCase();
		var i = s.indexOf(sub);
		if (options.matchContains == "word"){
			i = s.toLowerCase().search("\\b" + sub.toLowerCase());
		}
		if (i == -1) return false;
		return i == 0 || options.matchContains;
	};

	function add(q, value) {
		if (length > options.cacheLength){
			flush();
		}
		if (!data[q]){
			length++;
		}
		data[q] = value;
	}

	function populate(){
		if( !options.data ) return false;
		// track the matches
		var stMatchSets = {},
		nullData = 0;

		// no url was specified, we need to adjust the cache length to make sure it fits the local data store
		if( !options.url ) options.cacheLength = 1;

		// track all options for minChars = 0
		stMatchSets[""] = [];

		// loop through the array and create a lookup structure
		for ( var i = 0, ol = options.data.length; i < ol; i++ ) {
			var rawValue = options.data[i];
			// if rawValue is a string, make an array otherwise just reference the array
			rawValue = (typeof rawValue == "string") ? [rawValue] : rawValue;

			var value = options.formatMatch(rawValue, i+1, options.data.length);
			if ( value === false )
				continue;

			var firstChar = value.charAt(0).toLowerCase();
			// if no lookup array for this character exists, look it up now
			if( !stMatchSets[firstChar] )
				stMatchSets[firstChar] = [];

			// if the match is a string
			var row = {
				value: value,
				data: rawValue,
				result: options.formatResult && options.formatResult(rawValue) || value
			};

			// push the current match into the set list
			stMatchSets[firstChar].push(row);

			// keep track of minChars zero items
			if ( nullData++ < options.max ) {
				stMatchSets[""].push(row);
			}
		};

		// add the data items to the cache
		$.each(stMatchSets, function(i, value) {
			// increase the cache size
			options.cacheLength++;
			// add to the cache
			add(i, value);
		});
	}

	// populate any existing data
	setTimeout(populate, 25);

	function flush(){
		data = {};
		length = 0;
	}

	return {
		flush: flush,
		add: add,
		populate: populate,
		load: function(q) {
			if (!options.cacheLength || !length)
				return null;
			/*
			 * if dealing w/local data and matchContains than we must make sure
			 * to loop through all the data collections looking for matches
			 */
			 if( !options.url && options.matchContains ){
				// track all matches
				var csub = [];
				// loop through all the data grids for matches
				for( var k in data ){
					// don't search through the stMatchSets[""] (minChars: 0) cache
					// this prevents duplicates
					if( k.length > 0 ){
						var c = data[k];
						$.each(c, function(i, x) {
							// if we've got a match, add it to the array
							if (matchSubset(x.value, q)) {
								csub.push(x);
							}
						});
					}
				}
				return csub;
			} else
			// if the exact item exists, use it
			if (data[q]){
				return data[q];
			} else
			if (options.matchSubset) {
				for (var i = q.length - 1; i >= options.minChars; i--) {
					var c = data[q.substr(0, i)];
					if (c) {
						var csub = [];
						$.each(c, function(i, x) {
							if (matchSubset(x.value, q)) {
								csub[csub.length] = x;
							}
						});
						return csub;
					}
				}
			}
			return null;
		}
	};
};

$.Autocompleter.Select = function (options, input, select, config) {
	var CLASSES = {
		ACTIVE: "ac_over"
	};

	var listItems,
	active = -1,
	data,
	term = "",
	needsInit = true,
	element,
	list;

	// Create results
	function init() {
		if (!needsInit)
			return;
		element = $("<div/>")
		.hide()
		.addClass(options.resultsClass)
		.css("position", "absolute")
		.appendTo(document.body);

		list = $("<ul class='autoCList'/>").appendTo(element).mouseover( function(event) {
			if(target(event).nodeName && target(event).nodeName.toUpperCase() == 'LI') {
				active = $("li", list).removeClass(CLASSES.ACTIVE).index(target(event));
				$(target(event)).addClass(CLASSES.ACTIVE);
			}
		}).click(function(event) {
			$(target(event)).addClass(CLASSES.ACTIVE);
			select();
			location.href = "/busca/"+input.value;
			// TODO provide option to avoid setting focus again after selection? useful for cleanup-on-focus
			input.focus();
			return false;
		}).mousedown(function() {
			config.mouseDownOnSelect = true;
		}).mouseup(function() {
			config.mouseDownOnSelect = false;
		});

		if( options.width > 0 )
			element.css("width", options.width);

		needsInit = false;
	}

	function target(event) {
		var element = event.target;
		while(element && element.tagName != "LI")
			element = element.parentNode;
		// more fun with IE, sometimes event.target is empty, just ignore it then
		if(!element)
			return [];
		return element;
	}

	function moveSelect(step, input) {
		listItems.slice(active, active + 1).removeClass(CLASSES.ACTIVE);
		movePosition(step);
		var activeItem = listItems.slice(active, active + 1).addClass(CLASSES.ACTIVE);
		input.value = activeItem.text();
		if(options.scroll) {
			var offset = 0;
			listItems.slice(0, active).each(function() {
				offset += this.offsetHeight;
			});
			if((offset + activeItem[0].offsetHeight - list.scrollTop()) > list[0].clientHeight) {
				list.scrollTop(offset + activeItem[0].offsetHeight - list.height());
			} else if(offset < list.scrollTop()) {
				list.scrollTop(offset);
			}
		}
	};

	function movePosition(step) {
		active += step;
		if (active < 0) {
			active = listItems.size() - 1;
		} else if (active >= listItems.size()) {
			active = 0;
		}
	}

	function limitNumberOfItems(available) {
		return options.max && options.max < available
		? options.max
		: available;
	}

	function fillList() {
		list.empty();
		var max = limitNumberOfItems(data.length);
		for (var i=0; i < max; i++) {
			if (!data[i])
				continue;
			var formatted = options.formatItem(data[i].data, i+1, max, data[i].value, term);
			if ( formatted === false )
				continue;
			var li = $("<li/>").html( options.highlight(formatted, term) ).addClass(i%2 == 0 ? "" : "").appendTo(list)[0];
			$.data(li, "ac_data", data[i]);
		}
		listItems = list.find("li");
		if ( options.selectFirst ) {
			listItems.slice(0, 1).addClass(CLASSES.ACTIVE);
			active = 0;
		}
		// apply bgiframe if available
		if ( $.fn.bgiframe )
			list.bgiframe();
	}

	return {
		display: function(d, q) {
			init();
			data = d;
			term = q;
			fillList();
		},
		next: function(form) {
			moveSelect(1, form);
		},
		prev: function(form) {
			moveSelect(-1, form);
		},
		pageUp: function(form) {
			if (active != 0 && active - 8 < 0) {
				moveSelect( -active, form );
			} else {
				moveSelect(-8, form);
			}
		},
		pageDown: function(form) {
			if (active != listItems.size() - 1 && active + 8 > listItems.size()) {
				moveSelect( listItems.size() - 1 - active, form );
			} else {
				moveSelect(8, form);
			}
		},
		hide: function() {
			element && element.hide();
			listItems && listItems.removeClass(CLASSES.ACTIVE);
			active = -1;
		},
		visible : function() {
			return element && element.is(":visible");
		},
		current: function() {
			return this.visible() && (listItems.filter("." + CLASSES.ACTIVE)[0] || options.selectFirst && listItems[0]);
		},
		show: function() {
			var offset = $(input).offset();
			element.css({
				width: typeof options.width == "string" || options.width > 0 ? options.width : $(input).innerWidth(),
				top: offset.top + input.offsetHeight,
				left: offset.left
			}).show();
			resizeAutocomplete();
			if(options.scroll) {
				list.scrollTop(0);

				if($.browser.msie && typeof document.body.style.maxHeight === "undefined") {
					var listHeight = 0;
					listItems.each(function() {
						listHeight += this.offsetHeight;
					});
					var scrollbarsVisible = listHeight > options.scrollHeight;
					list.css('height', scrollbarsVisible ? options.scrollHeight : listHeight );
					if (!scrollbarsVisible) {
						// IE doesn't recalculate width when scrollbar disappears
						listItems.width( list.width() - parseInt(listItems.css("padding-left")) - parseInt(listItems.css("padding-right")) );
					}
				}

			}
		},
		selected: function() {
			var selected = listItems && listItems.filter("." + CLASSES.ACTIVE).removeClass(CLASSES.ACTIVE);
			return selected && selected.length && $.data(selected[0], "ac_data");
		},
		emptyList: function (){
			list && list.empty();
		},
		unbind: function() {
			element && element.remove();
		}
	};
};

$.fn.selection = function(start, end) {
	if (start !== undefined) {
		return this.each(function() {
			if( this.createTextRange ){
				var selRange = this.createTextRange();
				if (end === undefined || start == end) {
					selRange.move("character", start);
					selRange.select();
				} else {
					selRange.collapse(true);
					selRange.moveStart("character", start);
					selRange.moveEnd("character", end);
					selRange.select();
				}
			} else if( this.setSelectionRange ){
				this.setSelectionRange(start, end);
			} else if( this.selectionStart ){
				this.selectionStart = start;
				this.selectionEnd = end;
			}
		});
	}
	var field = this[0];
	if ( field.createTextRange ) {
		var range = document.selection.createRange(),
		orig = field.value,
		teststring = "<->",
		textLength = range.text.length;
		range.text = teststring;
		var caretAt = field.value.indexOf(teststring);
		field.value = orig;
		this.selection(caretAt, caretAt + textLength);
		return {
			start: caretAt,
			end: caretAt + textLength
		}
	} else if( field.selectionStart !== undefined ){
		return {
			start: field.selectionStart,
			end: field.selectionEnd
		}
	}
};

})(jQuery);

jQuery.support.placeholder = (function(){
	var i = document.createElement('input');
	return 'placeholder' in i;
})();
jQuery.fn.placeholder = function(settings){
	return this.each(function(){
		if(!jQuery.support.placeholder) {
			var placeholderValue = $(this).attr("placeholder"), t = $(this);
			t.wrap('<span class="placeholderBox" style="display: inline-block;"></span>');
			var box = t.closest(".placeholderBox");
			box.prepend('<span class="placeholderFix" style="font-size: '+t.css("font-size")+'">'+placeholderValue+'</span>');
			box.css({position: "relative"});
			var placeholderFix = box.find(".placeholderFix");
			placeholderFix.css({position: "absolute", left: '3px', top: '3px'});
			placeholderFix.fadeTo(1, .5);
			placeholderFix.click(function() {
				t.focus();
			});
			t.bind('click keyup blur focus', function() {
				if(t.val().length > 0) {placeholderFix.hide();}
				if(t.val().length == 0) {placeholderFix.show();}
			});
		}
	});
};
var waitFor = function(f, callback, timeout) {
	timeout = timeout || 10000;
	this.timeout = function() {
		return false;
	};
	this.time = 0;
	this.teste = function (time)  {
		if(this.time >= timeout) {
			return this.timeout();
		}
		if(f.call()) {
			try {callback.call(); }
			catch(e) {};
			return true;
		}
		else {
			setTimeout(function() {
				this.time += 500;
				this.teste();
			}, 500);
		}
	}
	return this.teste(this.time);
}
var resizeAutocomplete = function() {
	$(window).resize(function() {
		var input = $(".srchStr");
		var offset = input.offset();
		var element = $(".autoComplete");
		element.css({
			width: 529,
			top: offset.top + input.height() + 6,
			left: offset.left
		});
	});
}
jQuery.extend({
	parseJSON:function(data){
		if(typeof data !== "string" || !data){return null;}
		data=jQuery.trim(data);
		if(window.JSON && window.JSON.parse){return window.JSON.parse( data );}
		if(rvalidchars.test(data.replace(rvalidescape,"@").replace(rvalidtokens,"]").replace(rvalidbraces,""))){return window.JSON.parse( data );}
		jQuery.error("Invalid JSON: "+data);
	}
});
(function ($, document, undefined) {

	var pluses = /\+/g;

	function raw(s) {
		return s;
	}

	function decoded(s) {
		return decodeURIComponent(s.replace(pluses, ' '));
	}

	var config = $.cookie = function (key, value, options) {

		if (value !== undefined) {
			options = $.extend({}, config.defaults, options);

			if (value === null) {
				options.expires = -1;
			}

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setDate(t.getDate() + days);
			}

			value = config.json ? JSON.stringify(value) : String(value);

			return (document.cookie = [
				encodeURIComponent(key), '=', config.raw ? value : encodeURIComponent(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '',
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
				].join(''));
		}

		var decode = config.raw ? raw : decoded;
		var cookies = document.cookie.split('; ');
		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			if (decode(parts.shift()) === key) {
				var cookie = decode(parts.join('='));
				return config.json ? JSON.parse(cookie) : cookie;
			}
		}

		return null;
	};
	config.defaults = {};
	$.removeCookie = function (key, options) {
		if ($.cookie(key) !== null) {
			$.cookie(key, null, options);
			return true;
		}
		return false;
	};
})(jQuery, document);
function loadAssync() {
	$(".load-assync").each(function(){
		var $this = $(this);
		var cbfunction = $this.attr('data-callback');
		$.get(this.getAttribute("data-href"),function(data){
			$this.after(data).remove();
			if(typeof(cbfunction) === "string" && cbfunction !== ""){
				try {
					var fn = window[cbfunction];
					if(typeof fn == "function") {
						fn.call();
					}
				}
				catch(exception){}
			}
		});
	});
}
/* * Lazy Load - jQuery plugin for lazy loading images * * Copyright (c) 2007-2013 Mika Tuupola * * Licensed under the MIT license: *   http://www.opensource.org/licenses/mit-license.php * * Project home: *   http://www.appelsiini.net/projects/lazyload * * Version:  1.8.4 * */
(function($, window, document, undefined) {
	var $window = $(window);

	$.fn.lazyload = function(options) {
		var elements = this;
		var $container;
		var settings = {
			threshold       : 0,
			failure_limit   : 0,
			event           : "scroll",
			effect          : "show",
			container       : window,
			data_attribute  : "original",
			skip_invisible  : true,
			appear          : null,
			load            : null
		};

		function update() {
			var counter = 0;

			elements.each(function() {
				var $this = $(this);
				if (settings.skip_invisible && !$this.is(":visible")) {
					return;
				}
				if ($.abovethetop(this, settings) ||
					$.leftofbegin(this, settings)) {
					/* Nothing. */
			} else if (!$.belowthefold(this, settings) &&
				!$.rightoffold(this, settings)) {
				$this.trigger("appear");
				/* if we found an image we'll load, reset the counter */
				counter = 0;
			} else {
				if (++counter > settings.failure_limit) {
					return false;
				}
			}
		});

		}

		if(options) {
			/* Maintain BC for a couple of versions. */
			if (undefined !== options.failurelimit) {
				options.failure_limit = options.failurelimit;
				delete options.failurelimit;
			}
			if (undefined !== options.effectspeed) {
				options.effect_speed = options.effectspeed;
				delete options.effectspeed;
			}

			$.extend(settings, options);
		}

		/* Cache container as jQuery as object. */
		$container = (settings.container === undefined ||
			settings.container === window) ? $window : $(settings.container);

		/* Fire one scroll event per scroll. Not one scroll event per image. */
		if (0 === settings.event.indexOf("scroll")) {
			$container.bind(settings.event, function(event) {
				return update();
			});
		}

		this.each(function() {
			var self = this;
			var $self = $(self);

			self.loaded = false;

			/* When appear is triggered load original image. */
			$self.one("appear", function() {
				if (!this.loaded) {
					if (settings.appear) {
						var elements_left = elements.length;
						settings.appear.call(self, elements_left, settings);
					}
					$("<img />")
					.bind("load", function() {
						$self
						.hide()
						.attr("src", $self.data(settings.data_attribute))
						[settings.effect](settings.effect_speed);
						self.loaded = true;

						/* Remove image from array so it is not looped next time. */
						var temp = $.grep(elements, function(element) {
							return !element.loaded;
						});
						elements = $(temp);

						if (settings.load) {
							var elements_left = elements.length;
							settings.load.call(self, elements_left, settings);
						}
					})
					.attr("src", $self.data(settings.data_attribute));
				}
			});

			/* When wanted event is triggered load original image */
			/* by triggering appear.                              */
			if (0 !== settings.event.indexOf("scroll")) {
				$self.bind(settings.event, function(event) {
					if (!self.loaded) {
						$self.trigger("appear");
					}
				});
			}
		});

/* Check if something appears when window is resized. */
$window.bind("resize", function(event) {
	update();
});

/* With IOS5 force loading images when navigating with back button. */
/* Non optimal workaround. */
if ((/iphone|ipod|ipad.*os 5/gi).test(navigator.appVersion)) {
	$window.bind("pageshow", function(event) {
		if (event.originalEvent.persisted) {
			elements.each(function() {
				$(this).trigger("appear");
			});
		}
	});
}

/* Force initial check if images should appear. */
update();

return this;
};

/* Convenience methods in jQuery namespace.           */
/* Use as  $.belowthefold(element, {threshold : 100, container : window}) */

$.belowthefold = function(element, settings) {
	var fold;

	if (settings.container === undefined || settings.container === window) {
		fold = $window.height() + $window.scrollTop();
	} else {
		fold = $(settings.container).offset().top + $(settings.container).height();
	}

	return fold <= $(element).offset().top - settings.threshold;
};

$.rightoffold = function(element, settings) {
	var fold;

	if (settings.container === undefined || settings.container === window) {
		fold = $window.width() + $window.scrollLeft();
	} else {
		fold = $(settings.container).offset().left + $(settings.container).width();
	}

	return fold <= $(element).offset().left - settings.threshold;
};

$.abovethetop = function(element, settings) {
	var fold;

	if (settings.container === undefined || settings.container === window) {
		fold = $window.scrollTop();
	} else {
		fold = $(settings.container).offset().top;
	}

	return fold >= $(element).offset().top + settings.threshold  + $(element).height();
};

$.leftofbegin = function(element, settings) {
	var fold;

	if (settings.container === undefined || settings.container === window) {
		fold = $window.scrollLeft();
	} else {
		fold = $(settings.container).offset().left;
	}

	return fold >= $(element).offset().left + settings.threshold + $(element).width();
};

$.inviewport = function(element, settings) {
	return !$.rightoffold(element, settings) && !$.leftofbegin(element, settings) &&
	!$.belowthefold(element, settings) && !$.abovethetop(element, settings);
};

$(function() {

     $.fn.serialize = function (options) {
         return $.param(this.serializeArray(options));
     };

     $.fn.serializeArray = function (options) {
         var o = $.extend({
         checkboxesAsBools: false
     }, options || {});

     var rselectTextarea = /select|textarea/i;
     var rinput = /text|hidden|password|search/i;

     return this.map(function () {
         return this.elements ? $.makeArray(this.elements) : this;
     })
     .filter(function () {
         return this.name && !this.disabled &&
             (this.checked
             || (o.checkboxesAsBools && this.type === 'checkbox')
             || rselectTextarea.test(this.nodeName)
             || rinput.test(this.type));
         })
         .map(function (i, elem) {
             var val = $(this).val();
             return val == null ?
             null :
             $.isArray(val) ?
             $.map(val, function (val, i) {
                 return { name: elem.name, value: val };
             }) :
             {
                 name: elem.name,
                 value: (o.checkboxesAsBools && this.type === 'checkbox') ? //moar ternaries!
                        (this.checked ? 'true' : 'false') :
                        val
             };
         }).get();
     };

});

/* Custom selectors for your convenience.   */
/* Use as $("img:below-the-fold").something() or */
/* $("img").filter(":below-the-fold").something() which is faster */

$.extend($.expr[':'], {
	"below-the-fold" : function(a) { return $.belowthefold(a, {threshold : 0}); },
	"above-the-top"  : function(a) { return !$.belowthefold(a, {threshold : 0}); },
	"right-of-screen": function(a) { return $.rightoffold(a, {threshold : 0}); },
	"left-of-screen" : function(a) { return !$.rightoffold(a, {threshold : 0}); },
	"in-viewport"    : function(a) { return $.inviewport(a, {threshold : 0}); },
	/* Maintain BC for couple of versions. */
	"above-the-fold" : function(a) { return !$.belowthefold(a, {threshold : 0}); },
	"right-of-fold"  : function(a) { return $.rightoffold(a, {threshold : 0}); },
	"left-of-fold"   : function(a) { return !$.rightoffold(a, {threshold : 0}); }
});

})(jQuery, window, document);

(function($) {
	$.fn.easyjax = function(settings) {
		var defaults = {
			loadingStart: function() {},
			loadingEnd: function() {}
		};
		settings = $.extend(defaults, settings);
		return this.each(function() {
			var pageContent = [];
			$(document).on("click", ".acrN li a", function(e) {
				var $t = $(this);
				var ajaxKey = $t.attr("data-ajaxKey"), ajaxBox = $t.attr("data-ajaxBox"), callback = $t.attr("data-ajaxCallback") || undefined;
				var url = encodeURI('/ajax/' + ajaxKey + $t.relativeHref());
				var fn = window[callback];
				settings.loadingStart.call(this, ajaxBox);
				$("body,html").animate({
					scrollTop:$(ajaxBox).offset().top - 40
				},500);
				if(pageContent[url]){
					var data=prepareCallback(pageContent[url], ajaxBox);
					$(ajaxBox).html(data).css({position:'relative'}).children().fadeIn('slow');
					if(typeof(fn) === "function") {
						try {
							fn.call($t, ajaxBox, url, $t.text());
						} catch(ee) {
						}
					}
					settings.loadingEnd.call($t, ajaxBox);
				}
				else {
					$.get(url,function(data){
						pageContent[url]=data;
						data=prepareCallback(pageContent[url], ajaxBox);
						$(ajaxBox).html(data).css({position:'relative'}).children().fadeIn('slow');
						if(typeof(fn) === "function") {
							try {
								fn.call($t, ajaxBox, url, $t.text()  );
							}
							catch(e) {
							}
						}
						settings.loadingEnd.call($t, ajaxBox);
					});
				}
				e.preventDefault();
			});
});
};
})( jQuery);

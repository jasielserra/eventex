	var pageProtocol=(location.protocol=='https:')? 'https://a248.e.akamai.net/f/248/31637/1d/':'http://',panelDomain = "http://carrinho.shoptime.com.br",checkoutDomain="http://carrinho.shoptime.com.br";
	/* Plugin Carousel */
	(function($){
		var $videoBanner = $('.videoBanner'),
		$videos = $videoBanner.find('.video');
		$.fn.jCarouselHiper=function(o){
			var t=this;
			o=$.extend({btsType:null,btnPrev:null,btnNext:null,btnGo:null,divControllers:false,mouseWheel:false,auto:false,speed:200,timeStoped:6e3,easing:null,vertical:false,circular:false,opacity:false,toFirst:true,visible:1,start:0,scroll:1,beforeLoad:null,beforeStart:null,afterEnd:null},o ||{});
			t.processa=function(_t){processaCarrosel(_t);};
			function processaCarrosel(_this){
				var running=false,animCss=o.vertical?"top":"left",sizeCss=o.vertical?"height":"width";
				var div=$(_this),ul=$("ul",div);
				var tLi = [];
				$(ul).find("li").each(function(){
					$this = $(this),$imgsSize = $this.find('img[src$="empty.gif"]').length;
					var itp = $imgsSize > 0 ? $this.remove() : tLi.push($this);
				});
				var $this;
				var divControllers=o.divControllers||div;
				$videoBanner.each(function () {
					var $self = $(this),
					hex = $self.attr('data-bg-hex'),
					imgSrc = $self.attr('data-img-src'),
					repeat = $self.attr('data-bg-repeat');
					$(this).css({
						'background-color': hex,
						'background-image': imgSrc,
						'background-repeat': repeat
					});
				});
				var tl=tLi.length,v=o.visible;
				var eventInterval;
				if(o.circular){ul.prepend(tLi.slice(tl-v-1+1).clone()).append(tLi.slice(0,v).clone());o.start+=v;}
				var li=$("li",ul),itemLength=li.length,curr=o.start;
				if(itemLength === 0) {return false;}
				div.css("visibility","visible");
				li.css({overflow:"hidden",float:o.vertical?"none":"left"});
				ul.css({margin:"0",padding:"0",position:"relative","list-style-type":"none","z-index":"1"});
				div.css({overflow:"hidden",position:"relative","z-index":"2"});
				var liSize=o.vertical?height(li):width(li);
				var ulSize=liSize*itemLength;
				var divSize=liSize*v;
				if(o.opacity){
					ul.css(sizeCss,ulSize+"px").css(animCss,(0*liSize));
					li.css({position:'absolute',top:0,left:0,display:'none'}).eq(curr).show();
				}else{ul.css(sizeCss,ulSize+"px").css(animCss,(0*liSize));}
				div.css(sizeCss,divSize+"px");
				if(o.btsType){
					var btshtml='';
					if(o.btsType.indexOf("|btPrevNext|")!==-1){btshtml+='<div class="btsPrevNext"><a href="#" class="btn backArrow">Anterior</a><a href="#" class="btn nextArrow">Próximo</a></div>';o.btnPrev=".btn .backArrow";o.btnNext=".btn .nextArrow";}
					if(o.btsType.indexOf("|btGo|")!==-1){var html='';for(var i=0;i<tl;i++){html+='<li'+((i==o.start)?' class="selected"':'')+'><a href="#">'+(i+1)+'</a></li>';}btshtml+='<div class="btsGo"><ul>'+html+'</ul></div>';}
					if(o.btsType && o.btsType.indexOf("|btsControls|")!==-1){btshtml+='<a href="#" class="btPlay" style="display:none;" title="Play">Play</a><a href="#" class="btPause" title="Pause">Pause</a>';o.btnPlay='.btPlay';o.btnPause='.btPause';}
					$(divControllers).append('<div class="btsControls"><div class="btsControls-inner">'+btshtml+'</div></div>');
					if(o.btsType.indexOf("|btGo|")!==-1){o.btnGo=jQuery("div.btsGo li a");}
				}
				if(o.btnPlay){$(o.btnPlay).click(function(){$('.btPause',divControllers).show();$(this).hide();return play();});}
				if(o.btnPause){$(o.btnPause).click(function(){$('.btPlay',divControllers).show();$(this).hide();return pause();});}
				if(o.btnPrev){$(o.btnPrev,divControllers).click(function(){return go(curr-o.scroll);});}
				if(o.btnNext){$(o.btnNext,divControllers).click(function(){return go(curr+o.scroll);});}
				if(o.btnGo){$.each(o.btnGo,function(i,val){$(val,divControllers).click(function(){if(eventInterval){play();}return go(o.circular?o.visible+i:i);});});}
				if(o.mouseWheel && div.mousewheel){div.mousewheel(function(e,d){return d>0?go(curr-o.scroll):go(curr+o.scroll);});}
				if(o.auto){play();}
				function vis(){return li.slice(curr).slice(0,v);}
				function pause(){if(eventInterval){clearInterval(eventInterval);}eventInterval=null;return false;}
				function play(){pause();eventInterval=setInterval(function(){go(curr+o.scroll);},o.auto+o.timeStoped);return false;}
				function css(el,prop){return parseInt($.css(el[0],prop),10)|| 0;}
				function width(el) {
					return  el[0].offsetWidth + css(el, 'marginLeft') + css(el, 'marginRight');
				}
				function height(el){
					return el[0].offsetHeight+css(el,'marginTop')+css(el,'marginBottom');
				}
				function go(to){
					if(!running){
						if(o.beforeStart){o.beforeStart.call(this,vis());}
						if(o.circular){
							if(to<=o.start-v-1){ul.css(animCss,-((itemLength-(v*2))*liSize)+"px");curr=to==o.start-v-1?itemLength-(v*2)-1:itemLength-(v*2)-o.scroll;}
							else if(to>=itemLength-v+1){ul.css(animCss,-((v)*liSize)+"px");curr=to==itemLength-v+1?v+1:v+o.scroll;}
							else{curr=to;}
						}else if(o.toFirst && to>=itemLength-v+1){curr=o.start;}
						else{if(to<0 || to>itemLength-v){return;}else{curr=to;}}
						running=true;
						$(".btsGo li",divControllers).removeClass("selected").eq(curr).addClass("selected");
						if(o.opacity){
							li.stop().fadeOut();
							li.eq(curr).stop().fadeIn(o.speed,function(){if(o.afterEnd){o.afterEnd.call(this,vis());}running=false;});
						}else{
							ul.stop().animate(animCss=="left"?{left:-(curr*liSize)}:{top:-(curr*liSize)},o.speed,o.easing,function(){if(o.afterEnd){o.afterEnd.call(this,vis());}running=false;});
						}
						if(!o.circular){$(o.btnPrev+","+o.btnNext).removeClass("disabled");$((curr-o.scroll<0 && o.btnPrev)||(curr+o.scroll > itemLength-v && o.btnNext)|| []).addClass("disabled");}
					}
					return false;
				}
			}
			window.onYouTubePlayerReady = function(playerId) {
				var $ytplayer = document.getElementById(playerId);
				$ytplayer.addEventListener('onStateChange', 'ytplayerStateChange', false);
			};
			window.ytplayerStateChange = function(newState) {
				var $master = $('#masterBanner');
				switch(newState) {
					case 1:
					$master.find('.btPause').trigger('click');
					break;
					case 2:
					$master.find('.btPlay').trigger('click');
					break;
				}
			};
			function loadVideos() {
				$videos.each(function () {
					var $self = $(this),
					video_id = $self.attr('data-video-id'),
					player_id = 'video' + video_id;
					$self.attr('id', player_id);
					swfobject.embedSWF("http://www.youtube.com/v/" + video_id + "?enablejsapi=1&playerapiid=" + player_id + "&version=3",
						player_id, "350", "281", "8", null, null, { allowScriptAccess: 'always' }, null);
					$('#video' + video_id).addClass('video');
				});
			}
			loadVideos();
			return this.each(function(){var _this=$(this);if(o.beforeLoad){o.beforeLoad.call(this,{t:t,v:_this});}else{processaCarrosel(_this);}});
		};
	})(jQuery);
	$(function(){$(".carrousel1").jCarouselHiper({auto:true,btsType:'|btGo||btsControls|',opacity:true,speed:600,divControllers:'#masterBanner .boxR3:first'});});
	/* variaveis de sistema */
	var showTimer,hideTimer;
	var pageContent=[];
	var ajaxBrowser=true;
	$(".lb").each(function() {
		var width = $(this).attr('data-width');
		var height = $(this).attr('data-height');
		$(this).fancybox({
			'autoScale': false,
			'width': width,
			'height': height,
			'autoDimensions': false
		});
	});
	/* quiosque */
	function removeSocialnetworks(){
		if(cookie('b2wChannel') && cookie('b2wChannel').toLowerCase()=="qlas"){$("#footer .socialNetwork").empty().addClass("acessobloqueado");}
	}
	/**/
	$(function() {
		var $form = $('.fastRecordForm');
		$form.live("submit",function(e) {
			$form = $(this);
			e.preventDefault();
			if(validaFastRecordForm(this) && checkDate(document.fastRecordForm.birth)){
				var cName=$form.find('input[name="fullRegisterForm.name"]').eq(0).val();
				var cMail=$form.find('input[name="fullRegisterForm.email"]').eq(0).val();
				try{
					var uweb=new UnearUWeb();
					uweb.EventoCadastroRapido(cName,cMail,cName,'1');
				} catch(exception){
					handleException(exception);
				}
				$.post($form.attr('action'),$(this).serialize(), function(data){
					if(data == 'ok'){
						var html = '<p><strong>Obrigado por se cadastrar.</strong></p><p>Em breve, você receberá um e-mail do Shoptime.com. Verifique seus dados pessoais e confirme seu cadastro<br> para receber ofertas e promoções exclusivas.</p>', $tableToRemove = $form.find('tr:eq(1) > td');
						$tableToRemove.html(html);
					}
				});
			}
		});
	});
	$('.quickRegister').fancybox({width:300,height:300,autoDimensions:false, onStart:function(){ $.getScript('http://img.shoptime.com.br/vitrine/js/taglibsshop.js');}});
	$(".lightbox").fancybox({width:420,height:500,autoDimensions:false});
	$('.rel01').fancybox({width:420,height:'auto',autoDimensions:false});
	$('.rel02').fancybox({width:470,height:'auto',autoDimensions:false});
	$('.rel03').fancybox({width:490,height:'auto',autoDimensions:false,onStart:function(){$('.boxUnvProd .box01 .sucessBox').remove();$("#formUnvProd").show();},onComplete:function(){unvProdSbmt();}});
	$('.rel04').fancybox({width:670,height:'auto',autoDimensions:false,'onComplete':function(){$.fancybox.forceResizeTo(670,200);}});
	$('.lbIframe01').bind("click",function(e){var fbUrl=$(this).attr("href");$.fancybox({'width':300,'height':300,'type':'iframe','href':fbUrl,'onComplete':function(){resizeFB();}});e.preventDefault();});
	$('.lbIframe02').bind("click",function(e){var fbUrl=$(this).attr("href");$.fancybox({'width':420,'height':500,'type':'iframe','href':fbUrl,'onComplete':function(){resizeFB();}});e.preventDefault();});
	$('.lbIframe03').bind("click",function(e){var fbUrl=$(this).attr("href");$.fancybox({'width':525,'height':200,'type':'iframe','href':fbUrl,'onComplete':function(){resizeFB();}});e.preventDefault();});
	$(".debugpromo").fancybox({'width':400,'height':500,'autoDimensions':false,'callBackOnShow':function(){resizeFB();}});
	var knowMoreAnimate = false;
	$(".topBox .icUp").click(function(){
		if(knowMoreAnimate){return false;}
		knowMoreAnimate = true;
		var parent = $(this).closest(".topBox");
		if(parent.hasClass("topBoxClosed")){parent.find(".topBoxDesc").slideDown('fast',function(){parent.removeClass("topBoxClosed");knowMoreAnimate=false;});}
		else{parent.find(".topBoxDesc").slideUp('fast',function(){parent.addClass("topBoxClosed");knowMoreAnimate=false;});}
	});
	$(".expandMenu .title1").click(function(){
		var $this = $(this);
		var parent = $this.parent().parent();
		var sMenu = $this.next();
		if(parent.hasClass('sMenuClosed')){sMenu.slideDown();parent.removeClass('sMenuClosed');}else{sMenu.slideUp(function(){parent.addClass('sMenuClosed');});}
	});
	$(".sMenu .vejamais").click(function(){
		$(this).prevAll(".sublista").slideToggle();
		$(this).find("a").contentToggle("+ expandir","- ocultar");
		return false;
	});
	function unvProdSbmt(){
		$(".unavailProd form").submit(function(){
			var form=$(this);
			var cName=form.find('input[name="soldout.name"]').eq(0).val();
			cName=cName.trim();
			form.find('input[name="soldout.name"]').eq(0).val(cName);
			var cNameLbl=form.find('input[name="soldout.name"]').prev('span').text();
			var cMail=form.find('input[name="mail"]').eq(0).val();
			cMail=cMail.trim();
			form.find('input[name="mail"]').eq(0).val(cMail);
			var cMailLbl=form.find('input[name="soldout.email"]').prev('span').text();
			if(!isString(cName)|| cName==cNameLbl){alert('Por favor digite seu nome.');return false;}
			if(cMail==cMailLbl){alert('Por favor digite seu email.');return false;}
			if(!isEmail(cMail)){alert('O email fornecido nÃ£o Ã© valido!');return false;}
			try{
				$.get(form.attr('action'),form.serialize({checkboxesAsBools: true}), function(){}, "jsonp");
				$.post( "/message/soldout", { "soldout.email": $(".formUnvProd").find("[name=mail]").val(),
					"soldout.name": $(".formUnvProd").find("[name='soldout.name']").val(),
					"soldout.itemId": $(".formUnvProd").find("[name='soldout.itemId']").val(),
					"soldout.optin": $(".formUnvProd").find("[name='soldout.optin']").is(":checked"),
					"soldout.skus": $(".formUnvProd").find("[name='soldout.skus']").val() });

			}catch(e){}
			form.parents('.box01').eq(0).fadeOut('fast',function(){
				form.parents('.box01').eq(0).css({'position':'relative'});
				form.parents('.box01').eq(0).append('<div id="boxOverlay"><div id="overlay" style="background:#000;opacity:0.1;width:100%;height:100%;position:absolute;left:0;top:0;filter:alpha(opacity=10)width:100%;height:100%:"></div><span class="Loadajax">Carregando...</span></div>').fadeIn();
				setTimeout(function(){
					$('.unavailProd .box01').html('<p><span class="ico success">&#8226;</span> <span class="hl">Cadastro efetuado com sucesso!</span></p><p>Em breve você receberá nossas ofertas exclusivas.</p><p>Obrigado!</p>').fadeIn();
					$('.boxUnvProd .box01 .sucessBox').remove();
					$('.boxUnvProd .box01').append('<div class="sucessBox"><span class="ico success">&#8226;</span><strong>Sua mensagem foi enviada com sucesso!</strong><div class="subMsg">Você será informado por email assim que o produto retornar ao estoque. Obrigado!</div></div>');
					$("#boxOverlay").remove();
					$("#formUnvProd").hide();
				},500);
			});
	return false;
});
}
// $("#search,#fsearch").autocomplete();
/*historyCallback*/
function pageload(hash){
	if(ajaxBrowser){
		if(hash.indexOf("redir=")!=-1){
			hash=hash.substring(6);
			if($.browser.msie){hash=encodeURIComponent(hash);}
			var order=getParamUrl(hash,'order');
			$(".orderList li").removeClass().find("a[href*="+((order)? order:'rankSort')+"]").parent().addClass("selected");
			$.get(hash,function(data){
				pageContent[hash]=data;
				data=$(">*",data);
				if($(".wBox").hasClass('prod03')){$(data).find("img.photo").each(function(){$(this).attr('src',$(this).attr("data-longdesc"));});}
				$(".wBox").html(data).css("visibility","visible");
				$("img.photo[data-original]").show().lazyload({
					effect : "fadeIn"
				});
				observAcr();
				$('html').removeClass('redir');
				var page = data.find(".acrN .on:eq(0)").text();
				document.title = document.title.search("Página") !== -1 ? (document.title.split("Página")[0] + "Página "+page) : (document.title + " - Página "+page);
			});
		}else{try{window.reload();}catch(e){}}
	}
	ajaxBrowser=true;
}
$(function(){
	if(cookie('shopNick')){
		var newNick=cookie('shopNick');
		$(".liLogin").html("<p>Olá "+newNick+"!<br> Não é você? <a href='https://carrinho.shoptime.com.br/CustomerWeb/pages/Logout'><strong>Sair</strong></a></p>");
	} else {
		$(".liLogin").html('<p>Olá! Entre na sua conta ou <a href="https://carrinho.shoptime.com.br/CustomerWeb/pages/Login"><strong>Cadastre-se</strong></a></p>');
	}
});
$(".wMenuv2 .htag").hover(function() {
	$(this).next().show();
	$(this).parent().css("position", "relative");
}, function(){
	$(this).next().hide();
});
$(".tooltipMenu .sMenu li h2").hover(function(){
	$(this).parent().css('position','relative');
	$(this).next().show();
},function(){
	$(this).parent().css('position','static');
	$(this).next().hide();
}).next().hover(function(){
	$(this).parent().css('position','relative');
	$(this).show();
},function(){
	$(this).parent().css('position','static');
	$(this).hide();
});
function observAcr(){
	$("ul.acr>li>a").unbind("click").click(function(e){
		var self=this;
		var ul=$(this).closest("ul");
		ul.children().removeClass("selected");
		$(this).closest("li").addClass("selected");
		var rev=$(this.rev);
		var t=$(".wBox").offset().top -50;
		var rel='/ajax/'+this.rel+$(this).relativeHref();
		var timeWait=1;
		if(rev.hasClass("wBox")){timeWait=500;$("body,html").animate({scrollTop:t},timeWait-10);}
		setTimeout(function(){
			rev.css({position:'relative'}).append('<div id="overlay" style="background:#000;opacity:0.1;width:100%;height:100%;position:absolute;left:0;top:0;filter:alpha(opacity=10)"></div><span class="loadAjax">Carregando...</span>').children().not(".loadAjax,#overlay").fadeTo('normal',0.1);
			/* HashTag */
			ajaxBrowser=false;
			if(!ul.hasClass('.tabs')){
				window.location.hash="redir="+rel;
			}
			if(pageContent[rel]){
				var data=$(pageContent[rel]);
				if($(".wBox").hasClass('prod03')){
					$(data).find("img.photo").each(function() {
						$(this).attr('data-original', $(this).attr("data-longdesc"));
					});
				}

				setTimeout(function(){
					rev.html($(">*",data)).css({position:'static'}).children().not("img,#overlay").fadeIn('slow');observAcr();
					$("img.photo[data-original]").show().lazyload({
						effect : "fadeIn"
					});
				},20);
			}else{
				$.get(rel,function(data){
					pageContent[rel]=data;
					data=$(">*",data);
					if ($(".wBox").hasClass('prod03')) {
						$(data).find("img.photo").each(function() {
							$(this).attr('data-original', $(this).attr("data-longdesc"));
						});
					}
					$("img.photo[data-original]").show().lazyload({
						effect : "fadeIn"
					});
					rev.html(data).css({position:'relative'}).children().fadeIn('slow');
					observAcr();
					$("img.photo[data-original]").show().lazyload({
						effect : "fadeIn"
					});
				});
			}
		},timeWait);
	return false;
});
	//checkBogof();
}
function getParamUrl(url,param){var p=null;if(url.indexOf(param+"=")!=-1){p=url.substring(url.indexOf(param+"=")+(param.length+1));if(p.indexOf("&")!=-1){p=p.substring(0,p.indexOf("&"));}}return p;}
function fontSize(w,s){
	var size=parseInt($(w).css("fontSize"),10), newSize;
	if(s==="+") {
		newSize=(size>20)? 20:size+1;
	}
	else {
		newSize=(size>20)? 20:size-1;
	}
	newSize=(newSize<9)? 9:newSize;
	if(newSize>=9 && newSize<=20){$(w).css("fontSize",newSize);cookie('fontSize'+w,newSize);}
	return false;
}
function checkFontSize(){
	if(document.cookie && document.cookie !==''){
		var cookies=document.cookie.split(';');
		for(var i=0;i < cookies.length;i++){
			var cookie=jQuery.trim(cookies[i]);
			if(cookie.indexOf("fontSize")===0){
				var parts=cookie.split("=");
				var w=parts[0].substring(parts[0].indexOf("fontSize")+8);
				$(w).css("fontSize",parts[1]+'px');
				break;
			}
		}
	}
}
function hoverAction(e,w,t,ah,ao){
	if(w=='this'){w=e;}
	/*Â´depois de hover*/
	if(!ah){ah=function(w){if(!$(w).hasClass('hover')){$(w).addClass('');}};}
	/*depois de out*/
	if(!ao){ao=function(w){if($(w).hasClass('hover')){$(w).removeClass('hover');}};}
	$(e).hover(function(){
		if($(this).hasClass('hover')&& hideTimer){clearTimeout(hideTimer);}
		showTimer=setTimeout(function(){ah(w);},t);
	},function(){
		if(!$(this).hasClass('hover')&& showTimer){clearTimeout(showTimer);}
		hideTimer=setTimeout(function(){ao(w);},t);
	});
}
function showProduto(page){
	var regex=new RegExp("(\\d\\d?)","i");
	pagematch=regex.exec(page);
	var tag=pagematch !== null ? "catalog-click-page-"  + pagematch[1] : page;
	$.ajax({
		url:"/ajax/catalogPage/click/HomeCatalogoClick/qqcoisa?tag="+tag,
		success:function(data){$('.catalogProds').html(data);}
	});
}
function resizeFB(){$.fancybox.resize();}
function changeListType(e,t,w){
	if(!$(e).hasClass('selected')){
		$(e).closest("ul").find("a").removeClass("selected");
		$(e).addClass("selected");
		$(w).removeClass("list grid").addClass(t);
	}
	addListStyle(e,t,w);
	return false;
}
function changeImageTam(e,t,w){
	if(!$(e).hasClass('selected')){
		$(e).closest("ul").find("a").removeClass("selected");
		$(e).addClass("selected");
		$(w).removeClass("prod03").addClass(t);
		var imgs=$(w).find(".prods img.photo");
		imgs.each(function(){
			if($(this).attr("data-original") && ($(this).attr("src").search("blank.gif") > 0)) {
				curSrc=$(this).attr('data-original');
				$(this).attr('data-original',$(this).attr("data-longdesc"));
				$(this).attr("data-longdesc",curSrc);
			} else {
				curSrc=$(this).attr('src');
				$(this).attr('src',$(this).attr("data-longdesc"));
				$(this).attr("data-longdesc",curSrc);
			}
		});
	}
	addListStyle(e,t,w);
	return false;
}
function addListStyle(e,t,w){
	var nv,nv1,nv2,nv3;
	nv1='typeGridProduct=';
	nv2='typeListProduct=';
	nv3='imageControl=';
	nv1+=($(e).parents("div").hasClass('typeGridProduct'))? e+'='+w+'='+t:e+'='+w+'='+0;
	nv2+=($(e).parents("div").hasClass('typeListProduct'))? e+'='+w+'='+t:e+'='+w+'='+0;
	nv3+=($(e).parents("div").hasClass('imageControl'))? e+'='+w+'='+t:e+'='+w+'='+0;
	nv1+='|';nv2+='|';nv3+='|';
	nv=nv1+nv2+nv3;
	cookie('shopList',nv);
}
/*cookie*/
function cookie(name,value,options){
	if(value === undefined) {
		return $.cookie(name);
	}
	else {
		$.cookie(name, value, options);
	}
}
/* super zoom */
(function($){
	$.fn.sz=function(){
		var time=50;
		if($(this).attr('href')!="#"){
			$(this).attr({alt:'',title:''});
			return this.each(function(){
				var e=$(this);
				var img=$('>img',this);
				var imgT=new Image();
				var iTp=0;
				imgT.onload=function(){
					var szO=$('.szO',e);
					var vPort=(e.parents('.prodBox').eq(0).find('.col02').eq(0).width());
					var hVPort=imgT.height<410 ? imgT.height:410;
					iTp=(Math.round(((hVPort*100)/imgT.height))/100);
					hT=hVPort;
					var wT=imgT.width*iTp;
					if(wT>vPort){
						iTp=(Math.round(((vPort*100)/imgT.width))/100)-0.005;
						wT=imgT.width*iTp;
						h=imgT.height*iTp;
					}
					$('.szM',e).css({width:wT,height:hT});
					var w=img.width()*iTp;
					var h=img.height()*iTp;
					szO.css({width:w,height:h,marginTop:(h/(-2)),marginLeft:(w/(-2))});
				};
				imgT.src=this.href;
				e.css({display:'block',position:'relative'}).append('<span class="zoom"><span class="ico">.</span>ZOOM passe o mouse</span><div class="szM"><img src="'+this.href+'" /></div><div class="szO" style="filter:alpha(opacity=70)!important;"></div>');
			}).hover(function(){$('.szM,.szO',this).fadeIn(time,function(){$('html').addClass('szH');});
		},function(){
			$('.szM,.szO',this).fadeOut(time,function(){$('html').removeClass('szH');});
		}).mousemove(function(e){
			var img=$(this);
			var pos=img.offset();
			var szO=$('.szO',this);
			var minX=parseFloat(szO.css('marginLeft'))*-1;
			var minY=parseFloat(szO.css('marginTop'))*-1;
			var maxX=parseFloat(img.width())-parseFloat(szO.width())/2;
			var maxY=parseFloat(img.height())-parseFloat(szO.height())/2;
			var nL=e.pageX-pos.left;
			var nT=e.pageY-pos.top;
			if(nL<minX){nL=minX;}
			if(nT<minY){nT=minY;}
			if(nL>maxX){nL=maxX;}
			if(nT>maxY){nT=maxY;}
			szO.css({left:nL,top:nT});
			var szM=$('.szM',this);
			var imgT=$('>img',szM);
			var nLT=(imgT.width()*(nL - minX)/ img.width()* -1);
			var nTT=(imgT.height()*(nT - minY)/ img.height()* -1);
			imgT.css({left:nLT,top:nTT});
		}).bind('touchmove',function(e){
			e.preventDefault();
			var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
			var img=$(this);
			var pos=img.offset();
			var szO=$('.szO',this);
			var minX=parseFloat(szO.css('marginLeft'))*-1;
			var minY=parseFloat(szO.css('marginTop'))*-1;
			var maxX=parseFloat(img.width())-parseFloat(szO.width())/2;
			var maxY=parseFloat(img.height())-parseFloat(szO.height())/2;
			var nL=touch.pageX-pos.left;
			var nT=touch.pageY-pos.top;
			if(nL<minX){nL=minX;}
			if(nT<minY){nT=minY;}
			if(nL>maxX){nL=maxX;}
			if(nT>maxY){nT=maxY;}
			szO.css({left:nL,top:nT});
			var szM=$('.szM',this);
			var imgT=$('>img',szM);
			var nLT=(imgT.width()*(nL - minX)/ img.width()* -1);
			var nTT=(imgT.height()*(nT - minY)/ img.height()* -1);
			imgT.css({left:nLT,top:nTT});
		}).bind("touchstart", function() {
			$('.zoom').show();
			$(".layerCart").css('visibility', 'hidden');
			clearTimeout(timeoutSZtouch);
		}).bind("touchend", function() {
			$('.zoom').hide();
			var timeoutSZtouch = setTimeout(function() { $(".layerCart").css('visibility', 'visible');},2500);
		});
	}else{$(this).find('.zoom').hide();}
};
})(jQuery);
String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,'');};
Array.prototype.exists=function(search,remove){
	var test=0;
	var thisArray=this;
	for(var i=0;i<this.length;i++){
		if(this[i]==search){
			if(remove===true){thisArray.splice(i,1);}
			test=1;
			return true;
		}
	}
	if(test===0){return false;}else{return true;}
};
//Garantia
$(".ewBox").each(function(){
	var _this = $(this);
	var pBox = _this.find('.total .priceBox');
	var iniPrice = parseFloat(pBox.find('.prodPrice').val());
	var iniParcel = parseFloat(pBox.find('.prodParcel').val());
	var ewC = _this.find('.ewConditions').hide();
	var checkBoxs = _this.find(".warrantyList input:radio");
	var totalPrice=0,totalParcel=0,totalChecked=0;
	var totalBox = _this.find(".prodBox").length;
	var button = _this.find('.total .buttons .btn');
	checkBoxs.click(function(){
		totalPrice=totalParcel=0;
		totalChecked = checkBoxs.filter(":checked").each(function(){
			totalPrice += parseFloat($(this).next().val());
			totalParcel += parseFloat($(this).next().next().val());
		}).length;
		if(totalParcel!==0){button.hide();ewC.show();}
		else{button.show();ewC.hide();}
		pBox.find('.price').text((iniPrice+totalPrice).toReal());
		pBox.find('.parcel').text((iniParcel+totalParcel).toReal());
	});
	_this.find('#theForm').submit(function(e){
		e.preventDefault();
		if(totalChecked==totalBox) {
			location = $(this).attr('action')+'?'+$(this).serialize().replace(/codItemGuaranteeFusion%5B[0-9a-zA-Z]*%5D/ig, "codItemGuaranteeFusion").replace(/&codItemGuaranteeFusion=%2B/ig, "").replace(/&codItemGuaranteeFusion=\+/ig, "");
		}
	});
});
	function oneClick(e){
		if(!cookie('b2wChannel') || cookie('b2wChannel').toLowerCase()=="internet" || cookie('b2wChannel').toLowerCase()=="shop"){

			var node=$('.buyBox');
			var nodeBtns=$('.buyBox .buttons1Click');
			var hasWarranty = nodeBtns.attr('data-haswarranty');
			var moreUrl=window.location.pathname;
			var activateUrl='https://carrinho.shoptime.com.br/CustomerWeb/pages/LoginOneClick?rt='+window.location;
			var prodInfo='';
			var urlWarranty =  $('.hproduct form.checkout').attr('action');

			if($('.hproduct form.checkout').length==1){
				prodInfo=$('.hproduct form.checkout').serialize();
			}else if($('.popUp .checkout').length==1){
				prodInfo=$('.popUp .checkout').attr('href');
				prodInfo=prodInfo.split("?");
				prodInfo=prodInfo[1];
			}

			var checkoutUrl='https://carrinho.shoptime.com.br/checkout/oneClickBuy.xhtml?'+prodInfo;
			urlWarranty = urlWarranty + '?oneclick=true&' + prodInfo;
			var orCode='<span class="txt"><strong>ou</strong></span>';
			var LoggedBtns=orCode+'<a href="'+((hasWarranty) ? urlWarranty : activateUrl)+'"><span class="btn bt1Click02">Caixa Expresso</span></a>';
			var notLoggedBtns=orCode+'<a href="'+((hasWarranty) ? urlWarranty : activateUrl)+'"><span class="btn bt1ClickOff02">Caixa Expresso Desativado</span></a><span class="txtOff"><a href="'+activateUrl+'">Clique para ativar</a>.<a href="'+moreUrl+'" rel="saibaMaisOneclick" class="popAjax">Saiba Mais</a></span>';

			if(e=='popup'){
				node=$('.popUp .buyBox');
				nodeBtns=$('.popUp .buyBox .buttons1Click');
				LoggedBtns=orCode+'<a href="'+checkoutUrl+'"><span class="btn bt1Click02">Caixa Expresso</span></a>';
				notLoggedBtns=orCode+'<a href="'+activateUrl+'"><span class="btn bt1ClickOff02">Caixa Expresso Desativado</span></a><span class="txtOff"><a href="'+activateUrl+'">Clique para ativar o caixa</a></span>';
			}

			$(node).addClass('buy1ClickBox');
			if(cookie('hasOneClick') && cookie('hasOneClick')=="true"){
				$(nodeBtns).html(LoggedBtns);
			}else{
				$(nodeBtns).html(notLoggedBtns);
			}

			$(".buttons1Click a").click(function(e) {
				return validaSku(e);
			});

		}
	}
	oneClick();
	function validaSku(e){
		if($("form.checkout").find('.skuBox select').length>0){
			var lblText=$("form.checkout").find('.skuBox select option:selected').text();
			var hrefAction=$('.hproduct .buttons1Click>a, .sidebarFlutuante .buttons1Click>a').attr('href');
			if(hrefAction.search('/?/') !== -1) {
				hrefAction = hrefAction.split("?");
				hrefAction = hrefAction[0];
			}
			hrefAction = hrefAction +'?' + 'oneclick=true&' +$("form.checkout").serialize();
			var popHtm='<div class="popUp popAtencion"><div class="boxR1"><div class="boxR2"><div class="boxR3"><div class="boxR4"><div class="alertBox"><span class="ico at">&bull;</span><strong>O produto escolhido é <span class="highlight2">'+ lblText +'</span>.<br /> Tem certeza que é o produto desejado?</strong></div><div class="buttons"><a href="'+ hrefAction +'" onclick="return true;" class="btn btYesContinue">Sim</a><a href="#" class="btn btNoAlter" onclick="$.fancybox.close();return false;">Não</a></div></div></div></div></div></div>';
			$.fancybox(popHtm,{'width':500,'height':'auto','autoDimensions':false});
			e.preventDefault();
			return false;
		}
	}
	$(window).load(function(){
		unvProdSbmt();
		$('a[rel~=sz]').sz();
		$('.col01 a[rel~=prod_thumb]').click(function(e){
			if($(this).attr('rev')!==''){
				var fbUrl='/pop/images/'+$(this).attr('rev');
				$.fancybox({'width':520,'height':'auto','autoDimensions':false,'href':fbUrl,'onComplete':function(){resizeFB();}});
				return false;
			}
			e.preventDefault();
		});
		$(".col01 .allPhotos").unbind().click(function(){
			$('.col01 a[rel~=prod_thumb]:first').click();
			return false;
		});
		$(".hproduct .btn[data-url]").live("click",function(e){
			var tabName='product';
			tabName=$(this).hasClass('rChap')? 'info':tabName;
			tabName=$(this).hasClass('lTrack')? 'track':tabName;
			tabName=$(this).hasClass('sVideo')? 'video':tabName;
			var myHref=$(this).relativeHref();
			var fbUrl='/pop/espiar/'+tabName+myHref;
			$.fancybox({'width':670,'height':'auto','autoDimensions':false,'href':fbUrl,'onComplete':function(){oneClick('popup');if(tabName !='video'){resizeFB();}}});
			e.preventDefault();
		});
		$(".hproduct a .btn02").click(function(e){
			var tabName='video';
			tabName=$(this).hasClass('sBook')? 'book':tabName;
			tabName=$(this).hasClass('pAudio')? 'track':tabName;
			tabName=$(this).hasClass('pVideo')? 'video':tabName;
			var fbUrl='/pop/'+tabName+'/'+$(this).parents('a').eq(0).attr('rev');
			var wfb=(tabName=='video')? 'auto':470;
			$.fancybox({'width':wfb,'height':'auto','autoDimensions':false,'href':fbUrl,'onComplete':function(){if(tabName !='video'){resizeFB();}}});
			e.preventDefault();
		});
		$('a[rel~=video3d]').click(function(e){
			var fbUrl='/pop/'+$(this).attr('rel')+$(this).relativeHref();
			$.fancybox({'width':600,'height':440,'autoScale':false,'autoDimensions':false,'href':fbUrl});
		//e.preventDefault();
		return false;
	});
		$('.popAjax').live("click",function(e){
			var fbUrl='/pop/'+$(this).attr('rel')+$(this).relativeHref();
			$.fancybox({'width':600,'height':'auto','autoDimensions':false,'href':fbUrl,'onComplete':function(){resizeFB();}});
			e.preventDefault();
		});
		$('a[rel~=garantia]').click(function(e){
			var fbUrl='/pop/'+$(this).attr('rel')+$(this).relativeHref();
			$.fancybox({'width':'auto','height':'auto','autoScale':false,'autoDimensions':false,'href':fbUrl});
		//e.preventDefault();
		return false;
	});
		$("span.stopperInfo").live("click",function(e){
			var fbUrl=$(this).attr('data-href');
			$.fancybox({'width':825,'height':'auto','autoDimensions':false,'href':fbUrl,'onComplete':function(){resizeFB();}});
			e.preventDefault();
			e.stopPropagation();
		});

		$(".popGarantia").live("click",function(e){
			var fbUrl=$(this).attr('href');
			$.fancybox({'width':700,'height':'auto','autoDimensions':false,'href':fbUrl,'onComplete':function(){resizeFB();}});
			e.preventDefault();
			e.stopPropagation();
		});

		$('.hproduct .recommend a').click(function(e){
			var fbUrl='/pop/enviar/'+$(this).attr('rel')+$(this).relativeHref();
			$.fancybox({'width':500,'height':'auto','autoDimensions':false,'href':fbUrl});
			e.preventDefault();
		});
		$('.accordion li').accordion();
	//$('.accordion2 li').accordion('click');
	$('.banner01').banner('paginated');
	$('.banner02').banner('arrows');
	$('.banner03').banner('arrows');
	$(".imageControl").prepend('<div class="box1"><div class="boxR1"><div class="boxR2"><div class="boxR3"><div class="boxR4"><div class="auxProd02"><strong class="tit">Tamanho das Imagens:</strong><ul class="preview"><li class="imageMedia"><a href="#" class="selected" onclick="return changeImageTam(this,\'\',\'.wBox\');"><strong>Médio</strong></a>|</li><li class="imageGrande"><a href="#" onclick="return changeImageTam(this,\'prod03\',\'.wBox\');"><strong>Grande</strong></a></li></ul></div></div></div></div></div></div>');
	$(".wBox").each(function(){
		var $this = $(this);
		if($this.hasClass('prod03')){
			$(".imageControl .imageMedia a").removeClass("selected").parent().next().children().addClass('selected');
		}
	});
	var piTabs='<ul class="tabs">';
	$('.productInfo .piBox').each(function(i){
		piTabs+='<li';
		piTabs+=(i===0)? ' class="selected">':'>';
		piTabs+='<a href="#"><span>';
		piTabs+=$(this).find('> .ttab .txt').eq(0).text();
		piTabs+='</span></a></li>';
	});
	piTabs+='</ul>';
	$('.productInfo').prepend(piTabs);
	$('.productInfo .tabs a').each(function(i){
		$(this).click(function(){
			$('.productInfo .tabs li').removeClass('selected');
			$(this).parent().addClass('selected');
			$('.productInfo .piBox').hide();
			$('.productInfo .piBox').eq(i).show();
			return false;
		});
	});
	$('.list .eCheckout').each(function(){
		var node=$(this);
		var urlH=$(node).find('.url').eq(0).height();
		var fsBoxH=$(node).find('.fsBox').eq(0).height();
		if(fsBoxH < urlH){
			$(node).find('.fsBox').eq(0).height(urlH);
			$(node).find('.buttons').eq(0).height(urlH);
		}else{
			$(node).find('.url').eq(0).height(fsBoxH);
			$(node).find('.buttons').eq(0).height(fsBoxH);
		}
	});
	if($('#movie').length > 0){$('#movie').after('<div class="catalogProds"></div>');}
	/*ofertas por email | Unear webtrends e outros*/
	var mailOfferHtml='<div class="topBox05"><h2 class="title1"><span class="ico ar">&#187;</span> <span class="txt">Ofertas por Email</span></h2></div><div class="box1"><div class="boxR1"><div class="boxR2"><div class="boxR3"><div class="boxR4"><form action="/message/optin" method="post"><div class="wide"><label><span class="lbl">Seu Nome:</span><input type="text" class="text" name="optin.name" title="Seu Nome" /></label></div><div class="wide"><label><span class="lbl">Seu Email:</span><input type="text" class="text" name="optin.email" title="Seu Email" /></label></div><div class="buttons"><input class="btn ok register" type="submit" value="Cadastrar" /></div></form></div></div></div></div></div>';
	$('.mailOffer').html(mailOfferHtml);
	$('.mailOffer form').submit(function(){
		// /message/optin
		var form=$(this);
		var cName=form.find('input[name="optin.name"]').eq(0).val();
		cName=cName.trim();
		form.find('input[name="optin.name"]').eq(0).val(cName);
		var cNameLbl=form.find('input[name="optin.name"]').prev('span').text();
		var cMail=form.find('input[name="optin.email"]').eq(0).val();
		cMail=cMail.trim();
		form.find('input[name="optin.email"]').eq(0).val(cMail);
		var cMailLbl=form.find('input[name="optin.email"]').prev('span').text();
		if(!isString(cName)|| cName==cNameLbl){alert('Por favor digite seu nome.');return false;}
		if(cMail==cMailLbl){alert('Por favor digite seu email.');return false;}
		if(!isEmail(cMail)){alert('O email fornecido não é valido!');return false;}
		$.post(form.attr('action'),form.serialize());
		try{var uweb=new UnearUWeb();uweb.EventoCadastroRapido(cName,cMail,cName,'1');}catch(exception){handleException(exception);}
		form.parents('.box1').eq(0).fadeOut('fast',function(){
			form.parents('.box1').eq(0).css({'position':'relative'});
			form.parents('.box1').eq(0).append('<div id="overlay" style="background:#000;opacity:0.1;width:100%;height:100%;position:absolute;left:0;top:0;filter:alpha(opacity=10)width:100%;height:100%:"></div><span class="Loadajax">Carregando...</span>').fadeIn();
			setTimeout(function(){$('.mailOffer .box1').html('<p><span class="ico success2">&#8226;</span> <span class="hl">Cadastro efetuado com sucesso!</span></p><p>Em breve você receberá nossas ofertas exclusivas.</p><p>Obrigado!</p>').fadeIn();},2000);
		});
		return false;
	});
	// max/min fontSize
	$(".sizeOptBox").append('<div class="sizeOpt"><strong>Alterar tamanho do texto:</strong><ul><li class="small"><a href="#" onclick="return fontSize(\'.infoProdBox\',\'-\');">A-</a>|</li><li class="big"><a href="#" onclick="return fontSize(\'.infoProdBox\',\'+\');">A+</a></li></ul></div>');
	/*busca ficha tecnica*/
	$('.description .infoPBContent').prepend('<form action="#" class="fInfo"><fieldset><legend>Pesquise Características</legend><span class="ico titIInfo">&#8226;</span><label><span class="lbl">Buscar característica do produto</span><input type="text" class="text" title="Buscar característica do produto" /></label><input type="submit" class="btn ok" value="OK" /></fieldset></form>');
	$('.description .infoPBContent form.fInfo').submit(function(){
		var searchCont=$(this).parents('.description').find('.infoProdBox').eq(0);
		var searchStr=$(this).find('input[type="text"]').val();
		searchStr=$.trim(searchStr);
		searchCont.removeHighlight();
		if(searchStr.length>0){searchCont.highlight(searchStr,true);}
		return false;
	});
	$('.resultUnavaible .btCalcShp').click(function(e){
		e.preventDefault();
		var thisNode=$(this).closest(".resultUnavaible");
		$(thisNode).find('.resultUnavaibleSuccess').remove();
		var popsuc='<div class="resultUnavaibleSuccess"><div class="sucessBox"><span class="ico success">&#8226;</span><strong>Sua mensagem foi enviada com sucesso!</strong><div class="subMsg">Você será informado por email assim que o produto retornar ao estoque. Obrigado!</div></div></div>';
		var cName=$(thisNode).find('input[name="soldout.name"]').val();
		cName=cName.trim();
		$(this).find('input[name="soldout.name"]').val(cName);
		var cMail=$(thisNode).find('input[name="soldout.email"]').val();
		cMail=cMail.trim();
		$(this).find('input[name="soldout.email"]').val(cMail);
		var cpId=$(thisNode).find('input[name="soldout.itemId"]').val();
		var cSku=$(thisNode).find('input[name="soldout.skus"]');
		if(!isString(cName)){alert('Por favor digite seu nome.');return false;}
		if(cMail.length===0){alert('Por favor digite seu email.');return false;}
		if(!isEmail(cMail)){alert('O email fornecido não é valido!');return false;}
		if(!isString(cpId)){alert('O produto invÃ¡lido ou inexistente!');return false;}
		if($(cSku).length>0 &&$(cSku).attr('type')=='radio' && !$(cSku).is(':checked')){alert('Escolha uma das opções de produto indisponível!');return false;}
		var params = '&soldout.name='+cName+'&soldout.email='+cMail+'&soldout.itemId='+cpId+'&soldout.skus='+cSku;
		$.post('/message/soldout',params);
		setTimeout(function(){$(thisNode).find('.formResultUnavaible').hide().after(popsuc);},500);

	});
	// labels da busca de ficha tecnica e optin
	$('.mnSrch label,.description .infoPBContent label').each(function(){
		var lbl=$(this).find('span.lbl');
		var ipt=$(this).find('input[type="text"]');
		var text=lbl.text();
		if(ipt.val()===""){ipt.val(text);}
		ipt.focus(function(){if($(this).val()===text){$(this).val("");}}).blur(function(){if($(this).val()===""){$(this).val(text);}});
	});
	/* chamada de funcoes*/
	observAcr();
	checkFontSize();
	$.historyInit(pageload);
	hoverAction('.mMenu .showAll','.mMenu',10);
	$('.crmTabs>ul>li').hover(function(){
		$(this).parent().children().removeClass("selected");
		$(this).addClass("selected");
		$(".subCrm ").hide();
		$(this).find("ul.subCrm").fadeIn();
		return false;
	},function(){
		$(this).parent().removeClass("selected");
		$(this).find("ul.subCrm").hide();
		return false;
	});
	if(cookie('carrinho_topo')){
		var tProds=cookie('carrinho_topo');
		tProds=tProds.split('|');
		tProds=(tProds[1]<=9 ?+tProds[1]:tProds[1])+' Ite'+(tProds[1]>1 ? 'ns':'m');
		tProds=(tProds=='0 Itens')? '0 Itens':tProds;
		$('#header .basket .summary .tp').text(tProds);
	}


	//trata OAS vazio
	$("script").each(function(){if(this.innerHTML && this.innerHTML.indexOf("OAS_AD(")>=0){var next=$(this).next();if(next.length >0){if(next.html().indexOf("empty.gif") >=0){$(next).parent().hide();}}}});

		if(typeof(readyEvents) != "undefined") {
			var i=0;
			for(i=0;i<readyEvents.length;i++) {
				try {
					readyEvents[i]();
				} catch(exception) {
					handleException(exception);
				}
			}
		}

	});
	function isEmail(v){var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;  return regex.test(v);}

	function isString(v){return(typeof v==='string' && v !=='' && v.trim());}
	String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,'');};
	Number.prototype.toReal=function(f){
		var n = this;
		f = f || 'R$ ';
		n = n.toString().split('').reverse();
		var neg = (n[n.length-1] == '-') ? n.pop() : '';
		for(var k=0;k<n.length;k++){
			if(k==2){n.splice(k,0,',');}
			else if(k>2 && k%4==2){n.splice(k,0,'.');}
		}
		n.reverse().splice(0,0,f);
		if(neg=="-"){n.splice(1,0,neg);}
		return n.join('');
	};
	/* highlight search */
	var highlight = {
		searchTerm:function(){
			var ref=document.referrer,term,tl,doc=document.location.href;
			if(ref.indexOf('google.com')>0){

				term = getParamUrl(ref,'q');
				if(term){
					term = decodeURIComponent(term);
					term = term.replace(/\"|\'/g,"").replace("+"," ");
					$("#area01").highlight(term);
				}
				/*
				term = getParamUrl(ref,'q');
				if(term){term = term.replace(/\"|\'/g,"").split("+");}
				tl=term.length;
				while(tl--){$("#area02").highlight(term[tl]);}
				*/
			}else if(doc.indexOf('/busca/')>0){
				term = $(".breadcrumbBox li a").text();
				if(term){
					term = decodeURIComponent(term);
					term = term.replace(/\"|\'/g,"");
					$("div.wBox").highlight(term);
				}
				/*
				if(term){term = term.replace(/\"|\'/g,"").split(" ");}
				tl=term.length;
				while(tl--){$("div.wBox").highlight(term[tl]);}
				*/
			}
		}
	};
	highlight.searchTerm();
	$("#postalCodeID1").keyup(function(){
		var _this=$(this);
		_this.val(_this.val().replace(/[^0-9]/g,""));
		if(_this.val().length==5){$("#postalCodeID2").focus();}
	});
	$("#postalCodeID2").keyup(function(){var _this=$(this);_this.val(_this.val().replace(/[^0-9]/g,""));});
	$(".shBox .fnCep").click(function(){$(".calcBox,.calc").show();$(".resultCep,.serviceUnavaible,.resultUnavaible").hide();return false;});
	$('form.shBox').submit(function(){
		var getCep=$("#postalCodeID1").val()+$("#postalCodeID2").val();
		if(getCep.length<8){openSearchCepError();return false;}
		$("#imgLoadingFrete").remove();
		$("#calculateFreight").after('<span id="imgLoadingFrete"></span>');
		var itemFusion=$(".prodBox input[name=codItemFusion]");
		var codItem=(itemFusion.length==1)? itemFusion.val():$(".prodBox select[name=codItemFusion]").val();
		var url = "/checkout/freightService.xhtml?codItemFusion="+codItem+"&postalCode="+getCep;

		if(cookie('shopOpn')){
			url = url + "&opn=" + cookie('shopOpn');
		}

		$.getJSON(url,
			function(data){
				var resultCep, valFrete, prazo;
				try{
					if(!data){return;}
					if(data.errorMessage=="CEP_INEXISTENTE"){$('.calcBox').show();openSearchCepError();}
					else if(data.errorMessage=="ERRO_GENERICO"){
						resultCep=$(".shBox .serviceUnavaible");
						if(resultCep.css("display")=="none"){resultCep.show();}
					}else if(data.errorMessage=="SEM_ESTOQUE"){
						$(".formResultUnavaible").show();
						resultCep=$(".shBox .resultUnavaible");
						$(resultCep).find(".resultUnavaibleSuccess").remove();
						$(resultCep).find('input[name=soldout.skus]').val(codItem);
						if(resultCep.css("display")=="none"){resultCep.show();}
					}else if(data.egMessage && data.egMessage.length > 0){
						jQuery("#cepJs").text(getCep);
						jQuery(".resultCep .shpTime").html(data.egMessage+'<span class="txShp"/>');
						valFrete=((data.freightValue=="0,00") ? '&nbsp;&nbsp;Frete grátis':'&nbsp;&nbsp;R$&nbsp;'+data.freightValue);
						jQuery(".resultCep .shpTime2 .txShp").html(valFrete);
						resultCep=jQuery(".shBox .resultCep");
						if(resultCep.css("display")=="none"){resultCep.slideDown();}
					}else{
						if (data.riskAreaDelivery=="restricted") {
							$.fancybox({'width':600,'height':'auto','autoDimensions':false, 'content':'<div class="msgAreaRisco"><span class="ico icError"></span><h1 class="titleAreaRisco">Não realizamos entregas para este CEP de itens volumosos e/ou pesados.</h1><p class="subTitleAreaRisco">Favor cadastrar um novo endereço.</p><p class="btnAreaRisco"><input type="button" class="btn closedAreaRisco" onClick="$.fancybox.close()"/></p></div>'});
							jQuery("#imgLoadingFrete").remove();
							return false;
						}else if (data.riskAreaDelivery=="partial") {
							$.fancybox({'width':600,'height':'auto','autoDimensions':false, 'content':'<div class="msgAreaRisco"><span class="ico icError"></span><h1 class="titleAreaRisco">Os Correios não estão mais realizando entregas para este CEP.</h1><p class="subTitleAreaRisco">Os Correios não estão mais realizando entregas para este CEP. Por isso, a partir de agora, todas as encomendas destinadas para este endereço serão entregues na agência mais próxima, conforme comunicado que você receberá dos Correios. Sua encomenda ficará à disposição na agência pelo prazo de até cinco dias úteis. A não retirada implicará na devolução do(s) produto(s). Neste caso, o valor da compra será restituído conforme forma de pagamento utilizada.</p><p class="btnAreaRisco"><input type="button" class="btn closedAreaRisco" onClick="$.fancybox.close()"/></p></div>'});
							$('.calcBox').hide();
						}else if (data.riskAreaDelivery=="blocked") {
							$.fancybox({'width':600,'height':'auto','autoDimensions':false, 'content':'<div class="msgAreaRisco"><span class="ico icError"></span><h1 class="titleAreaRisco">Não realizamos entregas para este CEP.</h1><p class="subTitleAreaRisco">Favor cadastrar um novo endereço</p><p class="btnAreaRisco"><input type="button" class="btn closedAreaRisco" onClick="$.fancybox.close()"/></p></div>'});
							jQuery("#imgLoadingFrete").remove();
							return false;
						}
						prazo=data.freightDay;
						$(".resultCep .shpTime").html('Prazo de entrega <span class="txShp">em até '+prazo+((prazo<2)? " dia útil":" dias úteis")+'</span>');
						valFrete=((data.freight=="0,00")? '&nbsp;&nbsp;Frete grátis':'&nbsp;&nbsp;R$&nbsp;'+data.freight);
						$(".resultCep .shpTime2 .txShp").html(valFrete);
						resultCep=$(".shBox .resultCep");
						$(".calc").hide();
						$(".popAjax,.fnCep").show();
						if(resultCep.css("display")=="none"){$(".resultCep").show();}
					}
					jQuery("#imgLoadingFrete").remove();
				}catch(e){}
			});
	return false;
});
	$('.duInfo').live("click",function(e){
		var fbUrl=$(this).attr('href');
		$.fancybox({'width':600,'autoDimensions':false,'href':fbUrl,'callBackOnShow':function(){resizeFB();}});
		e.preventDefault();
	});
	$('.hproduct form.checkout').submit(function(e){
		if($(this).find('.skuBox select').length>0){
			var lblText=$(this).find('.skuBox select option:selected').text();
			var hrefAction=$(this).attr('action')+ '?' +$(this).serialize();
			var popHtm='<div class="popUp popAtencion"><div class="boxR1"><div class="boxR2"><div class="boxR3"><div class="boxR4"><div class="alertBox"><span class="ico at">&bull;</span><strong>O produto escolhido é <span class="highlight2">'+ lblText +'</span>.<br /> Tem certeza que é o produto desejado?</strong></div><div class="buttons"><a href="'+ hrefAction +'" onclick="return true;" class="btn btYesContinue">Sim</a><a href="#" class="btn btNoAlter" onclick="$.fancybox.close();return false;">Não</a></div></div></div></div></div></div>';
			$.fancybox(popHtm,{'width':500,'height':'auto','autoDimensions':false});
			e.preventDefault();
			return false;
		}
	});
	$(".hproduct a.btWlist").click(function(e){
		var fbUrl=$(this).attr('href');
		if(fbUrl.indexOf("/pop/")>=0){$.fancybox({'width':460,'height':'auto','autoDimensions':false,'href':fbUrl,'onComplete':function(){
			$('.popWeddingList form').submit(function(e){
				var url = $(this).attr('action');
				if(url.indexOf('AddGift') > 0){e.preventDefault();location=url+$(this).find(':radio:checked').val()+'/';}
			});
		}});e.preventDefault();}
	});
	function openSearchCepError(){
		jQuery.fancybox({'href':'/checkout/address/searchCepErro.xhtml','width':520,'height':281,'autoDimensions':false,'type':'iframe','onComplete':function(){
			var waitIframe=setInterval(function(){
				var iframeContent=jQuery("#fancybox-frame").contents();
				jQuery(iframeContent).find(".newFnd").hide();
				jQuery(iframeContent).find("p.tp2").hide();
				if(jQuery(iframeContent).find("p.tp2").length > 0){clearInterval(waitIframe);}
			},100);
		}});
	}
	if(location.pathname.split("/")[1] !== "produto"){document.cookie="urlContinuarComprando="+location.href+";path=/;domain=.shoptime.com.br";}
	function header_callback() {
		if(cookie('shopNick')){
			var newNick=cookie('shopNick');
			$(".liLogin").html("<p>Olá "+newNick+"!<br> Não é você? <a href='https://carrinho.shoptime.com.br/CustomerWeb/pages/Logout'><strong>Sair</strong></a></p>");
		} else {
			$(".liLogin").html('<p>Olá! Entre na sua conta ou <a href="https://carrinho.shoptime.com.br/CustomerWeb/pages/Login"><strong>Cadastre-se</strong></a></p>');
		}

		if(cookie('carrinho_topo')){
			var tProds=cookie('carrinho_topo');
			numeroProds=tProds.split('|');
			nProds=(numeroProds[1]<=9 ?+numeroProds[1]:numeroProds[1])+' produto'+(numeroProds[1]>1 ? 's': '');
			nProds=(nProds=='0 produtos')? '0 produtos':nProds;
			$('.totalProducts strong').text(nProds);
		}

	}
	$(function() {
		$("#BVRRContainerSEO").css("display","none");
	});
//carrega componentes assincronos.
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

/* Filtros */
$(".autoFilter .hidingMenu").bind('click',function(){
	$(this).prevAll(".hidden").slideToggle();
	$(this).find("a").contentToggle("+ Veja todos","- Ocultar");
	return false;
});
$(".autoFilter .btShowHideFilter").bind('click',function(){
	var li = $(this).closest(".liLinha");
	if (li.hasClass("closedFilter")) {
		li.find(">ul").slideDown(function(){
			li.removeClass("closedFilter");
		});
	}
	else {
		li.find(">ul").slideUp(function(){
			li.addClass("closedFilter");});
	}
	return false;
});
$('#fsearch .srchStr').live("click", function() {
	$('#fsearch .srchStr').autocomplete("http://busca.shoptime.com.br/autocomplete.php?callback=?", {
		dataType: 'json',
		parse: function(data) {
			var rows = [];
			for(var i=0; i<data.length; i++){
				rows[i] = { data:data[i], value:data[i], result:data[i] };
			}
			return rows;
		},
		formatItem: function(row, i, n) {
			return "<a href='http://busca.americanas.com.br/busca.php?q="+row+"'>"+row+"</a>";
		},
		extraParams: {
			term: function () { return $('#fsearch .srchStr').val(); }
		}
	});
});
$('#header .srchStr').live("click", function() {
	$('#header .srchStr').autocomplete("http://busca.shoptime.com.br/autocomplete.php?callback=?", {
		dataType: 'json',
		parse: function(data) {
			var rows = [];
			for(var i=0; i<data.length; i++){
				rows[i] = { data:data[i], value:data[i], result:data[i] };
			}
			return rows;
		},
		formatItem: function(row, i, n) {
			return "<a href='http://busca.americanas.com.br/busca.php?q="+row+"'>"+row+"</a>";
		},
		extraParams: {
			term: function () { return $('#header .srchStr').val(); }
		}
	});
});
//fix hover android
if(navigator.userAgent.toLowerCase().indexOf("android") > -1) {
	var androidFix = function() {
		//use strict
		var af = {};
		af.init = function() {
			return waitFor(function() {
				return $('ul#mainnavaux>li>a').length > 0;
			}, function() {
				return af.exec();
			}, 10000);
		};
		af.exec = function() {
			$('a').each(function() {
				$t = $(this);
				if($t.parent().find(">div:hidden").length == 1 && $t.parent().children().length == 2) {
					$t.addClass("android_fix");
				}
			});
			$('.android_fix').bind('click', function() {
				if(!$(this).hasClass("hover-fix")) {
					$(".hover-fix").removeClass("hover-fix");
					$(this).addClass("hover-fix");
					$("body").one("click", function() {
						$(".hover-fix").removeClass("hover-fix");
					});
					return false;
				}
				else {
					$(".hover-fix").removeClass("hover-fix");
				}
			});
		};
		return af.init();
	};
	androidFix();
}
loadAssync();
$("img.photo[data-original]").show().lazyload({
	effect : "fadeIn"
});

$(".acrN").easyjax({
	loadingStart: function(elem) {
		$(elem).append('<div id="overlay" style="background:#000;opacity:0.1;width:100%;height:100%;position:absolute;left:0;top:0;filter:alpha(opacity=10)"></div><span class="loadAjax">Carregando...</span>').children().not("img,#overlay").fadeTo('normal',0.1);
	}
});
function prepareCallback(data, elem) {
	if($(elem).hasClass('prod03')){
		data = data.replace(/src/g, "data-src");
		var dataParsed = $(data);
		dataParsed.find("img").each(function(){
			var curSrc=$(this).attr('data-original') || $(this).attr('data-src');
			if($(this).attr("data-original")) {
				$(this).attr('data-original',$(this).attr("data-longdesc"));
				$(this).attr("data-longdesc",curSrc);
			}
			else if($(this).attr("data-longdesc"))  {
				$(this).attr('src',$(this).attr("data-longdesc"));
				$(this).attr("data-longdesc",curSrc);
			} else {
				$(this).attr('src', $(this).attr('data-src'));
			}
			$(this).removeAttr("data-src");
		});
		return dataParsed;
	} else {
		return data;
	}
}
function paginationCallback(elem, url) {
	ajaxBrowser=false;
	var page = $(".acrN .on:eq(0)").text();
	document.title = document.title.search("Página") !== -1 ? (document.title.split("Página")[0] + "Página "+page) : (document.title + " - Página "+page);
	if(url) {window.location.hash="redir="+url; }
}
(function () {
	$(".see-all-installment").click(function(e) {
		var t = $(this),
		parentThis = $(this).parents(".brand-card-box"),
		target = $(".mp-pb-parcels", parentThis);
		t.toggleClass("open");
		if(t.hasClass("open")) {
			target.removeAttr("hidden");
		}else{
			target.attr("hidden","hidden");
		}
		return false;
	});
})();

/* google Pla */
if($(".precoCartao").length){
	var gogPla = getParamUrl(location.href, "opn") || $.cookie("shopOpn");
	if(gogPla == "GOOGLEXML") {
		$(".prodBox").addClass("special-price");
	}
}

/* Lightbox - video ------------------------------------------------------------------------ */

	/* Video thumbs */
	(function($, window, document, undefined) {
		if (!!$('.hproduct').find('.sVideo').length) {
			$('.hproduct').find('.sVideo').on('click', function(event) {
				event.preventDefault();
				var $videoContainer = $(this).closest('.hproduct').find(".product-video"),
					$video = $videoContainer.find("iframe"),
					videoSrc = $video.attr("src") || "";
				if (!/enablejsapi=1/.test(videoSrc)) {
					videoSrc += /[?]/.test(videoSrc) ? "&enablejsapi=1" : "?enablejsapi=1";
					$video.attr("src", videoSrc);
				}
				$.magnificPopup.open({
					items: {
						src: $videoContainer,
						type: "inline"
					},
					closeOnBgClick: true,
					callbacks: {
						open: function() {
							$(".mfp-content").css({
								"height": "auto",
								"width": "auto"
							});
						}
					}
				}, 0);
			});
			// checando carregamento do iframe e verifico se e o correto
			$("iframe").on("load", function() {
				if (!!$(this).closest('.mfp-content').length && $(".mfp-content").find("iframe").length) {
					$('.mfp-content').find("iframe").get(0).contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
				}
			});
		}
	})(jQuery, window, document);
/* Lightbox - video ------------------------------------------------------------------------ */










/* Lightbox - Dar uma olhada ------------------------------------------------------------------------ */
/*(function($, window, document) {

	//stamp-quickview
	var quickview = {
		target: $('.stamp-quickview[data-item-id]'),
		path: '/productinfo?itens=',
		getJson: function(itemId){
			var self = this;
			$.getJSON(this.path + itemId, function(data){
				self.renderTemplate(data.products[0]);
			});
		},
		renderTemplate: function(data){
			var template = $('#quickview-script-template').html();
			Mustache.parse(template);   // optional, speeds up future uses
			var rendered = Mustache.render(template, data);
			$('#quickview-template').html(rendered);
		},
		appendTemplate: function(){
			var template = [
				'<script id="quickview-script-template" type="x-tmpl-mustache">',
					'{{ name }}',
				'</script>',
				'<div hidden="hidden">',
					'<div id="quickview-template"></div>',
				'</div>'
			].join('');
			$('body').append(template);
		},
		openModal: function(){},
		bindEvents: function(){

			var self = this;

			self.target.on('click', function(){
				self.getJson($(this).attr('data-item-id'));
			});
		},
		init: function(){
			// atribui eventos
			this.bindEvents();
			// inseri template no body
			this.appendTemplate();
		}
	};

	quickview.init();

})(jQuery, window, document);*/
/* Lightbox - Dar uma olhada ------------------------------------------------------------------------ */

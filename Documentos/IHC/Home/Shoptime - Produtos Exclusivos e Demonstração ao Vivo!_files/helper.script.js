//** Begin Popup Busca Organica
/*onReady(function() {
  var popupSeekers = function(){  
  if (document.cookie.indexOf('b2wOpn=GOOGLEORGANICO') > -1) {
	var str = location.href;  
	
	if(str.search('/informatica') > -1) {
	  colorboxPopup('http://ishop.s8.com.br/mktshop/site/popup/busca-organica/img/popup_informatica.jpg');
	}
	if(str.search('/eletronicos') > -1) {
	  colorboxPopup('http://ishop.s8.com.br/mktshop/site/popup/busca-organica/img/popup_eletronicos.jpg');
	}
	if(str.search('/la-cuisine') > -1) {
	  colorboxPopup('http://ishop.s8.com.br/mktshop/site/popup/busca-organica/img/popup_la_cuisine-10.jpg');
	}
	if(str.search('/moveis-e-decoracao') > -1) {
	  colorboxPopup('http://ishop.s8.com.br/mktshop/site/popup/busca-organica/img/popup_moveis-20.jpg');
	}
	if(str.search('/bebes') > -1) {
	  colorboxPopup('http://ishop.s8.com.br/mktshop/site/popup/busca-organica/img/popup_bebes.jpg');
	}
	if(str.search('/pet-shop') > -1) {
	  colorboxPopup('http://ishop.s8.com.br/mktshop/site/popup/busca-organica/img/popup_petshop.jpg');
	}
  }
  
	function colorboxPopup(url){
	  $.colorbox({ href: url });
	}
  
  }
  popupSeekers();
  
});  //End onReady*/
//End Popup Busca Organica

//** Begin Popup CRM WEB
onReady(function() {
	var cr_loader = $('.cr-loader');

	// Desabilita a imagem de loader
	cr_loader.hide();

	// Evento de submit
	$('form[name=cr-form]').on('submit', function(e){
		// Executa a acao do CR
		crAction();

		return false;
	});

	function crAction() {
		var box_msg_callback = $('.box-msg-callback'),
			msg_callback = $('.box-msg-callback span'),
			email = $('input[name=cr-email]').val();

		// Habilita a imagem de loader
		cr_loader.show();

		// Checa se o email informado e valido
		if(validateEmail(email)) {
			var object = {
			o: 40,
			mail: email,
			opt: 'out',
			send_email: true,
			event_name: 'CR_TELEVENDAS',
			event_id: 9945
			};

			$.ajax({
				url: 'http://apps.shoptime.com.br/responsys/cr.php?callback=?',
				dataType: 'jsonp',
				data: object,
				success: function(){
					msg_callback.removeClass('label-fail').addClass('label-success');
					msg_callback.text('E-mail cadastrado! Solicite ao cliente para acessar o e-mail e confirmar seu cadastro.');

					// Exibe a mensagem
					box_msg_callback.hide().fadeIn(300);

					// Limpa o campo do e-mail digitado
					$('input[name=cr-email]').val('');
				},
				error: function(){
					msg_callback.removeClass('label-success').addClass('label-fail');
					msg_callback.text('Não foi possível realizar o cadastro! Por favor, acesse mais tarde.');

					// Exibe a mensagem
					box_msg_callback.hide().fadeIn(300);
				},
				complete: function(){
					// Desabilita a imagem de loader
					cr_loader.hide();
				}
			});
		} else {
			cr_loader.hide();

			//box_msg_callback.hide().fadeIn();
			msg_callback.removeClass('label-success').addClass('label-fail');
			msg_callback.text('E-MAIL INVÁLIDO!');

			// Exibe a mensagem
			box_msg_callback.hide().fadeIn(300);
		}
	}

	function validateEmail(email) {
		// Expressao regular para email
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

		// Retorna true caso esteja correto
		return (email !== '' && emailReg.test(email));
	}
});  //End onReady
//End Popup CRM WEB

// START CRM WEB
App.on('load', function(){
	var app = this, $ = this.$;
	var box_msg_callback = $('.box-msg-callback'),
		msg_callback = $('.box-msg-callback span');

	if(app.getUrlParameter('success') === 'T') {
		msg_callback.removeClass('label-fail').addClass('label-success');
		msg_callback.html('E-mail cadastrado! Solicite ao cliente para acessar o e-mail e confirmar seu cadastro.');

		// Exibe a mensagem
		box_msg_callback.hide().fadeIn(300);
	}

	// Evento de submit
	$('#cr-form').on('submit', function(e){
		var email = $('input[name=EMAIL_ADDRESS_]').val(),
			crm_Login = $.cookie('crmLogin') || '';

		// Checa se o email informado e valido
		if(validateEmail(email)) {
			$(this).find('input[name=CRM_LOGIN]').attr('value', crm_Login);

			return true;
		} else {
			//box_msg_callback.hide().fadeIn();
			msg_callback.removeClass('label-success').addClass('label-fail');
			msg_callback.html('E-MAIL INV&Aacute;LIDO!');

			// Exibe a mensagem
			box_msg_callback.hide().fadeIn(300);
		}
		return false;
	});

	$('.box-msg-callback').on('click', function(e){
		$(this).fadeOut(300);
	});

	function validateEmail(email) {
		// Expressao regular para email
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

		// Retorna true caso esteja correto
		return (email !== '' && emailReg.test(email));
	}
});
// END CRM WEB

/*
Os dois métodos abaixo alteram métodos já existentes no site 
somente inserindo um selo.init() no final.
*/
function observAcr() {
	$("ul.acr>li>a").unbind("click").click(function (e) {
		var self = this;
		var ul = $(this).closest("ul");
		ul.children().removeClass("selected");
		$(this).closest("li").addClass("selected");
		var rev = $(this.rev);
		var t = $(".wBox").offset().top - 50;
		var rel = '/ajax/' + this.rel + $(this).relativeHref();
		var timeWait = 1;
		if (rev.hasClass("wBox")) {
			timeWait = 500;
			$("body,html").animate({scrollTop: t}, timeWait - 10);
		}
		setTimeout(function () {
			rev.css({position: 'relative'}).append('<div id="overlay" style="background:#000;opacity:0.1;width:100%;height:100%;position:absolute;left:0;top:0;filter:alpha(opacity=10)"></div><span class="loadAjax">Carregando...</span>').children().not(".loadAjax,#overlay").fadeTo('normal', 0.1);
			/* HashTag */
			ajaxBrowser = false;
			if (!ul.hasClass('.tabs')) {
				window.location.hash = "redir=" + rel;
			}
			if (pageContent[rel]) {
				var data = $(pageContent[rel]);
				if ($(".wBox").hasClass('prod03')) {
					$(data).find("img.photo").each(function () {
						$(this).attr('data-original', $(this).attr("data-longdesc"));
					});
				}

				setTimeout(function () {
					rev.html($(">*", data)).css({position: 'static'}).children().not("img,#overlay").fadeIn('slow');
					observAcr();
					$("img.photo[data-original]").show().lazyload({
						effect: "fadeIn"
					});
				}, 20);
			} else {
				$.get(rel, function (data) {
					pageContent[rel] = data;
					data = $(">*", data);
					if ($(".wBox").hasClass('prod03')) {
						$(data).find("img.photo").each(function () {
							$(this).attr('data-original', $(this).attr("data-longdesc"));
						});
					}
					$("img.photo[data-original]").show().lazyload({
						effect: "fadeIn"
					});
					rev.html(data).css({position: 'relative'}).children().fadeIn('slow');
					observAcr();
					$("img.photo[data-original]").show().lazyload({
						effect: "fadeIn"
					});
				});
			}
		}, timeWait);
		return false;
	});
	//checkBogof();
   // selo.init();
}

function paginationCallback(elem, url) {
	ajaxBrowser=false;
	var page = $(".acrN .on:eq(0)").text();
	document.title = document.title.search("Página") !== -1 ? (document.title.split("Página")[0] + "Página "+page) : (document.title + " - Página "+page);
	if(url) {window.location.hash="redir="+url; }
	selo.init();
}
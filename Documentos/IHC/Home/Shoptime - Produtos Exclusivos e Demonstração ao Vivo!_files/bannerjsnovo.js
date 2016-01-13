function initBanners() {
	! function(a) {
		function e(e) {
			var r = "";
			"shoptime" == checkBrand() && a(document).on("click", ".app-banners .video", function() {
				a(this).html('<iframe width="384" height="228" src="//www.youtube.com/embed/' + a(this).attr("videoid") + '?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>')
			});
			for (var t in e) void 0 == a(e[t]).data().product_id || isNaN(a(e[t]).data().product_id) || (r += 0 == t ? a(e[t]).data().product_id : "," + a(e[t]).data().product_id);
				"" != r && n(r, function(n) {
					for (var r in e) {
						var t = {
							background: "#fff",
							font_color: "#fff",
							banner_title: null,
							banner_url: null,
							banner_subtitle: null,
							discount: null,
							invoice_price: !0
						};
						data = a(e[r]).data();
						for (p in data) t[p] = data[p];
							if (/\.(jpg|png|gif)$/.test(t.background) && 2 != t.banner_type && (t.background = "url(" + t.background + ") left top no-repeat"), a(e[r]).css({
								background: t.background,
								color: t.font_color
							}), display_discount = "" != t.discount && null != t.discount ? "display-count" : "", a(e[r]).addClass(checkBrand() + "-bannerStyle" + t.banner_type + " " + display_discount), void 0 != t.banner_class && a(e[r]).addClass(t.banner_class), void 0 != a(e[r]).data().product_id) {
								produtos = n.products;
								for (var i in produtos) produtos[i].id == data.product_id && s(produtos[i], a(e[r]), t)
							}
					}
				})
		}

		function n(e, s) {
			a.ajax({
				url: "http://produto." + checkBrand() + ".com.br/productinfo?itens=" + e + "&full=true&callback=?",
				jsonpCallback: "jsonpCallback",
				cache: !0,
				dataType: "jsonp",
				beforeSend: function(a) {
					a.overrideMimeType("text/javascript; charset=UTF-8")
				},
				success: function(a) {
					if (a.products && a.products.length) {
						for (var i = 0; i < a.products.length; i++) {
							a.products[i].name = a.products[i].name.replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\.\.\./g, '');
							a.products[i].croppedName = a.products[i].croppedName.replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\.\.\./g, '');
						}
					}
					s(a)
				},
				error: function() {
					n(e)
				}
			})
		}

		function s(e, n, s) {
			var t = "";
			s.video_yt_id && a(n).prepend('<div class="video" videoid="' + s.video_yt_id + '"></div>'), 
			$bannerURL = "" == s.banner_url || null == s.banner_url ? e.url : s.banner_url,
			$bannerQueryString = "" == s.banner_querystring || null == s.banner_querystring ? "" : s.banner_querystring,
			a(n).append('<a class="banners-url" href="' + $bannerURL + $bannerQueryString + '" style="display:block; color:' + s.font_color + '; "></a>'),
			$classInvoicePrive = s.invoice_price ? "inovice_price_on" : "inovice_price_off",
			a("a", n).append('<div class="banners-content ' + $classInvoicePrive + '" style="display:block; margin:0 auto; "></div>'),
			"shoptime" != checkBrand() || 4 != s.banner_type && 5 != s.banner_type && 6 != s.banner_type ? "shoptime" != checkBrand() || 2 != s.banner_type && 8 != s.banner_type && 9 != s.banner_type && 10 != s.banner_type ? "shoptime" == checkBrand() && 3 == s.banner_type ? $name = r(e.name, 56) : (console.log(e.name), $name = r(e.name, 50)) : $name = r(e.name, 70) : $name = r(e.name, 80), $name = "" == s.banner_title || null == s.banner_title ? $name : s.banner_title,
			"null" != e.default_price && "" != e.default_price && (
			  $preco_padrao = e.default_price ? e.default_price.split(" ") : '',
		      $preco_padrao = $preco_padrao[1] ? $preco_padrao[1].split(",") : ''), 
		      $preco_boleto = e.invoice_price ? e.invoice_price.split(" ") : '',
		      $preco_boleto = $preco_boleto[1] ? $preco_boleto[1].split(",") : '', 
		      $preco_venda = e.sales_price ? e.sales_price.split(" ") : '',
		      $preco_venda = $preco_venda[1] ? $preco_venda[1].split(",") : '',
			$preco_cartaoshop = e.card_price.split(" "),
			//$preco_cartaoshop = e.card_price[1].split(","),
			$cash_card_price = e.cash_card_price.split(" "),
			$installmentValue = e.installment.installment_value.split(" "), $installmentValue = $installmentValue[1].split(","),
			$installmentCartao = e.brand_installment.installment_value.split(" "),
			$installmentCartao = $installmentCartao[1].split(","),
			t += 1 != s.banner_type && 3 != s.banner_type && 10 != s.banner_type || "shoptime" != checkBrand() ? "" : '<div class="image"><img src="' + e.image + '" /></div>',
			t += 2 != s.banner_type && 5 != s.banner_type && 8 != s.banner_type && 13 != s.banner_type && 9 != s.banner_type || "shoptime" != checkBrand() ? "" : '<div class="image"><img src="' + e.mqImage + '" /></div>';

			var i = void 0 != s.banner_class && "tpl7-full" == s.banner_class ? e.images[0].url : e.mqImage;

			if (t += 7 == s.banner_type && "shoptime" == checkBrand() ? '<div class="image"><div class="mask"></div><img src="' + i + '" /></div>' : "",
			s.invoice_price) var c = "00" == $preco_venda[1] ? $preco_venda[0] : parseFloat($preco_venda[1]) + 1;

			else var c = "00" == $preco_venda[1] ? $preco_venda[0] : parseFloat($preco_venda[1]) + 1;
			var precocartao = "00" == $preco_cartaoshop[1] ? $preco_cartaoshop[0] : parseFloat($preco_cartaoshop[1]) + 1;
			var valorcartao = (parseFloat($preco_cartaoshop[1])*100)/parseFloat($preco_venda[0]);
			var descontocartao = (valorcartao) -100;
			var fechado = Math.abs(descontocartao).toFixed();
			var finalcartao = fechado.split('.').join("");
			var parcelacartao = e.brand_installment.total_installments;
			var cash_card_price = $cash_card_price;
			



			if (t += '<div class="information">', t += '<div class="name">' + $name + "</div>",
				t += "" == s.banner_subtitle || null == s.banner_subtitle ? "" : '<div class="subtitle">' + s.banner_subtitle + "</div>",
				t += "shoptime" != checkBrand() || 5 != s.banner_type && 7 != s.banner_type && 13 != s.banner_type || "" == e.freight ? "" : '<div class="freight"><img src="' + e.freight + '" /></div>',
				t += "shoptime" == checkBrand() && s.seal_km ? '<div class="seal_km"><span>GANHE ' + c + " KM de Vantagens</span></div>" : "",
				
				t += "</div>", 1 == e.stock) {
				if (t += '<div class="price">', t += s.labels && "soubarato" == checkBrand() ? '<div class="tag-label ' + s.labels + '"></div>' : "",
					hasLabels = s.labels && "soubarato" == checkBrand() ? "" : "noHasLabel",
					t += 2 == s.banner_type && "" != e.freight ? '<div class="freight ' + hasLabels + '"><img src="' + e.freight + '" /></div>' : "",
					"null" != e.default_price && "" != e.default_price && (t += '<div class="defaultPrice"><span class="prefix">de</span> <span class="moeda">R$</span>  <span class="unidade">' + $preco_padrao[0] + '</span><span class="decimal">,' + $preco_padrao[1] + "</span></div>"), "americanas" == checkBrand()) switch (s.banner_type) {
					case 1:
				$txtAPartirDe = '<span class="apartirde">a partir de</span>';
				break;
				case 2:
				$txtAPartirDe = '<span class="apartirde">por apenas</span>'
			} else $txtAPartirDe = "";
			t += s.invoice_price ? '<div class="priceInvoice">' + $txtAPartirDe + '<span class="prefix">por</span> <span class="moeda">R$</span>  <span class="unidade">' + $preco_boleto[0] + '</span><span class="decimal">,' + $preco_boleto[1] + '</span> <span class="text">no boleto</span></div>' : '<div class="priceInvoice"><span class="prefix">por</span> <span class="moeda">R$</span>  <span class="unidade">' + $preco_venda[0] + '</span><span class="decimal">,' + $preco_venda[1] + "</span></div>";
			var p = (1 == s.banner_type || 2 == s.banner_type) && "americanas" == checkBrand() || 2 == s.banner_type && "soubarato" == checkBrand() ? '<span class="emate">em at&eacute</span>' : "",
			o = 2 == s.banner_type && "soubarato" == checkBrand() ? '<p class="parcelAfter">ou em at&eacute; 12x com juros*</p>' : "";
			t += '<div class="salePrice"><span class="prefix">a prazo por</span> <span class="moeda">R$</span>  <span class="unidade">' + $preco_venda[0] + '</span><span class="decimal">,' + $preco_venda[1] + "</span></div>",
			t += '<div class="parcel"><span class="prefix"><span class="ou">ou</span> ' + p + '</span> <span class="parcelas">' + e.installment.total_installments + 'x</span> <span class="moeda">R$</span> <span class="unidade">' + $installmentValue[0] + '</span><span class="decimal">,' + $installmentValue[1] + '</span> <span class="text">sem juros</span>' + o + "</div>",
			t += "shoptime" == checkBrand() && s.precocartao ? (e.card_price <= e.sales_price  ? '<div class="parceladocartao"><span class="cartaoshoptime">Cart&atilde;o Shoptime</span> <span class="parcelas"> ' + e.card_price +' em at&eacute; '+ e.brand_installment.total_installments + 'x</span> </div>' : '<div class="parceladocartao"><span class="cartaoshoptime">Cart&atilde;o Shoptime</span> <span class="parcelas"> atat&eacute; '+ e.installment.total_installments + 'de <span class="unidade">' + $installmentValue[0] + '</span><span class="decimal">,' + $installmentValue[1] + '</span> </div>') : '',
			t += "shoptime" == checkBrand() && s.precocartao == false && s.cash_card_price == false ? '<div class="parceladocartao"><span class="cartaoshoptime">Cart&atilde;o Shoptime</span> <span class="parcelas">at&eacute; ' + e.installment.total_installments  + 'x</span> <span class="moeda">R$</span> <span class="unidade">' + $installmentValue[0] + '</span> </div>' : '',
			t += "shoptime" == checkBrand() && s.cash_card_price ? '<div class="parceladocartao"><span class="cartaoshoptime">Cart&atilde;o Shoptime</span> <span class="parcelas">1x de '+ s.cash_card_price + '</span> </div>' : '',
			t += "americanas" == checkBrand() && "" != s.discount && null != s.discount ? '<div class="discount">com at&eacute; <br /> <span>' + s.discount + "% de desconto</span></div>" : "", t += "soubarato" == checkBrand() && s.discount ? '<div class="discount"><span>' + convertToPercent($preco_padrao[0] + "," + $preco_padrao[1], $preco_venda[0] + "," + $preco_venda[1], !0) + "%</span></div>" : "", t += 2 == s.banner_type && ("americanas" == checkBrand() || "soubarato" == checkBrand()) || (6 == s.banner_type || 9 == s.banner_type) && "shoptime" == checkBrand() ? '<div class="btn-compreagora"></div>' : "", s.timer && (t += timerTemplate(s.timer)), t += "</div>"
		}
		a(".banners-content", n).append(t), "shoptime" == checkBrand() && 6 == s.banner_type && a(n).parent("li").css("width", "50%")
	}

	function r(a, e, n) {
		if (n = n ? n : " ", a.length > e) {
			for (a = a.substr(0, e), a = a.split(" "), $html = "", $i = 0; $i < a.length - 1; $i++) $html += 0 == $i ? a[$i] : " " + a[$i];
				return $html += n
		}
		return a
	}

	a.fn.banners = function() {
		if (this.length > 0) {
			var a = new Array;
			for (i = 0; i < this.length; i++) a.push(this[i]);
				e(a)
		}
	}
}(jQuery), $(".app-banners").banners()
}

function checkBrand() {
	return str = location.href, str.search("americanas") > -1 ? "americanas" : str.search("submarino") > -1 ? "submarino" : str.search("shoptime") > -1 ? "shoptime" : str.search("soubarato") > -1 ? "soubarato" : void 0
}

function convertToPercent(a, e) {
	var n = arguments[2];
	a = a.replace(".", "").replace(",", "."), e = e.replace(".", "").replace(",", ".");
	var s = (a - e) / a * 100;
	return n ? parseInt(s) : s
}

function timerTemplate(a) {
	var e = "";
	return e += '<div class="timer-box">', e += '<div class="app-timer" data-timer="' + a + '">', e += '<span class="icon-timer"></span>', e += '<span class="tit-timer">Faltam</span>', e += '<div class="timer-hour">', e += '<span class="timer-tens"></span>', e += '<span class="timer-units"></span>', e += "h", e += "</div>", e += '<div class="timer-minute">', e += '<span class="timer-tens"></span>', e += '<span class="timer-units"></span>', e += "m", e += "</div>", e += '<div class="timer-second">', e += '<span class="timer-tens"></span>', e += '<span class="timer-units"></span>', e += "s", e += "</div>", e += '<div class="timer-milliseconds">c</div>', e += '<span class="tit-timer-end">para o t&eacute;rmino desta oferta ou enquanto durar o estoque</span>', e += '<span class="btn-check"></span>', e += "</div>", e += "</div>"
}

"soubarato" == checkBrand() ? $(function() {
	initBanners()
}) : onReady(function() {
	initBanners()
});
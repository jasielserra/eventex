var countRRTest = 0;
if (typeof RR === "undefined") {
    if (countRRTest < 50) {
        setTimeout(function() {
            countRRTest++
        }, 100)
    } else {
        try
        {
    		document.getElementById("shoptimeComponenteRichRelevance").style.display = "none";
        }
        catch(err)
        {
        	console.log(err);
        }
    }
} else {
    function crmWA_setCookieRich(e, t, n, r, i) {
        var s = new Date;
        s.setHours(s.getHours() + n);
        var o = escape(t) + (n == null ? "" : "; expires=" + s.toUTCString());
        document.cookie = e + "=" + o + ";domain=" + r + ";path=" + i
    }
    function crmWA_getCookieRich(e) {
        var t = document.cookie;
        var n = t.indexOf(" " + e + "=");
        if (n == -1) {
            n = t.indexOf(e + "=")
        }
        if (n == -1) {
            t = null
        } else {
            n = t.indexOf("=", n) + 1;
            var r = t.indexOf(";", n);
            if (r == -1) {
                r = t.length
            }
            t = unescape(t.substring(n, r))
        }
        return t
    }(function() {
        var t = new Date;
        var n = t.getFullYear().toString();
        var r = t.getDate().toString();
        var i = t.getDay().toString();
        var s = t.getHours().toString();
        var o = t.getMinutes().toString();
        var u = t.getMilliseconds().toString();
        var a = n + r + i + s + o + u;
        var f = (Math.random() * 1e3 + 1).toString();
        var l = f + a;
        if (!crmWA_getCookieRich("recomendation")) {
            crmWA_setCookieRich("recomendation", l, null, "shoptime.com.br", "/")
        }
        
    })();
    var R3_COMMON = new r3_common;
    R3_COMMON.setApiKey("983448b36267fc69");
    R3_COMMON.setBaseUrl(window.location.protocol + "//recs.richrelevance.com/rrserver/");
    R3_COMMON.setClickthruServer("http://www.shoptime.com.br");
    R3_COMMON.setSessionId(crmWA_getCookieRich("recomendation"));
    R3_COMMON.setUserId(crmWA_getCookieRich("B2W-UID"));
    var path = location.pathname.toLowerCase();
    var host = location.hostname;
    var url = window.location;
    if ( (host == "www.shoptime.com.br" && path == "/") || 
    	 (host == "www.shoptime.com.br" && path == "") 	||
    	 (host == "www.shoptime.com.br" && path == "homeshoptime_testeab") ) {
        R3_COMMON.addPlacementType("home_page.rr1");
        R3_COMMON.addPlacementType("home_page.rr2");
        R3_COMMON.addPlacementType("home_page.rr3");
        R3_COMMON.addPlacementType("home_page.categorias_especiais");
        R3_COMMON.addPlacementType("home_page.marcas_proprias");

        var R3_HOME = new r3_home;

        rr_flush_onload();
        r3();
    } else if (path.indexOf("ofertasdatv") >= 0) {
        R3_COMMON.addPlacementType("home_page.rr1");
        R3_COMMON.addPlacementType("home_page.rr2");
        R3_COMMON.addPlacementType("home_page.rr3");
        R3_COMMON.addPlacementType("home_page.categorias_especiais");
        R3_COMMON.addPlacementType("home_page.marcas_proprias");

        var R3_HOME = new r3_home;
        
        rr_flush_onload();
        r3();
    } else if (path.indexOf("produto") >= 0 && path.indexOf("/produto/garantia/") == -1) {
        R3_COMMON.addPlacementType("item_page.rr1");
        R3_COMMON.addPlacementType("item_page.rr2");
        
        if( document.referrer && document.referrer.length > 0 && document.referrer.indexOf(".shoptime.com.br") == -1 )
        {
        	R3_COMMON.addPlacementType("item_page.external_referrer");
        }
        
        var R3_ITEM = new r3_item;
        var id_item = crmWA_dataLayer[0]["objIdProd"];
        var name_item = jQuery(".hproduct .prodBox .prodTitle  h1:eq(0)").text().trim();
        R3_ITEM.setId(id_item);
        R3_ITEM.setName(name_item);
        
        rr_flush_onload();
        r3();
    } else if (location.pathname.toLocaleLowerCase().indexOf("/checkout/basketconfirmacao/basketconfirmacao") >= 0 || location.pathname.toLocaleLowerCase().indexOf("/oneclickbuy/oneclickbuy.") >= 0 && jQuery(".button.btTrackOrder2").length == 1) {
        R3_COMMON.addPlacementType("purchase_complete_page.rr1");
        R3_COMMON.addPlacementType("purchase_complete_page.rr2");
        R3_COMMON.addPlacementType("purchase_complete_page.rr3");
        var ProductIdLength = crmWA_dataLayer[0]["objFunilProduto"].length;
        var ProductID = "";
        var Price = "";
        var Qty = "";
        var OrderId = crmWA_dataLayer[0]["objFunilNumPedido"];
        var R3_PURCHASED = new r3_purchased;
        R3_PURCHASED.setOrderNumber(OrderId);
        for (i = 0; i < ProductIdLength; i++) {
            ProductID = crmWA_dataLayer[0]["objFunilProduto"][i]["objId"];
            Price = TotalPrice = (crmWA_dataLayer[0]["objFunilCustoPedido"] - crmWA_dataLayer[0]["objFunilCustoFrete"]) / ProductIdLength;
            Qty = crmWA_dataLayer[0]["objFunilProduto"][i]["objQuantidade"];
            R3_PURCHASED.addItemIdPriceQuantity(ProductID, Price, Qty)
        }
        
        rr_flush_onload();
        r3();
    } else if (path.indexOf("/moda/") >= 0) {
        R3_COMMON.addPlacementType("category_page.moda_1");
        R3_COMMON.addPlacementType("category_page.moda_2");
        R3_COMMON.addPlacementType("category_page.moda_3");
        
        /*  /subloja/381538/moda/infantil/  */
        var linhaPrefix = window.path.substring(9);
        var linhaId = linhaPrefix.substring(0,linhaPrefix.indexOf("/"));
        
        var CategoryID = linhaId;
        var CategoryName = ""; 
        
        try
        {
        	CategoryName = jQuery(".breadandfilterbox .breadcrumbBox ul li h1:eq(0)").text().trim();
        	R3_CATEGORY.setName(CategoryName);
        }
        catch(err){console.log(".breadandfilterbox .breadcrumbBox ul li h1:eq(0) not found.");}
        
        var R3_CATEGORY = new r3_category;
        R3_CATEGORY.setId(CategoryID);
        
        rr_flush_onload();
        r3();
    } else if (jQuery(".breadandfilterbox .breadcrumbBox li").length.toString() == 1 && path.indexOf("loja") >= 0) {
        R3_COMMON.addPlacementType("category_page.rr1");
        R3_COMMON.addPlacementType("category_page.rr2");
        R3_COMMON.addPlacementType("category_page.rr3");
        var CategoryID = crmWA_dataLayer[0]["objDepartamento"];
        var CategoryName = jQuery(".breadandfilterbox .breadcrumbBox li").text().trim();
        var R3_CATEGORY = new r3_category;
       if( CategoryID == "365174"){
            CategoryID = "319261";
        } else if( CategoryID == "373574" ) { CategoryID = "318704"; }
        R3_CATEGORY.setId(CategoryID);
        R3_CATEGORY.setName(CategoryName);
        
        rr_flush_onload();
        r3();
    } else if (location.pathname.indexOf("/checkout") >= 0 && jQuery("#area02 h1 span:eq(1)").text().toLowerCase() == "meu carrinho de compras") {
        R3_COMMON.addPlacementType("cart_page.rr1");
        R3_COMMON.addPlacementType("cart_page.rr2");
        R3_COMMON.addPlacementType("cart_page.rr3");
        var R3_CART = new r3_cart;
        if (typeof crmWA_dataLayer != "undefined") {
            for ($i = 0; $i < crmWA_dataLayer.length; $i++) {
                if (typeof crmWA_dataLayer[$i].objCarrinhoCep != "undefined") {
                    for ($x = 0; $x < crmWA_dataLayer[$i].objCarrinhoProduto; $x++) {
                        R3_CART.addItemId(crmWA_dataLayer[$i].objCarrinhoProduto[$x].objId)
                    }
                }
            }
        }
        
        rr_flush_onload();
        r3();
        _oldPlacements();
    } else if (location.pathname.indexOf("busca.php") >= 0) {

        R3_COMMON.addPlacementType("search_page.rr1");
        R3_COMMON.addPlacementType("search_page.rr2");
        R3_COMMON.addPlacementType("search_page.rr3");
        var textoBusca = crmWA_dataLayer[0]["objTextoBusca"];
        var R3_SEARCH = new r3_search;
        R3_SEARCH.setTerms(textoBusca);
        var neemu_result = neemu_result_list.split(",");
        for (var i = 0; i < neemu_result.length; i++) {
            R3_SEARCH.addItemId(neemu_result[i])
        }
        
        rr_flush_onload();
        r3();
        _oldPlacements();
    } else if (jQuery(".titerro").text().toLowerCase() == "desculpe, a página que você procura não foi encontrada."){
       //newimplement 404
        R3_COMMON.addPlacementType('error_page.rr1');
        R3_COMMON.addPlacementType('error_page.rr2');
        R3_COMMON.addPlacementType('error_page.rr3');
        var R3_ERROR = new r3_error();

        rr_flush_onload();
        r3();    
        _oldPlacements();
    } else if (path.indexOf("/linha") >= 0) {
        R3_COMMON.addPlacementType("category_page.linha_1");
        R3_COMMON.addPlacementType("category_page.linha_2");
        R3_COMMON.addPlacementType("category_page.linha_3");
        
        var linhaPrefix = window.path.substring(7);
        var linhaId = linhaPrefix.substring(0,linhaPrefix.indexOf("/"));
        
        var CategoryID = linhaId;
        var CategoryName = ""; 
        
        try
        {
        	CategoryName = jQuery(".breadandfilterbox .breadcrumbBox ul li h1:eq(0)").text().trim();
        }
        catch(err){console.log(".breadandfilterbox .breadcrumbBox ul li h1:eq(0) not found.");}
        
        var R3_CATEGORY = new r3_category;
        R3_CATEGORY.setId(CategoryID);
        R3_CATEGORY.setName(CategoryName);
        
        rr_flush_onload();
        r3();
    } else if (path.indexOf("/sublinha") >= 0) {
        R3_COMMON.addPlacementType("category_page.sublinha_1");
        R3_COMMON.addPlacementType("category_page.sublinha_2");
        R3_COMMON.addPlacementType("category_page.sublinha_3");
        
        var subLinhaPrefix = window.path.substring(10);
        var subLinhaId = subLinhaPrefix.substring(0,subLinhaPrefix.indexOf("/"));
        
        var CategoryID = subLinhaId;
        
        var CategoryName = "";
        
        try
        {
        	CategoryName = jQuery(".breadandfilterbox .breadcrumbBox ul li h1:eq(0)").text().trim();
        }
        catch(err)
        {
        	console.log("crmWA_dataLayer.0.objFamilia not found.");
        }
        
        var R3_CATEGORY = new r3_category;
        R3_CATEGORY.setId(CategoryID);
        R3_CATEGORY.setName(CategoryName);
        
        rr_flush_onload();
        r3();
    } else if (path.indexOf("/loucuradodia") >= 0) {
        var loucura_id = "";
        
        var allElements = document.getElementsByTagName('div');
    	for (var _i = 0, _n = allElements.length; _i < _n; _i++)
    	{
    		if (allElements[_i].getAttribute('data-product_id') !== null)
    		{
      			R3_COMMON.addItemId( allElements[_i].getAttribute('data-product_id') );
    		}
    	}
        
        R3_COMMON.addPlacementType("generic_page.loucura_1");
    	var R3_GENERIC = new r3_generic();

    	rr_flush_onload();
    	r3();
    } else if (path.indexOf("/lista-de-casamento") >= 0) {
        
        if( rr_lista_casamento_ids && rr_lista_casamento_ids.length > 0 )
        { 
	    	for (var _i = 0; _i < rr_lista_casamento_ids.length; _i++)
	    	{
	    		R3_COMMON.addItemId( rr_lista_casamento_ids[_i] );
	    	}
        }
        
        R3_COMMON.addPlacementType("generic_page.lista_de_casamento");
    	var R3_GENERIC = new r3_generic();

    	rr_flush_onload();
    	r3();
    }
    else if (path.indexOf("/diadasmaes") >= 0) 
    {
        R3_COMMON.addPlacementType("home_page.hot_site_maes");
        var R3_HOME = new r3_home;
    	rr_flush_onload();
    	r3();
    }
}

function _oldPlacements()
{
	(function() {
        function e(e, t) {
            var n = document.getElementsByTagName("head")[0];
            var r = document.createElement("script");
            r.type = "text/javascript";
            r.src = e;
            r.onreadystatechange = t;
            r.onload = t;
            n.appendChild(r)
        }
        function n() {
            if (typeof RR === "undefined" || typeof RR.data === "undefined" || typeof RR.data.JSON === "undefined" || typeof RR.data.JSON.placements === "undefined") {
                if (t < 50) {
                    t++;
                    setTimeout(function() {
                        n()
                    }, 100)
                } else {
                    document.getElementById("shoptimeComponenteRichRelevance").style.display = "none"
                }
            } else {
                e("//apps.shoptime.com.br/media/richrelevance/js/app-rr.js", function() {})
            }
        }
        var t = 0;
        n()
    })()	
}


/*******  *******/
/*******  *******/
/*******  *******/
/*******  *******/
var rr_carouselSize = [];
var rr_currentPage = [];
var rr_listLength = [];

function rr_show_placement(_placement_name, _size, _position)
{	
	if( RR && RR.data && RR.data.JSON && RR.data.JSON.placements )
	{
		for( var _p = 0; _p < RR.data.JSON.placements.length; _p++ )
    	{
			if( RR.data.JSON.placements[_p].name == _placement_name )
			{
				if( RR.data.JSON.placements[_p].hint )
				{
					rrRenderHintedStrategy(RR.data.JSON.placements[_p], _p, _size, _position);
				}
				else
				{
					rrRenderStrategy(RR.data.JSON.placements[_p], _p, _size, _position);	
				}	
			}
		}
	}
}

function rr_call_product_info()
{	
	var rr_id_array = [];
	var elements = document.querySelectorAll(".rr_item");
	
	for (var it = 0; it < elements.length; it++) 
	{
		if( elements[it].id )
		{
			rr_id_array.push( elements[it].id );	
		}
	}
	
	var productinfoLimit = 20;
	var productinfoRequests = Math.ceil(rr_id_array.length / productinfoLimit);
	
	for( var it0 = 0; it0 < productinfoRequests; it0++ )
	{
		var itemsIds = "";
		for (it = productinfoLimit*it0; it < rr_id_array.length && it < ((productinfoLimit*it0) + productinfoLimit); it++) 
		{
			itemsIds += (itemsIds.length == 0) ? rr_id_array[it] : "," + rr_id_array[it];
		}
		
		var productInfoURL = "http://produto.shoptime.com.br/productinfo?itens=" + itemsIds + "&callback=?";
		
		getJSONP(productInfoURL, function(json) {
									
			var elements = document.querySelectorAll(".rr_item");
				
			for (it = 0; it < elements.length; it++) 
			{
				for (it2 = 0; it2 < json.products.length; it2++) 
				{
					if (json.products[it2].id == elements[it].id)
					{
                      	try
                        {
							elements[it].querySelector(".rr_item_image").src = json.products[it2].image;
							elements[it].querySelector(".rr_item_name_value").innerHTML = json.products[it2].croppedName;
							
                          	if(json.products[it2].hasDefaultPrice == true)
                            {
                            	elements[it].querySelector(".rr_item_price_value").innerHTML = json.products[it2].default_price;
                            }
                          	else
                            {
                            	elements[it].querySelector(".rr_item_price").innerHTML = "";
                            }
							
							elements[it].querySelector(".rr_item_sale_price_value").innerHTML = json.products[it2].sales_price;
							elements[it].querySelector(".rr_item_installments").innerHTML = json.products[it2].installment.total_installments + "x de " + json.products[it2].installment.installment_value + " sem juros";
							
                          	if(json.products[it2].numReviews)
                            {
                          		elements[it].querySelector(".rr_item_rating_image").src = json.products[it2].ratingsImage;
                          		elements[it].querySelector(".rr_item_rating_count").innerHTML = "(" + json.products[it2].numReviews + ")";
                            }
                          	else
                            {
                            	elements[it].querySelector(".rr_item_rating").innerHTML = "";
                            }
                          	
                          	if(	json.products[it2].cardPoints != null && json.products[it2].cardPoints.length > 0 &&
                          		json.products[it2].cash_card_price != null && json.products[it2].cash_card_price.length == 0 &&
                          		json.products[it2].card_price != null && json.products[it2].card_price.length == 0 && 
                          		json.products[it2].brand_installment.total_installments != null &&  
                          		json.products[it2].installment.total_installments != null &&
                          		json.products[it2].brand_installment.total_installments == json.products[it2].installment.total_installments)
                          	{
                          		elements[it].querySelector(".rr_card_installments").style.display = "inline";
								elements[it].querySelector(".rr_card_installments").innerHTML = "Ganhe ";
                          		elements[it].querySelector(".rr_card_installment_value").innerHTML = json.products[it2].cardPoints;
                          		elements[it].querySelector(".rr_card_installments_2").style.display = "inline";
                          		elements[it].querySelector(".rr_card_installments_2").innerHTML = " pontos";
                          	}
                          	else if( json.products[it2].cash_card_price != null && json.products[it2].cash_card_price.length > 0 )
							{
                          		elements[it].querySelector(".rr_card_installment_value").innerHTML = "1x de " + json.products[it2].cash_card_price;
							}
                          	else if(json.products[it2].cash_card_price != null && 
                          			json.products[it2].card_price != null && 
                          			json.products[it2].cash_card_price.length == 0 && 
                          			json.products[it2].card_price.length == 0 )
                          	{
                          		if( json.products[it2].brand_installment.total_installments != "1" )
								{
									elements[it].querySelector(".rr_card_installments").style.display = "block";
									elements[it].querySelector(".rr_card_installments").innerHTML = "Até " + json.products[it2].brand_installment.total_installments + "x de";
								}
								
								elements[it].querySelector(".rr_card_installment_value").innerHTML = json.products[it2].brand_installment.installment_value;
                          	}
                          	else if(json.products[it2].cash_card_price != null && 
                          			json.products[it2].cash_card_price.length == 0 && 
                          			json.products[it2].card_price != null && 
                          			json.products[it2].sales_price != null && 
                          			rr_compare_price(json.products[it2].sales_price, json.products[it2].card_price) )
                          	{
                          		elements[it].querySelector(".rr_card_installment_value").innerHTML = json.products[it2].card_price;
                          		
                          		if( json.products[it2].brand_installment != null && 
                          			json.products[it2].brand_installment.total_installments != null && 
                          			json.products[it2].brand_installment.total_installments != "1" && 
                          			elements[it].querySelector(".rr_card_installments_2") )
								{
                          			elements[it].querySelector(".rr_card_installments_2").style.display = "block";
                          			elements[it].querySelector(".rr_card_installments_2").innerHTML = "em até " + json.products[it2].brand_installment.total_installments + "x";
								}
                          	}
                        }
                      	catch(err)
                        {
                          console.log("getJSONP:"+err);
                        }
					}
				}
			}
		});
	}
}


function rrUpdateLinkURL()
{
	var elements = document.querySelectorAll(".rr_item");
	
	for (var it = 0; it < elements.length; it++) 
	{
		for (var placementIndex = 0; placementIndex < RR.data.JSON.placements.length; placementIndex++) 
		{
			for(var itemIndex = 0; itemIndex < RR.data.JSON.placements[placementIndex].items.length; itemIndex++)
			{
				if (RR.data.JSON.placements[placementIndex].items[itemIndex].id == elements[it].id)
				{
	              	try
	                {
	              		elements[it].querySelector(".rr_item_image_link").href = RR.data.JSON.placements[placementIndex].items[itemIndex].linkURL;
	              		elements[it].querySelector(".rr_item_name_value").href = RR.data.JSON.placements[placementIndex].items[itemIndex].linkURL;
	                }
	              	catch(err)
	              	{
	              		console.log(err);
	              	}
				}
			}
		}
	}
}


function getJSONP(url, success) 
{
	var ud = "_" + +new Date,
        script = document.createElement("script"),
        head = document.getElementsByTagName("head")[0] 
               || document.documentElement;

    window[ud] = function(data) {
    	try
    	{
    		head.removeChild(script);
    	}
    	catch(err)
    	{
    		console.log('getJSONP.removeChild.err');
    	}
    	success && success(data);
    };

    script.src = url.replace("callback=?", "callback=" + ud);
    head.appendChild(script);
}


function getItemsCount(listId)
{
	var counter = 0;
	
	try
	{
		var rr_item_list = document.getElementById(listId);
		
		for(var i = rr_item_list.childNodes.length; i--;)
	    {
	        if(rr_item_list.childNodes[i].nodeName === "LI")
	        {
	        	counter++;
	        }
	    }
	}
	catch(err)
	{
		console.log(err);
	}
	
	return counter;
}


function rr_scroll_left(_index)
{
	if( document.getElementById("rr_scroll_left_btn" + _index).className.indexOf("disabled") > -1 )
	{
		return;	
	}
	
	document.getElementById("rr_scroll_right_btn" + _index).className = document.getElementById("rr_scroll_right_btn" + _index).className.replace(" disabled", "");
	
	rr_currentPage[_index] = rr_currentPage[_index] - 1;

	var firstElementIndex = (rr_currentPage[_index]) * rr_carouselSize[_index];
	
	var elementsToSlide = 0;
	for( var count = 0; count < rr_carouselSize[_index] && (firstElementIndex + count) < rr_listLength[_index] ; count++)
	{
		elementsToSlide++;
	}
    
	var itemWidth = $('#rr_item_list' + _index + ' li').outerWidth(true);
	var _delta = 0;//elementsToSlide * itemWidth;
	var _offset = (rr_currentPage[_index] - 1) * rr_carouselSize[_index] * itemWidth;
	
	slide_left( _delta + _offset, _index );
	
	if(rr_currentPage[_index] == 1)
	{
		document.getElementById("rr_scroll_left_btn" + _index).className += " disabled";
	}
}


function rr_scroll_right(_index)
{
	if( document.getElementById("rr_scroll_right_btn" + _index).className.indexOf("disabled") > -1 )
	{
		return;	
	}
	
	document.getElementById("rr_scroll_left_btn" + _index).className = document.getElementById("rr_scroll_left_btn" + _index).className.replace(" disabled", "");
	
	rr_currentPage[_index] = rr_currentPage[_index] + 1;

	var firstElementIndex = (rr_currentPage[_index] - 1) * rr_carouselSize[_index];

    var elementsToSlide = 0;
	for( var count = 0; count < rr_carouselSize[_index] && (firstElementIndex + count) < rr_listLength[_index] ; count++)
	{
		elementsToSlide++;
	}

	var itemWidth = $('#rr_item_list' + _index + ' li').outerWidth(true);
	var _delta = elementsToSlide * itemWidth;
	var _offset = (rr_currentPage[_index] - 2) * rr_carouselSize[_index] * itemWidth;
	
	slide_right( _delta + _offset, _index );

	if( (rr_currentPage[_index] * rr_carouselSize[_index]) >= rr_listLength[_index] )
	{
		document.getElementById("rr_scroll_right_btn" + _index).className += " disabled"; 
	}	
}

function slide_right( _stopPosition, _index ) 
{
	var slidingDiv = document.getElementById("rr_item_list"+_index);
	
	if( isNaN( parseInt(slidingDiv.style.marginLeft) ) )
	{
		slidingDiv.style.marginLeft = '0px';
	}
	
	if (parseInt(slidingDiv.style.marginLeft) > (_stopPosition*-1) ) 
	{
		slidingDiv.style.marginLeft = parseInt(slidingDiv.style.marginLeft) - 10 + "px";
		setTimeout(	function() {
						slide_right(_stopPosition, _index);
					}, 0.01);
	}
}

function slide_left( _stopPosition, _index ) 
{
	var slidingDiv = document.getElementById("rr_item_list"+_index);
	
	if( isNaN( parseInt(slidingDiv.style.marginLeft) ) )
	{
		slidingDiv.style.marginLeft = '0px';
	}
	
	if (parseInt(slidingDiv.style.marginLeft) < (_stopPosition*-1) ) 
	{
		slidingDiv.style.marginLeft = parseInt(slidingDiv.style.marginLeft) + 10 + "px";
		setTimeout(	function () {
						slide_left(_stopPosition, _index);
					}, 0.1);
	}
}


function rrRenderStrategy(_strategy, _index, _size, _position)
{
	var _itemCount = 0;
	var _markup = '';
	var _placement_div_id = _strategy.name.split('.')[1] ? _strategy.name.split('.')[1] : 'rr_'+_index;
	
	_markup += '<div id="' + _placement_div_id + '" class="rr_container rr_container_' + _size + '">';
	_markup += '<div class="rr_div_title">';
	_markup += '<p class="rr_title">' + _strategy.message + '</p>';
	_markup += '</div>';
	_markup += '<div class="rr_div_arrow_left">';
	_markup += '<a id="rr_scroll_left_btn' + _index + '" class="rr_arrow rr_arrow_left" onclick="rr_scroll_left(' + _index + ');"><span>&lt;</span></a>';
	_markup += '</div>';
	_markup += '<div id="rr_div_recs' + _index + '" class="rr_div_recs rr_div_recs_' + _size + '">';
	_markup += '<ul id="rr_item_list' + _index + '" class="rr_item_list">';

	for(var _it = 0; _it < _strategy.items.length; _it++)
	{
		var _item = _strategy.items[_it];
		var _itemMarkup = '';
		
		try
		{
			_itemMarkup += '<li id="' + _item.id + '" class="rr_item">';
			_itemMarkup += '<a class="rr_item_image_link url" href="' + _item.linkURL + '">';
			_itemMarkup += '<img  class="rr_item_image" src="' + _item.imageURL + '">';
			_itemMarkup += '</a>';
			_itemMarkup += '<a class="rr_item_name_value" href="' + _item.linkURL + '">' + _crop_name(_item.name, 50) + '</a>';
			
			_itemMarkup += '<p class="rr_item_price">De: ';
			_itemMarkup += '<span class="rr_item_price_value">R$ ' + _item.list_price + '</span>';
			_itemMarkup += '</p>';

			_itemMarkup += '<p class="rr_item_sale_price">Por: '; 
			_itemMarkup += '<span class="rr_item_sale_price_value">R$ ' + _item.sale_price + '</span>';
			_itemMarkup += '</p>'; 
			
			_itemMarkup += '<p class="rr_item_installments">' + _item.installments + '</p>'; 
			
			_itemMarkup += '<p class="rr_item_rating">';
			_itemMarkup += '<img class="rr_item_rating_image" src="' + rr_get_rating_img_src( _item.rating ) + '">';
			_itemMarkup += '<span class="rr_item_rating_count">('+ _item.reviews +')</span>';
			_itemMarkup += '</p>';
			
			_itemMarkup += '<div class="rr_card">';
			_itemMarkup += 	'<div class="rr_card_img_div">';
			_itemMarkup += 		'<img class="rr_card_img" src="http://ishop.s8.com.br/statics-1.32/catalog/img/i-brand-card-2.png" />';
			_itemMarkup += 	'</div>';
			_itemMarkup += 	'<div class="rr_card_text_div">';
			_itemMarkup += 		'<span class="rr_card_text">Cartão Shoptime</span>';
			_itemMarkup += 		'<span style="display:none" class="rr_card_installments"></span>';
			_itemMarkup += 		'<span class="rr_card_installment_value"></span>';
			_itemMarkup += 		'<span style="display:none" class="rr_card_installments_2"></span>';
			_itemMarkup += 	'</div>';
			_itemMarkup += '</div>';
			
			if( _item.mkt_price && _item.mkt_price.length > 0 && parseFloat(_item.sale_price.replace(",",".")) >= parseFloat(_item.mkt_price) )
			{
				_itemMarkup += '<a class="rr_item_mkt_opt" href="' + _item.mkt_url + '">+ opções a partir de R$ ' + _formatCurrency( _item.mkt_price.replace('.',',') ) + '</a>';
			}
			else if( _item.mkt_price && _item.mkt_price.length > 0 && parseFloat(_item.sale_price.replace(",",".")) < parseFloat(_item.mkt_price) )
			{
				_itemMarkup += '<a class="rr_item_mkt_opt" href="' + _item.mkt_url + '">veja + opções de compra</a>';
			}
			else
			{
				_itemMarkup += '<p style="height:32px">&nbsp;</p>';
			}
			
			_itemMarkup += '</li>';
			
			_markup += _itemMarkup;
			_itemCount++;
		}
		catch(err)
		{
			console.log("rrRenderStrategy.err"+err);
		}
	}

	_markup += '</ul>';
	_markup += '</div>';
	_markup += '<div class="rr_div_arrow_right">';
	_markup += '<a id="rr_scroll_right_btn' + _index + '" class="rr_arrow rr_arrow_right" onclick="rr_scroll_right(' + _index + ');"><span>&gt;</span></a>';
	_markup += '</div>';
	_markup += '</div>';
	
	$(_markup).insertAfter(_position);
	
	rr_carouselSize[_index] = _size;
	rr_currentPage[_index] = 1;
	rr_listLength[_index] = _itemCount;
	
	try
	{
		document.getElementById("rr_scroll_left_btn" + _index).className += " disabled"; 
	
		if(rr_listLength[_index] <= rr_carouselSize[_index])
		{
			document.getElementById("rr_scroll_right_btn" + _index).className += " disabled"; 
		}
	}
	catch(err)
	{
		console.log("rrRenderStrategy.err"+err);
	}
}


function rrRenderHintedStrategy(_strategy, _index, _size, _position)
{
	var _itemCount = 0;
	var _markup = '';
	var _placement_div_id = _strategy.name.split('.')[1] ? _strategy.name.split('.')[1] : 'rr_'+_index;

	var _message = _strategy.message;

	_markup += '<section id="' + _placement_div_id + '"  style="clear:both;">';
	_markup += '<div id="' + _strategy.hint.id + '" class="rr_item rr_hint_div">';
	_markup += '<div class="rr_div_title">';
	_markup += '<p class="rr_title_hint">Quem viu...</p>';
	_markup += '</div>';
	_markup += '<a class="rr_item_image_link" href="' + _strategy.hint.linkURL + '">';
	_markup += '<img  class="rr_item_image" src="' + _strategy.hint.imageURL + '">';
	_markup += '</a>';
	_markup += '<a class="rr_item_name_value" href="' + _strategy.hint.linkURL + '">' + _crop_name(_strategy.hint.name, 50) + '</a>';
	_markup += '<p class="rr_item_price">De: ';
	_markup += '<span class="rr_item_price_value"></span>';
	_markup += '</p>';
	_markup += '<p class="rr_item_sale_price">Por:'; 
	_markup += '<span class="rr_item_sale_price_value"></span>';
	_markup += '</p>'; 
	_markup += '<p class="rr_item_installments"></p>'; 
	_markup += '<p class="rr_item_rating">';
	_markup += '<img class="rr_item_rating_image" src="">';
	_markup += '<span class="rr_item_rating_count"></span>';
	_markup += '</p>';
	
	_markup += '<div class="rr_card">';
	_markup += 	'<div class="rr_card_img_div">';
	_markup += 		'<img class="rr_card_img" src="http://ishop.s8.com.br/statics-1.32/catalog/img/i-brand-card-2.png" />';
	_markup += 	'</div>';
	_markup += 	'<div class="rr_card_text_div">';
	_markup += 		'<span class="rr_card_text">Cartão Shoptime</span>';
	_markup += 		'<span style="display:none" class="rr_card_installments"></span>';
	_markup += 		'<span class="rr_card_installment_value"></span>';
	_markup += 		'<span style="display:none" class="rr_card_installments_2"></span>';
	_markup += 	'</div>';
	_markup += '</div>';
	
	_markup += '</div>';
	
	_markup += '<div class="rr_container_hinted rr_container_hinted_' + _size + '">';
	_markup += '<div class="rr_div_title">';
	_markup += '<p class="rr_title">...viu também</p>';
	_markup += '</div>';
	_markup += '<div class="rr_div_arrow_left">';
	_markup += '<a id="rr_scroll_left_btn' + _index + '" class="rr_arrow rr_arrow_left" onclick="rr_scroll_left(' + _index + ');"><span>&lt;</span></a>';
	_markup += '</div>';
	_markup += '<div id="rr_div_recs' + _index + '" class="rr_div_recs_hinted rr_div_recs_hinted_' + _size + '">';
	_markup += '<ul id="rr_item_list' + _index + '" class="rr_item_list">';

	for(var _it = 0; _it < _strategy.items.length; _it++)
	{
		var _item = _strategy.items[_it];
		var _itemMarkup = '';
		
		try
		{
			_itemMarkup += '<li id="' + _item.id + '" class="rr_item">';
			_itemMarkup += '<a class="rr_item_image_link" href="' + _item.linkURL + '">';
			_itemMarkup += '<img  class="rr_item_image" src="' + _item.imageURL + '">';
			_itemMarkup += '</a>';
			_itemMarkup += '<a class="rr_item_name_value" href="' + _item.linkURL + '">' + _crop_name(_item.name, 50) + '</a>';
			_itemMarkup += '<p class="rr_item_price">De: ';
			_itemMarkup += '<span class="rr_item_price_value">R$ '+ _item.list_price +'</span>';
			_itemMarkup += '</p>';
			_itemMarkup += '<p class="rr_item_sale_price">Por:'; 
			_itemMarkup += '<span class="rr_item_sale_price_value">R$ ' + _item.sale_price + '</span>';
			_itemMarkup += '</p>'; 
			_itemMarkup += '<p class="rr_item_installments">' + _item.installments + '</p>'; 
			_itemMarkup += '<p class="rr_item_rating">';
			_itemMarkup += '<img class="rr_item_rating_image" src="' + rr_get_rating_img_src( _item.rating ) + '">';
			_itemMarkup += '<span class="rr_item_rating_count">('+ _item.reviews +')</span>';
			_itemMarkup += '</p>';
			
			_itemMarkup += '<div class="rr_card">';
			_itemMarkup += 	'<div class="rr_card_img_div">';
			_itemMarkup += 		'<img class="rr_card_img" src="http://ishop.s8.com.br/statics-1.32/catalog/img/i-brand-card-2.png" />';
			_itemMarkup += 	'</div>';
			_itemMarkup += 	'<div class="rr_card_text_div">';
			_itemMarkup += 		'<span class="rr_card_text">Cartão Shoptime</span>';
			_itemMarkup += 		'<span style="display:none" class="rr_card_installments"></span>';
			_itemMarkup += 		'<span class="rr_card_installment_value"></span>';
			_itemMarkup += 	'</div>';
			_itemMarkup += '</div>';
			
			_itemMarkup += '</li>';
			
			_markup += _itemMarkup;
			_itemCount++;
		}
		catch(err)
		{
			console.log("rrRenderHintedStrategy.err"+err);
		}
	}

	_markup += '</ul>';
	_markup += '</div>';
	_markup += '<div id="rr_div_arrow_right" class="rr_div_arrow_right">';
	_markup += '<a id="rr_scroll_right_btn' + _index + '" class="rr_arrow rr_arrow_right" onclick="rr_scroll_right(' + _index + ');"><span>&gt;</span></a>';
	_markup += '</div>';
	_markup += '</div>';
	_markup += '</section>';
	
	$(_markup).insertAfter(_position);
	
	rr_carouselSize[_index] = _size;
	rr_currentPage[_index] = 1;
	rr_listLength[_index] = _itemCount;
	
	try
	{
		document.getElementById("rr_scroll_left_btn" + _index).className += " disabled"; 
	
		if(rr_listLength[_index] <= rr_carouselSize[_index])
		{
			document.getElementById("rr_scroll_right_btn" + _index).className += " disabled"; 
		}
	}
	catch(err)
	{
		console.log("rrRenderHintedStrategy.err"+err);
	}
}


function _formatCurrency(n){
	if( ! n || n.trim().length == 0 )
	{
		n = "0";
	}
	else
	{
		n = n.replace( ",", "." );
		
		if( isNaN(n) )
		{
			n = "0";
		}
	}

	if( n.lastIndexOf(",") == -1 )
	{
		n += ".";
	}
	
	for( var _count = n.substring(n.lastIndexOf(".")+1).length; _count < 2; _count++)
	{
		n += "0";
	}	
	
	n = parseFloat(n);
	
	c = 2;
	d = ",";
	t = ".";
    c = isNaN(c = Math.abs(c)) ? 2 : c, 
    d = d == undefined ? "." : d, 
    t = t == undefined ? "," : t, 
    z = n < 0 ? "-" : "", 
    i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", 
    j = (j = i.length) > 3 ? j % 3 : 0;
   return z + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};


function _crop_name(_text, _len)
{
	if(_text && _text.length > _len)
	{
		return _text.substring(0, _len);
	}
	else
	{
		return _text;
	}
}

function rr_compare_price(price1, price2)
{
	if( price1 != null && price2 != null )
	{
		try
		{
			price1 = price1.replace("R$ ", "").replace(".", "").replace(",",".");
			price2 = price2.replace("R$ ", "").replace(".", "").replace(",",".");
			
			return Number(price1) > Number(price2);
		}
		catch(err){}	
	}
	return false;
}


function rr_get_rating_img_src(_rating)
{
	var _prefix = "http://ishop.s8.com.br/novoshop/catalog/img/rating-";
	var _suffix = ".gif";
	
	var _rate = "0_0";
	
	if(_rating != "0")
	{
		_rate = _rating.replace('.', '_');
	}
	
	return _prefix + _rate + _suffix;
}


function rr_display_compare_recs() 
{
	R3_COMMON.addPlacementType("category_page.compare_1");
	var R3_CATEGORY = new r3_category;
    
    var CategoryID = null;
    var CategoryName = null;
    
    try
    {
    	var _products = document.querySelectorAll(".neemu-product-info");
    	
    	for( var _i = 0; _i < _products.length; _i++ )
    	{
    		if( _products[ _i ] && _products[ _i ].getAttribute("data-id") )
    		{
    			R3_COMMON.blockItemId( _products[ _i ].getAttribute("data-id") );
    		}
    	}
    }
    catch(err)
    {
    	console.log("rr:products in comparison not available."+err);
    }
    
    try
    {
    	CategoryID = document.querySelector(".neemu-product-info").getAttribute("data-category-id");
    	CategoryName = document.querySelector("#area01-wrap > div.breadandfilterbox > div > ul > li > a").innerHTML;
    }
    catch(err)
    {
    	console.log("ERR: Category info is not available. "+err);
    	CategoryID = null;
    	CategoryName = null;
    }
   	
   	if( CategoryID == "365174")
   	{
        CategoryID = "319261";
    } 
    else if( CategoryID == "373574" ) 
    { 
    	CategoryID = "318704"; 
    } 
    else if(CategoryID == null)
    {
    	CategoryID = "350415";
    	CategoryName = "Smartphone";
    }
    
   	console.log("rr:CategoryID:"+CategoryID);
   	console.log("rr:CategoryName:"+CategoryName);
   	
    R3_CATEGORY.setId(CategoryID);
    R3_CATEGORY.setName(CategoryName);
    r3();
}

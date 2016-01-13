var rr_sort_cat_array = ['372633','372355','372354','371393','371373','364079','364078','363870','363869','358012','326910','326909','326908','326890','326889','326888','326870','326869','326868','257189','257188','257169','257168','255828','253330','253328','253312','253311','235995','235994','235993','235992','235991','235990','235989','235988','235984','235983','235982','235981','235980','235979','235977','235976','235975','235974','235972','235971','235969','235968','235967','235966','235965','235964','235961','235959','235957','235956','235955','235954','235953','235951','235950','235949','235948','235940','235939','235938',
                         '236009','321161','321061','321059','321060','321062','321123','321130','321139','321151','321162','321163','321164','321165','321166','321167','321174','321175','321176','357332','373035','373036','357899','357884','357864','357412','339450','322408','321173','321172','321171','321170','321169','321168','321160','321159','321158','321157','321156','321154','321153','321152','321148','321145','321143','321140','321137','321134','321131','321124','321116','321109','321102','321095','321088','321083','321077','321070','321063','321064','321071','321078','321079','321080','321081','321082','321084','321089','321096','321103','321110','321117','321125','321126','321127','321128','321129','321132','321135','321138','321141','321144','321146','321149','321155','322428','339413','339451','339432','322409','321150','321147','321142','321136','321133','321122','321121','321120','321119','321118','321115','321114','321113','321112','321111','321108','321107','321106','321105','321104','321101','321100','321099','321098','321097','321094','321093','321092','321091','321090','321087','321086','321085','321076','321075','321074','321073','321072','321069','321068','321067','321066','321065'];

var RR_PAGE_SIZE = 20;
var rr_current_page = 1;
var rr_returned_count = -1;
var pageCache = [];
var rr_last_page_reached = false;
var rr_last_page = -1;
var rr_product_list = [];
var rr_num_pages = 1;
var rr_start_index = 0;
var rr_sort_cat_id = '';
var rr_sort_is_first_call = true;
var rr_is_loja = true;
var rr_total_item_count = 0;

var crmWA_dataLayer_RichSort = crmWA_dataLayer_RichSort || []; 


function rr_is_sort_cat(cat_id)
{
	var result = false;
	
	for( var it = 0; it < rr_sort_cat_array.length; it++)
	{
		if( rr_sort_cat_array[it] == cat_id )
		{
			result = true;
			break;
		}
	}
	
	if(result == true)
	{
		crmWA_dataLayer_RichSort.push({'objTipoOrdenacao' : 'RichSort'});
	}
	else
	{
		crmWA_dataLayer_RichSort.push({'objTipoOrdenacao' : 'Comercial'});
	}
	
	return result;
}

function rr_hide_default_cat()
{
	var _path = location.pathname.toLowerCase();
	
	if( _path.indexOf("/linha") >= 0 || _path.indexOf("/sublinha") >= 0 )
	{
		$('div.top-result').hide();
		$('#vitrine').hide();
		$('div.pagination').hide();
		
		var sort_markup = '';
		sort_markup += 	'<div class="rr_sort" id="rr_sort">';
		sort_markup += 		'<div class="rr_sort_container">';
		sort_markup += 			'<div id="rr_sort_div" class="rr_sort_div">';
		sort_markup += 				'<ul id="rr_sort_list" class="rr_sort_item_list"></ul>';
		sort_markup += 			'</div>';
		sort_markup += 		'</div>';
		
		sort_markup += 		'<div class="rr_sort_pager">';
		sort_markup += 			'<ul id="rr_sort_pager_list" class="rr_sort_pager_list"></ul>';
		sort_markup += 		'</div>';
		sort_markup += 	'</div>';
		
		$(sort_markup).insertAfter('#vitrine');
	}
	else if( _path.indexOf("loja") >= 0 )
	{
		$('div.prods > ul').hide();
		
		var sort_markup = '';
		sort_markup += 	'<div class="rr_sort" id="rr_sort">';
		sort_markup += 		'<div class="rr_sort_container" style="width:709px;">';
		sort_markup += 			'<div id="rr_sort_div" class="rr_sort_div" style="width:709px;">';
		sort_markup += 				'<ul id="rr_sort_list" class="rr_sort_item_list"></ul>';
		sort_markup += 			'</div>';
		sort_markup += 		'</div>';
		
		sort_markup += 		'<div class="rr_sort_pager" style="width:709px;">';
		sort_markup += 			'<ul id="rr_sort_pager_list" class="rr_sort_pager_list"></ul>';
		sort_markup += 		'</div>';
		sort_markup += 	'</div>';
		
		$(sort_markup).insertAfter('div.prods > ul');
	}
}


function rr_get_URL(user_id,session_id,category_id)
{	
	var apiURL = "http://recs.richrelevance.com/rrserver/api/rrPlatform/recsForPlacements?"+
					"apiClientKey=98a1706b00d29330" +
					"&apiKey=983448b36267fc69" +
					"&count=" + RR_PAGE_SIZE +
					"&st=" + rr_start_index +
					"&placements=category_page.rich_sort" +
					"&userId=" + user_id +
					"&sessionId=" + session_id +
					"&categoryId=" + category_id +
					rr_sort_get_filter() +
					"&jsonp=true" +
					"&jcb=rr_json_callback";
	
	var ud = "_" + +new Date,
    script = document.createElement("script"),
    head = document.getElementsByTagName("head")[0] 
           || document.documentElement;
	
	script.src = apiURL;
	head.appendChild(script);
}


rr_json_callback = function(rrJSON)
{	
	var sortPlacement = null;
	var itemsIds = "";
	
	for(it = 0; it < rrJSON.placements.length; it++)
	{
		if(rrJSON.placements[it].placement == "category_page.rich_sort")
		{
			rr_returned_count = rrJSON.placements[it].recommendedProducts.length;
			sortPlacement = rrJSON.placements[it];
			break;
		}
	}
	
	if( rr_returned_count < RR_PAGE_SIZE )
	{
		rr_last_page_reached = true;
		rr_last_page = rr_current_page;
	}
	
	if(sortPlacement == null)
	{
		return;
	}
	else if(rr_sort_is_first_call && sortPlacement.recommendedProducts.length > 0)
	{
		rr_sort_is_first_call = false;
		rr_hide_default_cat();
	}
	
	for (it = 0; it < sortPlacement.recommendedProducts.length; it++) 
	{
		if( sortPlacement.recommendedProducts[it].id )
		{
			itemsIds += (it == 0) ? sortPlacement.recommendedProducts[it].id : "," + sortPlacement.recommendedProducts[it].id;
		}
	}
	
	var productInfoURL = "http://produto.shoptime.com.br/productinfo?itens=" + itemsIds + "&callback=?";
	
	try
	{
		rr_total_item_count = sortPlacement.totalItemCount;
		console.log( "totalItemCount:" + rr_total_item_count );
	}
	catch(err){console.log("rr_json_callback.err:"+err);}
	
	getJSONP(productInfoURL, function(json) {
		
		$("#rr_sort_list").empty();
		
		for (it = 0; it < sortPlacement.recommendedProducts.length; it++) 
		{
			for (it2 = 0; it2 < json.products.length; it2++) 
			{
				if( sortPlacement.recommendedProducts[it].id == json.products[it2].id )
				{
					try
					{
						var itemMarkup = "<li id='" + sortPlacement.recommendedProducts[it].id + "' class='single-product rr_sort_item'>"; 
                   		itemMarkup += "<a class='rr_sort_item_image_link' href='" + sortPlacement.recommendedProducts[it].clickURL +"'>";
                   		itemMarkup += "<img class='rr_sort_item_image photo' src='" + json.products[it2].image + "'>";
                   		itemMarkup += "</a>";
                   		itemMarkup += "<p><img class='rr_sort_item_freight' src='" + json.products[it2].freight +"' ></p>";
                   		itemMarkup += "<p class='rr_sort_item_name'><a class='prodTitle rr_sort_item_name_value' href='" + sortPlacement.recommendedProducts[it].clickURL + "'>" + json.products[it2].croppedName + "</a></p>";
                   		
                   		if(json.products[it2].hasDefaultPrice == true)
						{
							itemMarkup += "<p class='rr_sort_item_price'>De: <span class='rr_sort_item_price_value'>" + json.products[it2].default_price + "</span></p>"
						}

						itemMarkup += "<p class='sale rr_sort_item_sale_price'>Por: <span class='rr_sort_item_sale_price_value'><strong>" + json.products[it2].sales_price + "</strong></span></p>";
						itemMarkup += "<p class='rr_sort_item_installments'>" + json.products[it2].installment.total_installments + "x de " + json.products[it2].installment.installment_value + " sem juros" + "</p>";

						if(json.products[it2].numReviews)
						{
							itemMarkup += "<p class='rr_sort_item_rating'><img class='rr_sort_item_rating_image' src='" + json.products[it2].ratingsImage + "'/>";
							itemMarkup += "<span class='rr_sort_item_rating_count'>(" + json.products[it2].numReviews + ")</span></p>";
						}
						
						if( rr_is_loja == false )
						{
							itemMarkup += 	'<div class="comparator-itens">';
							itemMarkup += 		'<label class="use-tip">';
							itemMarkup += 			'<span class="custom-check spt-i-custom-check">';
							itemMarkup += 				'<input type="checkbox" class="comparatorCheck" value="'+ sortPlacement.recommendedProducts[it].id +'">';
							itemMarkup += 			'</span>';
							itemMarkup += 			'Comparar';
							itemMarkup += 		'</label>';
							itemMarkup += 	'</div>';

							$('div.top-result').text("Foram encontrados " + rr_total_item_count + " produtos divididos em " + Math.ceil(rr_total_item_count/RR_PAGE_SIZE) + " páginas nesta categoria.");
							$('div.top-result').show();
						}
						
						itemMarkup += "</li>";
                  		
						$("#rr_sort_list").append(itemMarkup);
					}
					catch(err)
					{
						console.log("getJSONP:"+err);
					}
				}
			}
		}
		savePage();
		setPagerState();
	});
}

function doPaginate(page)
{
	$('html, body').animate({
        scrollTop: $("#rr_sort").offset().top
    }, 1000);
	
	rr_current_page = page;
	$("#rr_sort_list").empty();
	$("#rr_sort_list").append(pageCache[ rr_current_page ]);
	setPagerState();
}


function getNextPage()
{	
	if( rr_last_page_reached )
	{
		return;
	}
	
	rr_current_page = rr_current_page + 1;
	showCurrentPage();
}

function getPrevPage()
{	
	if(rr_current_page == 1)
	{
		return;
	}
	
	rr_current_page = rr_current_page - 1;
	showCurrentPage();
}


function showCurrentPage()
{
	$('html, body').animate({
        scrollTop: $("#rr_sort").offset().top
    }, 1000);
	
	if( pageCache[ rr_current_page ] )
	{	
		$("#rr_sort_list").empty();
		$("#rr_sort_list").append(pageCache[ rr_current_page ]);
		setPagerState();
	}
	else
	{
		rr_start_index = (rr_current_page-1)*RR_PAGE_SIZE;
		rr_get_URL( crmWA_getCookieRich("B2W-UID"), crmWA_getCookieRich("recomendation"), rr_sort_cat_id);
	}	
}

function savePage()
{
	pageCache[rr_current_page] = $('#rr_sort_list').html();
}


function _getCroppedName(name)
{
	if( name.length > 78 )
	{
		name = name.substring(0, 75) + "...";
	}
	return name;
}


function _getRatingImageURL( rating )
{
	var rating_integer = rating.substring(0,1);
	var rating_decimal = rating.substring(2,3);

	return "http://ishop.s8.com.br/novoshop/catalog/img/rating-" + rating_integer + "_" + rating_decimal + ".gif";
}


function setPagerState()
{
	$("#rr_sort_pager_list").empty();
	
	//Anterior
	if( rr_current_page == 1 )
	{
		$("#rr_sort_pager_list").append("<li class='rr_sort_pager_item rr_sort_pager_item_disabled'>Anterior</li>");
	}
	else
	{
		$("#rr_sort_pager_list").append("<li class='rr_sort_pager_item rr_sort_pager_item_link'><a onclick='getPrevPage();'>Anterior</a></li>");	
	}
	
	
	//Pages
	if( rr_current_page > rr_num_pages )
	{
		rr_num_pages = rr_current_page;
	}
	
	for( var _it = 1; _it <= rr_num_pages; _it++ )
	{
		if( _it == rr_current_page )
		{
			$("#rr_sort_pager_list").append("<li class='rr_sort_pager_item rr_sort_pager_current_page'>" + _it + "</li>");
		}
		else
		{
			$("#rr_sort_pager_list").append("<li class='rr_sort_pager_item rr_sort_pager_item_link'><a onclick='doPaginate(" + _it + ");'>" + _it + "</a></li>");
		}
	}
	

	//Proxima
	if( rr_current_page == rr_last_page )
	{
		$("#rr_sort_pager_list").append("<li class='rr_sort_pager_item rr_sort_pager_item_disabled'>Próxima</li>");	
	}
	else
	{
		$("#rr_sort_pager_list").append("<li class='rr_sort_pager_item rr_sort_pager_item_link'><a onclick='getNextPage();'>Próxima</a></li>");
	}
}


function rr_sort_get_filter()
{
	var _filterTextPrefix = "&filterAtr=";
	var _tokens = window.path.split("/");
	var _filters = "";

	try
	{
		if( _tokens.length > 5 && _tokens[1] == "linha" )
		{
			for(var _index = 5; _index < _tokens.length; _index++)
			{
				try
				{
					var filter = _tokens[_index].split("-");
					_filters += _filters.length == 0 ? (rr_get_attr_name(filter[0])+":"+rr_get_attr_value(filter)) : ("|" + rr_get_attr_name(filter[0]) + ":" + rr_get_attr_value(filter));
				}
				catch(err){console.log("rr_sort_get_filter.linha.err:"+err);}
			}
		}
		else if( _tokens.length > 6 &&  _tokens[1] == "sublinha" )
		{
			for(var _index = 6; _index < _tokens.length; _index++)
			{
				try
				{
					var filter = _tokens[_index].split("-");
					_filters += _filters.length == 0 ? (rr_get_attr_name(filter[0])+":"+rr_get_attr_value(filter)) : ("|" + rr_get_attr_name(filter[0]) + ":" + rr_get_attr_value(filter));
				}
				catch(err){console.log("rr_sort_get_filter.sublinha.err:"+err);}
			}
		}
	}catch(err){console.log("rr_sort_get_filter.err:"+err);}
	
	return _filterTextPrefix+_filters;
}


function rr_get_attr_name(site_attr_name)
{
	var result = "";
	var attr_name_map = {	"marcas":"Marca",
							"marca":"Marca",
							"tamanho+da+tela":"Tamanho_da_Tela",
							"wifi":"Wi-Fi",
							"caracteristicas":"Características",
							"resolucao":"Resolução",
							"tecnologia+3d":"Tecnologia_3D",
							"tipo+de+suporte":"Tipo_de_Suporte/Pedestal",
							"frequencia":"Frequência_em_HZ",
							"tipo+de+tv":"Tipo_de_TV",
							"pronta+entrega":"be"};

	try
	{
		result = attr_name_map[site_attr_name];
	}catch(err){console.log("rr_get_attr_name.err:"+err);}
		
	return result;
}


function rr_get_attr_value(site_attr_value)
{
	var result = "";
	
	try
	{
		for( var _index = 1; _index < site_attr_value.length; _index++ )
		{
			result+= result.length == 0 ? site_attr_value[_index] : (";" + site_attr_value[_index]);
		}
	}catch(err){console.log("rr_get_attr_value.err:"+err);}
	
	return result;
}


try
{
	var _path = location.pathname.toLowerCase();
	
	if( _path.indexOf("loja") >= 0 )
	{
		rr_sort_cat_id = crmWA_dataLayer[0]["objDepartamento"];
		
		RR_PAGE_SIZE = 15;
	}
	else if( _path.indexOf("/linha") >= 0 && window.location.href.indexOf("ofertas.order") == -1 )
	{
		rr_is_loja = false;
		
		var linhaPrefix = window.path.substring(7);
        var linhaId = linhaPrefix.substring(0,linhaPrefix.indexOf("/"));
        rr_sort_cat_id = linhaId;
	}
	else if( _path.indexOf("/sublinha") >= 0 && window.location.href.indexOf("ofertas.order") == -1 )
	{
		rr_is_loja = false;
		
		var subLinhaPrefix = window.path.substring(10);
        var subLinhaId = subLinhaPrefix.substring(0,subLinhaPrefix.indexOf("/"));
        rr_sort_cat_id = subLinhaId;
	}
	
	if( rr_sort_cat_id && rr_sort_cat_id.length > 0 && rr_is_sort_cat(rr_sort_cat_id) )
	{
		rr_get_URL( crmWA_getCookieRich("B2W-UID"), crmWA_getCookieRich("recomendation"), rr_sort_cat_id);
	}
}
catch(err)
{
	console.log('rr.sort.err:'+err);
}
var rr_currDate = new Date();
var rr_session_id = "Session" + rr_currDate.getFullYear() + "_" + (rr_currDate.getMonth()+1) + "_" + rr_currDate.getDate();
var rr_user_id = rr_session_id;
var rr_current_product = null;
var rr_main_interval = null;

if(location.pathname.toLowerCase().indexOf("ofertasdatv") >= 0)
{
	try
	{
		rr_session_id = crmWA_getCookieRich("recomendation");
		rr_user_id = crmWA_getCookieRich("B2W-UID");
	}
	catch(err)
	{
		console.log(err);
	}

	rr_main_interval = setInterval(function () {
		try
		{
			var produtotv = document.getElementById('produtotv-destaque').value;
			
			if( produtotv && produtotv.length > 0 && rr_current_product != produtotv )
			{
				rr_current_product = produtotv;
				
				var child = document.getElementById("rr_home_tv");
				if( child )
				{
					try
					{
						child.parentNode.removeChild(child);
					}
					catch(err){console.log(err);}
				}
				
				rr_get_tv_recs(rr_current_product);
			}
		}
		catch(err)
		{
		  console.log(err);
		}
	}, 1000);
}


function rr_get_tv_recs(product_id)
{
	var apiURL = "http://recs.richrelevance.com/rrserver/api/rrPlatform/recsForPlacements?"+
				"apiClientKey=98a1706b00d29330"+
				"&apiKey=983448b36267fc69"+
				"&placements=item_page.rr_home_tv" +
				"&userId=" + rr_user_id +
				"&sessionId=" + rr_session_id +
				"&productId=" + product_id +
				"&jsonp=true" +
				"&jcb=rr_rfp_callback";
	
	var ud = "_" + +new Date,
	script = document.createElement("script"),
	head = document.getElementsByTagName("head")[0] 
	       || document.documentElement;

	script.src = apiURL;
	head.appendChild(script);
}

rr_rfp_callback = function(rrJSON)
{
	if(rrJSON && rrJSON.placements && rrJSON.placements.length > 0 && rrJSON.placements[0].recommendedProducts)
	{
		rrJSON.placements[0].items = rrJSON.placements[0].recommendedProducts;
		rrJSON.placements[0].name = rrJSON.placements[0].placement;
		rrJSON.placements[0].message = rrJSON.placements[0].strategyMessage;
		
		for( var _index = 0; _index < rrJSON.placements[0].items.length; _index++)
		{
			rrJSON.placements[0].items[_index].linkURL = rrJSON.placements[0].items[_index].clickURL;
			
			try
			{
				rrJSON.placements[0].items[_index].sale_price = rrJSON.placements[0].items[_index].salePriceCents / 100;
				rrJSON.placements[0].items[_index].sale_price = rrJSON.placements[0].items[_index].sale_price.replace(".",",");
			}
			catch(err)
			{
				rrJSON.placements[0].items[_index].sale_price = "0,00";
			}
			
			if( rrJSON.placements[0].items[_index].attributes && rrJSON.placements[0].items[_index].attributes.MarketplacelowerPrice && rrJSON.placements[0].items[_index].attributes.MarketplacelowerPrice.length > 0 )
			{
				rrJSON.placements[0].items[_index].mkt_price = rrJSON.placements[0].items[_index].attributes.MarketplacelowerPrice[0];
			}
			else
			{
				rrJSON.placements[0].items[_index].mkt_price = "";	
			}
			
			if( rrJSON.placements[0].items[_index].attributes && rrJSON.placements[0].items[_index].attributes.MarketplaceURL && rrJSON.placements[0].items[_index].attributes.MarketplaceURL.length > 0 )
			{
				rrJSON.placements[0].items[_index].mkt_url = rrJSON.placements[0].items[_index].attributes.MarketplaceURL[0];
			}
			else
			{
				rrJSON.placements[0].items[_index].mkt_url = "";
			}
		}
		
		var recIndex = 0;
		try{ recIndex = RR.data.JSON.placements.length; }catch(err){console.log(err);}
		
		try
		{ 
			rrRenderStrategy(rrJSON.placements[0], recIndex, 5, "#productstv");
			rr_call_product_info_tv();
		}
		catch(err)
		{
			console.log(err);
		}
	}	
}

function rr_call_product_info_tv()
{	
	var rr_id_array = [];
	var elements = document.querySelectorAll("#rr_home_tv .rr_item");
	
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
									
			var elements = document.querySelectorAll("#rr_home_tv .rr_item");
				
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
                          	
                          	if( json.products[it2].brand_installment.total_installments )
							{
								if( json.products[it2].brand_installment.total_installments != "1" )
								{
									elements[it].querySelector(".rr_card_installments").style.display = "block";
									elements[it].querySelector(".rr_card_installments").innerHTML = "Até " + json.products[it2].brand_installment.total_installments + "x de";
								}
								
								elements[it].querySelector(".rr_card_installment_value").innerHTML = json.products[it2].brand_installment.installment_value;
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
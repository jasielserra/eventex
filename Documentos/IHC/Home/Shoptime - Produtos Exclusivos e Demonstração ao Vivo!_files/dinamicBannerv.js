var dinamicBanner = {
	todo: [],
	add: function( productId, arguments, callback ) {
		this.todo.push( { ids: [].concat( productId ), args: arguments, callback: callback } );
	},
	render: function() {
		var prod;
		var ids = [];
		var i = 0;
		var todos = this.todo;

		if( todos.length ) {

			for ( i = 0, l = todos.length; i < l; i++ ) {
				prod = todos[ i ].ids;
				ids.push( prod );
			}

			jQuery.getJSON( '/productinfo?itens=' + ids.join(','), function( data ) {
				dinamicBanner.populate( data );
			});
		}
	},
	inArray: function( item, arr ){
		var i = 0;

		for ( i = 0, l = arr.length; i < l; i++ ) {
			if( arr[ i ] === item ){
				return true;
			}
		}
		return false;

	},
	populate: function( data ) {
		var product, l, g;
		var i = 0, k = 0;
		var tempProducts = [];
		var products = data.products;
		var todos = this.todo;

		if ( products.length ) {
			for ( i = 0, l = todos.length; i < l; i++ ) {
				product = todos[ i ];
				tempProducts = [];
				for ( k = 0, g = products.length; k < g; k++ ) {
					if( this.inArray( products[ k ].id, product.ids ) ) {
						tempProducts.push( products[ k ] );
					}
				}
				if( tempProducts.length ) {
					product.callback.call( this, tempProducts, product.args );
				}
			}
		}
	}
};

function BannerRegular(elem, productId, tag1){
	dinamicBanner.add( productId, arguments, function( products, args ) {
		var product = products[ 0 ];
		var html = '<span class="bl-price">';
			if( tag1 == 'no boleto' ) {
 				html += 'Por: ' + product.invoice_price + '</span>';
				html += '<span class="bl-info-boleto">no Boleto</span> ';
 			} else {
 				html += 'Por: ' + product.sales_price + '</span>';
 			}
						
			if( product.freight ) {
				html += '<img src="' + product.freight + '" class="bl-frete">';
			}

			html += '</span>';
		
		jQuery( elem ).html( html );
	});
}

function BannerSubsetRegular(elem, productId, tag1){
	dinamicBanner.add( productId, arguments, function( products, args ) {
		var product = products[ 0 ];
		var html = '<span class="bn-sub-price">';
			if( tag1 == 'no boleto' ) {
 				html += '<span class="bn-sub-regularPrice">No boleto por:</span>';
				html += '<strong class="bn-sub-salePrice"> ' + product.invoice_price + '</strong>';
 			} else {
 				html += '<span class="bn-sub-regularPrice">Por:</span>';
				html += '<strong class="bn-sub-salePrice"> ' + product.sales_price + '</strong>';
 			}
			html += '<span class="bn-sub-parcel"> ' + product.installment.total_installments +'x  <strong class="bn-sub-parcel-price"> ' + product.installment.installment_value + ' </strong> <span class="bn-sub-parcel-juros">sem juros</span></span>';
			if( product.freight ) {
				html += '<img src="' + product.freight + '" class="bn-sub-frete">';
			}
			html += '</span>';
		
		jQuery( elem ).html( html );
	});
}

function BannerLateralHome(elem, productId, tag1){
	dinamicBanner.add( productId, arguments, function( products, args ) {
		var product = products[ 0 ];
		var html = '<span class="bn-sub-price">';
 			if( tag1 == 'no boleto' ) {
 				html += '<span class="bn-sub-regularPrice price-color">No Boleto Por: </span>';
				html += '<strong class="bn-sub-salePrice price-color"> ' + product.invoice_price + '</strong>';
 			} else {
 				html += '<span class="bn-sub-regularPrice price-color">Por: </span>';
 				html += '<strong class="bn-sub-salePrice price-color"> ' + product.sales_price + '</strong>';
 			}			
			html += '<span class="bn-sub-parcel"> ' + product.installment.total_installments +'x  <strong class="bn-sub-parcel-price"> ' + product.installment.installment_value + ' </strong> <span class="bn-sub-parcel-juros">sem juros</span></span>';
			if( product.freight ) {
				html += '<img src="' + product.freight + '" class="bn-sub-frete">';
			}

			html += '</span>';
		
		jQuery( elem ).html( html );
	});
}



function DptoDestaqueRegular(elem, productId, tag1, tag2){
	dinamicBanner.add( productId, arguments, function( products, args ) {
		var product = products[ 0 ];
		var	html = '<span class="loja_frete_teste">';
			if( product.freight ) {
				html += '<img src="' + product.freight + '"  class="bl-frete">';
			}
			if( tag1 ) {
				html += '<img src="' + args[2] + '">';
 			}
 			if( tag2 ) {
 				html += '<img src="' + args[3] + '">';
 			}
			html += '</span>';
			html += '<span class="price_de_por">';
			if(( product.default_price != 'null' ) && (product.default_price != product.sales_price)) {
				html += '<span class="loja_price_de">';
				html += '<span class="price_de">De: &nbsp;</span>';
				html += '<span class="price_de_valor">'+ product.default_price +'</span>';
				html += '</span>';
			}
			html += '<span class="loja_price_1por">';
			html += '<span class="price_por">Por: &nbsp;</span>';
			html += '<span class="price_valor"> ' + product.sales_price + '</span>';
			html += '</span>';
			html += '</span>';
			if( product.installment.total_installments != '1' ) {
				html += '<span class="loja_price_parcela">';
				html += '<span class="price_parc"> ' + product.installment.total_installments +'x</span>';
				html += '<span class="price_parc_valor"> ' + product.installment.installment_value + '</span>';
				html += '<span class="price_parc_juros"> sem juros</span>';
				html += '</span>';
			}
		
		jQuery( elem ).html( html );
	});
}

function lojaDestaqueRegular(elem, productId, tag1, tag2, tag3){
	dinamicBanner.add( productId, arguments, function( products, args ) {
		var product = products[ 0 ];
		var	html = '<span class="loja_frete_teste">';
			if( product.freight ) {
				html += '<img src="' + product.freight + '"  class="bl-frete">';
			}
			if( tag2 ) {
				html += '<img src="' + args[3] + '">';
 			}
 			if( tag3 ) {
 				html += '<img src="' + args[4] + '">';
 			}
			html += '</span>';
			html += '<span class="price_de_por">';
			if(( product.default_price != 'null' ) && (product.default_price != product.sales_price)) {
				html += '<span class="loja_price_de">';
				html += '<span class="price_de">De: &nbsp;</span>';
				html += '<span class="price_de_valor">'+ product.default_price +'</span>';
				html += '</span>';
			}
			html += '<span class="loja_price_1por">';
			if( tag1 == 'no boleto' ) {
				html += '<span class="price_por">Por: &nbsp;</span>';
				html += '<span class="price_valor"> ' + product.invoice_price + '</span>';
				html += '<span class="price_parc_juros"> no boleto</span></span>';
 			} else {
 				html += '<span class="price_por">Por: &nbsp;</span>';
				html += '<span class="price_valor"> ' + product.sales_price + '</span>';
 			}
			html += '</span>';
			html += '</span>';
			if( product.installment.total_installments != '1' ) {
				html += '<span class="loja_price_parcela">';
				html += '<span class="price_parc"> ' + product.installment.total_installments +'x</span>';
				html += '<span class="price_parc_valor"> ' + product.installment.installment_value + '</span>';
				html += '<span class="price_parc_juros"> sem juros</span>';
				html += '</span>';
			}
		
		jQuery( elem ).html( html );
	});
}

function homeDestaqueRegular(elem, productId, tag1){
	dinamicBanner.add( productId, arguments, function( products, args ) {
		var product = products[ 0 ];
		var	html = '<span class="price_de_por">';
			if(( product.default_price != 'null' ) && (product.default_price != product.sales_price)) {
				html += '<span class="loja_price_de hm_cor_de">';
				html += '<span class="hm_price_de">De: &nbsp;</span>';
				html += '<span class="hm_price_de_valor">'+ product.default_price +'</span>';
				html += '</span>';
			}
			html += '<span class="loja_price_1por hm_cor_por">';
			html += '<span class="hm_price_por">Por: &nbsp;</span>';
			if( tag1 == 'no boleto' ) {
				html += '<span class="hm_price_valor"> ' + product.invoice_price + '</span>';
				html += '<span class="price_por-boleto"> no boleto</span>';
 			} else {
 				html += '<span class="hm_price_valor"> ' + product.sales_price + '</span>';
 			}		
			html += '</span></span>';
			if( product.installment.total_installments != '1' ) {
				html += '<span class="loja_price_parcela hm_cor_parcela">';
				html += '<span class="hm_price_parc"> ' + product.installment.total_installments +'x</span>';
				html += '<span class="hm_price_parc_valor"> ' + product.installment.installment_value + '</span>';
				html += '<span class="hm_price_parc_juros"> sem juros</span>';
				html += '</span>';
			}
		
		jQuery( elem ).html( html );
	});
}

function homeMiddleEstaticoRegular(elem, productId, tag1, tag2, tag3){
	dinamicBanner.add( productId, arguments, function( products, args ) {
		var product = products[ 0 ];
		var	html = '<span class="loja_frete_teste">';
			if( product.freight ) {
				html += '<img src="' + product.freight + '"  class="bl-frete">';
			}
			if( tag2 ) {
				html += '<img src="' + args[3] + '">';
 			}
 			if( tag3 ) {
 				html += '<img src="' + args[4] + '">';
 			}
			html += '</span>';
			html += '<span class="price_de_por">';
			if(( product.default_price != 'null' ) && (product.default_price != product.sales_price)) {
				html += '<span class="loja_price_de hm_cor_de">';
				html += '<span class="hm_price_de">De: &nbsp;</span>';
				html += '<span class="hm_price_de_valor">'+ product.default_price +'</span>';
				html += '</span>';
			}
			html += '<span class="loja_price_1por hm_cor_por">';
			html += '<span class="hm_price_por">Por: &nbsp;</span>';
			if( tag1 == 'no boleto' ) {
				html += '<span class="hm_price_valor"> ' + product.invoice_price + '</span>';
				html += '<span class="price_por-boleto"> no boleto</span>';
 			} else {
 				html += '<span class="hm_price_valor"> ' + product.sales_price + '</span>';
 			}
			html += '</span></span>';
			if( product.installment.total_installments != '1' ) {
				html += '<span class="loja_price_parcela hm_cor_parcela">';
				html += '<span class="hm_price_parc"> ' + product.installment.total_installments +'x</span>';
				html += '<span class="hm_price_parc_valor"> ' + product.installment.installment_value + '</span>';
				html += '<span class="hm_price_parc_juros"> sem juros</span>';
				html += '</span>';
			}
		
		jQuery( elem ).html( html );
	});
}





if(!window.jQuery){
 onReady(function(){dinamicBanner.render();});
}else{
 dinamicBanner.render();
}
if(!window.cookie){
	/*cookie*/
	function cookie(name,value,options){if(typeof value!='undefined'){options=options||{};if(value===null){value='';options.expires=-1;}
	var expires='';if(options.expires&&(typeof options.expires=='number'||options.expires.toUTCString)){var date;if(typeof options.expires=='number'){date=new Date();date.setTime(date.getTime()+(options.expires*86400000));}else{date=options.expires;}
	expires=';expires='+date.toUTCString();}
	var path=options.path?';path='+(options.path):'';var domain=options.domain?';domain='+(options.domain):'';var secure=options.secure?';secure':'';document.cookie=[name,'=',encodeURIComponent(value),expires,path,domain,secure].join('');}else{var cookieValue=null;if(document.cookie&&document.cookie!==''){var cookies=document.cookie.split(';');for(var i=0;i<cookies.length;i++){var cookie=jQuery.trim(cookies[i]);if(cookie.substring(0,name.length+1)==(name+'=')){cookieValue=decodeURIComponent(cookie.substring(name.length+1));break;}}}
	return cookieValue;}} 
}

function header012013(){
	var tProds;
	if(tProds = cookie("carrinho_topo") ) {
		var total = tProds.split("|")[ 1 ];
		jQuery("#header-cart-counter").text( total + ( (total==1) ? ' produto' : ' produtos' ) );
	}
	if( cookie("shopNick") ) {
		var newNick = cookie("shopNick");
		jQuery("#header-userbox-container").addClass("is-logged");
		jQuery("#header-userbox-username").text( newNick );
	}
	// if(jQuery.fn.autocomplete){
	// 	jQuery("#header-search-input").autocomplete("http://busca.shoptime.com.br/autocomplete.php?callback=?", {
	// 		dataType: "json",
	// 		parse: function( data ) {
	// 			var i;
	// 			var rows =[];		
	// 			for( i = 0; i < data.length; i++ ) {
	// 				rows.push( {data:data[ i ], value:data[ i ], result:data[ i ] });
	// 			}
	// 			return rows;	
	// 		},
	// 		formatItem: function( row, i, n ) {
	// 			return "<a href='http://busca.americanas.com.br/busca.php?q="+row+"'>"+row+"</a>";
	// 		},
	// 		extraParams: {
	// 			term: function () { return $('#header-search-input').val() }
	// 		}
	// 	});
	// }
}
if(window.jQuery){
	header012013();
}else{
	setTimeout(function(){header012013();},5000);
}

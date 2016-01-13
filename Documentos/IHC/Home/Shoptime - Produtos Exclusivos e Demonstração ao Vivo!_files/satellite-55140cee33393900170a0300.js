_satellite.pushAsyncScript(function(event, target, $variables){
  try{
//Verifica o endereço	
	var src_yahoormkt_verifica_pagina = '';
	var src_yahoormkt_script ='';
	var rmkt_yahoo_body = document.getElementsByTagName('body')[0]
		if(location.protocol.indexOf("https") >=0){
			src_yahoormkt_verifica_pagina = "https://sp.analytics.yahoo.com/spp.pl?a=10001702108846&.yp=18008&js=no";
		}else{
			src_yahoormkt_verifica_pagina = "http://sp.analytics.yahoo.com/spp.pl?a=10001702108846&.yp=18008&js=no";
		}
		var rmkt_yahoo_img = new Image(); // create image element
		rmkt_yahoo_img.src = src_yahoormkt_verifica_pagina
		rmkt_yahoo_img.border = '0'; 
		rmkt_yahoo_img.width = '1'; 
		rmkt_yahoo_img.height = '1'; 
		rmkt_yahoo_body.appendChild(rmkt_yahoo_img);
}catch(e){}
});

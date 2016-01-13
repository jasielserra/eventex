_satellite.pushAsyncScript(function(event, target, $variables){
  try{
  var axel = Math.random() + "";
var a = axel * 10000000000000;
var urlPath = location.hostname + location.pathname;
var src_google_dbm_rmkt_iframe = "https://4663417.fls.doubleclick.net/activityi;src=4663417;type=invmedia;cat=uxk40otq;u6=home;u9="+urlPath+";ord="+a+"?";

//Criação do Iframe
var google_dbm_rmkt_iframe = document.createElement("iframe");
var google_dbm_rmkt_body = document.getElementsByTagName('body')[0]
	google_dbm_rmkt_iframe.src = src_google_dbm_rmkt_iframe;
	google_dbm_rmkt_iframe.width = '1'; 
	google_dbm_rmkt_iframe.height = '1'; 
	google_dbm_rmkt_iframe.setAttribute("frameborder" , "0");
	google_dbm_rmkt_iframe.setAttribute("style", "display:none");
	google_dbm_rmkt_body.appendChild(google_dbm_rmkt_iframe);
  }catch(e){}
});

/* JS REDIRECT FOR MOBILE  */
 
// GLOBAL SCOPED FUNCTIONS
//New Script Shoptime
 
function setCookie(name, value) {
  document.cookie = name+"="+value+"; path=/";
}
 
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
   }
   return null;
}
 
function deleteCookie(name) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
 
function getQueryString() {
  var result = {}, queryString = location.search.substring(1),
          re = /([^&=]+)=([^&]*)/g, m;
 
  while (m = re.exec(queryString)) {
    result[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
  }
  return result;
}
 
(function(){
   var isAndroid23 = false;
   var userAgent = navigator.userAgent;
   var isMobile = /iP(hone|od)|Android.*Mobile/.test(userAgent);
   var mobileCookie = getCookie("NewMobileOptOut");
 
   if( userAgent.indexOf("Android") >= 0 ) {
     var androidversion = parseFloat(userAgent.slice(userAgent.indexOf("Android")+8));
     isAndroid23 = androidversion < 2.4;
     if (isAndroid23) { 
       // NEVER TRIGGER A REDIRECT FOR UNSUPPORTED ANDROID DEVICES
       return false;
     }
   }
   
   if (/(windows phone)|(iemobile)/i.test(userAgent)) {
     // NEVER REDIRECT ON UNSUPPORTED DEVICES
     return false;
   }
   
   // Get MobileOptOut from queryString
   var mobileQuery = getQueryString();
   if (mobileQuery) {
     mobileQuery = mobileQuery["MobileOptOut"];
   }
 
   // Update MobileOptOut cookie - 0 = delete, 1 = set
   if ( mobileQuery == '0' ) {
     deleteCookie("NewMobileOptOut");
   } else if ( mobileQuery == "1" ) {
     setCookie("NewMobileOptOut", mobileQuery);
   }
 
   // Redirect
   
   if (isMobile && (mobileCookie != "1" || mobileQuery == "0") && mobileQuery != "1" && mobileQuery != "2") {
     window.location = "http://m.shoptime.com.br" + window.location.pathname + window.location.search;
   }
   
   // OPT IN LINK
  
   if (isMobile) { 
     var sitemapLink = document.getElementsByClassName('sitemap-link');
     if (sitemapLink && sitemapLink.length > 0) { 
       sitemapLink[0].innerHTML = sitemapLink[0].innerHTML + "<p><a href=\"#\" onclick=\"setCookie('MobileOptOut', '0'); window.location = window.location.href.replace('MobileOptOut=1',''); return false;\">Acessar a Versao Mobile</a></p>";
     }
   }
 
 }());
 

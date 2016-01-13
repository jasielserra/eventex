_satellite.pushAsyncScript(function(event, target, $variables){
  try{
        var criteo = document.createElement('script'); 
        criteo.type = 'text/javascript'; 
        criteo.async = true;
        if(location.protocol.indexOf("https") >=0){
                criteo.src = 'https://static.criteo.net/js/ld/ld.js';
          }
          else{
                criteo.src = 'http://static.criteo.net/js/ld/ld.js';
          }
      var s_criteo = document.getElementsByTagName('body')[0].appendChild(criteo);
      window.criteo_q = window.criteo_q || [];
      window.criteo_q.push(
              { event: "setAccount", account: 8413 },
             // { event: "setHashedEmail", email: [""] },
              { event: "setSiteType", type: "d" },
              { event: "viewHome" }
      );
    }catch(e){}
});

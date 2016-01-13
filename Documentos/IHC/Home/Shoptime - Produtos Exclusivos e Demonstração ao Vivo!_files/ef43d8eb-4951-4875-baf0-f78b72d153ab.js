			
// Copyright 2006-2015 ClickTale Ltd., US Patent Pending
// PID: 23761
// WR destination: www14
// WR version: 14.21
// Recording ratio: 0.0003145
// Generated on: 6/15/2015 8:13:12 AM (UTC 6/15/2015 1:13:12 PM)

if (typeof(ClickTaleHooks) == 'undefined') {
    ClickTaleHooks = {
        Hooks : ['PreLoad', 'AfterPreLoad', 'PreRecording', 'AfterPreRecording', 'AdditionalCustomCode', 'AfterAdditionalCustomCode'],
        RunHook : function (hookName) {
			if (typeof window["ClickTale" + hookName + "Hook"] === "function") window["ClickTale" + hookName + "Hook"]();
            var s = 'ClickTaleSettings'; if (!ClickTaleHooks.IsValidHookName(hookName) || !(s in window) || !('PDCHooks' in window[s]) || !(hookName in window[s].PDCHooks)) return;
            var c = window[s].PDCHooks[hookName]; if (c instanceof Array) for (var i=0;i<c.length;i++) if (typeof(c[i]) == "function") c[i](); 
            if (typeof(c) == "function") c();
        },
		IsValidHookName : function (hookName) {
			if(Array.prototype.indexOf) { return ClickTaleHooks.Hooks.indexOf(hookName) >= 0; }
			for(var i = 0; i < ClickTaleHooks.Hooks.length; i++) { if(ClickTaleHooks.Hooks[i] === hookName) { return true; } } return false;
		}
    }
}    
	

function ClickTaleCDNHTTPSRewrite(u)
{
	try
	{
		var scripts = document.getElementsByTagName('script');
		if(scripts.length)
		{
			var script = scripts[ scripts.length - 1 ], s='https://clicktalecdn.sslcs.cdngc.net/';
			if(script.src && script.src.substr(0,s.length)==s )
				return u.replace('https://cdnssl.clicktale.net/',s);
		}
	}
	catch(e)
	{
	}
	return u;
} 

var ClickTaleIsXHTMLCompliant = true;
if (typeof (ClickTaleCreateDOMElement) != "function")
{
	ClickTaleCreateDOMElement = function(tagName)
	{
		if (document.createElementNS)
		{
			return document.createElementNS('http://www.w3.org/1999/xhtml', tagName);
		}
		return document.createElement(tagName);
	}
}

if (typeof (ClickTaleAppendInHead) != "function")
{
	ClickTaleAppendInHead = function(element)
	{
		var parent = document.getElementsByTagName('head').item(0) || document.documentElement;
		parent.appendChild(element);
	}
}

if (typeof (ClickTaleXHTMLCompliantScriptTagCreate) != "function")
{
	ClickTaleXHTMLCompliantScriptTagCreate = function(code)
	{
		var script = ClickTaleCreateDOMElement('script');
		script.setAttribute("type", "text/javascript");
		script.text = code;
		return script;
	}
}	


var ClickTalePrevOnReady;
if(typeof ClickTaleOnReady == 'function')
{
	ClickTalePrevOnReady=ClickTaleOnReady;
	ClickTaleOnReady=undefined;
}

if (typeof window.ClickTaleScriptSource == 'undefined')
{
	window.ClickTaleScriptSource=(document.location.protocol=='https:'
		?ClickTaleCDNHTTPSRewrite('https://cdnssl.clicktale.net/www/')
		:'http://cdn.clicktale.net/www/');
}

ClickTaleHooks.RunHook('PreLoad');
// Start of user-defined pre WR code (PreLoad)b

// End of user-defined pre WR code
ClickTaleHooks.RunHook('AfterPreLoad');

var ClickTaleOnReady = function()
{
	var PID=23761, 
		Ratio=0.0003145, 
		PartitionPrefix="www14";
	
	if (window.navigator && window.navigator.loadPurpose === "preview") {
       return; //in preview
	   };
		
	ClickTaleHooks.RunHook('PreRecording');
	// Start of user-defined header code (PreInitialize)
	window.ClickTaleSettings=window.ClickTaleSettings||{};window.ClickTaleIncludedOnDOMReady=!0;window.ClickTaleSettings.Compression={Method:'deflate'};ClickTaleSettings.RewriteRules={OnBeforeRewrite:function(API){API.clear();API.add({pattern:new RegExp('(<input[^>]*value=")([^"]+)("[^>]*type="text">)','gim'),replace:"$1-----$3"});API.add({pattern:new RegExp('(<input[^>]*type="text"[^>]*value=")([^"]*)("[^>]*>)','gim'),replace:"$1-----$3"});},}
if((navigator.appName==='Microsoft Internet Explorer'&&(8>=document.documentMode||navigator.userAgent.match(/MSIE\s*(6|7|8)/)))||(navigator.userAgent.indexOf('Version/5.1')!=-1&&navigator.userAgent.indexOf('Safari')!=-1))
return;var d,DOCType=document.childNodes[0].text;(d=document.doctype)&&(DOCType="<!DOCTYPE "
+d.name
+(d.publicId?' PUBLIC "'+d.publicId+'"':'')
+(!d.publicId&&d.systemId?' SYSTEM':'')
+(d.systemId?' "'+d.systemId+'"':'')
+'>');var Index=0,Atts=document.documentElement.attributes;Length=Atts.length,HTML='<html';for(;Index<Length;Index++)
HTML+=' '+Atts[Index].nodeName+'="'+Atts[Index].nodeValue+'"';HTML+='>';window.ClickTaleUploadPage(DOCType+HTML,"</html>");
	// End of user-defined header code (PreInitialize)
    ClickTaleHooks.RunHook('AfterPreRecording');
	
	window.ClickTaleIncludedOnDOMReady=true;
	
	
	ClickTale(PID, Ratio, PartitionPrefix);
	
	if((typeof ClickTalePrevOnReady == 'function') && (ClickTaleOnReady.toString() != ClickTalePrevOnReady.toString()))
	{
    	ClickTalePrevOnReady();
	}
	
	ClickTaleHooks.RunHook('AdditionalCustomCode');
	// Start of user-defined footer code
	
	// End of user-defined footer code
	ClickTaleHooks.RunHook('AfterAdditionalCustomCode');
}; 
(function() {
	var div = ClickTaleCreateDOMElement("div");
	div.id = "ClickTaleDiv";
	div.style.display = "none";
	document.body.appendChild(div);

if (document.location.protocol != 'https:')
{
	var externalScript = ClickTaleCreateDOMElement("script");
	var src = document.location.protocol=='https:'?
	  'https://cdnssl.clicktale.net/www/tc/WRe21.js':
	  'http://cdn.clicktale.net/www/tc/WRe21.js';
	externalScript.src = (window.ClickTaleCDNHTTPSRewrite?ClickTaleCDNHTTPSRewrite(src):src);
	externalScript.type = 'text/javascript';
	document.body.appendChild(externalScript);
}
})();






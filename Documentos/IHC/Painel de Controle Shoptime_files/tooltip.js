var html_tooltip = '\
	<div class="RaTooltip">\
		<p class="RaMessage">Não realizamos entregas para este CEP. Por favor, informe um outro endereço.</p>\
		<span class="ctrl arrowTop"></span>\
		<span class="ctrl arrowBottom"></span>\
		<span class="ctrl arrowTopBG"></span>\
		<span class="ctrl arrowBottomBG"></span>\
	</div>\
';
			
var Tooltip = {
		'on' : function() {
			$(".buttons").append(html_tooltip);
			
			$(".tooltip").mousemove(function(){
				$(this).parents(".buttons").find(".RaTooltip").show();
			});
			
			$(".tooltip").mouseout(function(){
				$(this).parents(".buttons").find(".RaTooltip").hide();
			});
		},
		
		'off' : function() {
			$('.buttons .RaTooltip').remove();
		}
};

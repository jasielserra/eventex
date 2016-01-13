onReady(function () {
  $.ajaxSetup({
    cache: true
  });
  $.getScript('http://img.shoptime.com.br/imagens/home-2013/js/jquery.carouFredSel-6.2.1.js',
    function () {
      var shoptimetv = {
        debug: false,
        selectorDestID: 'shoptimetv-pdest',
        selectorListID: 'foo2',
        intervalUpdate: 60000, /* milisegundos */
        contador: 0,
        requestData: function () {

          // $('#shoptimetv-pdest').html('<img src="http://img.shoptime.com.br/novoshop/catalog/img/loadShoptime.gif" style="display:block;width:124px;margin:20px auto; position: relative; top:80px; ">');
          // $('#foo2').html('<li><img src="http://img.shoptime.com.br/novoshop/catalog/img/loadShoptime.gif" style="display:block;width:124px;margin:20px auto; position: relative; top:99px; left:130px; "></li>');

          $.get('/produtosTV/10?full=true&timestamp=' + (new Date()).getTime(), function (data) {
            var data = $.parseJSON(data);
            //console.log(data)
            
            if (data != null) {
              if (data.products != null) {
                if (data.products.length) {
                  if ($('#produtotv-destaque').val() != data.products[0].id) {
                    /*
                     * prevent comment
                     * in sitemanager's
                     * contents
                     */

                    if (shoptimetv.debug) {
                      console.log('trocou o produto');
                    }

                    //data = data.replace('<!-- -->', '');
                    shoptimetv.populate(data);
                    //shoptimetv.populate(eval("(" + data + ")"));

                    $('#productstv').css('height', 'auto');
                  }
                }
              }
            } else {
              shoptimetv.contador++;
            }

            if (shoptimetv.debug) {
              console.log(shoptimetv.contador);
            }

            if (shoptimetv.contador < 3) {
              setTimeout(shoptimetv.requestData, shoptimetv.intervalUpdate);
            } else {
              if (shoptimetv.debug) {
                console.log('er');
              }
            }
          });
        },
        templateDest: function (product) {

          var html = '<a href="' + product.url + '?chave=HOME_OFERTASDATV" class="lt-pd-prod-url">';
          html += '<input type="hidden" id="produtotv-destaque" value="' + product.id + '" /> ';
          html += '<img src="' + product.mqImage + '" alt="' + product.name + '" class="lt-pd-prod-photo">';
          html += '<span class="lt-pd-prod-colinfo">';
          html += '<span class="lt-pd-prod-title">' + product.name + '</span>';
          if (!!product.freight) {
            html += '<span class="lt-pd-prod-stamps">';
            html += '<img src="' + product.freight + '">';
            html += '</span>';
          }
          if (product.hasDefaultPrice) {
            html += '<span class="lt-pd-prod-pricede">De: ' + product.default_price + '</span>';
          }
          html += '<span class="lt-pd-prod-pricepor">Por: ' + product.sales_price + '</span>';
          html += '<span class="lt-pd-prod-priceparc"><span class="lt-pd-prod-price-big">' + product.installment.total_installments + 'x</span> <span class="lt-pd-prod-price-big">'
            + product.installment.installment_value + ' </span> <span class="lt-pd-prod-price-cond">sem juros</span></span>';
          html += '<span class="lt-pd-prod-price-boleto">ou 1x: ' + product.invoice_price + ' no boleto</span>';
          html += '</span>';
          html += '</a>';
          return html;
        },
        templateList: function (product) {
          var html = '<li class="li">';
          html += '<div class="hproduct ">';
          html += '<a href="' + product.url + '?chave=HOME_OFERTASDATV' + '" title="' + product.name + '" class="url">';
          html += '<span class="ico pos">1</span>';
          html += '<img width="150" height="150" alt="' + product.name + '" src="' + product.image + '" data-longdesc="' + product.mqImage + '" class="photo">';
          html += '</a>';
          html += '<br><span class="cont">';
          html += '<span class=" "><br><span data-url="' + product.url + '" class="btn mDet">dar uma olhada</span></span>';
          html += '</span>';
          html += '<a href="' + product.url + '?chave=HOME_OFERTASDATV' + '" title="' + product.name + '" class="url">';
          html += '<span class="cont"><strong class="n name fn">' + product.name + '</strong><br></span>';
          html += '</a>';
          html += '<span class="cont">';
          if (product.hasDefaultPrice) {
            html += '<span class="regular price">De: <span class="val"><del class="pv">' + product.default_price + '</del></span></span><br>';
          }
          html += '<span class="sale price">Por: <span class="val"><strong class="pv">' + product.sales_price + '</strong></span></span>';
          html += '<span class="p-v interest">';
          html += '<span class="parcel">' + product.installment.total_installments + 'x de <strong class="pv">' + product.installment.installment_value + ' </strong></span>';
          html += '<span class="condition">sem juros</span>';
          html += '</span>';
          html += '<br>';
          html += '</span>';
          html += '</div>';
          html += '</li>';

          return html;
        },
        populate: function (data) {
          data = data.products;
          var html = [];
          for (var i = 0, l = data.length; i < l; i++) {
            try {
              data[i].name = data[i].name.replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\.\.\./g, '');
              data[i].croppedName = data[i].croppedName.replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\.\.\./g, '');
            } catch (e) {
            }

            if (i === 0) {
              document
                .getElementById(shoptimetv.selectorDestID).innerHTML = this
                .templateDest(data[i]);
            } else {
              html.push(this.templateList(data[i]));
            }
          }
          if (html.length) {
            document.getElementById(shoptimetv.selectorListID).innerHTML = html.join('');
          }

          $('#foo2').carouFredSel({
            auto: false,
            prev: '#prev2',
            next: '#next2',
            items: {
              visible: 2
            }
          });
        },
        init: function () {
          this.requestData();
        }
      };
      shoptimetv.init();
    });
});
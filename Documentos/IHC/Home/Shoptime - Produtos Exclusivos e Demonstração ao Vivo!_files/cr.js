function CR(obj) {
  var self = this;
  this.create = function () {
    try {
      this.connect(this.n_m('n'), this.n_m('m'), 'c');
    } catch (err) {
    }
    return false;
  };
  this.read = function () {
    this.connect('', this.n_m('m'), 'r');
    return false;
  };
  this.n_m = function (p) {
    var n = (document.getElementById(obj.name) == null) ? obj.name : document.getElementById(obj.name).value;
    var m = (document.getElementById(obj.mail) == null) ? obj.mail : document.getElementById(obj.mail).value;
    switch (p) {
      case 'n':
        return n;
        break;
      case 'm':
        return m;
        break;
    }
  };
  this.connect = function (a, b, c) {
    var xmlhttp;
    var userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.indexOf('msie') == -1) {
      xmlhttp = new XMLHttpRequest();
    } else {
      xmlhttp = new window.XDomainRequest();
    }
    xmlhttp.onload = function () {
      var result = xmlhttp.responseText;
      var msg = {0: "Este email jÃ¡ existe.", 1: "Email cadastrado com sucesso.", 2: "Ocorreu um erro inesperado, tente novamente mais tarde.", 3: "Email invÃ¡lido."};
      if (c != 'r') {
        if (obj.alert) {
          alert(msg[result]);
        } else if (obj.msgInBox) {
          document.getElementById(obj.msgInBox).innerHTML = msg[result];
        }
      }
      var _r = parseInt(result, 10);
      if(_r !== 2 && _r !== 3){
        try{
          window.crmWA_cadastro_rapido(self.n_m('m'), obj.origin);
        }catch(e){}
      }
      if (obj.response) return obj.response(result, msg[result]);
    };
    var nameMark = {"ACOM": "americanas", "SUB": "submarino", "SHOP": "shoptime", "SB": "soubarato"};
    xmlhttp.open("GET", "http://apps." + nameMark[obj.m] + ".com.br/responsys/cr.php?n=" + a + "&mail=" + b + "&m=" + obj.m + "&a=" + c + "&o=" + obj.origin + "&opt=" + obj.opt + "&send_email=" + obj.send_email + "&event_name=" + obj.eventName + "&event_id=" + obj.eventId, true);
    xmlhttp.send();
  }
}

var host = window.location.hostname,
    urlNeemu,
    urlBusca,
    created = false,
    protocol = 'http://',
    timestamp = new Date().getTime(),
    $_nh;

if(window.document.URL.match('^https'))
{
    protocol = 'https://';
}

if(host.indexOf('local') != -1) // url para ambiente local
{
    urlNeemu = protocol + host;
    urlBusca = 'http://' + host;
}
else if(host.indexOf('.neemu.com') != -1) // url para ambiente de validação
{
    urlNeemu = protocol + window.location.host;
    urlBusca = 'http://' + window.location.host;
}
else // url para ambiente de produção
{
    urlNeemu = protocol + 'busca.shoptime.com.br';
    urlBusca = 'http://busca.shoptime.com.br';
}

NeemuCommons.loadFile(urlNeemu + '/autocomplete/neemu-autocomplete.css?_=' + timestamp, 'css', 'head', function(){});

// load do script do AC
function loadNeemuAutocompleteScript()
{
    $_nh = $;

    NeemuCommons.loadFile
    (
        urlNeemu + '/php-frontend-autocomplete/neemu-autocomplete-min.js?_=' + timestamp, 'js', 'head',
        function()
        {
            var elemHeader;

            elemHeader = $_nh('input[data-position="header"][type="text"]');

            if(created == false && typeof(elemHeader.suggest) == "function")
            {
                created = true;

                elemHeader.suggest
                (
                    urlNeemu + '/autocomplete/search.php',
                    {
                        title: 'Produtos sugeridos',
                        elementPosition: elemHeader.parents('form:eq(0)'),
                        imageLoading: 'i.s8.com.br/images/inovacao/acom/carousel/images/loader.gif',
                        shopUrl: urlBusca,
                        prodNameLength: 70,
                        position: window.Neemu.autocomplete.POS_HEADER,
                        ignoreSearch: '[Digite o que você procura]' + (neemuAC.mensagemBuscaVazia != undefined ? '[' + neemuAC.mensagemBuscaVazia + ']' : ''),
                        type:
                        [
                            {
                                pxInit: 0,
                                pxEnd: 'ALL',
                                nType: 2,
                                qttSuggests: 5,
                                qttProducts: 3
                            }
                        ],
                        price:
                        {
                            url: 'produto.shoptime.com.br/productinfo/?itens='
                        },
                        beforeShow: function()
                        {
                            var input = $_nh('input[data-position="header"][type="text"]');
                            input.parents('form:eq(0)').addClass('search_neemu_autocomplete');
                        },
                        beforeHide: function()
                        {
                            var input = $_nh('input[data-position="header"][type="text"]');
                            input.parents('form:eq(0)').removeClass('search_neemu_autocomplete');
                        }
                    }
                );
            }
        }
    );
}

if(typeof($) != "undefined")
{
    loadNeemuAutocompleteScript();
}
else if(typeof window.addEventListener == 'function')
{
    window.addEventListener('load', loadNeemuAutocompleteScript, false);
}
else
{
    window.attachEvent('onload', loadNeemuAutocompleteScript);
}

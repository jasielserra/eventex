# Eventex

Sistema de Eventos encomendado pela Morena.

[![Build Status](https://travis-ci.org/jasielserra/eventex.svg?branch=master)](https://travis-ci.org/jasielserra/eventex)
[![Code Climate](https://codeclimate.com/repos/56944a99edd41f005200572b/badges/7d78b013ab2b2fc2c7d5/gpa.svg)](https://codeclimate.com/repos/56944a99edd41f005200572b/feed)



## Como desenvolver ?

1. Clone o repositório.
2. Crie um virtualenv com Python 3.5
3. Ative o virtualenv
4. Instale as dependências
5. Configure a instância com o .env
6. Execute os testes.

```console
git clone git@github.com:jasielserra/eventex.git wttd
cd wttd
python -m venv .wttd
source .wttd/bin/activate
pip install -r requirements-dev.txt
cp contrib/env_sample .env
python manage.py test
```

## Como fazer o deploy ?

1. Crie uma instância no heroku
2. Envie as confiurações para o heroku 
3. Define uma SECRET_KEY segura para instância
4. Define DEBUG=False
5. Configure o serviço de email
6. Envie o código para o heroku

```console
heroku create minhainstancia
heroku config:push
heroku config:set SECRET_KEY=`python contrib/secret_gen.py`
heroku config:set DEBUG=False
# configuro o email
git push heroku master --force
```

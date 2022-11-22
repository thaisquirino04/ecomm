# Projeto Nxt Dev - PagoNxt

:calendar: <h2>Semana 1 </h2>

📖 Objetivo1-Essencial Criando Repositório:

Crie um novo repositório no GitHub chamado ecomm.
Clone o repositório para sua máquina.
Crie uma pasta chamada product na raiz do repositório e dentro dela Inicialize um projeto Node na raiz do repositório usando npm init.
Crie um arquivo chamado main.js dentro da pasta product/src que simplesmente faz log da mensagem: iniciando product.
Execute esse arquivo com o Node e valide que a mensagem está sendo impressa no terminal.
Faça commit das suas mudanças.


📖 Objetivo2-Desejável Criando imagem do serviço:

Crie um arquivo Dockerfile dentro da pasta product no repositório.
Use as instruções necessárias para copiar tudo que estiver na pasta src dentro da pasta product para dentro da Imagem.
Configure o comando base de inicialização do container dessa imagem para executar o arquivo main.js que está dentro de src.
Faça o build dessa imagem, crie um container a partir dela e verifique se nos logs do container, a mensagem de log que criamos na tarefa anterior é exibido.
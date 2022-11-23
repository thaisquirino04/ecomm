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

:calendar: <h2>Semana 2 </h2>

📖 Objetivo1-Essencial Criando a conta de usuário:

Uma nova pasta na raiz do repositório chamada account onde deverá ser inicializado um novo projeto node com npm init
Dentro da pasta account crie uma pasta src e dentro dela, uma nova pasta chamada use-case. Dentro desta crie um arquivo chamado createUserAccount.js que exporta uma função chamada createUserUseCase. Esta função deve receber o nome, email e senha como parâmetros e deve retornar um objeto como o apresentado a baixo:

{
   id: 1,
   name: 'Josué Lima',
   email: 'josuelima@email.com',
   password: 'senhaDoJosue',
   createdDate: '2022-11-19'
}

3. Crie uma pasta chamada test no mesmo nível da pasta src e dentro dela um arquivo chamado createUserAccount.test.js que importa a função criada no arquivo createUserAccount.js e a executa passando os parâmetros necessários e use o retorno dessa função no console.log para visualizarmos o resultado.

Dicas: 

Para gerar o ID, podemos inicialmente criar um array que salva todas as contas criadas e acompanhar o length deste array para gerar os IDs. Ex: const userId = accounts.length + 1;.
Se usar a dica anterior, lembre-se de deixar o array de contas fora da função que cria a conta, assim o array manterá os valores previamente salvos mesmo que a função seja chamada várias vezes.
Outro ponto importante, como estamos importando e exportando funções com Node. Precisamos configurar para que o Node funcione corretamente com este recurso. Para isso, tudo que você precisa fazer é adicionar a configuração "type": "module" no package.json dentro da pasta account.

📖 Objetivo2-Desejável Criando um novo container:

Todas as aplicações do nosso ecommerce, são baseadas em Docker. Por isso, vamos criar uma nova imagem docker para esta aplicação, assim como fizemos com product.

O que esperamos dessa atividade:
Dentro da pasta account crie um novo dockerfile que usa uma imagem do Node como base.
Copie os arquivos package.json e package-lock.json para dentro da imagem e em seguida, execute o comando npm install para que as dependências do projeto sejam instaladas.
Copie os demais arquivos do projeto para dentro da imagem.
Defina o comando inicial que deve ser executado quando um novo container for criado a partir dessa imagem.
Adicione a inicialização de um container dessa nova imagem dentro do docker-compose que deverá estar fora das pastas account e product

Dicas: 

No passo 2, estamos copiando os arquivos que listam nossas dependências e no passo 3, estamos copiando todos os arquivos para dentro da imagem. Aqui pode acontecer de copiarmos também a pasta node_modules e outras que não desejamos copiar. Para evitar isso, crie um arquivo chamado .dockerignore que funciona de forma semelhante ao .gitignore e liste neste arquivo a pasta node_modules
Ajuste o dockerfile do projeto product também com a dica anterior.



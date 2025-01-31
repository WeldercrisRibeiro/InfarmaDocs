# Controle de Entregas 🛵

### 🛠️ Sumário

- [Requisitos](#requisitos)
- [Cadastrando um produto tipo Serviço](#cadastrando-um-produto-tipo-serviço)
- [Cadastrando os Entregadores](#caastrando-os-entregadores)
- [Ativando o controle de entregas](#)
- [Fazendo o registro da Saída do Entregador](#fazendo-o-registro-da-saída-do-entregador)
- [Fazendo o registro do Retorno do Entregador](#fazendo-o-registro-de-retorno-do-entregador)


## Requisitos
Para o cliente conseguir utilizar o Controle de Entregas no Infarma Varejo, deve ser ter alguns pontos a serem requisitados: 
 - Cadastrar um Produto como serviço sendo para a taxa de entrega
 - Cadastrar Entregadores 
 - Definir se a taxa será obrigatória e se o valor será fixo pois dependendo disso, alguns parâmetros serão adicionados.
 
## Cadastrando um produto tipo Serviço
Acesse no Varejo\Central em ***Estoque > Arquivo > Produtos*** e clique em Edita

![Produto Serviço](/img/vrj/ProdServiço.png)

Clique em ➕ para criar o cadastro

![Produto Serviço](/img/vrj/EditaProd.png)

A descrição e os dados do cadastro devem ser preenchidos de forma que o cliente entenda que é um produto serviço, como por exemplo: **Taxa de Entrega**.

Preencha os seguintes campos para o produto tipo serviço:
 - **Descrição indicando Taxa de Entrega**
 - **Fração de Venda** = 1 
 - **Classificação tributária deve ser igual a ISENTO ou com o CST 40**
 - **Tipo de Preço** = Liberado
 - **Tipo de Venda** = Livre 
 - **Origem mercadoria**= 0 - Origem Nacional
 - **Tipo de Produto** = Serviço 
 - **Fabricante** = Crie um fabricante chamado Serviço (clicando sob os três pontos e no botão de cadastro a direita no canto superior)
 - **Grupo de Preço** = Crie um Grupo de Preço chamado Serviço (clicando sob os três pontos e no botão de cadastro a direita no canto superior)
 - **Seção** = Crie uma Seção chamada Serviço (clicando sob os três pontos e no botão de cadastro a direita no canto superior)
 - **Marque a Flag Tipo de Produto é Serviço**

 Devendo ficar dessa forma abaixo:

![Produto Serviço](/img/vrj/ProdutoServiço.png)


## Cadastrando os Entregadores
Para realizar o cadastro dos entregadores, acesse no ***Varejo/Central em Vendas > Arquivo > Entregadores*** clique em **EDITA** e em seguida clique em ➕ para criar o cadastro. 

Deve ser preenchido obrigatóriamente apenas o nome do Entregador. Os campos restantes não é obrigatório o preenchimento

![Entregadores](/img/vrj/Entregadores.png)

## Ativando o controle de entregas
Acesse no Varejo/Central em Vendas > Manutenção > Opções Gerais de Venda > Aba 3 > e marque a opção **2.Controle Saída/Retorno de entregadores**. 

- [X] **2.Controle Saída/Retorno de entregadores**

Dentro dessa mesma tela, marque as duas opções:

- [ ] **Imprimir Romaneio na saída do entregador** 
- [ ] **Imprimir Romaneiro no retorno do Entregador**   

Devendo ficar da seguinte maneira:

![Romaneio](/img/vrj/romaneio.png)

***Obs: A opção 2.3 só deve ser marcada caso o cliente solicite.***

Após a marcação dessas opções, clique em **✅ OK**

Caso a taxa seja obrigatória para todas as vendas, deve ser ativado em 
*Vendas > Manutenção > Opções Gerais de Venda > Aba 2 >* ***5. Taxa de Entrega Obrigatória***

![Romaneio](/img/vrj/TaxaEntrega.png)

Deve ser preenchido o código do produto tipo serviço criado e o Valor máximo para produtos do tipo "Serviço" informado pelo operador.

Com esse parâmetro ativado, o produto será incluido automaticamente e você poderá incluir um valor no produto para a taxa.

Caso ele não esteja ativado, a inclusão da taxa será de ser feita manualmente, selecionando o código do produto e inserindo.

## Fazendo o registro da Saída do Entregador
Após efetuar uma venda a domicilio, acesse no PDV a função F11 + 70 - Registro de Saída de Entregas e clique em Enter

![Saida](/img/vrj/F1170.png)

![Saida](/img/vrj/Saída.png)

Aperta a tecla F12 para incluir um registro de saída

![Saida](/img/vrj/RegistroSaida.png)

Na próxima tela irá aparecer as entregas pendentes de registro de saída, você deve utilizar a barra de espaço para selecionar as vendas que o entregador levará nessa entrega.

![Saida](/img/vrj/SelecionarRegistroSaida.png)

Por fim, vai selecionar o entregador, você pode informar o código ou teclar F1 para listar os entregadores, e pode também informar algum valor que o entregador está levando para troco, após preencher as informações, tecle F12 para confirmar a saída.

![Saida](/img/vrj/Entregador.png)

Com isso, a criação do registro de saída será confirmada pelo sistema e irá imprimir o Romaneio de Saída!

## Fazendo o registro de retorno do Entregador

Após realizar a saída de uma entrega, para registrar o retorno do entregador acesse no PDV a função F11 + 71 - Registro de Retorno de Entregas

![Saida](/img/vrj/F1170.png)

![alt text](/img/vrj/RegistroRetorno.png)

Irá abrir a tela listando os retornos do dia e as entregas com retornos pendentes serão destacadas em vermelho, você vai utilizar as setas para selecionar a que deseja registrar o retorno e teclar F12

![alt text](/img/vrj/RegistroRetornoPendente.png)

Na próxima tela você vai deixar selecionar as vendas que foram finalizadas e em seguida teclar F12

![alt text](/img/vrj/EntregasPendentes.png)

Por fim, vai realizar a prestação de contas, informando o valor recebido e teclando F12 para finalizar o retorno.

![alt text](/img/vrj/RetornoEntrega.png)

Clique em F12 para Confirmar o retorno e com isso e irá imprimir o Romaneio de Retorno!

## Conclusão!
#### **Parabêns! Você concluiu o Tópico Controle de Entregas!**

Caso haja alguma dúvida ou erro diferente do apresentado nesta documentação, consulte a equipe de Suporte para maiores detalhes!

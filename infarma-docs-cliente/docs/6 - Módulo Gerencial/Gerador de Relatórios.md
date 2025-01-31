# Gerador de Relatórios

## Para que serve o gerador de relatórios
o Gerador de relatórios, serve para a criação de relatórios não existentes no Infarma Varejo. Serve como um paliativo, ou até mesmo caso o cliente deseje um relatório bem especifico, ele pode ser criado dentro do Gerador. 

No gerador de relatórios também é possível criar etiquetas de preços, espelhos de orçamentos, e até mesmo Cupons para impressão.

## Requisitos para utilizar
Para fazer uso do Gerador de relatórios, deve se ter conhecimento de SQL, no nosso caso o SQL Server pois o gerador de relatórios é baseado totalmente em consulta ao banco de dados onde informaremos as tabelas e colunas usadas; Também adicionaremos condições (Where),Somatórios(SUM),ordenamento de registros(ORDER BY) e assim por diante.

Na parte de layout, é ideal um breve conhecimento para afins visuais onde você terá que criar o layout do relatório (ou etiqueta).

## Como acessar o Gerador de relatórios
Basta ter acesso ao sistema Infarma Varejo, seja no Varejo Independente ou no Central.

Acesse em *Manutenção > Gerador de Relatórios*

![Gerador de Relatórios](/img/vrj/GeradorRelatorios.png)

Na tela inicial, clique no botão ***File > New > Report*** 

![alt text](/img/vrj/GeradorFile.png)

Com isso o sistema abrirá a tela de criação do layout. 

![alt text](/img/vrj/GeradorLayout.png)

Segue abaixo o resumo das 4 abas principais usadas:

![alt text](/img/vrj/GeradorAba.png)

- **Data** - é onde fica toda a parte lógica. Dentro dele é criado o vinculo das tabelas com as colunas.
- **Calc** - O Calc é como se fosse a função de matemática que é usado em consultas SQL (SUM, MAX,COUNT)
- **Design** - Na aba design é onde fica a parte de criação do layout. Funciona com componentes, onde você arrasta até a tela principal e alinha onde desejar.
- **Preview** - O Preview é como se tivessemos vendo o resultado previamente do layout criado na outra aba.

## Criando um relatório pelo Wizard (Assistente)
Agora estaremos aprendendo a usar cada aba, criando um simples relatório.

**1 -**
Clique sob a aba Data e clique em *File > New*

![alt text](/img/vrj/AbaData.png)

Com isso aparecerão duas opções para criação da consulta:

 **Query Wizard** (Assistente de Consulta) e **Query Designer** (Designer de Consulta)

Ao clicar no Assistente, ele pede que para selecione as tabelas que serão usadas na consulta.

![alt text](/img/vrj/GeradorWizard.png)

Em seguida, o Wizard solicitará algumas informações, que justamente são pertencente a cada aba mencionado acima:

Coluna: quais colunas serão adicionadas ou se todas serão inclusas.

![alt text](/img/vrj/GeradorWizardColunas.png)

Funções Matemáticas:

![alt text](/img/vrj/GeradorWizardCalc.png)

Funções de Agrupamento:

![alt text](/img/vrj/GeradorWizardGroup.png)

Limitação de Linhas Retornadas

![alt text](/img/vrj/GeradorWizardLimit.png)

Função de Ordenamento:

![alt text](/img/vrj/GeradorWizardOrder.png)

Com isso o Assistente finalizará a criação da consulta e disponibilizará para vizualização.

![alt text](/img/vrj/GeradorWizardFinal.png)

Ao clicar em Finish para finalizar, o sistema mostrará a tela com as informações geradas de acordo com os parâmetros preenchidos nas telas acima.

![alt text](/img/vrj/GeradorWizardResultado.png)

Na tela acima, ficam os componentes para a criação do relatório de forma manual. Ou seja, para criar um relatório sem o assistente serão usados esses componentes disponíveis (que no caso da criação com o assistente, o mesmo fez isso de forma automática).

Agora mostraremos para que serve cada componente disponível:

![Componentes](/img/vrj/GeradorComponentes.png)

Iniciando da esquerda para a direita teremos --->
- **Preview:** Nesse componentes, retornará o resultado da consulta criada anteriormente

![alt text](/img/vrj/GeradorPreview.png)

- **Tables (Tabelas):** Na parte de cima, todas as tabelas do banco de dados e abaixo as tabelas definidas no assistente ou de forma manual 

![alt text](/img/vrj/GeradorTabelas.png)

Para incluir/retirar uma tabela, clique sob a tabela duas vezes e ela irá ser movida automaticamente para baixo.

Ao incluir uma segunda tabela, o sistema irá solicitar as colunas em comum entre as tabelas (que no SQL é como o JOIN )

![alt text](/img/vrj/GeradorJOIN.png)

Que no exemplo, acima foi escolhido como tabela principal a ACESS (acessos) e a segunda tabela a ser incluída foi a tabela USUAR (usuários).

Nessa tela, você poderá configurar o tipo do JOIN, qual tabela irá fazer o JOIN caso hajam mais de duas tabelas e poderá fazer a ligação das colunas em comum (no SQL é usado o ON para definir colunas iguais de tabelas diferentes) que nesse exemplo o próprio sistema já preenche automáticamente podendo ter várias colunas em comum marcadas.

![alt text](/img/vrj/GeradorJOIN-ON.png)

- **Fields (Colunas):**

![alt text](/img/vrj/GeradorField.png)

Nesta tela na parte de cima, aparecerão todos as colunas das tabelas escolhidas anteriormente. Para selecionar uma coluna para a consulta, clique duas vezes sob a coluna e ela irá ser direcionada para baixo
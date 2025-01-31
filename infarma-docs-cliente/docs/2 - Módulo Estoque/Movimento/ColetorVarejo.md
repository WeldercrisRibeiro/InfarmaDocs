# Importação arquivo Balanço via Coletor 

## Introdução
Atualmente no Infarma Varejo não temos nenhuma aplicação ou integração direta com coletores para efetuar o balanço dos produtos, porém existe uma opção para exportação\importação de arquivos gerados por algum Coletor.

Essa função existe dentro da rotina de Balanço (sendo possível para produtos livres e controlados)

Acesse no Varejo/Central em: 
***Estoque > Movimento > Balanço/Acerto > Edita > Itens > Botões Importa/Exporta***

![Coletor](/img/vrj/balançoVarejo.png)

## Como importar arquivo de balanço gerado pelo Coletor

Clique no botão Importa e em seguida abrirá a tela de Importação.

![Coletor](/img/vrj/TelaImportaColetor.png)

Definição de parâmetros:

- **Tipo de arquivo:** sempre é usado a opção **Delimitado**, que seria um arquivo regido por um delimitador.

 - **Caractere delimitador:**  Um caractere delimitador é um símbolo ou sinal usado para separar partes de um texto ou dados em um arquivo ou sistema. É como uma marca que divide informações em pedaços menores para facilitar a organização e o processamento. **No padrão, sempre usaremos ponto e vírgula``;``**

 - **Somar contagens p/ produtos repetidos:** Como o próprio nome diz, o sistema fará a soma para produtos repetidos.
 - **Considerar leitura com quantidade 0 (zero):** O sistema irá considerar leitura para produtos onde a quantidade é = 0
 - **Botão Importa:** Botão para importar o arquivo gerado pelo coletor.
 - **Botão Configura:** Botão para configurar o layout de caracteres do arquivo para a exportação\importação.

 ### Configurando o layout do arquivo
 Clique no botão Configura e com isso abrirá a tela de configuração do layout do arquivo.

![Coletor](/img/vrj/TelaConfiguracaoColetor.png)

Defina a Configuração exatamente como está na imagem acima e clique em OK e salve as configurações.
Fazendo a configuração uma vez, não necessita fazê-la novamente.
**Obs: Caso haja alguma solicitação especifica, consulte um suporte N2 para auxiliar na customização.**

Dentro do arquivo, o layout enviado pelo coletor estará da seguinte forma:
```
7896004817477;00020;2203315;20/02/2027
7896004817477;00300;2203316;20/02/2027
7896004817477;00001;2203317;20/02/2027
7896004817477;04400;2203318;20/02/2027
7896004817477;15000;2203319;20/02/2027
```

sendo assim a lógica do layout seguindo o parametrizado no Infarma Varejo:

| Código de Barras | Quantidade  | Lote    | Data de Validade |
|------------------|-------------|---------|------------------|
| 7896004817477    | 0000015000  | 2203315 | 20/02/2027       |
| 7896004817477    | 0000015000  | 2203316 | 20/02/2027       |

**Segue abaixo a Lógica da configuração feita no Varejo:**

| Campo            | Começa na Linha | Tamanho da quantidade de caracteres|
|-------------------|--------|---------|
| Código de Barras | 1      | 13      |
| Quantidade       | 15     | 5       |
| Lote             | 21     | 20      |
| Validade         | 42     | 10      |


Após a configuração do layout, recorte o arquivo gerado pelo coletor (repassado pelo cliente) para a pasta C:\INFARMA e cole na aba Arquivo o caminho de onde está o arquivo juntamente com o nome do arquivo. Ex: `C:\INFARMA\BALANÇO_COLETOR.TXT`

![Coletor](/img/vrj/CaminhoColetor.png)

**Atualmente não é possível definir o caminho, clicando na pasta, pois o sistema não está em funcionamento correto ainda!**

Com isso, definindo a configuração do layout e definindo o caminho e nome do arquivo clique em Importa e o sistema estará fazendo a importação dos itens no balanço selecionado e estará disponibilizando itens para visualização.
<!--## Como exportar arquivo de balanço para ser gerado pelo Coletor-->
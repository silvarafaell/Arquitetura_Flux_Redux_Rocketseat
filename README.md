# Arquitetura Flux com Redux na Rocketseat - Construção de uma loja virtual

### Conceitos do Redux
- Redux - Biblioteca que implementa Arquitetura Flux
- Controle de estados globais
- Quanto utilizar o Redux ?
    > Meu estado tem mais de um "dono"
    > Meu estado é manipulado por mais componentes? 
    > As ações do usuario causam efeitos colaterais no dados ?
- Exemplos: Carrinho de compras, dados do usuário, player de musica, etc

- PRINCIPIOS
-  Toda action deve possuir um "type", type único e não pode ser compartilhado com mais de duas actions.
- O estado do Redux é o único ponto de verdade
- Não podemos mutar o estado do Resux sem uma action, precisamos sempre disparar uma action
- As actions e reducers são funções puras, ou seja, não lidam com side-effects assíncronos. Elas não são assincronas, não vão poder acessar um banco de dados.
- Qualquer lógica síncrona para regras de negócio deve ficar no reducer e nunca na action

![Alt text](https://github.com/silvarafaell/Arquitetura_Flux_Redux_Rocketseat/blob/main/exemplo-redux/images/home.png?raw=true "Home")

![Alt text](https://github.com/silvarafaell/Arquitetura_Flux_Redux_Rocketseat/blob/main/exemplo-redux/images/carrinho.png?raw=true "Carrinho")

![Alt text](https://github.com/silvarafaell/Arquitetura_Flux_Redux_Rocketseat/blob/main/exemplo-redux/images/notificacao.png?raw=true "Notificacao")

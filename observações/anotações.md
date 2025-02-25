- Pode-se declarar  variáveis no js com as palavras chaves: "var", "let" e "const"

    - var =  Permite a redeclaração de pessoa, a variável dentro de um bloco, funcionará em todo escopo.

    - let = Torna a variável única, ela não pode ser redeclarada. É mais seguro usar dentro de blocos.

    - const = regra estrita, não pode mudar. Uma vez que declara uma constante, ela não poderá mudar, mesmo estando dentro de um bloco.

    ---

    const num1 = parseInt('5');
     - o "parseInt" converte para o inteiro.
     - Útil caso encontre um NaN
     ---
    console.log(umaString.indexOf('algo'));
     - Retonará a posição da palavra "algo" no texto.
     ---
    const maiuscula = /[A-Z]/.test(senha);
     - O .test retorna um boolean

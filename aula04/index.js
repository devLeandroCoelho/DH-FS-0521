// TIPOS DE DADOS
// Desafio 1 - criar 3 variáveis: nome, idade, eMaiorDeIdade
// No caso como valor destas variáveis vocês irão colocar referente a vocês mesmos

// criando variavel nome contendo uma string com o valor Victor
// Cada linguagem tem convenção / boa prática utilização das aspas seja simples ou duplas
// Na linguagem PHP podemos dizer que uma convenção é utilizar aspas duplas
// Na linguagem JS podemos dizer que uma convenção é utilizar aspas simples
let nome = 'Victor'

// criando variavel idade contendo um número com o valor 25
let idade = 25

// criando variavel eMaiorDeIdade contendo um valor booleano, ou seja, 
// podendo ser false ou true
let eMaiorDeIdade = true

// OBJETO
// Desafio 2 - criar uma variável pessoa do tipo objeto que irá conter três 
// propriedades: nome, idade, eMaiorDeIdade. Para cada propriedade utilizar
// como valor as variáveis que foram criadas no Desafio 1.

// criando variavel pessoa sendo do tipo objeto e com as propriedades 
/// solicitadas
let pessoaA = {
  nome: nome,
  idade: idade,
  eMaiorDeIdade: eMaiorDeIdade
}

// para exibir ou utilizar alguma propriedade do objeto pessoa temos que
// trabalhar da seguinte maneira, variavel.propriedade, ou seja, no caso
// abaixo iremos listar o valor da propriedade nome do objeto pessoa
console.log(pessoaA.nome)

// Existe uma forma de aprimorar a criação de objetos, reparem na objeto
// pessoa, uma coisa bacana do JS é que quando ele reconhece que uma
// propriedade tem como valor uma variável com o mesmo nome da propriedade
// podemos simplificar a atribuicao de valor para as propriedades do objeto
// como vemos na forma abaixo
// o que ocorre quando simplificamos essa atribuicao de valor da propriedade
// inves de usarmos a sintaxe propriedade: valor ou seja nome: nome, podemos
// apenas utilizar nome
let pessoaB = {
  nome,
  idade,
  eMaiorDeIdade
}

// ARRAY
// Desafio 3 - criar uma variavel animais do tipo array e passar 4 animais
// como valores (sendo string) deste array

// criando a variavel animais do tipo array com os valores 
// Cachorro, Leão, Gato, Coelho
let animais = ['Cachorro', 'Leão', 'Gato', 'Coelho']

// Operadores Aritméticos
// para o exercícicio deveremos criar duas variáveis, numero1 e numero2
// atribuir valores numéricos para estas variáveis e depois partiremos para
// as operações aritméticas
let numero1 = 10
let numero2 = 10

// criar uma variavel resultadoSoma que irá obter o resultado da soma entre
// as variáveis numero1 e numero2 e exibir no console
let resultadoSoma = numero1 + numero2
// console.log('O resultado da soma entre 10 + 5 = ' + resultadoSoma)

// criar uma variavel resultadoSubtracao que irá obter o resultado da subtração entre
// as variáveis numero1 e numero2 e exibir no console
let resultadoSubtracao = numero1 - numero2
// console.log('O resultado da subtração entre 10 - 5 = ' + resultadoSubtracao)

// criar uma variavel resultadoDivisao que irá obter o resultado da divisão entre
// as variáveis numero1 e numero2 e exibir no console
let resultadoDivisao = numero1 / numero2
// console.log('O resultado da divisão entre 10 / 5 = ' + resultadoDivisao)

// criar uma variavel resultadoMultiplicacao que irá obter o resultado da multiplicação entre
// as variáveis numero1 e numero2 e exibir no console
let resultadoMultiplicacao = numero1 * numero2
// console.log('O resultado da multiplicação entre 10 * 5 = ' + resultadoMultiplicacao)

// OPERADORES LÓGICOS E CONDICIONAIS
// Desafio 4 - Através de uma comparação validar qual valor é maior, se o valor da variável
// numero1 ou o valor da variável numero2 e exibir uma mensagem: O número X é maior que o número Y
// (lembrando que X e Y deverão ser substituídos pelos valores das variáveis numero1 e numero2)
if (numero1 > numero2){
  console.log('O número ' + numero1 + ' é maior que o número ' + numero2);
} else if (numero2 > numero1) {
  console.log('O número ' + numero2 + ' é maior que o número ' + numero1);
} else {
  console.log('Os números informados são iguais')
}
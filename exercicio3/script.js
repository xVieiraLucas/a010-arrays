// # Exercício 3

// Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, 
// chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;

// - Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;
// - Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
// - Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
const numeros = [30 , 10  , 99]
const numeroscopia = numeros.slice()
numeroscopia.push(13)
console.log(numeros , numeroscopia)

const arrays = [ "flamengo" , "campeão" , "mundial"]
const arrayscopia =  arrays.slice()
arrayscopia.pop()
console.log(arrays , arrayscopia)

const misturaLouca = [99 , "flamengo" , true]
const misturaLoucaCopia = misturaLouca.slice()
misturaLoucaCopia.splice(1, 1)
console.log(misturaLouca , misturaLoucaCopia)


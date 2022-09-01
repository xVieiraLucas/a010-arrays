// # Exercício 2

// Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:

// - Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
// - Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
// - Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma informação 
// booleana  falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.
const numeros = [30 , 10  , 99]
const arrays = [ "flamengo" , "campeão" , "mundial"]
const misturaLouca = [99 , "flamengo" , true]

console.log(numeros.length)
console.log(arrays.length)
console.log(misturaLouca.length)

console.log(numeros[0])
console.log(arrays[1])
console.log(misturaLouca[2])

console.log(numeros.includes(99))
console.log(misturaLouca.includes("Palmeiras tem mundial ?"))


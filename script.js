// // ARRAY - .map COM THIS E SEM THIS

// // COM THIS
// // const maca = {
// //     value : 2,
// // }

// // const laranja = {
// //     value : 3,
// // }

// // function mapComThis(arr, thisArg) {
// //     return arr.map(function(item) {
// //        return item * this.value;
// //     }, thisArg);
// // }

// // const nums = [1,2];

// // console.log('this -> maçã', mapComThis(nums, maca));

// // console.log('this -> laranja', mapComThis(nums, laranja));

// // ------------------------------------------------------------------------------------------------------------

// //SEM THIS
// // function mapSemThis (arr) {
// //     return arr.map(function(item) {
// //         return item * 2 

// //     })
// // }

// // const nums = [ 2,4,6,8,10];

// // console.log(mapSemThis(nums));
// // console.log(nums);


// // ARRAY - .filter
// // function filtraPares (arr) {
// //     return arr.filter(callback);
// // }

// // function callback(item) {
// //     return item % 2 === 0;
// // }

// // const numsPares = [1, 23, 55, 67, 20, 8, 2, 4];

// // console.log(filtraPares(numsPares));

// // ARRAY -1 .reduce

// // function somaNumeros (arr) {
// //     return arr.reduce(function (prev, current) {
// //         console.log({prev});
// //         console.log({current});
// //         return prev + current;
// //     },0);
// // }

// // const arr = [1,2];

// // console.log(somaNumeros(arr));

// const lista = [
//     {
//         name: 'sabão em pó',
//         preco: 30
//     },
//     {
//         name:'cereal',
//         preco: 12,
//     },
//     {
//         name: 'toalha',
//         preco: 30,
//     }
// ];

// const saldoDisponivel = 100;

// function calculaSaldo (saldoDisponivel,lista) {
//     return lista.reduce(function(prev,current,index){
//         console.log('rodada', index + 1);
//         console.log({prev});
//         console.log({current});

//         return prev - current.preco;
//     }, saldoDisponivel);
// }

// console.log(calculaSaldo(saldoDisponivel,lista));


let array = [1, 2, 3, 4];

array.reduce((current, acc) => current + acc);
console.log (array);
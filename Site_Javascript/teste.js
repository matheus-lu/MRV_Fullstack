// ---- Variaveis e constantes ---- //
// var y = 0; | Comentário de uma linha

/* var y = 0; | Comentário multi-linhas 
var x = 1; */ 

// var preco = 2;
// var desconto = 0.2;
// const PRECO = 2;
// var total = PRECO - desconto;

// ---- Função ---- //

// function soma(a, b) {
//     return a + b;
// }

// soma(2, 5);

// ---- Console ---- //

// console.log("Hello world!");
// function returnEvenValues(array) {
//     let evenNums = [];
//     for(let i = 0; i < array.length; i++)
//         if(array[i] % 2 === 0) {
//             evenNums.push(array[i]);
//         } else {
//             console.log(`${array[i]}, Não é par!`)
//         }
//     console.log('Os números pares são: ', evenNums);
// }
// let array = [1, 2, 4, 5, 7, 8];
// returnEvenValues(array);

async function resolvePromise() {
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log('Resolvida'));
        }, 300);
    });

    const resolved = await myPromise
        .then((result) => result + ' passando pelo then')
        .then((result) => result + ' e agora acabou!')
        .catch((err) => console.log(err.message))
    
    return resolved;
};
console.log(resolvePromise());
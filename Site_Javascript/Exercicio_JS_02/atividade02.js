function substituiPares (array) {
    if (!array) return -1;
    if (!array.length) return -1;

    let novaLista = [];
    array.forEach(element => {
        if (element % 2 === 0) {
            novaLista.push(0)
        } else {
            novaLista.push(element)
        };
    });
    return novaLista
}
var array = [1, 3, 4, 6, 80, 33, 23, 90]
console.log(substituiPares(array))


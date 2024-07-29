function validaArrays(array, num){
    try {
        if (!array && !num) throw new ReferenceError("Envie os parametros");
        if (typeof(num) !== "number") throw new TypeError("O numero enviado não é do tipo Number!");
        if (typeof(array) !== "object") throw new TypeError("O array enviado não é de instancia de Object!");
        if (array.length != num) throw new RangeError("O tamanho do array e o número enviado não são Iguais!"); 
        return console.log(array);
    } catch(e) {
        if (e instanceof ReferenceError){
            console.log("Este erro é um ReferenceError");
            console.log(e.message);
        }else if (e instanceof TypeError){
            console.log("Este erro é um TypeError");
            console.log(e.message);
        }else if (e instanceof RangeError){
            console.log("Este erro é um RangeError");
            console.log(e.message);
        } else {
            console.log('Tipo de erro não tratado: ' + e);
        }
    }
};

validaArrays([1, 2, 3, 4], 4)

/* 
Hacer un algoritmo de promedios
- Solicitar al usuario la cantidad de notas a promediar
- Solicitar la cantidad de notas indicadas por el usuario y acumularlas (Es decir, sumarlas entre si)
- Luego de hacer la sumatoria, dividir las notas por la cantidad y mostrar por consola el promedios
## Opcional: validar que la nota sea un número
*/

/* Idea
    1 - Tengo que decirle al Usuario que ingrese la cantidad de notas
    2 - Una vez Ingresadas se para el programa
    3 - Ahí sumamos las notas y despues dividimos por la cantidad Ingresadas
    4 - Se le da al usuario el promedio

    I- Necesito que ingrese un Número.
    II- El programa toma ese valor y le pide que ingrese por uno los números (Memoria/Lista?) (Puedo poner de maximo 10 o 100).
    III- Suma lo numeros y se divide, me da el valor final.


    Variables 
    - Cantidad de Notas [Condiciones: Tipo Number]
    - Nota Indidual (n1, n2, n3, ... nK) [Condiciones: Tipo Number, Igual o menor a 10]
    - La suma de las notas
    - Promedio Final
*/

let cantNotas = Number(prompt("¿Cuantas notas vas a promediar?")); // Tipo Number
let sumaNotas = 0; // Limpiamos la lista

if (!isNaN(cantNotas) && cantNotas > 0){ // Solamente tipo Number y que el dato ingresado sea mayor a 0
    for (let i = 0; i < cantNotas; i++) {
        let nota = Number(prompt(`Ingrese Nota (Del 1 al 10): ${i + 1}`));
        if (nota > 0 && nota <= 10) {
        sumaNotas = sumaNotas + nota;
        }
        else{
            alert("Nota no valida, refresque la página")
        }
    }
    let promedioNotas = sumaNotas / cantNotas;
    alert(`El promedio es: ${promedioNotas}`);
}
else{
    alert("Nota no valida, refresque la página")
}
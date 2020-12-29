const valores = [-5,0,-3,-4,12];
let pares = 0;
let impares = 0;

for (valor in valores){
  if(valor % 2 == 0){
    pares++;
   } else{
    impares++;
  }
}

let positivos = valores.filter(valor => valor > 0).length;
let negativos = valores.filter(valor => valor < 0).length;

console.log(pares + " valor(es) par(es)");
console.log(impares + " valor(es) impar(es)");
console.log(positivos + " valor(es) positivo(s)");
console.log(negativos + " valor(es) negativo(s)");

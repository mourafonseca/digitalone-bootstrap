let valor = 503;
let cedulas = {
    n100 :0,
    n50:0,
    n20:0,
    n10:0,
    n5:0,
    n2:0,
    n1:0
}

let resto = {
    r100 :0,
    r50:0,
    r20:0,
    r10:0,
    r5:0,
    r2:0,
    r1:0
}
n100 = parseInt (valor / 100);
r100 = parseInt (valor %100);

n50 = parseInt (r100 / 50);
r50 = parseInt (r100 %50);

n20 = parseInt (r50 / 20);
r20 = parseInt (r50 %20);

n10 = parseInt (r20 / 10);
r10 = parseInt (r20 %10);

n5 = parseInt (r10 / 5);
r5 = parseInt (r10 %5);

n2 = parseInt (r5 / 2);
r2 = parseInt (r5 %2);

n1 = parseInt (r2 / 1);
r1 = parseInt (r2 %1);

console.log (valor);
console.log (`${n100} nota(s) de R$ 100,00`);
console.log (`${n50} nota(s) de R$ 50,00`);
console.log (`${n20} nota(s) de R$ 20,00`);
console.log (`${n10} nota(s) de R$ 10,00`);
console.log (`${n5} nota(s) de R$ 5,00`);
console.log (`${n2} nota(s) de R$ 2,00`);
console.log (`${n1} nota(s) de R$ 1,00`);
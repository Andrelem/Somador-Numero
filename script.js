function somar(){
    let na1 = document.getElementById('n1');
    let na2 = document.getElementById('n2');
    let resultado = document.getElementById('res');
    let n1 = Number(na1.value);
    let n2 = Number(na2.value);
    let s = n1 + n2;
    resultado.innerHTML = `A soma de ${n1} + ${n2} = ${s}`
}

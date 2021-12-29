let inputItem1 = document.getElementById("item1");
let inputItem2 = document.getElementById("item2");
let inputItem3 = document.getElementById("item3");

let inputItem1Raro = document.getElementById("item1Raro");
let inputItem2Raro = document.getElementById("item2Raro");
let inputItem3Raro = document.getElementById("item3Raro");

let resultado = document.getElementById("resultado");
let resultadoRaro = document.getElementById("resultado-raro");

function calcular() {
    console.log("Calculando...")

    let item1 = inputItem1.value/10;
    let item2 = inputItem2.value/10;
    let item3 = inputItem3.value/10;
    let cobre = 2000;
    let po = 2;
    let dark = 1000;


    let quantidadeTotalAcoCobre = item1 * cobre;
    let quantidadeTotalAcoDark = item1 * dark;
    let quantidadeTotalAcoPo = item1 * po;

    let quantidadeTotalItem2Cobre = item2 * cobre;
    let quantidadeTotalItem2Dark = item2 * dark;
    let quantidadeTotalItem2Po = item2 * po;

    let quantidadeTotalItem3Cobre = item3 * cobre;
    let quantidadeTotalItem3Dark = item3 * dark;
    let quantidadeTotalItem3Po = item3 * po;


    resultado.innerHTML = `<p><strong>Aço/Platina:</strong> ${quantidadeTotalAcoCobre} de cobre ${quantidadeTotalAcoDark} de aço negro ${quantidadeTotalAcoPo} de pó brilhante<p>`
    resultado.innerHTML += `<p><strong>Quitessências:</strong> ${quantidadeTotalItem2Cobre} de cobre ${quantidadeTotalItem2Dark} de aço negro ${quantidadeTotalItem2Po} de pó brilhante<p>`
    resultado.innerHTML += `<p><strong>Bugiganga:</strong> ${quantidadeTotalItem3Cobre} de cobre ${quantidadeTotalItem3Dark} de aço negro ${quantidadeTotalItem3Po} de pó brilhante<p>`

}

function calcularRaro() {
    console.log("Calculando...")

    let item1 = inputItem1Raro.value/10;
    let item2 = inputItem2Raro.value/10;
    let item3 = inputItem3Raro.value/10;
    let cobre = 20000;
    let po = 25;
    let dark = 5000;


    let quantidadeTotalAcoCobre = item1 * cobre;
    let quantidadeTotalAcoDark = item1 * dark;
    let quantidadeTotalAcoPo = item1 * po;

    let quantidadeTotalItem2Cobre = item2 * cobre;
    let quantidadeTotalItem2Dark = item2 * dark;
    let quantidadeTotalItem2Po = item2 * po;

    let quantidadeTotalItem3Cobre = item3 * cobre;
    let quantidadeTotalItem3Dark = item3 * dark;
    let quantidadeTotalItem3Po = item3 * po;

    console.log(quantidadeTotalAcoCobre)
    console.log(item1)
    resultadoRaro.innerHTML = `<p><strong>Aço/Platina:</strong> ${quantidadeTotalAcoCobre} de cobre ${quantidadeTotalAcoDark} de aço negro ${quantidadeTotalAcoPo} de pó brilhante<p>`
    resultadoRaro.innerHTML += `<p><strong>Quitessências:</strong> ${quantidadeTotalItem2Cobre} de cobre ${quantidadeTotalItem2Dark} de aço negro ${quantidadeTotalItem2Po} de pó brilhante<p>`
    resultadoRaro.innerHTML += `<p><strong>Bugiganga:</strong> ${quantidadeTotalItem3Cobre} de cobre ${quantidadeTotalItem3Dark} de aço negro ${quantidadeTotalItem3Po} de pó brilhante<p>`

}

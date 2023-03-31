"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const key = "ede0c823a7d1358cca7ffb29a2a7811a";
function buttonClick() {
    const cidadeInput = document.getElementById('input-cidade');
    const cidade = cidadeInput.value;
    buscarCidade(cidade);
}
function buscarCidade(cidade) {
    return __awaiter(this, void 0, void 0, function* () {
        const dados = yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json());
        returnData(dados);
    });
}
function returnData(dados) {
    const cidadeRes = document.getElementById('#cidade');
    cidadeRes.innerHTML = "Tempo em " + dados.name;
    const grausRes = document.querySelector('#graus');
    grausRes.innerHTML = Math.floor(dados.main.temp) + "°C";
    const nuvensRes = document.querySelector('#nuvens');
    nuvensRes.innerHTML = dados.weather[0].description;
    const umidadeRes = document.querySelector('#umidade');
    umidadeRes.innerHTML = "Umidade " + dados.main.humidity + "%";
}

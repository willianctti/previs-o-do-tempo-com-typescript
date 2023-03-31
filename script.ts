
    const key: number | string = "ede0c823a7d1358cca7ffb29a2a7811a"

function buttonClick() {
    const cidadeInput = document.getElementById('input-cidade') as HTMLInputElement;
    const cidade: string = cidadeInput.value;
    buscarCidade(cidade)
}


async function buscarCidade(cidade: any)  {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( response => response.json() )
    
    returnData(dados)
}

function returnData(dados: any) {
   const cidadeRes = document.getElementById('#cidade') as HTMLElement;
    cidadeRes.innerHTML = "Tempo em " + dados.name

    const grausRes = document.querySelector('#graus') as HTMLElement;
    grausRes.innerHTML = Math.floor(dados.main.temp) +"°C"

    const nuvensRes = document.querySelector('#nuvens') as HTMLElement;
    nuvensRes.innerHTML = dados.weather[0].description

    const umidadeRes = document.querySelector('#umidade') as HTMLElement;
    umidadeRes.innerHTML = "Umidade " + dados.main.humidity + "%"
}

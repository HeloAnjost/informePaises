function Coletar(){
    let input = document.querySelector('.input-pais').value
    console.log(input)
    Dados(input)
    
}

async function Dados(input){
    let dados = await fetch(`https://restcountries.com/v3.1/name/${input}`).then(response => response.json())
    console.log(dados)
    Exibir(dados)
  
}
 function Exibir(dados){
    document.querySelector('.nome').innerHTML = dados[0].name.common;
    document.querySelector('.oficial').innerHTML = dados[0].name.official;
    document.querySelector('.sigla').innerHTML = dados[0].cca2;
    document.querySelector('.moedas').innerHTML = dados[0].currencies.BRL.name;
    document.querySelector('.simbolos').innerHTML = dados[0].currencies.BRL.symbol;
    document.querySelector('.capital').innerHTML = dados[0].capital;
    document.querySelector('.regiao').innerHTML = dados[0].region;
    document.querySelector('.subregiao').innerHTML = dados[0].subregion;
    document.querySelector('.idioma').innerHTML = dados[0].languages.por;
 }

 

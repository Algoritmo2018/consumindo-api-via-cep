var txtcep = document.querySelector("#cep") 
var txtLocalidade = document.querySelector("#Localidade") 
var txtBairro = document.querySelector("#Bairro") 
var txtUf = document.querySelector("#Uf") 
var txtLogradouro = document.querySelector("#Logradouro")  

txtcep.addEventListener('focusout', async() =>{
    var url = `https://viacep.com.br/ws/${txtcep.value}/json/`
    var resposta = await fetch(url)
    var dados = await resposta.json()

    console.log(dados)
if(dados.erro){
alert("Cep invalido")
    txtLocalidade.value = ""
    txtBairro.value = "" 
    txtUf.value = ""   
    txtLogradouro.value = "" 
}
else{
  txtLocalidade.value = dados.localidade
    txtBairro.value = dados.bairro
    txtUf.value = dados.uf
    txtLogradouro.value = dados.logradouro   
}
   
})
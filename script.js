//Gerar pokemon
//estourar pokemon
//pontuação
//se passar de 20 aparece a equipe rocket se não clicar da game over.(sugestao gerar aleatorio a equipe rocket.)
var nome;
var total=0;
const intervalo = 1;

function entrar()
{
    nome = prompt('Digite Seu nome');
    var area = document.getElementById('area');
    area.innerHTML = '<H3>CAPTURE POKEMONS AGORA!!!</H3> &nbsp&nbsp&nbsp <H3> '+ nome+'</H3> <button type="button" class="btn btn-danger btn-lg btn-block" onclick="parar()">Parar</button>';   
    carregaJogo();
}
    

function sair(){
    alert('Obrigado por Participar');
    clearInterval(intervalo);
}

function criarpokemon()
{
    var pokemon = document.createElement("div");
   pokemon.setAttribute("class","pokemon");

   var x = Math.floor(Math.random() * 800);
   var y = Math.floor(Math.random() * 600);
   if (y < 100) {
    var y = Math.floor(Math.random() * 600);
   }
   pokemon.setAttribute("style", "left:"+x+"px;top:"+y+"px;");
   pokemon.setAttribute("onclick", "capturar(this)");

   var imagem = document.createElement("img");
   var p = Math.floor(Math.random() * 11);
   switch(p){
        case 0 : imagem.setAttribute ("src","1.png");
                    break;
        case 1 : imagem.setAttribute ("src","2.webp");
                    break;
        case 2 : imagem.setAttribute ("src","3.webp");
                    break;
        case 3 : imagem.setAttribute ("src","4.webp");
                    break;
        case 4 : imagem.setAttribute ("src","5.webp");
                    break;
        case 5 : imagem.setAttribute ("src","6.webp");
                    break;
        case 6 : imagem.setAttribute ("src","7.webp");
                    break;
        case 7 : imagem.setAttribute ("src","8.webp");
                    break;
        case 8 : imagem.setAttribute ("src","9.webp");
                    break;
        case 9 : imagem.setAttribute ("src","10.webp");
                    break;
        case 10 : imagem.setAttribute ("id","equipe");
                  imagem.setAttribute ("src","equipe.png");
                  break;

   }
   
   //imagem.setAttribute ("src","1.png");
   imagem.setAttribute('alt', 'nature');
   imagem.setAttribute('height', 100); // �️ height in px
   imagem.setAttribute('width', 100); // �️ width in px


   pokemon.appendChild(imagem);

   document.body.appendChild(pokemon);

}

function capturar(objeto) {
    //esse codigo acha mais ele busca na pagina toda
    //var img = document.querySelector("#equipe");
    //if (img.getAttribute("id")=="equipe"){
    //console.log(img.getAttribute("id"))
    //}

    document.body.removeChild(objeto);

    total ++;
    var score = document.getElementById('total');
    score.innerHTML = "Pokemons Capturados:" + total;
}

function carregaJogo(){
    intervalo = setInterval(criarpokemon,500);
}

function parar(){
    clearInterval(intervalo);
    var area = document.getElementById('area');
    area.innerHTML = '<H3>PARABÉNS VOCÊ CAPTUROU !!!</H3> &nbsp&nbsp&nbsp <H3> '+ total+'</H3> &nbsp&nbsp&nbsp <H3> POKEMONS</HR>';
}


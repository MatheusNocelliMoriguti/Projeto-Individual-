
    var listaNumero = [1, 4, 16, 81, 44];
    var listaPonto = ['393 pontos','331 pontos','307 pontos','262 pontos','190 pontos'];
    var listaImagemPessoa = ['../assets/img/max-verstappen.7170b90d.png','../assets/img/lando norris2.png','../assets/img/charles leclerc.png','../assets/img/orcarpiastri.png','../assets/img/Lewis-Hamilton.png'];
    var listaNomePessoa=['Max Verstappen','Lando Norris','Charles Leclerc','Oscar Piastri','Lewis Hamilton'];
    var listaBandeira=['../assets/img/bandeira holanda.webp','../assets/img/reino unido.png','../assets/img/monaco.png','../assets/img/australia.png','../assets/img/reino unido.png'];
    var listaNomeEquipe=['Oracle Red Bull Racing','McLaren Racing Limited','Ferrari','McLaren Racing Limited','Mercedes-Benz'];
    var listaLogo=['../assets/img/red-bull-logo-2-1.png','../assets/img/logomclaren.png','../assets/img/Ferrari-Emblem.png','../assets/img/logomclaren.png','../assets/img/Mercedes-Benz-Logo.png']

    var i = 0;

    setInterval(trocar, 3000)
    
    function trocar(){
            console.log(i);
            IdNumero.innerHTML= listaNumero[i]
            IdPontos.innerHTML= listaPonto[i]
            IdImgPessoa.src= listaImagemPessoa[i]
            IdNomePessoa.innerHTML= listaNomePessoa[i]
            IdImgBandeira.src= listaBandeira[i]
            IdNomeEquipe.innerHTML= listaNomeEquipe[i]
            IdLogoimg.src= listaLogo[i]

            i++
            
            if(i == listaNumero.length ){
                i = 0
            }
             
    }

    
    



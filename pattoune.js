//REMPLISSAGE CELLULES//
var lM=document.getElementsByClassName("cMiddle");
var lEuros=document.getElementsByClassName("cEuros");
var lB=document.getElementsByClassName("cBottom");
var lDR=document.getElementsByClassName("cDR");
var lRoom=document.getElementsByClassName("cRoom");
var lPseudo=document.getElementsByClassName("cPseudo");

async function remplir() {
    var cell = await fetch("https://dawn2k-random-german-profiles-and-names-generator-v1.p.rapidapi.com/?count=10&gender=b&maxage=40&minage=30&cc=all&email=gmail.com%252Cyahoo.com&pwlen=12&ip=a&phone=l%252Ct%252Co&uuid=false&lic=false&color=false&seed=helloworld&images=false&format=json", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "dawn2k-random-german-profiles-and-names-generator-v1.p.rapidapi.com",
        "x-rapidapi-key": "08759ea624msh2a6938fabb3eca0p1362f2jsn3f45f9251846"
      }
    })
      cell= await cell.json()
      
      let data= await cell

      await(console.log(data))

      function ajouterChiffre() {
        for(i=0;i<lM.length;i++){    
            lM[i].innerHTML=data[i].phone.land.slice(2,4)
            lB[i].innerHTML=data[i].birthday.slice(0,2) + " % de l'objectif"
        }
      }

//REMPLISSAGE TABLEAU//
      function ajouterNomPrenom() {
        for(i=0;i<lDR.length;i++){    
            lDR[i].innerHTML=data[i].firstname +  " "  + data[i].lastname
        }
      }

      function ajouterChiffreAffaires() {
        for(i=0;i<lEuros.length;i++){    
          lEuros[i].innerHTML=data[i].location.zip + " € "
        }
      }
      
      function ajouterSalle() {
        for(i=0;i<lRoom.length;i++){    
          lRoom[i].innerHTML=data[i].age
        }
      }

      function ajouterPseudo() {
        for(i=0;i<lPseudo.length;i++){    
          lPseudo[i].innerHTML=data[i].username
        }
      }

      ajouterChiffre();
      ajouterChiffreAffaires ();
      ajouterNomPrenom();
      ajouterSalle();
      ajouterPseudo();
  }

remplir();







var prenom = prompt ("Comment t'appelles-tu ?")
console.log("Bienvenue, ")
console.log(prenom)
console.log(window);

var titre = document.getElementById('Titre1');
titre.innerText = "Bonjour "+ prenom; 
 

if(prenom == "Pia"){

alert("Comme moi !");
}
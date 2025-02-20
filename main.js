let form
document.querySelector(`#registration-form`).addEventListener(`submit`, function(event) {
        event.preventDefault();

    //Recuperons les valeurs des champs
    const nom = document.querySelector(`#nom`).value.trim();
    const prenom = document.querySelector(`#prenom`).value.trim();
    const naissance = document.querySelector(`#naissance`).value;
    const telephone = document.querySelector(`#telephone`).value.trim();
    const motivation = document.querySelector(`#moti`).value.trim();

    

    //Prouvons que tous les  champs sont remplis
    if (!nom || !prenom || !naissance || !telephone || !motivation) {
        alert(`Frère ce champ est obligaforcé`);
            return;
    }

    // Alert pour exiger un minimun d'age
    const birthDate = new Date(naissance);
    const today = new Date();
    let age = today.getFullYear()-birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    if (age<18) {
        alert(`Vous devez avoir 18ans pour vous inscrire`);
        return;
    }


    //Le numero de telephone
    const phoneRegex =  /^01\d{8}$/;
    if (!phoneRegex.test(telephone)) {
        alert(`Le numero doit commercer par 01 et doit contenir 10chiffres`)
        return;
    }

    // alert pour les caractères de motivation
    if (motivation.length < 1000 || motivation.length > 2500 ) {
        alert(`Frère, votre motivation doit etre comprise entre 1000 et 2500 cactères`);
       
    }  
    
    //cond
    if (motivation.length < 1000) {
        alert(`Votre motivation n'atteint pas encore 1000 cactères`);
        
    }

    //2cond
    if (motivation.length > 2500) {
        alert(`Votre motivation depasse 2500 caractère dejà`);
        return;
    }

    // L'ensemble des resultats

     document.getElementById(`result-nom`).textContent = nom;

     document.getElementById(`result-prenom`).textContent = prenom;

     document.getElementById(`result-naissance`).textContent = naissance;

    //  document.getElementById(`result-telephone`).textContent = telephone;

     document.getElementById(`result-motivation`).textContent = motivation;


    //voir le resultat
    document.querySelector(`#result`).style.display = `block`;
});



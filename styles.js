let reco= true;
let poss="w"||"n";


do{
  
       let nbre= prompt("Entrer un nombre de 1 a 10: ");

    for(let i=1; i<=10; i++){
        let res=nbre*i;
        console.log( i + '*' + nbre + '=' +res);
    }
    


    let choix = prompt("voulez-vous recommencer?  w/n")  

    if (!choix){
        reco=false;
    }
    else if (choix=="n"){
        alert("Fin du programme!")
        break;
    }
    else{
        reco=true;
    }

    for (let rep of choix){
        if(!poss.includes(rep)){
            reco=false;
            break;
        }
    }
    
    
}
    



while(reco===true){

}

let GrauCilindricoEsquerdo = document.getElementById('GCESQ');
let GrauCilindricoDireito = document.getElementById('GCDIR');
let GrauEsfericoEsquerdo = document.getElementById('GEESQ');
let GrauEsfericoDireito = document.getElementById('GEDIR');

const TakeValue = (value, ID) =>{
    switch (ID){
        case 1 :
            GrauEsfericoEsquerdo = value.options[value.selectedIndex].value;
        break;
            
        case 2 :
            GrauEsfericoDireito = value.options[value.selectedIndex].value;
        break;
                
        case 3 :
            GrauCilindricoEsquerdo = value.options[value.selectedIndex].value;
        break;

        case 4 :
            GrauCilindricoDireito = value.options[value.selectedIndex].value;
        break;    
    }
}

const CalculateVision = (data) =>{
    alert(`${GrauEsfericoEsquerdo}, ${GrauEsfericoDireito}, ${GrauCilindricoEsquerdo}, ${GrauCilindricoDireito}`);

    if(GrauEsfericoEsquerdo < 0){
        alert('Grau Esferico Esquerdo menor do que 0');
    }

    if(GrauEsfericoDireito < 0){
        alert('Grau Esferico Direito Menor do que 0');
    }

    if(GrauCilindricoEsquerdo < 0){
        alert('Grau Cilindrico Esquerdo Menor do que 0');
    }

    if(GrauCilindricoDireito < 0){
        alert('Grau Cilindrico Direito Menor do que 0');
    }
}

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

    //Além disso, ela só atende até grau cilíndrico -2,porém, se o usuário apresentar grau cilíndrico, ela passa a atender grau esférico entre -3 e -10.
    if(GrauCilindricoEsquerdo > -2 || GrauCilindricoDireito > -2){
        if((GrauEsfericoEsquerdo < -3 && GrauEsfericoEsquerdo > -10) || (GrauEsfericoDireito < -3 && GrauEsfericoDireito > -10  )){
            alert('Lente Prime 2');
            
            return;
        }
    }
    
    // A lente Prime só pode ser uma opção para o usuário que tiver grau esférico, seja do olho esquerdo ou do olho direito, entre -3 e -12.
    if((GrauEsfericoEsquerdo < -3 && GrauEsfericoEsquerdo > -12) || (GrauEsfericoDireito < -3 && GrauEsfericoDireito > -12)){
        if((GrauCilindricoDireito == 0) && (GrauCilindricoEsquerdo == 0))
        alert('Lente Prime 1');

        return;
    }
    
    if((GrauEsfericoEsquerdo < 0 && GrauEsfericoEsquerdo > -15) && (GrauEsfericoDireito < 0 && GrauEsfericoDireito > -15)){
       if(GrauCilindricoEsquerdo && GrauCilindricoDireito > -5){
           alert('Lente Vision');
    
           return;
        }      
    }
    else{
        alert('Não Foi Possível localizar sua lente!');
    }
}   



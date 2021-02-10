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
    let SelectedColor = 'purple';
    let SelectedBorder = '1px solid purple';

    if(GrauCilindricoEsquerdo > -2 || GrauCilindricoDireito > -2){
        if((GrauEsfericoEsquerdo < -3 && GrauEsfericoEsquerdo > -10) || (GrauEsfericoDireito < -3 && GrauEsfericoDireito > -10  )){
                LensPossibility[0].style.color = SelectedColor;
                LensPossibility[0].style.border = SelectedBorder;
            return;
        }
    }
    
    if((GrauEsfericoEsquerdo < -3 && GrauEsfericoEsquerdo > -12) || (GrauEsfericoDireito < -3 && GrauEsfericoDireito > -12)){
        if((GrauCilindricoDireito == 0) && (GrauCilindricoEsquerdo == 0))
            LensPossibility[0].style.color = SelectedColor;
            LensPossibility[0].style.border = SelectedBorder;
        return;
    }
    
    if((GrauEsfericoEsquerdo < 0 && GrauEsfericoEsquerdo > -15) && (GrauEsfericoDireito < 0 && GrauEsfericoDireito > -15)){
       if(GrauCilindricoEsquerdo && GrauCilindricoDireito > -5){
            LensPossibility[1].style.color = SelectedColor;
            LensPossibility[1].style.border = SelectedBorder;
           return;
        }      
    }
    else{
       document.getElementById('Controls').innerHTML = 'Não Foi Possível Localizar sua Lente!';
    }
}   



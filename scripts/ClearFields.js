const ClearFields = _ =>{
    let GEESQ = document.getElementById('GEESQ');
    let GEDIR = document.getElementById('GEDIR');
    let GCESQ = document.getElementById('GCESQ');
    let GCDIR = document.getElementById('GCDIR');
    
    let ResetColor = '#FFFFFFFF';
    let ResetBorder = '1px solid #FFFFFFFF';
    let LensPossibilities = document.getElementsByClassName('Lens');

    let Positions = [GEESQ, GEDIR, GCESQ, GCDIR];
    for(let i = 0; i < Positions.length; i++){
        Positions[i].value =  0;
    }

    for(let p = 0; p < LensPossibilities.length; p++){
        LensPossibilities[p].style.border = ResetBorder;
        LensPossibilities[p].style.color = ResetColor;
    }
}
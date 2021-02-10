const ClearFields = _ =>{
    let GEESQ = document.getElementById('GEESQ');
    let GEDIR = document.getElementById('GEDIR');
    let GCESQ = document.getElementById('GCESQ');
    let GCDIR = document.getElementById('GCDIR');

    let Positions = [GEESQ, GEDIR, GCESQ, GCDIR];

    for(let i = 0; i < Positions.length; i++){
        Positions[i].value =  0;
    }
}
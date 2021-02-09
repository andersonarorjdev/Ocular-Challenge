let GECESQ = document.getElementById('GECESQ');
let GECDIR = document.getElementById('GECDIR');
let GEOESQ = document.getElementById('GEOESQ');
let GEODIR = document.getElementById('GEODIR');

const TakeValue = (value, ID) =>{
    switch (ID){
        case 1 :
            GEOESQ = value.options[value.selectedIndex].value;
        break;
            
        case 2 :
            GEODIR = value.options[value.selectedIndex].value;
        break;
                
        case 3 :
            GECESQ = value.options[value.selectedIndex].value;
        break;

        case 4 :
            GECDIR = value.options[value.selectedIndex].value;
        break;    
    }
}

const CalculateVision = (data) =>{
    alert(`The values are: ${GEOESQ}, ${GEODIR}, ${GECESQ}, ${GECDIR}`);
}

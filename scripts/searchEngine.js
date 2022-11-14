//importing the arrays from other JS files

import {nationalParksArray} from './nationalParkData.js';
import {parkTypesArray} from "./parkTypeData.js";
import {locationsArray} from "./locationData.js";


// Need to fill dropdowns with park type and locations information

//getting the length of the location array & Park Type
let locationArrayLength = locationsArray.length;
let parkTypesArrayLength = parkTypesArray.length;


//for loop to fill in the drop down with its corresponding properties
for (let i = 0; i < locationArrayLength; i++) {
    let newOption = new Option(locationsArray[i], locationsArray[i])
    const selectState = document.getElementById('stateDropDown'); 
    selectState.add(newOption,undefined);
}

//for loop to fill in the drop down with its corresponding properties
for (let i = 0; i < parkTypesArrayLength; i++) {
    let newOption = new Option(parkTypesArray[i], parkTypesArray[i])
    const selectParkType = document.getElementById('parkType');
    selectParkType.add(newOption,undefined);
}


//upon clicking search, it will retain the selected dropdown items
const parkSearchbtn = document.getElementById('searchbtn');


parkSearchbtn.onclick = () => {
    var locationData = document.getElementById('stateDropDown').value;
    var parkTypeData = document.getElementById('parkType').value;
    dataFilter(locationData, parkTypeData)

    
    
}

function dataFilter(location, parkType) {
    console.log(location, parkType)
}


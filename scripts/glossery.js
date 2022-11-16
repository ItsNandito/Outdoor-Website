import { mountainsArray } from "./mountainData.js";

let mountainsArrayLength = mountainsArray.length;

for (let i = 0; i < mountainsArrayLength; i++) {
    let newOption = new Option(mountainsArray[i].name, mountainsArray[i].name);
    const selectMountain = document.getElementById("mountainSelection");
    selectMountain.add(newOption, undefined);
  }

//create a variable that will push the selected item to our next function
let dropDown = document.getElementById('mountainSelection');

dropDown.onchange = () => {
    let dropDownValue = dropDown.value;
    console.log(dropDownValue);
    arraySelector(dropDownValue)
    //cardUpdater(mountain);
};

//perhaps use indexof to locate the name name and what index its in and push that to our cardudpater function
function arraySelector(mountain) {
    let arrayindex = mountainsArray.findIndex(array => {
        //console.log(array.name == mountain);
        return array.name == mountain
    })

    console.log(arrayindex)


}

function cardUpdater(mountain) {
    let canvas =  document.getElementById('canvas');
    let mtnName = mountainsArray.name
}

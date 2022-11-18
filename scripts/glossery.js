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
    let descriptionCard = document.getElementById('description');
    descriptionCard.replaceChildren()
    let dropDownValue = dropDown.value;
    console.log(dropDownValue);
    indexFinder(dropDownValue)
    //cardUpdater(mountain);
};

//perhaps use indexof to locate the name name and what index its in and push that to our cardudpater function
//Ended up using the findIndex method to located the index that matches the dropdown value
function indexFinder(mountainName) {
    let arrayindex = mountainsArray.findIndex(array => {
        //console.log(array.name == mountain);
        return array.name == mountainName
    })

    cardUpdater(arrayindex)
}

//I will be using the index value to navigate through the array and display them on the html page
function cardUpdater(newIndex) {
    let  index = newIndex;
    let imgsrc = document.getElementById('imgsrc')
    imgsrc.src = (`/images/${mountainsArray[index].img}`);

    let descriptionCard = document.getElementById('description')
    let mtnName = mountainsArray[index].name;
    let mtndescription = mountainsArray[index].desc;
    let mtnelevation = (`Elevation: ${mountainsArray[index].elevation} FT`);
    let mtncoordinates = (`Lat: ${mountainsArray[index].coords.lat}, Long: ${mountainsArray[index].coords.lng}`);

    let cardTitle = document.createElement("h2");
    cardTitle.innerHTML = mtnName;
    descriptionCard.appendChild(cardTitle)

    // let linebrk = document.createElement('hr');
    // descriptionCard.appendChild(linebrk)

    let elevation = document.createElement("h5");
    elevation.innerHTML = mtnelevation;
    descriptionCard.appendChild(elevation)

    let description = document.createElement("p");
    description.innerHTML = mtndescription;
    descriptionCard.appendChild(description)

    let coordinates = document.createElement("h5");
    coordinates.innerHTML = mtncoordinates;
    descriptionCard.appendChild(coordinates)

}

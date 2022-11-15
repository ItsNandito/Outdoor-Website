//importing the arrays from other JS files

import { nationalParksArray } from "./nationalParkData.js";
import { parkTypesArray } from "./parkTypeData.js";
import { locationsArray } from "./locationData.js";

// Need to fill dropdowns with park type and locations information

//getting the length of the location array & Park Type
let locationArrayLength = locationsArray.length;
let parkTypesArrayLength = parkTypesArray.length;

//for loop to fill in the drop down with its corresponding properties
for (let i = 0; i < locationArrayLength; i++) {
  let newOption = new Option(locationsArray[i], locationsArray[i]);
  const selectState = document.getElementById("stateDropDown");
  selectState.add(newOption, undefined);
}

//for loop to fill in the drop down with its corresponding properties
for (let i = 0; i < parkTypesArrayLength; i++) {
  let newOption = new Option(parkTypesArray[i], parkTypesArray[i]);
  const selectParkType = document.getElementById("parkType");
  selectParkType.add(newOption, undefined);
}

//upon clicking search, it will retain the selected dropdown items
const parkSearchbtn = document.getElementById("searchbtn");

// Clicking the button will retain whatever information is in the selected fields
parkSearchbtn.onclick = () => {
  var locationData = document.getElementById("stateDropDown").value;
  var parkTypeData = document.getElementById("parkType").value;
  dataFilter(locationData, parkTypeData); //it will then pass these values to the filter function
};

//using the keywords that were selected, we will use that to filter the nationalParkData array
//some key things to keep an eye for is if uses leaves a dropdown blank. (perhaps use if else statements)
function dataFilter(location, parkType) {
  console.log(location, parkType);

  if (location == "blank" && parkType == "blank") {
    alert("Can't leave fields blank")
  } else if (location == "blank" && parkType != "blank") {
    let parkTypeFilterData = nationalParksArray.filter((item) =>
      item.LocationName.includes(parkType)
    );
    //console.log(parkTypeFilterData);
    displaySearch(parkTypeFilterData);
  } else if (parkType == "blank" && location != "blank") {
    let stateFilterData = nationalParksArray.filter(
      (item) => item.State == location
    );
    //console.log(stateFilterData)
    displaySearch(stateFilterData);
  } else {
    //This will filter data by state
    let stateFilterData = nationalParksArray.filter(
      (item) => item.State == location
    );
    //console.log(stateFilterData)

    //This will transfer the data that was used in the line above and filter it down one more time
    let parkTypeFilterData = stateFilterData.filter((item) =>
      item.LocationName.includes(parkType)
    );
    //console.log(parkTypeFilterData);

    displaySearch(parkTypeFilterData);
  }
}

// This function will be used to display the data onto the HTML page
function displaySearch(filteredParkData) {
  console.log(filteredParkData);
}

function userError() {
  alert("Sorry Please Try Again");
}

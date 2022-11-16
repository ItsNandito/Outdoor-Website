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

  if (locationData == "blank" && parkTypeData == "blank") {
    alert("Can't leave fields blank");
  } else {
    let mainDiv = document.querySelector("main");
    let pageTitle = document.querySelector("form");
    mainDiv.replaceChildren();
    pageTitle.style.marginTop = "0em";
    dataFilter(locationData, parkTypeData); //it will then pass these values to the filter function
  }
};

//using the keywords that were selected, we will use that to filter the nationalParkData array
//some key things to keep an eye for is if uses leaves a dropdown blank. (perhaps use if else statements)
function dataFilter(location, parkType) {
  console.log(location, parkType);

  if (location == "blank" && parkType != "blank") {
    let parkTypeFilterData = nationalParksArray.filter((item) =>
      item.LocationName.includes(parkType)
    );

    displaySearch(parkTypeFilterData);
  } else if (parkType == "blank" && location != "blank") {
    let stateFilterData = nationalParksArray.filter(
      (item) => item.State == location
    );

    displaySearch(stateFilterData);
  } else {
    //This will filter data by state
    let stateFilterData = nationalParksArray.filter(
      (item) => item.State == location
    );

    //This will transfer the data that was used in the line above and filter it down one more time
    let parkTypeFilterData = stateFilterData.filter((item) =>
      item.LocationName.includes(parkType)
    );

    displaySearch(parkTypeFilterData);
  }
}

// This function will be used to display the data onto the HTML page
function displaySearch(filteredData) {
  console.log(filteredData);
  let mainDiv = document.querySelector("main");

  if (filteredData.length === 0) {
    let cardTile = document.createElement("div");
    mainDiv.appendChild(cardTile);
    let cardTitle = document.createElement("h3");
    cardTitle.innerHTML = "No results";
    cardTile.appendChild(cardTitle);
  } else {
    filteredData.forEach((item) => {
      let parkTitle = item.LocationName;
      let parkAdress = `${item.Address}, ${item.City}, ${item.State}, ${item.ZipCode}`;
      let parkPhone = `Phone: ${item.Phone} | Fax: ${item.Fax}`;

      let cardTile = document.createElement("div");
      mainDiv.appendChild(cardTile);

      let cardTitle = document.createElement("h3");
      cardTitle.innerHTML = parkTitle;

      let cardAddress = document.createElement("h4");
      cardAddress.innerHTML = parkAdress;

      let cardPhone = document.createElement("h4");
      cardPhone.innerHTML = parkPhone;

      cardTile.appendChild(cardTitle);
      cardTile.appendChild(cardAddress);
      cardTile.appendChild(cardPhone);
    });
  }
}

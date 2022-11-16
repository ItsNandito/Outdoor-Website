import { mountainsArray } from "./mountainData.js";

let mountainsArrayLength = mountainsArray.length;

for (let i = 0; i < mountainsArrayLength; i++) {
    let newOption = new Option(mountainsArray[i].name, mountainsArray[i].name);
    const selectMountain = document.getElementById("mountainSelection");
    selectMountain.add(newOption, undefined);
  }
const countHeight = document.querySelector(".count-height");
const countWeight = document.querySelector(".count-weight");

const selectionWeight = document.getElementById("selection-weight");
const selectionHeight = document.getElementById("selection-height");

let one_meter = 0.3048;
let one_kilogram = 0.453592;

function convertHeightMeter(height_para, unit) {
  // UNIT CONVERTIONS For Height
  if (unit === "feet") {
    return height_para * one_meter;
  } else if (unit === "cm") {
    return height_para / 100;
  } else {
    return ":/ | in Height";
  }
}
function convertWeightKg(weight_para, unit) {
  // UNIT CONVERTIONS For Height
  if (unit === "kg") {
    return weight_para;
  } else if (unit === "lb") {
    return weight_para * one_kilogram;
  } else {
    return ":/ | in Weigth";
  }
}

const displayHeight = document.querySelector(".Height strong");
const displayWeight = document.querySelector(".weight strong");
const BMICOUNT = document.querySelector(".BMICOUNT strong");
const errorMsg = document.querySelector(".error-msg");
const errorMsg_text = document.querySelector(".error-msg .error");
const result = document.getElementById("result");
const goBack = document.getElementById("goBack");
const resultCntainer = document.querySelector(".result-container");
const textContainer = document.querySelector(".text-container");

function BMI_calc() {
  let weight = parseFloat(countWeight.value);
  let height = parseFloat(countHeight.value);
  let unit_selected_Height = selectionHeight.value;
  let unit_selected_weight = selectionWeight.value;
  if (weight < 0 || height < 0) {
    setTimeout(() => {
      errorMsg.style.top = "-100%";
    }, 1000);
    errorMsg.style.top = "1em";
    errorMsg_text.innerText = "Height or Weight cannot be negative";
  } else if (isNaN(weight) || isNaN(height)) {
    errorMsg_text.innerText = "Please fill both fields";
    setTimeout(() => {
      errorMsg.style.top = "-100%";
    }, 1000);
    errorMsg.style.top = "1em";
  } else {
    let HeightInMeter = convertHeightMeter(height, unit_selected_Height);
    let convertedWeigth = convertWeightKg(weight, unit_selected_weight);
    let BMI = convertedWeigth / (HeightInMeter * HeightInMeter);
    displayHeight.innerText = `${height} ${unit_selected_Height}`;
    displayWeight.innerText = `${weight} ${unit_selected_weight}`;
    BMICOUNT.innerText = `${Math.round(BMI)}`;
  }
}

result.addEventListener("click", () => {
  BMI_calc();
  resultCntainer.style.left = "0%";
  textContainer.style.scale = ".89";
  textContainer.style.opacity = "0";
  goBack.addEventListener("click", () => {
    resultCntainer.style.left = "100%";
    textContainer.style.scale = "1";
    textContainer.style.opacity = "1";
    result.classList.add("disable");
  });
});

// function convertHeightMeter(height_para) {
//       // When there's only Feet
//   //   let height = height_para;
//   // NaN error Occur If you do : height = height_para.value
//   // height_para.value ❌
//   // height = height_para ✔️
//   //   meter = height * one_meter;
//   //   return meter;
// }

const emptyState = document.querySelector(".empty-state-form");
const chemicalForm = document.querySelector(".form-container");

emptyState.style.display = "none";
chemicalForm.style.display = "block";

function NewChemical() {
  emptyState.style.display = "none";
  chemicalForm.style.display = "block";
}
function CancelChemical() {
  emptyState.style.display = "block";
  chemicalForm.style.display = "none";
}

fetch("../data/sdsData.json")
  .then((res) => res.json())
  .then((data) => {
    LoadHazards(data.hazards);
    LoadPhrases("h-phrases", data.hPhrases);
    LoadPhrases("p-phrases", data.pPhrases);
    LoadHazardClasses("select-hazard-classes", data.hazardClasses);
    LoadHazardClasses("select-phyiscal-states", data.physicalStates);
  });

function LoadHazards(hazards) {
  const path = "../images/GHS_ICONS/";
  const container = document.getElementsByClassName("hazard-grid")[0];
  hazards.forEach((hazard) => {
    container.insertAdjacentHTML(
      "beforeend",
      `
    <label id="hazard">
      <input type="checkbox" />
      <img src="${path}${hazard}" />
    </label>
    `
    );
  });
}

function LoadHazardClasses(containerId, classes) {
  const container = document.getElementById(containerId);
  classes.forEach((c) => {
    container.insertAdjacentHTML(
      "beforeend",
      `
      <option value="${c}">${c}</option>
    `
    );
  });
}

function LoadPhrases(containerId, phrases) {
  const container = document.getElementById(containerId);
  phrases.forEach((phrase) => {
    container.insertAdjacentHTML(
      "beforeend",
      `
      <label id="phrase">
        <input type="checkbox" />
        <p>${phrase.code} - ${phrase.text}</p>
      </label>
    `
    );
  });
}

const btnBackProject = document.getElementById("btn-back-project");
const backToSection = document.getElementById("back-to-section");
const containerStandTwo = document.querySelectorAll(".container-stand-two");
const inputPledge = document.querySelectorAll(".radio-pledge");
const containerEnterPledge = document.querySelectorAll(
  ".container-enter-pledge"
);
// Visible "Back this project"

btnBackProject.addEventListener("click", () => {
  backToSection.style.display = "flex";
});

backToSection.addEventListener("click", (e) => {
  const backToSectionTarget = e.target.matches("#back-to-section");
  if (backToSectionTarget) {
    backToSection.style.display = "none";
  }
});

// Select checkbox with click in box

containerStandTwo.forEach((element, index) => {
  element.addEventListener("click", () => {
    if (index !== 3) {
      inputPledge[index].checked = true;
    }
  });
});

// Abrir a opção de doação

containerStandTwo.forEach((element, index) => {
  element.addEventListener("click", () => {
    if (index === 0) {
      containerEnterPledge[1].hidden = true;
      containerEnterPledge[2].hidden = true;
    } else if (index === 1) {
      containerEnterPledge[0].hidden = true;
      containerEnterPledge[2].hidden = true;
    } else if (index === 2) {
      containerEnterPledge[0].hidden = true;
      containerEnterPledge[1].hidden = true;
    }
    if (index !== 3) {
      containerEnterPledge[index].hidden = false;
    }
  });
});

const btnContinue = document.querySelectorAll(".btn-continue");
const thanksSuport = document.getElementById("thanks-suport");
const cashInputPledge = document.getElementById("input-pledge");
console.log(cashInputPledge);
btnContinue.forEach((element, index) => {
  element.addEventListener("click", () => {
    if (index === 1 || index === 2 || index === 3) {
      backToSection.style.display = "none";
      thanksSuport.style.display = "flex";
    } else if (index === 0) {
      if (cashInputPledge.value !== "") {
        backToSection.style.display = "none";
        thanksSuport.style.display = "flex";
      }
    }
  });
});

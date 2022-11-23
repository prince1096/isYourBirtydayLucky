const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const output = document.querySelector(".output");

checkNumberButton.addEventListener("click", checkBLucky);

function checkBLucky() {
  //   console.log(dateOfBirth.value, luckyNumber.value);

  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);

  if (sum && dob) {
    compareValues(sum, luckyNumber.value);
  } else {
    output.innerText = "Please enter Both";
  }
}

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;

  for (let i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
    console.log(sum);
  }
}

function compareValues(sum, luckyNumber) {
  if (sum % luckyNumber == 0) {
    console.log("Your BirthDay is lucky🤡");
    output.innerText = "Your BirthDay is lucky🤡";
  } else {
    console.log("Unlucky Guy 😏");
    output.innerText = "Unlucky Guy😏";
  }
}

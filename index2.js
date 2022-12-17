const dob = document.querySelector("#date-of-birth");

const luckyNumber = document.querySelector("#lucky-number");

const button = document.querySelector("#check-number");

const output = document.querySelector(".output");

// const number = Number(luckyNumber.value);

button.addEventListener("click", checkBLucky);

function checkBLucky() {
  const date = dob.value;

  const sumDate = findSum(date);
  console.log(sumDate);
  const number = Number(luckyNumber.value);
  if (sumDate && number && date) {
    compareValues(sumDate, number);
  } else {
    output.innerText = "please enter both";
  }
}

function findSum(date) {
  let a = date.replaceAll("-", "");
  let sum = 0;

  for (let i = 0; i < a.length; i++) {
    sum = sum + Number(a.charAt(i));
  }
  console.log(sum);

  return sum;
}

function compareValues(sum, number) {
  if (sum % number == 0) {
    output.innerText = "Lucky Boy";
    console.log(1);
  } else {
    output.innerText = "unlucky";
    console.log(2);
  }
}

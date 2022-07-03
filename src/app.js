const btn = document.querySelector(".btn"),
  input = document.querySelector(".input"),
  correctToast = document.querySelector(".correct-toast"),
  incorrectToast = document.querySelector(".incorrect-toast");

input.addEventListener("keydown", (e) => {
  if (input.value.length === 13) {
    input.value = input.value.slice(0, -1);
  }
});

btn.addEventListener("click", () => {
  const oddSum = addOddNumbers();
  const evenSum = addEvenNumbers();
  const total = oddSum + evenSum;
  const condition = 10 - total.toString().slice(-1);

  if (condition == input.value[12]) {
    correctToast.classList.add("active");
    setTimeout(() => {
      correctToast.classList.remove("active");
    }, 1500);
  } else {
    incorrectToast.classList.add("active");
    setTimeout(() => {
      incorrectToast.classList.remove("active");
    }, 1500);
  }

  input.value = ''
});

const addOddNumbers = () => {
  let oddSum = 0;
  for (let i = 0; i < input.value.length - 1; i += 2) {
    oddSum += Number(input.value[i]);
  }

  return oddSum;
};

const addEvenNumbers = () => {
  let evenSum = 0;
  for (let i = 1; i < input.value.length - 1; i += 2) {
    evenSum += Number(input.value[i]);
  }

  evenSum *= 3;
  return evenSum;
};

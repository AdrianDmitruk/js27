const wrap = document.querySelector("#wrap");
const resultInput = document.querySelector("#input");

const btnArr = [
  "7",
  "8",
  "9",
  "+",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "*",
  "C",
  "0",
  "=",
  "/",
];

btnArr.forEach(function (text) {
  const button = document.createElement("input");
  button.type = "button";
  button.value = text;
  button.addEventListener("click", function () {
    handleBtnClick(text);
  });
  wrap.append(button);
});

function handleBtnClick(value) {
  if (value === "=") {
    try {
      const result = eval(resultInput.value);
      if (!isFinite(result)) {
        throw new Error("Ошибка");
      }
      resultInput.value = result;
    } catch (error) {
      alert(error.message);
      clearResult();
    }
  } else if (value === "C") {
    clearResult();
  } else {
    resultInput.value += value;
  }
}

function clearResult() {
  resultInput.value = "";
}

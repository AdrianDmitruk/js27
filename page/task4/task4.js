const btn = document.querySelector("button");
const input = document.querySelector("input");
const div = document.querySelector("div");

btn.addEventListener("click", () => {
  const userName = input.value;
  const result = encodeURIComponent(userName);
  div.textContent = "Привет, " + result;
});

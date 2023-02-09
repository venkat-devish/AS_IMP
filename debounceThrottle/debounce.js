const input = document.querySelector("input");
const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");
const throttleText = document.getElementById("throttle");

const updateBydeBounce = debounceFn((text) => {
  debounceText.textContent = text;
});

input.addEventListener("input", (e) => {
  defaultText.textContent = e.target.value;
  updateBydeBounce(e.target.value);
});

function debounceFn(callback, delay = 1000) {
  let timer;
  console.log(callback);
  return (args) => {
    console.log(args);
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(args);
    }, delay);
  };
}

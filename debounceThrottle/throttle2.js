const input = document.querySelector("input");
const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");
const throttleText = document.getElementById("throttle");
let timer;

const updateByDebounce = debounce(() => {
  increment(debounceText);
}, 1000);

const updateByThrottle = throttle(() => {
  increment(throttleText);
}, 1000);

// input.addEventListener("input", (e) => {
//   defaultText.textContent = e.target.value;
//   updateByDebounce(e.target.value);
//   updateByThrottle(e.target.value);
// });

function debounce(fn, delay = 1000) {
  let timer;
  return function (args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(args);
    }, delay);
  };
}

function throttle(fn, delay) {
  let pause = false;
  let missedArgs;

  const delayedFunction = () => {
    if (missedArgs === null) {
      pause = false;
    } else {
      fn(missedArgs);
      missedArgs = null;
      setTimeout(delayedFunction, delay);
    }
  };

  return (args) => {
    if (pause) {
      missedArgs = args;
      return;
    }

    fn(args);
    pause = true;

    setTimeout(delayedFunction, delay);
  };
}

document.addEventListener("mousemove", (e) => {
  increment(defaultText);
  updateByDebounce(debounceText);
  updateByThrottle(throttleText);
});

function increment(element) {
  element.innerText = (+element.innerText || 0) + 1;
}

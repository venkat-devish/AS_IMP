document.getElementById("grand").addEventListener(
  "click",
  () => {
    console.log("Grand parent clicked");
  },
  true
);
document.getElementById("parent").addEventListener(
  "click",
  (e) => {
    console.log("Parent clicked");
    e.stopPropagation();
  },
  true
);
document.getElementById("child").addEventListener(
  "click",
  () => {
    console.log("Child clicked");
  },
  true
);

document.getElementById("parent").addEventListener("keyup", (e) => {
  console.log(e.target.dataset.upper);
  if (e.target.dataset.upper !== undefined) {
    e.target.value = e.target.value.toUpperCase();
  }
});

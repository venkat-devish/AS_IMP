document.getElementById("parent").addEventListener("click", (e) => {
  console.log(e.target.id);
  console.log(window);
  window.location.href = "/" + e.target.id;
});

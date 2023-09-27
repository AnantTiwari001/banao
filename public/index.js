document.addEventListener("keydown", function (e) {
  let y = window.scrollY;
  // console.log(y==0,e.key==='ArrowDown')
  if (e.key === "ArrowDown" && y == 0) {
    e.preventDefault();
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  }
});

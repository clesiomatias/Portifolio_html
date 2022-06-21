var insta = document.querySelector(".insta");
var github = document.querySelector(".github");
var linkedin = document.querySelector(".linkedin");

insta.addEventListener("click", (e) => {
  window.open("https://www.instagram.com/clesiomatias/", "_blank");
});
linkedin.addEventListener("click", (e) => {
  window.open(
    "https://www.linkedin.com/in/cl%C3%A9sio-matias-0533011a2/",
    "_blank"
  );
});
github.addEventListener("click", (e) => {
  window.open("https://github.com/clesiomatias", "_blank");
});

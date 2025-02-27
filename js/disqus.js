var disqusShortname = "irmabaitussalam";
var disqusLoaded = false;

function loadDisqus(theme) {
  $("#disqus_thread").empty();
    
  var s = document.createElement("script");
  s.src = "https://" + disqusShortname + ".disqus.com/embed.js";
  s.setAttribute("data-theme", theme);
  s.setAttribute("data-timestamp", +new Date());
  (document.head || document.body).appendChild(s);
    
  disqusLoaded = true;
}

function updateDisqusTheme() {
  var currentTheme = localStorage.getItem("irmabaitussalam-theme") === "dark" ? "dark" : "light";
  if (disqusLoaded) {
    loadDisqus(currentTheme);
  }
}

$(document).on("click", "#themeToggle", function () {
  updateDisqusTheme();
});

$(document).ready(function () {
  var theme = localStorage.getItem("irmabaitussalam-theme") || "dark";
  loadDisqus(theme);
});
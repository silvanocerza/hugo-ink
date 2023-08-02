document.addEventListener("DOMContentLoaded", function () {
  let currentScheme = localStorage.getItem("scheme");
  if (currentScheme === "light") {
    setLight();
  } else if (currentScheme === "dark") {
    setDark();
  } else if (!currentScheme) {
    let prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDark) {
      setDark();
    } else {
      setLight();
    }
  }

  let lightButton = document.getElementById("light-button");
  let darkButton = document.getElementById("dark-button");

  lightButton.addEventListener("click", () => {
    setLight();
  });

  darkButton.addEventListener("click", () => {
    setDark();
  });
});

setLight = () => {
  let container = document.getElementsByTagName("html")[0];
  container.className = "";

  let lightButton = document.getElementById("light-button");
  lightButton.className = "hidden";
  let darkButton = document.getElementById("dark-button");
  darkButton.className = "";
};

setDark = () => {
  let container = document.getElementsByTagName("html")[0];
  container.className = "dark";

  let lightButton = document.getElementById("light-button");
  lightButton.className = "";
  let darkButton = document.getElementById("dark-button");
  darkButton.className = "hidden";
};

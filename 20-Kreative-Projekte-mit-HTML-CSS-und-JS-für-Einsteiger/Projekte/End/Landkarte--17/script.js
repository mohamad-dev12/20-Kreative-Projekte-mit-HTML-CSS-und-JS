const countryFlag = document.querySelector(".country-flag");
const capitalCity = document.querySelector(".capital-city");
const language = document.querySelector(".language");
const region = document.querySelector(".region");
const startOfWeek = document.querySelector(".start-of-week");
const subRegion = document.querySelector(".sub-region");
const population = document.querySelector(".population");
const blurBg = document.querySelector(".blur-bg");
const loadingSpinner = document.querySelector(".loading-spinner");
const search = document.querySelector(".search");

function getData(country = "germany") {
  blurBg.classList.add("show-animation");
  setTimeout(() => {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        replaceData(data[0]);
        blurBg.classList.remove("show-animation");
      });
  }, 2000);
}

function replaceData(data) {
  countryFlag.style.backgroundImage = `url(${data.flags.png})`;
  capitalCity.textContent = data.capital;
  language.textContent = Object.values(data.languages);
  region.textContent = data.region;
  startOfWeek.textContent = data.startOfWeek;
  subRegion.textContent = data.subregion;
  population.textContent = `${data.population} people`;
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const value = search.value;
    getData(value);
    search.value = "";
  }
});

getData();

// /*function show(t) {
//   return t >= 30
//     ? "It is hot outside, temperature --> " + t + " C"
//     : t > 20 && t < 30
//     ? "It is warm outside, temperature --> " + t + " C"
//     : t <= 20
//     ? "It is cold outside, temperature --> " + t + " C"
//     : null;
// }

// let myName = prompt("Enter your name");
// let notationTemp = prompt("Select: celsius(c) or fahrenheit(f)");
// let temp = prompt("Enter temperature");
// const objeckNotation = ["f", "fahrenheit", "c", "celsius"];
// if (!objeckNotation.includes(notationTemp) || temp === "" || myName === "") {
//   console.log("Sorry, we can't help you. Enter the required parameters.");
// } else {
//   if (notationTemp === "f" || notationTemp === "fahrenheit") {
//     temp = ((temp - 32) * 5) / 9;
//     console.log(show(temp));
//   } else if (notationTemp === "c" || notationTemp === "celsius")
//     console.log(show(temp));
// }
// const wind = ["windy", "no wind", "storm"];
// const rain = ["no rain", "rainy", "heavy rain"];

// function rnd(L) {
//   return Math.floor(Math.random() * L);
// }

// function getWeather() {
//   const weather = {};

//   const windIndex = rnd(wind.length);
//   weather.wind = wind[windIndex];

//   const rainIndex = rnd(rain.length);
//   weather.rain = rain[rainIndex];

//   weather.temp = rnd(40);

//   return weather;
// }

// function showWeather() {
//   let myName = prompt("Enter your name");
//   const weather = getWeather();
//   if (weather.wind === "storm" || weather.rain === "heavy rain") {
//     alert(
//       `Hello, ${myName} , the weather is not good for a walk, because there: ${weather.wind}, ${weather.rain}, ${weather.temp} C.`
//     );
//   } else {
//     alert(
//       `Hello, ${myName} , the weather nice, go outside, because there: ${weather.wind}, ${weather.rain}, ${weather.temp} C.`
//     );
//   }
// }
// showWeather();*/

// const addBtn = document.getElementById("newImg");
// const removeBtn = document.getElementById("delImg");
// const slider = document.getElementById("slider");
// const overlay = document.createElement("div");
// let time = 100; let timerId; let selectedIndex = 0;

// overlay.className = "overlay";
// document.body.appendChild(overlay);

// function updateTimer() {
//   time -= 0.2;
//   if (time <= 0) {
//     selectImage(selectedIndex + 1);
//     time = 100;
//   }
//   document.querySelector(".bar").style.width = time + "%";
//   startTimer();
// }

// function stopTimer() {
//   time = 100;
//   document.querySelector(".bar").style.width = time + "%";
//   clearTimeout(timerId);
// }

// function startTimer() {
//   timerId = setTimeout(updateTimer, 10);
// }

// function updateButtons() {
//   removeBtn.disabled = slider.children.length <= 1;
// }

// addBtn.addEventListener("click", () => {
//   const img = document.createElement("img");
//   img.src = `https://picsum.photos/150/150?random=${Math.random()}`;
//   img.addEventListener("click", toggleFullscreen);
//   slider.appendChild(img);
//   updateButtons();
// });

// removeBtn.addEventListener("click", () => {
//   if (slider.children.length > 1) {
//     const lastImg = slider.lastChild;
//     lastImg.style.opacity = "0";
//     setTimeout(() => {
//       slider.removeChild(lastImg);
//       updateButtons();
//     }, 300);
//   }
// });

// function toggleFullscreen(e) {
//   const img = e.target;

//   if (img.classList.contains("fullscreen")) {
//     img.classList.remove("fullscreen");
//     overlay.style.display = "none";
//     document.body.style.overflow = "auto";
//     addBtn.disabled = false;
//     removeBtn.disabled = slider.children.length <= 1;
//   } else {
//     img.classList.add("fullscreen");
//     overlay.style.display = "block";
//     document.body.style.overflow = "hidden";
//     addBtn.disabled = true;
//     removeBtn.disabled = true;
//   }
// }

// overlay.addEventListener("click", () => {
//   const fullscreenImg = document.querySelector(".fullscreen");
//   if (fullscreenImg) {
//     fullscreenImg.classList.remove("fullscreen");
//     overlay.style.display = "none";
//     document.body.style.overflow = "auto";
//     addBtn.disabled = false;
//     removeBtn.disabled = slider.children.length <= 1;
//   }
// });

// document.querySelectorAll("#slider img").forEach((img) => {
//   img.addEventListener("click", toggleFullscreen);
// });
// updateButtons();

//образец

let data = [];
let timerId;
let time = 100;
let selectedIndex = 0;
let loadingCount = 5;

function changeColor() {
  buttenNew = document.querySelector(".new");

  buttenNew.addEventListener("mouseover", ()=> {
    buttenNew.style.backgroundColor = "#1eb60d";
    buttenNew.style.boxShadow = "0 0 20px #c5c3c3";
    buttenNew.style.color = "#c5c3c3"
  })
  buttenNew.addEventListener("mouseout", ()=> {
    buttenNew.style.backgroundColor = "";
    buttenNew.style.boxShadow = "";
    buttenNew.style.color = "#1eb60d"
  })

  buttenStopPlay = document.querySelector(".play");

  buttenStopPlay.addEventListener("mouseover", ()=>{
    buttenStopPlay.style.color = "#c5c3c3"
    buttenStopPlay.style.boxShadow = "0 0 20px #c5c3c3";
    if (buttenStopPlay.textContent === "STOP"){
      buttenStopPlay.style.backgroundColor = "red";
      buttenStopPlay.style.border = "3px solid red";
    }else if(buttenStopPlay.textContent === "PLAY"){
      buttenStopPlay.style.backgroundColor = "yellow";
      buttenStopPlay.style.border = "3px solid yellow";
    }
  })
  buttenStopPlay.addEventListener("mouseout", ()=>{
    buttenStopPlay.style.backgroundColor = "";
    buttenStopPlay.style.boxShadow = "";
    buttenStopPlay.style.color = "#1eb60d"
    buttenStopPlay.style.border = "3px solid #1eb60d";
  })

}

function updateTimer() {
  time -= 0.2;
  if (time <= 0) {
    selectImage(selectedIndex + 1);
    time = 100;
  }
  document.querySelector(".bar").style.width = time + "%";
  startTimer();
}

function toggleTimer(event) {
  if (event.target.textContent === "STOP") {
    event.target.textContent = "PLAY";
    stopTimer();
  } else {
    event.target.textContent = "STOP";
    startTimer();
  }
}

function stopTimer() {
  time = 100;
  document.querySelector(".bar").style.width = time + "%";
  clearTimeout(timerId);
}

function startTimer() {
  timerId = setTimeout(updateTimer, 10);
}

function selectImage(index) {
  selectedIndex = Number(index);
  if (selectedIndex === data.length) {
    loadIamges();
  }
  document.querySelectorAll(".thumb div").forEach((item, i) => {
    if (i === selectedIndex) {
      item.classList.add("selected");
    } else {
      item.classList.remove("selected");
    }
  });
  document.querySelector(".preview img").src = data[selectedIndex].download_url;
  document.querySelector(".preview img").classList.add("loading");
  document.querySelector(".preview .author").textContent =
    data[selectedIndex].author;
}

function drawImages() {
  const images = document.querySelectorAll(".thumb img");
  data.forEach((item, i) => {
    images[i].src = item.download_url;
    images[i].classList.add("loading");
  });
  selectImage(0);
}

function loadIamges() {
  loadingCount = 5;
  stopTimer();
  const page = Math.floor(Math.random() * (800 / 4));
  const url = "https://picsum.photos/v2/list?page=" + page + "&limit=4";
  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      data = json;
      drawImages();
    });
}

function onThumbClick(event) {
  if (event.target.tagName !== "IMG") return;
  stopTimer();
  document.querySelector(".play").textContent = "PLAY";
  selectImage(event.target.dataset.index);
}

function removeLoading(event) {
  loadingCount -= 1;
  if (
    loadingCount === 0 &&
    document.querySelector(".play").textContent === "STOP"
  ) {
    startTimer();
  }
  event.target.classList.remove("loading");
}

function init() {
  loadIamges();
  document.querySelector(".thumb").addEventListener("click", onThumbClick);
  document.querySelector(".new").addEventListener("click", loadIamges);
  document.querySelectorAll("img").forEach((item) => {
    item.onload = removeLoading;
  });
  document.querySelector(".play").addEventListener("click", toggleTimer)

  changeColor();
}

window.addEventListener("DOMContentLoaded", init);

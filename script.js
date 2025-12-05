//your JS code here. If required.

let human = "You are a human. Congratulations!";
let robot = "We can't verify you as a human. You selected the non-identical tiles.";

let reset = document.getElementById("reset");
let verify = document.getElementById("verify");
let msg = document.getElementById("para");

let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let img3 = document.querySelector(".img3");
let img4 = document.querySelector(".img4");
let img5 = document.querySelector(".img5");
let identical = document.querySelector(".identical");

let imgArray = [img1, img2, img3, img4, img5, identical];

let arrImage = [
  "https://picsum.photos/seed/animal1/600/400.jpg",
  "https://picsum.photos/seed/animal2/600/400.jpg",
  "https://picsum.photos/seed/animal3/600/400.jpg",
  "https://picsum.photos/seed/animal4/600/400.jpg",
  "https://picsum.photos/seed/animal5/600/400.jpg"
];

let clickedValues = []; 
let clickedElements = new Set(); 



window.addEventListener("load", () => {
  
  reset.style.display = "none";
  verify.style.display = "none";
  msg.innerHTML = "";

  
  let numbers = [];
  let s = new Set();
  while (s.size < 5) s.add(Math.floor(Math.random() * 5));
  numbers = [...s];

  
  let duplicateIndex = Math.floor(Math.random() * 5);
  let duplicateImage = numbers[duplicateIndex];

  
  let finalArr = [...numbers, duplicateImage];

  
  finalArr.sort(() => Math.random() - 0.5);

  
  imgArray.forEach((img, i) => {
    img.src = arrImage[finalArr[i]];
    img.value = finalArr[i];
  });

});




imgArray.forEach(img => {
  img.addEventListener("click", () => {

    
    if (clickedElements.has(img)) return;

    reset.style.display = "inline-block";
    
    if (clickedValues.length < 2) {
      clickedValues.push(img.value);
      clickedElements.add(img);
    }

    if (clickedValues.length === 2) {
      verify.style.display = "inline-block";
    }
  });
});




verify.addEventListener("click", () => {

  verify.style.display = "none";

  if (clickedValues[0] === clickedValues[1]) {
    msg.innerHTML = human;
  } else {
    msg.innerHTML = robot;
  }

});




reset.addEventListener("click", () => {
  clickedValues = [];
  clickedElements.clear();
  msg.innerHTML = "";
  reset.style.display = "none";
  verify.style.display = "none";

  
  window.location.reload();
});

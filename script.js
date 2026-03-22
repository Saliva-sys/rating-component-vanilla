// potrebujem skatulku pre vybrane premenne
let allRating = 0;

// potrebujem najst vsetky premenne
const ratingSelection = document.querySelectorAll(".btn");
// potrebujem definovat premenne, ktore sa budu menit aj s tlacidlom submit
const submitBtn = document.querySelector(".submit__btn");
const ratingCard = document.querySelector(".rating__card");
const thanksCard = document.querySelector(".thank__you-card");
const userRating = document.querySelector("#user__rating");

// potrebujem definovat vyber premennych/reakciu na kliknutie
ratingSelection.forEach((rating) => {
  rating.addEventListener("click", () => {
    //potrebujem aby vsetky premenne reagovali na click  a zmenili farbu pisma a pozadia ale musim ich vratit do povodnej farby nez nieco zafarbim
    ratingSelection.forEach((rating) => {
      rating.style.color = "";
      rating.style.backgroundColor = "";
    });
    // vybrane premenne potrebujem ulozit do skalutky
    allRating = rating.textContent;

    // potrebujem aby sa zmenila farba a pozadie vybranej premennej
    rating.style.color = "var(--color-grey-500)";
    rating.style.backgroundColor = "var(--color-white)";
  });
});

// potrebujem definovat reakciu tlacidla button na kliknutie
submitBtn.addEventListener("click", () => {
  submitBtn.style.backgroundColor = "var(--color-white)";

  //potrebujem definovat, co sa stane ak user klikne na premennu rating
  if (allRating > 0) {
    userRating.textContent = allRating; // vlozim vybrane cislo do skatulky
    ratingCard.classList.add("hidden"); // zatvorim kartu vyberu
    thanksCard.classList.remove("hidden"); // otvorim kartu podakovania
  } else {
    alert("Please select a rating!"); // potrebujem zadefinovat co sa stane ak kliknem tlacidlo submit pred vyberom
  }
});

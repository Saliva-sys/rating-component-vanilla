let vybrateCislo = 0;

const vsetkyTlacidla = document.querySelectorAll(".btn");

vsetkyTlacidla.forEach((tlacidlo) => {
  tlacidlo.addEventListener("click", () => {
    vsetkyTlacidla.forEach((tlacidlo) => {
      tlacidlo.style.color = "";
      tlacidlo.style.backgroundColor = "";
    });

    vybrateCislo = tlacidlo.textContent;
    console.log("Klikla si na hodnotenie:" + tlacidlo.textContent);

    tlacidlo.style.color = "orange";
    tlacidlo.style.backgroundColor = "black";
  });
});

const submitBtn = document.querySelector(".submit__btn");
const ratingCard = document.querySelector(".rating__card");
const thankCard = document.querySelector(".thank__you-card");
const userRating = document.querySelector("#user__rating");

submitBtn.addEventListener("click", () => {
  if (vybrateCislo > 0) {
    userRating.textContent = vybrateCislo;
    ratingCard.style.display = "none";
    thankCard.style.display = "flex";
  } else {
    alert("Prosim, vyber si najprv hodnotenie");
  }
});

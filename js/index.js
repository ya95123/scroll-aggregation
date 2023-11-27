const banner = document.getElementById("aggregation-banner");
const bannerImgs = document.querySelectorAll(".aggregation__banner-img");

// const getTranslatePercent = (item) => {
//   let x = item.dataset.x;
//   let y = item.dataset.y;

//   item.setAttribute("style", `transform: translate(${x}%,${y}%);`);
// };

// bannerImgs.forEach((item) => {
//   getTranslatePercent(item);
// });

const test = (item) => {
  let x = Number(item.dataset.x);
  let y = Number(item.dataset.y);
  let distanceTargetX = x + 50; // x-(-50)
  let distanceTargetY = y + 50; // y-(-50)

  item.setAttribute("style", `transform: translate(${x}%,${y}%);`);
  console.log(distanceTargetX, distanceTargetY);
};

bannerImgs.forEach((item) => {
  test(item);
});

window.addEventListener("scroll", (e) => {
  const bannerEffectHeight = Math.floor(banner.scrollHeight * 0.75);
  const scrollY = window.scrollY;
  // console.log(scrollY);
  // console.log(bannerEffectHeight);

  if (scrollY <= bannerEffectHeight) {
    console.log("I'm in.");
  }
});

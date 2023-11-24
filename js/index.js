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

// banner scroll option
const bannerScrollOption = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

// banner scroll callback
const bannerScrollCallback = (entries, observer) => {
  console.log(entries);
  entries.forEach((entry, idx) => {
    if (!entry.isIntersecting) return;
    console.log(entry);

    // 載入圖片，調用 loadImages function

    // 載入後就停止觀察。提升效能
    observer.unobserve(entry.target);
  });
};

// create Intersecting Observer for banner
const bannerScrollObserver = new IntersectionObserver(
  bannerScrollCallback,
  bannerScrollOption
);

bannerScrollObserver.observe(banner);

// TODO 查 intersection get 現在滑在第幾 %

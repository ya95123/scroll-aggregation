const banner = document.getElementById("aggregation-banner");
const bannerImgs = document.querySelectorAll(".aggregation__banner-img");
const bannerImgsPositionInfo = [];

const bannerImgsEffect = () => {
  const scrollY = window.scrollY; // 頁面滾動到頂部的高度
  const bannerEffectHeight = Math.ceil(banner.scrollHeight * 0.75); // banner effect 的有效高度

  if (scrollY <= bannerEffectHeight) {
    let scrollRatio = scrollY / bannerEffectHeight; // 在 banner effect 有效區的滾動比例

    bannerImgs.forEach((item, idx) => {
      let x = bannerImgsPositionInfo[idx].x;
      let y = bannerImgsPositionInfo[idx].y;
      let dynamicX = x - x * scrollRatio; // ex. 20vw*1%=2vw -> 20vw-2vw=18vw
      let dynamicY = y - y * scrollRatio; // ex. -20vw*1%=-2vw -> -20vw-(-2vw)=-18vw
      let dynamicOpacity = 1 - scrollRatio;

      item.style = `transform: translate(calc(${dynamicX}vw - 50%),calc(${dynamicY}vw - 50%));`;
      item.style.opacity = dynamicOpacity;
    });
  } else {
    bannerImgs.forEach((item) => {
      item.style = "transform: translate(-50%,-50%);";
      item.style.opacity = "0";
    });
  }
};

const bannerImgsPosition = () => {
  bannerImgs.forEach((item) => {
    let x = Number(item.dataset.x);
    let y = Number(item.dataset.y);

    bannerImgsPositionInfo.push({
      x: x,
      y: y,
    });
  });

  bannerImgsEffect();
};

bannerImgsPosition();
window.addEventListener("scroll", bannerImgsEffect);

(function () {
  //이 함수에서 여기에 변수를 적으면 전역 변수가 된다.
  const houseElem = document.querySelector(".house");
  const stageElem = document.querySelector(".stage");
  const selectCharacterElem = document.querySelector(".select-character");
  let progressbarElem = document.querySelector(".progress-bar");
  const mousePos = {
    x: 0,
    y: 0,
  };
  let maxScrollValue;

  function resizeHandler() {
    maxScrollValue = document.body.offsetHeight - window.innerHeight;
  }

  window.addEventListener(
    "scroll",
    function () {
      const scrollPar = pageYOffset / maxScrollValue;
      const zMove = scrollPar * 980 - 490;
      houseElem.style.transform = "translateZ(" + zMove + "vw)";

      // progressbar
      progressbarElem.style.width = scrollPar * 100 + "%";
    },
    false
  );

  window.addEventListener("mousemove", function (e) {
    // console.log(e.clientX, e.clientY); // 마우스 위치를 픽셀로 나타내기
    mousePos.x = -1 + (e.clientX / this.window.innerWidth) * 2;
    mousePos.y = 1 - (e.clientY / this.window.innerHeight) * 2;
    stageElem.style.transform =
      "rotateX(" + mousePos.y * 5 + "deg) rotateY(" + mousePos.x * 5 + "deg)";
  });

  window.addEventListener("resize", resizeHandler);
  resizeHandler();

  stageElem.addEventListener("click", function (e) {
    new Character({
      xPos: (e.clientX / window.innerWidth) * 100,
      speed: Math.random(),
    });
    // console.log(e.clientX / this.windowWidth) * 100;
  });
  selectCharacterElem.addEventListener("click", function (e) {
    const value = e.target.getAttribute("data-char");
    document.body.setAttribute("data-char", value);
  });
})();

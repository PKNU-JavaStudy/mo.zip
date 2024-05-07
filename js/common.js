document.addEventListener("DOMContentLoaded", function () {
  // top 버튼 애니메이션
  const topBtn = document.querySelector(".top-btn");
  const header = document.querySelector("header");
  topBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return false;
  });

  // 스크롤 이벤트
  topBtn.style.display = "none";
  header.style.boxShadow = "none";

  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollOffset = 300; // 요소의 높이를 직접 지정

    if (scrollTop < scrollOffset) {
      topBtn.style.display = "none";
      header.style.boxShadow = "none";
    } else {
      topBtn.style.display = "block";
      header.style.boxShadow = "0px 0px 5px 3px rgba(0, 0, 0, 0.16)";
    }
  });
});
